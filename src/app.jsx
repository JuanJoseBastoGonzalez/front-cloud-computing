import React from "react";
//  imports componentes 
import Navbar from "./components/Nav/Nav.jsx";
import Banner from "./components/banner/banner.jsx";
import Brandstrip from "./components/Brandstrip/Brandstrip.jsx";
import Cart from "./components/Cart/Cart.jsx";
// Importación de estilos globales
import "./styles/global/base.scss";
function App() {
  return (
    <div>
  
      <Navbar />
       <Banner />
       <Brandstrip />
       <Cart />
    PARTE 3 
      {/* El resto de tu aplicación */}
    </div>
  );
}

export default App;