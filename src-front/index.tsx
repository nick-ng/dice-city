import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import SoundsContextProvider from "./hooks/sounds-context.js";
import OptionsContextProvider from "./hooks/options-context.js";

import App from "./app/index.js";

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
