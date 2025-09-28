import React from "react";

const ModernHero = () => {
  return (
    <section className="modern-hero">
      <div className="container-fluid">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="badge-new">NEW COLLECTION</div>
              <h1 className="hero-title">
                STEP INTO
                <span className="highlight">THE FUTURE</span>
                OF FOOTWEAR
              </h1>
              <p className="hero-subtitle">
                Descubre nuestra colección exclusiva de zapatos premium. 
                Diseño, comodidad y estilo en cada paso.
              </p>
              <div className="hero-actions">
                <button className="btn-modern primary" onClick={() => {
                  const productsSection = document.getElementById('products-section');
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                  Explorar Colección
                  <i className="fas fa-arrow-right"></i>
                </button>
                <button className="btn-modern secondary" onClick={() => {
                  const aboutSection = document.getElementById('about-section');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                  <i className="fas fa-info-circle"></i>
                  Conoce Más
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <span className="number">500+</span>
                  <span className="label">Productos</span>
                </div>
                <div className="stat">
                  <span className="number">50K+</span>
                  <span className="label">Clientes</span>
                </div>
                <div className="stat">
                  <span className="number">4.9</span>
                  <span className="label">Rating</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-visual">
              <div className="floating-card card-1">
                <img src="/images/1.png" alt="Nike Jordan" />
                <div className="card-info">
                  <h4>Nike Air Jordan 1</h4>
                  <p>$250.000</p>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <span>4.8</span>
                  </div>
                </div>
              </div>
              <div className="floating-card card-2">
                <img src="/images/2.png" alt="Adidas Ultraboost" />
                <div className="card-info">
                  <h4>Adidas Ultraboost</h4>
                  <p>$320.000</p>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <span>4.7</span>
                  </div>
                </div>
              </div>
              <div className="floating-card card-3">
                <img src="/images/3.png" alt="Converse Chuck" />
                <div className="card-info">
                  <h4>Converse Classic</h4>
                  <p>$150.000</p>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <span>4.5</span>
                  </div>
                </div>
              </div>
              <div className="floating-card card-4">
                <img src="/images/6.png" alt="New Balance" />
                <div className="card-info">
                  <h4>New Balance 990</h4>
                  <p>$280.000</p>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <span>4.6</span>
                  </div>
                </div>
              </div>
              <div className="floating-card card-5">
                <img src="/images/8.png" alt="Puma Suede" />
                <div className="card-info">
                  <h4>Puma Suede Classic</h4>
                  <p>$180.000</p>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <span>4.4</span>
                  </div>
                </div>
              </div>
              <div className="hero-bg-shape"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;