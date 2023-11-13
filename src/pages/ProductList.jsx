import React from "react";
import { useLocation } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import SearchResults from "../components/SearchResults";
import icon from "../assets/bolsa-de-la-compra.png";

const ProductList = () => {
  const location = useLocation();
  const { results, query } = location.state;

  return (
    <div>
      <div className="search-bar">
        <a href="/">
          <img src={icon} alt="Icono de Inicio" className="home-icon" />
        </a>
        <SearchBox />
      </div>
      <h2>Resultados de búsqueda para "{query}"</h2>
      <SearchResults products={results} />
    </div>
  );
};

export default ProductList;
