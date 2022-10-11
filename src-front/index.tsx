import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import SoundsContextProvider from "./hooks/sounds-context";
import OptionsContextProvider from "./hooks/options-context";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <BrowserRouter>
      <SoundsContextProvider>
        <OptionsContextProvider>
          <div>
            <span className="border border-indigo-400">Hello World!</span>
          </div>
        </OptionsContextProvider>
      </SoundsContextProvider>
    </BrowserRouter>
  </StrictMode>
);
