import "./HeroSection.css";
import HeroBg from "../../Images/Dynamic-logistic.png";

export default function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="hero-content">
        <div className="hero-text-wrapper">
          <h1 className="hero-title">SwiftShip sea freight services</h1>
          <p className="hero-subtitle">
            If low costs matter for your shipment, try our sea freight services
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">
              READ MORE <span className="arrow">→</span>
            </button>

            {/* <button className="btn btn-secondary">
              CONTACT US <span className="arrow">→</span>
            </button> */}
          </div>
        </div>
      </div>

      <div className="hero-banner">
        <p className="banner-text">
          We are honored to be a leading and reliable partner in the field of
          multimodal transport in World!
        </p>
        {/* <button className="btn btn-dark">CONTACT US</button> */}
      </div>
    </section>
  );
}
