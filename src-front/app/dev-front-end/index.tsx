import React, { lazy, LazyExoticComponent } from "react";
import { Link, Route, Routes } from "react-router-dom";

import Container from "@front/layout/container";

const components: {
  name: string;
  path: string;
  Element: LazyExoticComponent<() => JSX.Element>;
}[] = [
  {
    name: "Loading",
    path: "loading",
    Element: lazy(() => import("../loading")),
  },
  {
    name: "Establishments",
    path: "establishments",
    Element: lazy(() => import("../card/dev-all-establishments")),
  },
].sort((a, b) => a.name.localeCompare(b.name));

export default function DevFrontEnd() {
  console.info("__API_ORIGIN__", __API_ORIGIN__);
  return (
    <Container className="grid h-full grid-cols-[auto_1fr] gap-2">
      <div className="h-full overflow-y-auto">
        <h1>Dev Page</h1>
        <h2>Components</h2>
        <ul>
          {components.map(({ name, path }) => (
            <li key={path}>
              <Link to={`/dev/${path}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-full border">
        <Routes>
          {components.map(({ path, Element }) => (
            <Route key={path} path={`/${path}`} element={<Element />} />
          ))}
        </Routes>
      </div>
    </Container>
  );
}