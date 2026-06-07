import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import UseRefCounterExample from "./components/UseRefCounterExample.tsx";
import UseRefExample from "./components/UseRefExample.tsx";
import ReducerExample from "./components/ReducerExample.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <UseRefExample />
    <UseRefCounterExample />
    <br />
    <ReducerExample />
  </StrictMode>,
);
