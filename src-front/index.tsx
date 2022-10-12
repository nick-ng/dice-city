import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import SoundsContextProvider from "./hooks/sounds-context";
import OptionsContextProvider from "./hooks/options-context";

import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <BrowserRouter>
      <SoundsContextProvider>
        <OptionsContextProvider>
          <App />
        </OptionsContextProvider>
      </SoundsContextProvider>
    </BrowserRouter>
  </StrictMode>
);
