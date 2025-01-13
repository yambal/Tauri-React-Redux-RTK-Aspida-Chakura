import React from "react";
import ReactDOM from "react-dom/client";

import { Provider as Chakra_Provider } from "./components/ui/provider"
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router"
import { store } from "./store/store";
import AppRouter from "./AppRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Chakra_Provider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Chakra_Provider>
    </Provider>
  </React.StrictMode>,
);
