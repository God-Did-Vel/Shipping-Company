import "./FooterSection.css"


export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-column">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-list">
              <li>
                <a href="#about">About SwiftShip</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#press">Press</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-list">
              <li>
                <a href="#shipping">Global Shipping</a>
              </li>
              <li>
                <a href="#tracking">Real-Time Tracking</a>
              </li>
              <li>
                <a href="#logistics">Logistics Solutions</a>
              </li>
              <li>
                <a href="#freight">Sea Freight</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-list">
              <li>
                <a href="#help">Help Center</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#shipping-info">Shipping Info</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-list">
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms of Service</a>
              </li>
              <li>
                <a href="#cookies">Cookie Policy</a>
              </li>
              <li>
                <a href="#compliance">Compliance</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} SwiftShip. All rights reserved. Global shipping solutions for modern logistics.
          </p>
          <p className="footer-tagline">Delivering excellence, worldwide.</p>
        </div>
      </div>
    </footer>
  )
}
