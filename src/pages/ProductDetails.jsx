import React from 'react'
import SearchBox from "../components/SearchBox";
import ResultDetails from '../components/ResultDetails';
import icon from "../assets/bolsa-de-la-compra.png";

const ProductDetails = () => {
  return (
    <div>
      <div className="search-bar">
        <a href="/">
          <img src={icon} alt="Icono de Inicio" className="home-icon" />
        </a>
        <SearchBox />
      </div>
      <ResultDetails />
    </div>
  )
}

export default ProductDetails