import React from "react";
import SearchBox from "../components/SearchBox";

const Home = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <img
          src="bolsa-de-la-compra.png"
          alt="bolsa"
          style={{ height: "100px", width: "100px" }}
          className="img-fluid"
        />
        <h1>Bazar Online</h1>
        <SearchBox />
      </div>
    </div>
  );
};

export default Home;
