// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./font.css";
import "./index.css";
import { BrowserRouter } from "react-router";
import App from "./routes/index.tsx";
import ToastContainer from "./components/ToastContainer.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <ToastContainer />
    <App />
  </BrowserRouter>,
  // </StrictMode>,
);
