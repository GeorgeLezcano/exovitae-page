import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageRoutes } from "./constants/PageRoutes";

import "./styles/index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageRoutes.Homepage} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
