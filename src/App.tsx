import * as React from "react";
import { RecoilRoot } from "recoil";

import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <RecoilRoot>
      <HomePage />
    </RecoilRoot>
  );
}
