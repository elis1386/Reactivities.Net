import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/layout/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router";
import { router } from "./app/router/Router.tsx";
import { CounterContext, store } from "./store/store.ts";

const queryCline = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CounterContext.Provider value={store}>
      <QueryClientProvider client={queryCline}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </CounterContext.Provider>
  </StrictMode>
);
