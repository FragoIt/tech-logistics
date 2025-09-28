import React from "react";
import { Link } from "react-router-dom";

const ModernProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={`fas fa-star ${i <= rating ? '' : 'text-muted'}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="modern-product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-badge">Popular</div>
        <div className="product-actions">
          <button className="action-btn" title="Me gusta">
            <i className="fas fa-heart"></i>
          </button>
          <button className="action-btn" title="Vista rápida">
            <i className="fas fa-eye"></i>
          </button>
          <button className="action-btn" title="Comparar">
            <i className="fas fa-balance-scale"></i>
          </button>
        </div>
      </div>
      <div className="product-info">
        <div className="product-category">Calzado Premium</div>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <div className="stars">
            {renderStars(product.rating)}
          </div>
          <span className="rating-text">
            {product.rating} ({product.numReviews} reseñas)
          </span>
        </div>
        <div className="product-price">
          {formatPrice(product.price)}
        </div>
        <Link to={`/products/${product._id}`} className="add-to-cart">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default ModernProductCard;