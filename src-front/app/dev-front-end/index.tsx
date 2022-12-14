import { lazy, LazyExoticComponent } from "react";
import { Link, Route, Routes } from "react-router-dom";

const components: {
  name: string;
  path: string;
  Element: LazyExoticComponent<() => JSX.Element>;
}[] = [
  {
    name: "Loading",
    path: "loading",
    Element: lazy(() => import("../loading/index.js")),
  },
  {
    name: "Buildings",
    path: "buildings",
    Element: lazy(() => import("../building/dev-all-buildings.js")),
  },
  {
    name: "Supply - Total",
    path: "supply-total",
    Element: lazy(() => import("../supply/dev-supply.js")),
  },
].sort((a, b) => a.name.localeCompare(b.name));

export default function DevFrontEnd() {
  return (
    <div className="flex h-full flex-col md:grid md:flex-none md:grid-cols-[auto_1fr] md:gap-2">
      <details className="mb-2 md:hidden">
        <summary>Components</summary>
        <ul>
          {components.map(({ name, path }) => (
            <li key={path}>
              <Link to={`/dev/${path}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </details>
      <div className="hidden h-full overflow-y-auto md:block">
        <h2>Components</h2>
        <ul>
          {components.map(({ name, path }) => (
            <li key={path}>
              <Link to={`/dev/${path}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          onClick={() => {
            if (document.documentElement.classList.contains("dark")) {
              document.documentElement.classList.remove("dark");
            } else {
              document.documentElement.classList.add("dark");
            }
          }}
          className="ml-2 mb-2 rounded border border-gray-600 px-2 py-0 dark:border-gray-300"
        >
          Toggle Dark Mode
        </button>{" "}
        <span className="hidden md:inline">
          Clicking this button doesn't affect your Dark Mode setting. Refresh
          the page to return to your saved Dark Mode setting.
        </span>
        <div className="h-full border">
          <Routes>
            {components.map(({ path, Element }) => (
              <Route key={path} path={`/${path}`} element={<Element />} />
            ))}
          </Routes>
        </div>
        <div>API_ORIGIN: {__API_ORIGIN__}</div>
      </div>
    </div>
  );
}
