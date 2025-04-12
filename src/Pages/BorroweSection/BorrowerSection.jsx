"use client"

import { useState } from "react"
import "./BorrowerSection.css"

const BorrowerSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    loanPurpose: "",
    loanAmount: "",
    description: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const lenders = [
    {
      id: 1,
      name: "Priyank Gupta",
      photo: "./img1.png",
      years: "2 years of investing",
      return: "average return 12%",
    },
    {
      id: 2,
      name: "Anita Desai",
      photo: "./img2.png",
      years: "3 years of investing",
      return: "average return 10.5%",
    },
    {
      id: 3,
      name: "Vikram Mehta",
      photo: "./vikram mehta.png",
      years: "1 year of investing",
      return: "average return 11%",
    },
    {
      id: 4,
      name: "Sunita Patel",
      photo: "./MA-Minu-img.png",
      years: "4 years of investing",
      return: "average return 13.5%",
    },
  ]

  const stats = [
    { label: "Social Investors", value: "10,000+" },
    { label: "Disbursed", value: "₹5 Cr+" },
    { label: "On-time Repayment", value: "95%" },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target 
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.loanPurpose) newErrors.loanPurpose = "Loan purpose is required"
    if (!formData.loanAmount.trim()) newErrors.loanAmount = "Loan amount is required"
    else if (isNaN(formData.loanAmount) || Number(formData.loanAmount) <= 0) newErrors.loanAmount = "Please enter a valid amount"
    if (!formData.description.trim()) newErrors.description = "Description is required"

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formErrors = validateForm()

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      alert("Please fill out all mandatory fields.")
      return
    }

    setIsSubmitted(true)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      loanPurpose: "",
      loanAmount: "",
      description: "",
    })
  }

  return (
    <div className="borrower-form-container">
      <header className="lk-header">
        <div className="lk-logo">
          <span className="logo-text">
            Lending<span className="logo-highlight">Kat</span>
          </span>
        </div>
        <nav className="lk-nav">
          <a href="#" className="lk-nav-link">Get Started</a>
          <a href="#" className="lk-nav-button">Login</a>
        </nav>
      </header>

      <main>
        <section className="borrower-hero">
          <h1>Access the Funds You Need</h1>
          <p className="subheadline">Join a growing lender pool committed to fair opportunities.</p>
        </section>

        <section className="lender-pool">
          <h2>Lender Pool Stats</h2>
          <div className="stats-container">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <h3>Our Top Lenders</h3>
          <div className="lenders-grid">
            {lenders.map((lender) => (
              <div key={lender.id} className="lender-card">
                <div className="lender-photo">
                  <img src={lender.photo} alt={lender.name} />
                </div>
                <div className="lender-details">
                  <h4>{lender.name}</h4>
                  <p>{lender.years}</p>
                  <p>{lender.return}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="borrower-form-section">
          <div className="form-container">
            <h2>Borrower Application</h2>

            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Great news!</h3>
                <p>Our lenders will review your request shortly.</p>
                <button className="primary-button" onClick={() => setIsSubmitted(false)}>
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {[
                  { id: "fullName", label: "Full Name", type: "text" },
                  { id: "email", label: "Email", type: "email" },
                  { id: "phone", label: "Phone", type: "tel" },
                  { id: "loanAmount", label: "Loan Amount Needed", type: "text", placeholder: "₹" },
                ].map(({ id, label, type, placeholder }) => (
                  <div className="form-group" key={id}>
                    <label htmlFor={id}>{label} <span className="required">*</span></label>
                    <input
                      type={type}
                      id={id}
                      name={id}
                      value={formData[id]}
                      onChange={handleChange}
                      placeholder={placeholder || ""}
                      className={errors[id] ? "error" : ""}
                    />
                    {errors[id] && <span className="error-message">{errors[id]}</span>}
                  </div>
                ))}

                <div className="form-group">
                  <label htmlFor="loanPurpose">Loan Purpose <span className="required">*</span></label>
                  <select
                    id="loanPurpose"
                    name="loanPurpose"
                    value={formData.loanPurpose}
                    onChange={handleChange}
                    className={errors.loanPurpose ? "error" : ""}
                  >
                    <option value="">Select an option</option>
                    <option value="business">Business Expansion</option>
                    <option value="education">Education</option>
                    <option value="medical">Emergency Medical</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="housing">Housing</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.loanPurpose && <span className="error-message">{errors.loanPurpose}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="description">
                    Short Description / Story about the Need <span className="required">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    className={errors.description ? "error" : ""}
                  ></textarea>
                  {errors.description && <span className="error-message">{errors.description}</span>}
                </div>

                <div className="quality-note">
                  <p>Our team verifies your story, endorsements, and basic documents before listing your request.</p>
                </div>

                <button type="submit" className="primary-button">Submit Application</button>
              </form>
            )}
          </div>
        </section>

        <section className="cta-section">
          <a href="/success-stories" className="secondary-button">
            Want to see how others have succeeded? Check out success stories.
          </a>
        </section>
      </main>

      <footer className="lk-footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Lending Kat. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BorrowerSection