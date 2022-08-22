import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Header/Navbar";
import { HomePage } from "./components/Home/HomePage";
import { ShopPage } from "./components/Shop/ShopPage";
import { AboutPage } from "./components/About/AboutPage";
import { ProductPage } from "./components/Shop/ProductPage";
import { Cart } from "./components/Shop/cart";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState({ present: false, qty: 0 });
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/shop/:id"
            element={<ProductPage addingToCart={addToCart} />}
          />
          <Route path="/cart" element={<Cart showCart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
