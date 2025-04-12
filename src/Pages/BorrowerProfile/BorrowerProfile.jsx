"use client"

import { useState } from "react"
import './BorrowerProfile.css'

const borrowerData = {
  name: "Anita Singh",
  businessName: "Anita's Grocery Store",
  location: "Jharkhand, India",
  tagline: "Seeking ₹80,000 to restock inventory and scale local sales",
  rating: 4.9,
  reviewCount: 12,
  totalFunded: 62000,
  lenderCount: 34,
  amountSought: 80000,
  returns: "8% p.a.",
  duration: "12 months",
  story:
    "Hello, I'm Anita. I run a small grocery store in Ranchi. With this loan, I will buy a refrigerator and stock new FMCG products to increase monthly revenue.",
  credibility: [
    "On-time repayment for 2 previous loans",
    "Endorsed by village council head",
    "Running business successfully for 5 years",
    "Supports 2 employees from local community",
  ],
  images: [
    "https://source.unsplash.com/800x600/?grocery,store",
    "https://source.unsplash.com/800x600/?smallbusiness,India",
    "https://source.unsplash.com/800x600/?shop,market",
    "https://source.unsplash.com/800x600/?entrepreneur,woman",
    "https://source.unsplash.com/800x600/?local,business",
  ],
  reviews: [
    {
      id: 1,
      name: "Rajiv M.",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      rating: 5,
      date: "March 2023",
      text: "She repaid on time every month. Great experience!",
    },
    {
      id: 2,
      name: "Priya K.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      date: "January 2023",
      text: "Very transparent and easy to reach out to. Happy to help her again.",
    },
    {
      id: 3,
      name: "Suresh T.",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 4,
      date: "November 2022",
      text: "Good communication throughout the loan period. Reliable borrower.",
    },
  ],
}

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i} className="star full">★</span>
      ))}
      {hasHalfStar && <span className="star half">★</span>}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <span key={i + fullStars + (hasHalfStar ? 1 : 0)} className="star empty">☆</span>
      ))}
    </div>
  )
}

const BorrowerProfile = () => {
  const [investmentAmount, setInvestmentAmount] = useState("")

  const handleInvest = () => {
    alert(`You are investing ₹${investmentAmount || borrowerData.amountSought} in ${borrowerData.businessName}`)
  }

  const selectAmount = (amount) => {
    setInvestmentAmount(amount.toString())
  }

  const fundingProgress = (borrowerData.totalFunded / borrowerData.amountSought) * 100

  return (
    <div className="borrower-profile">

      <div className="hero-section">
        <div className="profile-content">
          <h1>{borrowerData.businessName}</h1>
          <div className="location">
            <span className="location-icon">📍</span>
            <span>{borrowerData.location}</span>
          </div>
          <p className="tagline">{borrowerData.tagline}</p>
        </div>
      </div>

      <div className="main-content">
        <div className="left-column">



          <div className="ratings-section">
            <div className="rating-header">
              <div className="rating-stars">
                <StarRating rating={borrowerData.rating} />
                <span className="rating-value">{borrowerData.rating}</span>
                <span className="rating-count">({borrowerData.reviewCount} ratings)</span>
              </div>
              <div className="community-label">One of the most trusted borrowers on Lending Kat</div>
            </div>
          </div>

          <div className="borrower-story">
            <h2>About this loan</h2>
            <p>{borrowerData.story}</p>

            <h3>Borrower Credibility</h3>
            <ul className="credibility-list">
              {borrowerData.credibility.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="reviews-section">
            <h2>Reviews from previous lenders</h2>
            <div className="reviews-container">
              {borrowerData.reviews.map((review) => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <div className="reviewer-info">
                      <img src={review.avatar} alt={review.name} className="reviewer-pic" />
                      <div className="reviewer-details">
                        <div className="reviewer-name">{review.name}</div>
                        <div className="review-date">{review.date}</div>
                      </div>
                    </div>
                    <div className="review-rating">
                      <StarRating rating={review.rating} />
                    </div>
                  </div>
                  <p className="review-text">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="investment-card">
            <div className="investment-header">
              <div className="investment-amount">₹{borrowerData.amountSought.toLocaleString()}</div>
              <div className="investment-details">
                <div className="investment-detail">
                  <div className="detail-value">upto {borrowerData.returns}</div>
                  <div className="detail-label">RETURNS</div>
                </div>
                <div className="investment-detail">
                  <div className="detail-value">{borrowerData.duration}</div>
                  <div className="detail-label">TENURE</div>
                </div>
              </div>
            </div>

            <div className="funding-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${fundingProgress}%` }}></div>
              </div>
              <div className="progress-text">
                ₹{borrowerData.totalFunded.toLocaleString()} funded by {borrowerData.lenderCount} lenders
              </div>
            </div>

            <div className="investment-form">
              <div className="amount-input-container">
                <input
                  type="text"
                  className="amount-input"
                  placeholder="Enter Amount"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(e.target.value.replace(/\D/g, ""))}
                />
                <button className="amount-submit">✓</button>
              </div>

              <div className="quick-amounts">
                <button className="quick-amount-btn" onClick={() => selectAmount(1000)}>+ ₹1000</button>
                <button className="quick-amount-btn" onClick={() => selectAmount(5000)}>+ ₹5000</button>
                <button className="quick-amount-btn" onClick={() => selectAmount(10000)}>+ ₹10000</button>
              </div>

              <button className="invest-button" onClick={handleInvest}>Invest Now</button>

              <div className="verification-tag">
                <span className="verification-icon">✓</span>
                Verified by community reviewers
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default BorrowerProfile
