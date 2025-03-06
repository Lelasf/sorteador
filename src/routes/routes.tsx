import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../components/MainLayout/MainLayout";
import Draw from "../pages/Draw/Draw";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/draw" element={<Draw />} />
        </Route>
      </Routes>
    </Router>
  );
}
