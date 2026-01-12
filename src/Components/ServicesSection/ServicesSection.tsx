import './ServicesSection.css'

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <div className="header-left">
            <h2 className="header-title">
              SwiftShip is dedicated to pushing the <span className="highlight">boundaries</span> of what's possible in
              logistics.
            </h2>
          </div>
          <div className="header-right">
            <p className="header-description">
              We've redefined every challenge as an opportunity to push boundaries and exceed expectations. Our
              cutting-edge solutions and digital-first supply chain, ensuring your cargo reaches its destination
              securely, swiftly, and seamlessly.
            </p>
            <button className="download-btn">Download Brochure</button>
          </div>
        </div>

        <div className="services-grid">
          {/* Card 1 - Featured */}
          <div className="service-card featured">
            <div className="card-header">
              <div className="icon-wrapper">
                <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="arrow-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="card-title">Trusted Expertise</h3>
            <p className="card-description">
              With decades of experience in global shipping, we understand the complexities of international logistics
              and deliver excellence on every route.
            </p>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 18L22 12L16 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 6L2 12L8 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="arrow-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="card-title">Modern Technology</h3>
            <p className="card-description">
              Advanced tracking systems, automated warehousing, and real-time updates, ensuring seamless visibility.
            </p>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
                  <path d="M9 21V9" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div className="arrow-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="card-title">Transparent Pricing</h3>
            <p className="card-description">
              No hidden fees. No surprises. Get accurate cost estimates upfront with our industry-leading transparent
              pricing model.
            </p>
          </div>

          {/* Card 4 */}
          <div className="service-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="arrow-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="card-title">24/7 Availability</h3>
            <p className="card-description">
              Our dedicated customer support team is available around the clock to assist you with any questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
