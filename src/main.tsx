import ReactDOM from "react-dom/client";
import "./scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Calculator from "./pages/Calculator.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calc" element={<Calculator />} />
    </Routes>
  </BrowserRouter>
);
