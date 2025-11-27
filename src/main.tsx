import ReactLenis from "lenis/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Overlay from "./components/Overlay.tsx";
import "./index.css";
import Experiment1 from "./pages/Experiment1.tsx";
import Experiment2 from "./pages/Experiment2.tsx";
import Experiment3 from "./pages/Experiment3.tsx";
import Experiment4 from "./pages/Experiment4.tsx";
import Experiment5 from "./pages/Experiment5.tsx";
import Experiment6 from "./pages/Experiment6.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactLenis root options={{ infinite: true, syncTouch: true }} />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overlay />}>
          <Route index element={<Experiment1 />} />
          <Route path="experiment1" element={<Experiment1 />} />
          <Route path="experiment2" element={<Experiment2 />} />
          <Route path="experiment3" element={<Experiment3 />} />
          <Route path="experiment4" element={<Experiment4 />} />
          <Route path="experiment5" element={<Experiment5 />} />
          <Route path="experiment6" element={<Experiment6 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
