#!/bin/bash

# ===== Cores =====
BOLD="\033[1m"
RESET="\033[0m"
GREEN="\033[32m"
YELLOW="\033[33m"
RED="\033[31m"
BLUE="\033[34m"
CYAN="\033[36m"

# ===== Configuração de limpeza segura =====
temp_output=$(mktemp)
trap 'rm -f "$temp_output"' EXIT

# ===== Spinners disponíveis =====
declare -A SPINNERS=(
  ["braille"]="⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏"
  ["circle"]="◜◠◝◞◡◟"
  ["dots"]="⠁⠂⠄⡀⢀⠠⠐⠈"
  ["arrow"]="←↖↑↗→↘↓↙"
  ["bar"]="▏▎▍▌▋▊▉█▉▊▋▌▍▎"
)

DEFAULT_SPINNER="braille"
CLAUDE_COMMIT_MODEL="${CLAUDE_COMMIT_MODEL:-claude-haiku-4-5-20251001}"

# ===== Função para exibir spinner =====
show_spinner() {
  local pid=$1
  local style=${2:-$DEFAULT_SPINNER}
  local delay=0.1
  local frames="${SPINNERS[$style]:-${SPINNERS[$DEFAULT_SPINNER]}}"

  tput civis
  while ps -p $pid &>/dev/null; do
    local char=${frames:0:1}
    frames=${frames:1}${char}
    printf "\r${CYAN}⏳${RESET} ${BOLD}Gerando mensagem de commit...${RESET} [%s]  " "$char"
    sleep $delay
  done
  printf "\r\033[K"
  tput cnorm
}

# ===== Leitura de argumentos =====
SPINNER_STYLE="$DEFAULT_SPINNER"
for arg in "$@"; do
  if [[ "$arg" == --spinner=* ]]; then
    SPINNER_STYLE="${arg#*=}"
  fi
done

# ===== Pergunta sobre adicionar todos os arquivos =====
read -p "$(echo -e "${BOLD}Deseja adicionar TODOS os arquivos ao commit?${RESET} [${GREEN}S${RESET}/${RED}n${RESET}]: ") " add_all
add_all=${add_all:-s}

if [[ "$1" == "--dry-run" ]]; then
    echo -e "${YELLOW}🔍 Modo dry-run:${RESET} Nenhum arquivo será adicionado ou commitado."
fi

if [[ "$add_all" =~ ^[nN]$ ]]; then
    echo -e "${BLUE}📂 Selecionando arquivos para o commit...${RESET}"

    files=$(git status --short | sed 's/^.. //' | \
      fzf \
        --multi \
        --marker="✓ " \
        --bind 'start:toggle-all,space:toggle,ctrl-a:toggle-all' \
        --preview 'git diff --color=always -- "{}"' \
        --preview-window=up:50%:wrap \
        --header="Todos já selecionados (✓). Espaço = alternar, Ctrl-A = todos, Enter = confirmar"
    )

    if [ -z "$files" ]; then
        echo -e "${RED}❌ Nenhum arquivo selecionado. Cancelando.${RESET}"
        exit 1
    fi

    if [[ "$1" != "--dry-run" ]]; then
        git add -- $files
    fi
else
    if [[ "$1" != "--dry-run" ]]; then
        git add .
    fi
fi

# ===== Geração da mensagem de commit =====
echo -e "${CYAN}🔄 Gerando mensagem com Claude...${RESET}"

# Captura apenas o diff staged
staged_diff=$(git diff --staged)

if [ -z "$staged_diff" ]; then
    echo -e "${RED}❌ Erro:${RESET} nenhuma mudança no staging area."
    exit 1
fi

# Passa o diff como parte do prompt
prompt="Write a commit message for this diff following conventional commits formatting. DO NOT include any trailers like 'Co-authored-by', 'Signed-off-by', or similar lines at the end. Only output the commit message itself. Use the format: type(scope): short summary. Types allowed: feat, fix, refactor, chore, docs, style, test, perf, build, ci. Scope must represent the main module, component, or page affected. Summary must be concise, imperative, and in English. After the summary, include bullet points explaining the main changes. Focus only on staged changes. Do not include unnecessary text or explanations.

$staged_diff"

model_flag=""
if [[ -n "$CLAUDE_COMMIT_MODEL" ]]; then
  model_flag="--model $CLAUDE_COMMIT_MODEL"
  echo -e "${CYAN}🤖 Modelo:${RESET} ${BOLD}$CLAUDE_COMMIT_MODEL${RESET}"
fi

# shellcheck disable=SC2086
(claude $model_flag -p "$prompt") > "$temp_output" 2>&1 &
pid=$!
show_spinner $pid "$SPINNER_STYLE"

raw_output=$(<"$temp_output")

# ===== Verifica saída =====
if [ -z "$raw_output" ]; then
    echo -e "${RED}❌ Erro:${RESET} não foi possível gerar a mensagem de commit com o Claude."
    echo -e "${YELLOW}💡 Dica:${RESET} verifique se o Claude Code CLI está instalado e autenticado (${BOLD}claude --version${RESET})."
    exit 1
fi

[ "$VERBOSE" == "1" ] && echo -e "\n${BOLD}📋 Saída bruta do Claude:${RESET}\n$raw_output"

# Extrai mensagem
commit_message=$(echo "$raw_output" | sed -n '/```/,/```/p' | sed '1d;$d')
[ -z "$commit_message" ] && commit_message="$raw_output"
commit_message=$(echo "$commit_message" | tr -d '\r')

# ===== Dry-run =====
if [[ "$1" == "--dry-run" ]]; then
    echo -e "\n${BOLD}📝 Mensagem gerada (modo dry-run):${RESET}\n"
    echo "$commit_message"
    exit 0
fi

# ===== Permite edição =====
echo -e "\n${BOLD}📝 Mensagem de commit gerada:${RESET}\n"
echo "$commit_message"
echo
read -p "$(echo -e "${BOLD}Deseja editar a mensagem de commit?${RESET} (${GREEN}s${RESET}/${RED}N${RESET}): ") " edit_message
edit_message=${edit_message:-n}

if [[ "$edit_message" =~ ^[sS]$ ]]; then
    temp_file=$(mktemp)
    echo "$commit_message" > "$temp_file"
    ${EDITOR:-nano} "$temp_file"
    commit_message=$(<"$temp_file")
    rm "$temp_file"
fi

# ===== Commit =====
git commit -m "$commit_message"
echo -e "${GREEN}✅ Commit realizado com sucesso!${RESET}"
