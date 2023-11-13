import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getItemById } from '../services/api'

const ResultDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    // Lógica para obtener los detalles del producto por su ID
    const fetchData = async () => {
      try {
        const response = await getItemById(id);
        setProductDetails(response);
      } catch (error) {
        console.error("Error al obtener detalles del producto:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleCompraClick = () => {
    Swal.fire({
      icon: 'success',
      title: 'Compra realizada con éxito',
      text: `Gracias por tu compra.`,
    });
  };

  if (!productDetails) {
    return <p>Cargando detalles del producto...</p>;
  }

  return (
    <div>
      <div className="d-flex image-container">
        <img src={productDetails.image1} alt={productDetails.title} className="img-fluid mr-2" />
        <img src={productDetails.image2} alt={productDetails.title} className="img-fluid mr-2" />
        <img src={productDetails.image3} alt={productDetails.title} className="img-fluid" />
      </div>
      <h2 className='text-center'>{productDetails.title}</h2>
      <p>Marca: {productDetails.brand}</p>
      <p>Modelo: {productDetails.model}</p>
      <p>Descripción: {productDetails.description}</p>
      <p>Precio: ${productDetails.price}</p>
      <p>Stock: {productDetails.stock}</p>
      <p>Categoría: {productDetails.category}</p>
      <p>Puntuación: {productDetails.score}</p>
      <button className="btn btn-primary" onClick={handleCompraClick}>
        Comprar
      </button>
    </div>
  );
}

export default ResultDetails