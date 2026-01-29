import "./DocumentShipping.css"
import DocumentImage from "../../Images/sheep.png";

export default function DocumentShippingSection() {
  return (
    <section className="doc-ship-wrapper">
      <div className="doc-ship-inner">
        <div className="doc-ship-layout">
          <div className="doc-ship-content-left">
            <h2 className="doc-ship-heading">Document and Parcel Shipping</h2>
            <p className="doc-ship-subheading">For All Shippers</p>
            <div className="doc-ship-accent-line"></div>

            <p className="doc-ship-paragraph">
              Learn about SwiftShip Express – the undisputed global leader in international express shipping, delivering
              your documents and parcels with speed, reliability, and precision worldwide.
            </p>

            <div className="doc-ship-features-block">
              <h3 className="doc-ship-features-label">Services Available</h3>

              <div className="doc-ship-features-list">
                <div className="doc-ship-feature-item">
                  <div className="doc-ship-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="doc-ship-feature-name">Next Possible Business Day</span>
                </div>

                <div className="doc-ship-feature-item">
                  <div className="doc-ship-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" />
                      <path d="M9 12h6M12 9v6" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  <span className="doc-ship-feature-name">Tailored Business Solutions</span>
                </div>

                <div className="doc-ship-feature-item">
                  <div className="doc-ship-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7v10c0 5.5 3.8 10 10 10s10-4.5 10-10V7L12 2z" fill="currentColor" />
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="doc-ship-feature-name">Flexible Import/Export Options</span>
                </div>

                <div className="doc-ship-feature-item">
                  <div className="doc-ship-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="currentColor" />
                      <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  <span className="doc-ship-feature-name">Wide Variety of Optional Services</span>
                </div>
              </div>
            </div>
          </div>

          <div className="doc-ship-content-right">
           <img src={DocumentImage} alt="DocumentImage" className="doc-ship-image-container" />
            <div className="doc-ship-image-container"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
