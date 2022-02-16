import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import LogIn from "./pages/logIn/LogIn";
import ProductList from "./pages/productList/ProductList";
import ProductPage from "./pages/productPage/ProductPage";
import Register from "./pages/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
