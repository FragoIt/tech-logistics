import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/userActions";

const ModernHeader = () => {
  const [keyword, setKeyword] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    setIsMenuOpen(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <header className="modern-header">
      {/* Top Bar */}
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="contact-info">
                <span><i className="fas fa-phone"></i> +57 301 356 890</span>
                <span><i className="fas fa-envelope"></i> info@techlogistics.com</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="social-links">
                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                <Link to="#"><i className="fab fa-instagram"></i></Link>
                <Link to="#"><i className="fab fa-twitter"></i></Link>
                <Link to="#"><i className="fab fa-youtube"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            {/* Left Section - Logo */}
            <div className="header-left">
              <Link to="/" className="logo">
                <img src="/images/econo.jpeg" alt="Tech Logistics" className="logo-img" />
                <div className="logo-text">
                  <span className="brand-name">TECH</span>
                  <span className="brand-sub">LOGISTICS</span>
                </div>
              </Link>
            </div>

            {/* Center Section - Navigation */}
            <div className="header-center">
              <nav className={`main-nav ${isMenuOpen ? 'nav-open' : ''}`}>
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"></i>
                  <span>Inicio</span>
                </Link>
                <Link to="/" className="nav-link" onClick={() => {
                  setTimeout(() => {
                    const productsSection = document.getElementById('products-section');
                    if (productsSection) {
                      productsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}>
                  <i className="fas fa-th-large"></i>
                  <span>Productos</span>
                </Link>
                <Link to="/" className="nav-link" onClick={() => {
                  setTimeout(() => {
                    const aboutSection = document.getElementById('about-section');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}>
                  <i className="fas fa-tags"></i>
                  <span>Categorías</span>
                </Link>
                <Link to="/" className="nav-link" onClick={() => {
                  setTimeout(() => {
                    const aboutSection = document.getElementById('about-section');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}>
                  <i className="fas fa-info-circle"></i>
                  <span>Nosotros</span>
                </Link>
                <Link to="/" className="nav-link" onClick={() => {
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact-section');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}>
                  <i className="fas fa-envelope"></i>
                  <span>Contacto</span>
                </Link>
              </nav>
            </div>

            {/* Right Section - Actions */}
            <div className="header-right">
              {/* Search */}
              <form onSubmit={submitHandler} className="search-form">
                <div className="search-input-group">
                  <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="search-input"
                  />
                  <button type="submit" className="search-btn">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </form>

              {/* Cart */}
              <Link to="/cart" className="cart-btn">
                <i className="fas fa-shopping-bag"></i>
                <span className="cart-text">Carrito</span>
                {cartItems.length > 0 && (
                  <span className="cart-count">{cartItems.length}</span>
                )}
              </Link>

              {/* User Menu */}
              {userInfo ? (
                <div className="user-menu">
                  <div className="user-avatar">
                    <img src="/images/user.png" alt="User" />
                    <div className="user-info">
                      <span className="user-name">{userInfo.name}</span>
                      <span className="user-role">Cliente</span>
                    </div>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  <div className="user-dropdown">
                    <Link to="/profile" className="dropdown-item">
                      <i className="fas fa-user"></i>
                      Mi Perfil
                    </Link>
                    <Link to="/profile" className="dropdown-item">
                      <i className="fas fa-box"></i>
                      Mis Pedidos
                    </Link>
                    <div className="dropdown-divider"></div>
                    <button onClick={logoutHandler} className="dropdown-item logout">
                      <i className="fas fa-sign-out-alt"></i>
                      Cerrar Sesión
                    </button>
                  </div>
                </div>
              ) : (
                <div className="auth-buttons">
                  <Link to="/login" className="btn-auth login">
                    <i className="fas fa-sign-in-alt"></i>
                    <span>Ingresar</span>
                  </Link>
                  <Link to="/register" className="btn-auth register">
                    <i className="fas fa-user-plus"></i>
                    <span>Registrarse</span>
                  </Link>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button 
                className="mobile-menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <span className={isMenuOpen ? 'active' : ''}></span>
                <span className={isMenuOpen ? 'active' : ''}></span>
                <span className={isMenuOpen ? 'active' : ''}></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ModernHeader;