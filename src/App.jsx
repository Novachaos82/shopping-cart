import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Header/Navbar";
import { HomePage } from "./components/Home/HomePage";
import { ShopPage } from "./components/Shop/ShopPage";
import { AboutPage } from "./components/About/AboutPage";
import { ProductPage } from "./components/Shop/ProductPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
