import React from "react";
//  imports componentes 
import Navbar from "./components/Nav/Nav.jsx";
import Banner from "./components/banner/banner.jsx";
import Brandstrip from "./components/Brandstrip/Brandstrip.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx"; 
import { Routes, Route } from "react-router-dom";
import BuyCar from "./pages/details/BuyCar.jsx";
// Importación de estilos globales
import "./styles/global/base.scss";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/buycar/:id" element={<BuyCar />} />
      </Routes>
      {/* El resto de tu aplicación */}
    </div>
  );
}

export default App;