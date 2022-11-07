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
].sort((a, b) => a.name.localeCompare(b.name));

export default function DevFrontEnd() {
  return (
    <div className="grid h-full grid-cols-[auto_1fr] gap-2">
      <div className="h-full overflow-y-auto">
        <h1>Dev Page</h1>
        <h2>Components</h2>
        <ul>
          {components.map(({ name, path }) => (
            <li key={path}>
              <Link to={`/dev/${path}`}>{name}</Link>
            </li>
          ))}
          <li>API_ORIGIN: {__API_ORIGIN__}</li>
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
        Clicking this button doesn't affect your Dark Mode setting. Refresh the
        page to return to your saved Dark Mode setting.
        <div className="h-full border">
          <Routes>
            {components.map(({ path, Element }) => (
              <Route key={path} path={`/${path}`} element={<Element />} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
}
