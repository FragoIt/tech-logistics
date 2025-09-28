import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import ModernProductCard from "./ModernProductCard";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const ModernProductsSection = ({ keyword, pagenumber }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);

  return (
    <section className="modern-products">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Productos Destacados</div>
          <h2 className="section-title">
            Nuestra Colección
            <br />
            <span style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Premium
            </span>
          </h2>
          <p className="section-subtitle">
            Descubre la mejor selección de calzado deportivo y urbano. 
            Cada par está diseñado pensando en tu comodidad y estilo.
          </p>
        </div>

        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '60px 0' }}>
            <Loading />
          </div>
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <div className="product-grid">
            {products && products.map((product) => (
              <ModernProductCard key={product._id} product={product} />
            ))}
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <button className="btn-modern primary">
            Ver Todos los Productos
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModernProductsSection;