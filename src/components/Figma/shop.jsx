import { useState } from "react";
import "./shop.css";

const Shop = () => {
  return (
    <div>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <img
              src="/src/assets/logo.png"
              alt="Candleaf Logo"
              className="w-8 h-8"
            />
          </div>

          <nav className="nav">
            <div className="dropdown">
              <button className="nav-button">Discovery ▼</button>
            </div>

            <a href="#" className="nav-link">
              About
            </a>
            <a href="#" className="nav-link">
              Contact us
            </a>
          </nav>

          <div className="user-actions">
            <img src="/src/assets/Profile.png" alt="" className="w-8 h-8" />
            <button className="cart-button">
              <img src="/src/assets/Cart.png" alt="" className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <img src="/src/assets/hero-title.png" alt="leaf icon" />
          <p className="hero-text">
            All handmade with natural soy wax, Candleaf is a companion for all{" "}
            <br /> your pleasure moments
          </p>
          <button className="hero-button">Discovery our collection</button>
        </div>
      </section>
    </div>
  );
};

export default Shop;
