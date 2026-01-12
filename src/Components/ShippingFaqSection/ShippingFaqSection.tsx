import type React from "react"
import "./ShippingFaqSection.css"

interface FAQItem {
  id: string
  title: string
  content: string
}

const faqData: FAQItem[] = [
  {
    id: "shipping-coverage",
    title: "What shipping services does SwiftShip cover?",
    content:
      "SwiftShip offers comprehensive international and domestic shipping solutions including sea freight, air freight, express delivery, and specialized cargo handling. We cover over 180 countries with reliable, on-time delivery guarantees. Our services are tailored for businesses of all sizes, from small parcels to full container loads.",
  },
  {
    id: "tracking-system",
    title: "How can I track my shipment in real-time?",
    content:
      "Every SwiftShip shipment comes with a unique tracking number and access to our advanced real-time tracking system. Monitor your cargo at every stage of its journey through our user-friendly dashboard. Receive automated notifications via email or SMS at key delivery milestones to stay informed every step of the way.",
  },
  {
    id: "competitive-pricing",
    title: "Why choose SwiftShip for competitive pricing?",
    content:
      "With over 15 years of industry experience, SwiftShip has established partnerships with major logistics providers worldwide. This allows us to negotiate the best rates and pass the savings directly to our clients. We offer transparent pricing with no hidden fees, along with flexible payment terms for businesses of all sizes.",
  },
]

const ShippingFAQSection: React.FC = () => {
  return (
    <section className="shipping-faq-section">
      <div className="shipping-faq-container">
        <div className="shipping-faq-content">
          <div className="shipping-faq-left">
            <div className="shipping-faq-header">
              <span className="shipping-faq-subtitle">{">>> SHIPPING SOLUTIONS <<<"}</span>
              <h2 className="shipping-faq-title">
                Frequently Asked Questions,
                <br />
                Get clarity on our services
              </h2>
              <p className="shipping-faq-description">
                SwiftShip provides world-class logistics and shipping services with industry-leading reliability,
                competitive pricing, and customer support. Whether you're shipping documents or full container loads, we
                have the expertise to handle your needs efficiently.
              </p>
            </div>
          </div>

          <div className="shipping-faq-right">
            <div className="shipping-faq-cards">
              {faqData.map((item, index) => (
                <div key={item.id} className="shipping-faq-card">
                  <input type="checkbox" id={item.id} className="shipping-faq-toggle" defaultChecked={index === 0} />
                  <label htmlFor={item.id} className="shipping-faq-question">
                    <div className="shipping-faq-question-content">
                      <div className="shipping-faq-icon">
                        <span>?</span>
                      </div>
                      <span className="shipping-faq-question-text">{item.title}</span>
                      <div className="shipping-faq-arrow">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                          <path
                            d="M1 1L6 6L11 1"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </label>
                  <div className="shipping-faq-answer">
                    <div className="shipping-faq-answer-content">
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShippingFAQSection
