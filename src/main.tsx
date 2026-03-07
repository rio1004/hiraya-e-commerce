// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./font.css";
import "./index.css";
import { BrowserRouter } from "react-router";
import App from "./routes/index.tsx";
import ToastContainer from "./components/ToastContainer.tsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ToastContainer />
      <App />
    </BrowserRouter>
  </QueryClientProvider>,
  // </StrictMode>,
);
