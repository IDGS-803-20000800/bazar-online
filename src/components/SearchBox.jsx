import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchItems } from "../services/api";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      // Realiza la búsqueda utilizando la función de la API
      const results = await searchItems(searchQuery);

      // Redirige a la página de resultados de búsqueda con los datos de la búsqueda
      navigate(`/items/?search=${encodeURIComponent(searchQuery)}`, {
        state: { results, query: searchQuery },
      });
    } catch (error) {
      console.error("Error al realizar la búsqueda:", error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="input-group mb-3 search-box-container">
      <input
        type="text"
        className="form-control search-input"
        placeholder="Buscar productos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="btn btn-primary" type="button" onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBox;
