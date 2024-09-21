import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelloWorld } from "./components/HelloWorld.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelloWorld
      user={{ name: "Pepe", lastName: "Doe" }}
      id={1}
      title="Hola mundo"
      activo={true}
    />
  </StrictMode>
);
