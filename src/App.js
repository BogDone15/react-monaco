import React from "react";
import "./assets/scss/style.scss";

import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Collection } from "./pages/Collection";
import Shop from "./pages/Shop";
import { Error } from "./pages/Error";
import Cart from "./pages/Cart";
import Market from "./pages/Market";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop/" element={<Shop />} />
          <Route path="/shop/:slug" element={<Market />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
