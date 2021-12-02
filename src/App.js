import React from "react";
import "./assets/scss/style.scss";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Collection } from "./pages/Collection";
import Shop from "./pages/Shop";
import { Error } from "./pages/Error";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
