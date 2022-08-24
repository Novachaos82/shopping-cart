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

  const addToCart = (item) => {
    const alreadyExist = cart.map((cartItem) => cartItem.id).includes(item.id);
    console.log(alreadyExist);

    if (alreadyExist) {
      changeQuantity(item.id, 1);
    } else {
      setCart((prev) => [...prev, item]);
    }
  };

  const changeQuantity = (id, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + quantity } : item
      )
    );
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
