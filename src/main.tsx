import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import { Provider as Chakra_Provider } from "./components/ui/provider"
import { Provider } from 'react-redux'
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Chakra_Provider>
        <App />
      </Chakra_Provider>
    </Provider>
  </React.StrictMode>,
);
