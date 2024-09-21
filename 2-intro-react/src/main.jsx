import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelloWorldApp
      user={{ name: "Pepe", lastName: "Doe" }}
      id={1}
      activo={true}
    />
  </StrictMode>
);
