import ReactLenis from "lenis/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Overlay from "./components/Overlay.tsx";
import "./index.css";
import Experiment1 from "./pages/Experiment1.tsx";
import Experiment2 from "./pages/Experiment2.tsx";
import Experiment3 from "./pages/Experiment3.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactLenis root options={{ infinite: true }} />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overlay />}>
          <Route index element={<Experiment1 />} />
          <Route path="experiment1" element={<Experiment1 />} />
          <Route path="experiment2" element={<Experiment2 />} />
          <Route path="experiment3" element={<Experiment3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
