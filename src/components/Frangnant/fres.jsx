import "./fres.css";

const Fres = () => {
  return (
    <section className="fres">
      <div className="fres-content">
        <div className="fres-text">
          <h2>
            Clean and <br /> fragrant soy wax
          </h2>
          <p className="subtitle">Made for your home and for your wellness</p>
          <ul className="features">
            <li>
              <img src="/tu.png" alt="icon" className="icon" />
              <strong>Eco-sustainable:</strong> All recyclable materials, 0% CO2
              emissions
            </li>
            <li>
              <img src="/tu.png" alt="icon" className="icon" />{" "}
              <strong>Hypoallergenic:</strong> 100% natural, human friendly
              ingredients
            </li>
            <li>
              <img src="/tu.png" alt="icon" className="icon" />{" "}
              <strong>Handmade:</strong> All candles are craftly made with love.
            </li>
            <li>
              <img src="/tu.png" alt="icon" className="icon" />{" "}
              <strong>Long burning:</strong> No more waste. Created for last
              long.
            </li>
          </ul>
          <button className="learn-button">Learn more</button>
        </div>

        <div className="fres-image">
          <img src="/image.png" alt="Candles" />
        </div>
      </div>
    </section>
  );
};

export default Fres;
