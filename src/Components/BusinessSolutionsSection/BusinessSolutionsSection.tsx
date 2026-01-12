import "./BusinessSolutionsSection.css"
import BusinessImage from "../../Images/illustrated-delivery.png"

export default function BusinessSolutionsSection() {
  return (
    <>
      {/* Business Solutions Banner */}
      <section className="business-solutions-banner">
        <div className="business-solutions-container">
          {/* Image Placeholder */}
          <div className="business-solutions-image-wrapper">
            <div className="business-solutions-image-placeholder">
              <img
                src={BusinessImage}
                alt="SwiftShip Business Solutions"
                className="business-solutions-image"
              />
            </div>
          </div>

          {/* Content */}
          <div className="business-solutions-content">
            <h2 className="business-solutions-title">SwiftShip for Your Business</h2>
            <p className="business-solutions-description">
              Empower your small and medium-sized business with world-class shipping and logistics solutions. Our team
              of experienced professionals is dedicated to helping you meet the ever-evolving needs of your customers
              with speed, reliability, and precision.
            </p>
            <button className="business-solutions-button">Explore Our Business Solutions</button>
          </div>
        </div>
      </section>

      {/* Service Updates Section */}
      <section className="service-updates-section">
        <div className="service-updates-container">
          <h2 className="service-updates-title">Important Service Updates</h2>
          <p className="service-updates-subtitle">Service bulletins keep you up to date with news and alerts</p>

          <ul className="service-updates-list">
            <li className="service-update-item">
              <span className="service-update-text">
                SwiftShip Express Expands Coverage to 150+ Countries Worldwide
              </span>
              <span className="service-update-arrow">›</span>
            </li>
            <li className="service-update-item">
              <span className="service-update-text">Real-Time Tracking Now Available for All Shipments</span>
              <span className="service-update-arrow">›</span>
            </li>
            <li className="service-update-item">
              <span className="service-update-text">Enhanced Security Features to Protect Your Valuable Cargo</span>
              <span className="service-update-arrow">›</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
