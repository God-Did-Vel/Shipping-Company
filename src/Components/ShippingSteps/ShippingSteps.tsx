import "./ShippingSteps.css"


export default function ShippingStepsSection() {
  return (
    <div className="shipping-steps-container">
      {/* Header Section */}
      <div className="steps-header">
        <h1 className="steps-title">Ship with SwiftShip in 3 Simple Steps</h1>
        <p className="steps-subtitle">
          No logistics experience needed. Start shipping globally today with our seamless platform.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="steps-grid">
        {/* Step 1 */}
        <div className="step-card">
          <div className="step-number">1</div>
          <h3 className="step-title">Create Your Account</h3>
          <p className="step-description">
            Sign up in minutes and set up your shipping profile with your business details, addresses, and preferences.
          </p>
        </div>

        {/* Step 2 */}
        <div className="step-card">
          <div className="step-number">2</div>
          <h3 className="step-title">Book & Ship</h3>
          <p className="step-description">
            Generate shipping labels, book pickups, and manage shipments across multiple carriers with one click.
          </p>
        </div>

        {/* Step 3 */}
        <div className="step-card">
          <div className="step-number">3</div>
          <h3 className="step-title">Track & Optimize</h3>
          <p className="step-description">
            Monitor deliveries in real-time, analyze shipping costs, and optimize your logistics strategy for growth.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-item">
          <div className="stat-value">150+</div>
          <div className="stat-label">Countries Reached</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">24/7</div>
          <div className="stat-label">Expert Support</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">99.8%</div>
          <div className="stat-label">On-Time Delivery</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">Trusted</div>
          <div className="stat-label">By 10K+ Businesses</div>
        </div>
      </div>
    </div>
  )
}
