import React from "react";
//  imports componentes 
import Navbar from "./components/Nav/Nav.jsx";
import Banner from "./components/banner/banner.jsx";
// Importación de estilos globales
import "./styles/global/base.scss";
function App() {
  return (
    <div>
  
      <Navbar />
       <Banner />
    PARTE 3 
      {/* El resto de tu aplicación */}
    </div>
  );
}

export default App;