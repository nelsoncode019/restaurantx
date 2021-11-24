import NavbarTop from "./components/NavbarTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Customers from "./pages/Customers";
import OrderID from "./pages/OrderID";
import Order from "./pages/Order";
import Reviews from "./pages/Reviews";
import Menu from "./pages/Menu";
import NavbarBottom from "./components/NavbarBottom";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <NavbarTop />
      <NavbarBottom/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/order/:id" element={<OrderID />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/menus" element={<Menu />} />
      </Routes>
      <br />
      <p align="center">
        Copyright © Designed & Developed by Panda Templates{" "}
        {new Date().getFullYear()}
      </p>
      <br />
    </BrowserRouter>
  );
}

export default App;
