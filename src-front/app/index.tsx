import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loading from "./loading";
const Home = lazy(() => import("./home"));
const DevFrontEnd = lazy(() => import("./dev-front-end"));

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
