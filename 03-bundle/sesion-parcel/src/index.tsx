import { createRoot } from "react-dom/client";
import { HelloComponent } from "./hello.component.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <HelloComponent />
  </div>
);
