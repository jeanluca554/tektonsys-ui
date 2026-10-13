import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("components/:name", "routes/route.components.$name.tsx"),
  route("other/:name", "routes/route.other.$name.tsx"),
] satisfies RouteConfig;
