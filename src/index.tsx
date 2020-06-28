import * as React from "react";
import { unstable_createRoot as createRoot } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
