import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loading from "./loading/index.js";
const Home = lazy(() => import("./home/index.js"));
const DevFrontEnd = lazy(() => import("./dev-front-end/index.js"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dev/*" element={<DevFrontEnd />} />
      </Routes>
    </Suspense>
  );
}
