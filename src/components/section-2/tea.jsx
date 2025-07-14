import { useEffect, useState } from "react";
import "./tea.css";
const customImages = [
  "/src/assets/11.png",
  "/src/assets/image 1.png",
  "/src/assets/img.png",
  "/src/assets/img4.png",
  "/src/assets/11.png",
  "/src/assets/image 1.png",
  "/src/assets/img.png",
  "/src/assets/img4.png",
];

const Tea = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=8")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Xatolik", err));
  }, []);

  return (
    <section className="tea-section">
      <h2 className="tea-title">Products</h2>
      <p className="tea-subtitle">Order it for you or for your beloved ones</p>

      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={product.id}>
            <img
              src={customImages[index]}
              alt={product.title}
              className="product-img"
            />
            <div className="product-info">
              <h3 className="product-name">{product.title}</h3>
              <p className="product-price">{product.price}$</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tea;
