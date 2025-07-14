import "./test.css";
const Test = () => {
  return (
    <section className="testimonials">
      <h2 className="test-title">Testimonials</h2>
      <p className="test-subtitle">Some quotes from our happy customers</p>
      <div className="test-cards">
        <div className="test-card">
          <img src="/jut.png" alt="" className="test-avatar" />
          <br />
          <img
            src="/Stars.png"
            alt="rating"
            className="test-rating"
          />
          <p className="test-text">“I love it! No more air fresheners”</p>
          <p className="test-name">Luisa</p>
        </div>
        <div className="test-card">
          <img src="/jut.png" alt="" className="test-avatar" />
          <br />
          <img
            src="/Stars.png"
            alt="rating"
            className="test-rating"
          />
          <p className="test-text">“I love it! No more air fresheners”</p>
          <p className="test-name">Luisa</p>
        </div>
        <div className="test-card">
          <img src="/jut.png" alt="" className="test-avatar" />
          <br />
          <img
            src="/Stars.png"
            alt="rating"
            className="test-rating"
          />
          <p className="test-text">“I love it! No more air fresheners”</p>
          <p className="test-name">Luisa</p>
        </div>
      </div>
    </section>
  );
};

export default Test;
