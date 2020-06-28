import * as React from "react";
import { RecoilRoot } from "recoil";

import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="p-4">
      <RecoilRoot>
        <HomePage />
      </RecoilRoot>
    </div>
  );
}
