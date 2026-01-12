
import { useState, useRef, useEffect } from "react"
import "./Header.css"
import Logo from "../../Images/Logistic-Logo.png";

interface DropdownItem {
  label: string
  href: string
}

interface NavItem {
  label: string
  dropdown?: DropdownItem[]
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const navItems: NavItem[] = [
    {
      label: "Company",
      dropdown: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
      ],
    },
    {
      label: "Services",
      dropdown: [
        { label: "Consulting", href: "/consulting" },
        { label: "Development", href: "/development" },
        { label: "Support", href: "/support" },
        { label: "Training", href: "/training" },
      ],
    },
    {
      label: "Resources",
      dropdown: [
        { label: "Documentation", href: "/docs" },
        { label: "Blog", href: "/blog" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Tutorials", href: "/tutorials" },
      ],
    },
    {
      label: "Contact Us",
      dropdown: [
        { label: "Get in Touch", href: "/contact" },
        { label: "Support", href: "/support" },
        { label: "Sales", href: "/sales" },
        { label: "Locations", href: "/locations" },
      ],
    },
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".nav-item")) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    setActiveDropdown(null)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo-placeholder">
            {/* Placeholder for user's logo image */}
            <img src={Logo} />
          </div>
          <span className="company-name">SwiftShip</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="nav-item"
              ref={(el) => {
                dropdownRefs.current[item.label] = el
              }}
            >
              <button
                className="nav-button"
                onClick={() => toggleDropdown(item.label)}
                aria-expanded={activeDropdown === item.label}
                aria-haspopup="true"
              >
                {item.label}
                <svg
                  className={`dropdown-arrow ${activeDropdown === item.label ? "active" : ""}`}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div className={`dropdown-menu ${activeDropdown === item.label ? "active" : ""}`}>
                  {item.dropdown.map((dropdownItem) => (
                    <a key={dropdownItem.label} href={dropdownItem.href} className="dropdown-item">
                      {dropdownItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side - Track Link and Login Button */}
        <div className="right-section">
          <a href="/track" className="track-link">
            Track
          </a>
          <button className="login-button">Login</button>

          {/* Hamburger Menu Button */}
          <button
            className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${mobileMenuOpen ? "active" : ""}`}>
        {navItems.map((item) => (
          <div key={item.label} className="mobile-nav-item">
            <button
              className="mobile-nav-button"
              onClick={() => toggleDropdown(item.label)}
              aria-expanded={activeDropdown === item.label}
            >
              {item.label}
              <svg
                className={`dropdown-arrow ${activeDropdown === item.label ? "active" : ""}`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Mobile Dropdown */}
            {item.dropdown && (
              <div className={`mobile-dropdown ${activeDropdown === item.label ? "active" : ""}`}>
                {item.dropdown.map((dropdownItem) => (
                  <a key={dropdownItem.label} href={dropdownItem.href} className="mobile-dropdown-item">
                    {dropdownItem.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Mobile Track Link */}
        <div className="mobile-track-section">
          <a href="/track" className="mobile-track-link">
            Track
          </a>
        </div>
      </nav>
    </header>
  )
}
