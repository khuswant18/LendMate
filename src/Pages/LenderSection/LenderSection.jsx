"use client";

import { useState} from "react";
import { NavLink, useNavigate } from "react-router-dom"; 
import "./LenderSection.css";

const LenderSection = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    phone: "",
    investmentRange: "",
    experience: "",
    motivation: "",
  });

  const [errors, setErrors] = useState({});
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!formData.businessName.trim()) {
      newErrors.businessName = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    } 

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.investmentRange) {
      newErrors.investmentRange = "Please select an investment range";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors) {
      setErrors({
        ...errors,
        [name]: "",
      }); 
    }
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setLoading(true);
      console.log("Form submitted successfully:", formData);

      setTimeout(()=>{
        navigate("/borrowerCard");
      },2000)
    }
  };

  return (
    <div className="lender-form-container">
      <header className="lk-header">
        <div className="lk-logo">
          <span className="logo-text">
            Lending<span className="logo-highlight">Kat</span>
          </span>
        </div>
        <nav className="lk-nav">
          <a href="#" className="lk-nav-link">
            Get Started
          </a>
          <a href="#" className="lk-nav-button">
            Login
          </a> 
        </nav>
      </header> 

      <main>
        <section className="lender-hero">
          <h1>Grow Your Business While Uplifting Others</h1>
          <p className="subheadline">
            Review real borrower stories and invest where it matters most.
          </p>
        </section>

        <section className="lender-form-section">
          <div className="form-container">
            <h2>Lender Information</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="businessName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className={errors.businessName ? "error" : ""}
                />
                {errors.businessName && (
                  <span className="error-message">{errors.businessName}</span>
                )} 
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "error" : ""} 
                />
                {errors.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </div> 

              <div className="form-group">
                <label htmlFor="investmentRange">
                  Investment Range <span className="required">*</span>
                </label>
                <select
                  id="investmentRange"
                  name="investmentRange"
                  value={formData.investmentRange}
                  onChange={handleChange}
                  className={errors.investmentRange ? "error" : ""}
                >
                  <option value="">Select an option</option>
                  <option value="0-100000">₹0 - ₹1,00,000</option>
                  <option value="100001-500000">₹1,00,001 - ₹5,00,000</option>
                  <option value="500001-1000000">
                    ₹5,00,001 - ₹10,00,000
                  </option>
                  <option value="1000001+">₹10,00,001+</option>
                </select>
                {errors.investmentRange && (
                  <span className="error-message">
                    {errors.investmentRange}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="experience">
                  Years of Investing Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="0-1">0-1 years</option>
                  <option value="2-3">2-3 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="motivation">
                  Tell us your motivation for lending
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={4}
                ></textarea>
              </div>

              <button 
              type="submit" 
              className="submit-button"
              disabled={loading}

              >
                {loading ? "Submitting..." : "Submit"}
              </button> 
            </form>
          </div>
        </section>
      </main>

      <footer className="lk-footer">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} Lending Kat. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LenderSection;
