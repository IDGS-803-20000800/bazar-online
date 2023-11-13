import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ products }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {products.map((product) => (
        <div key={product.id} className="col">
          <Link to={`/item/${product.id}`}>
            <div className="card h-100 product-card">
              <img
                src={product.image1}
                className="card-img-top img-fluid"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.short_description}</p>
                <p className="card-text">Precio: ${product.price}</p>
                <p className="card-text">Categoría: {product.category}</p>
                <p className="card-text">Puntuación: {product.score}/5</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
