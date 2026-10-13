import { TablePagination } from "~/client/components/ui/table-pagination";

export default function TablePaginationDemo() {
  return (
    <TablePagination currentPage={3} totalPages={10} buildPageUrl={(page) => `#page-${page}`} />
  );
}
