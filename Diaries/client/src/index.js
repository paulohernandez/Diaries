import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { FeedContextProvider } from "./services/store/feedContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FeedContextProvider>
    <App />
  </FeedContextProvider>,
);
