import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";
import ProductDetail from "../pages/product-detail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default AppRoutes;
