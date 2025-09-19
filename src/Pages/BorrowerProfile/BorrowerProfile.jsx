"use client"

import { useState, useEffect } from "react"
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
      avatar: "./review-img1.png",
      rating: 5,
      date: "March 2023",
      text: "She repaid on time every month. Great experience!",
    },
    {
      id: 2,
      name: "Priya K.",
      avatar: "review-img2.png",
      rating: 5,
      date: "January 2023",
      text: "Very transparent and easy to reach out to. Happy to help her again.",
    },
    {
      id: 3,
      name: "Suresh T.",
      avatar: "review-img3.png",
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
  const [investmentConfirmed, setInvestmentConfirmed] = useState(false)
  const [loading, setLoading] = useState(true)

  // simulate async fetch
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  const handleInvest = () => {
    setInvestmentConfirmed(true)
  }

  const selectAmount = (amount) => {
    setInvestmentAmount(amount.toString())
  }

  const fundingProgress = (borrowerData.totalFunded / borrowerData.amountSought) * 100

  if (loading) {
    return (
      <div className="borrower-profile" aria-busy="true" aria-live="polite">
        <div className="hero-skeleton" />
        <div className="main-content" style={{ marginTop: '2.25rem' }}>
          <div className="left-column profile-skeleton-wrap" style={{ flex: 1 }}>
            <div className="skeleton-block">
              <div className="skeleton-line lg" style={{ width: '42%' }} />
              <div className="skeleton-gap" />
              <div className="skeleton-line sm" style={{ width: '60%' }} />
              <div className="skeleton-line sm" style={{ width: '48%' }} />
              <div className="skeleton-gap" />
              <div className="skeleton-pills">
                <div className="skeleton-pill" />
                <div className="skeleton-pill" />
                <div className="skeleton-pill" />
              </div>
            </div>
            <div className="skeleton-block">
              <div className="skeleton-line md" style={{ width: '38%' }} />
              <div className="skeleton-stack" style={{ marginTop: '.65rem' }}>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="skeleton-line sm" style={{ width: `${75 - i * 5}%` }} />
                ))}
              </div>
            </div>
            <div className="skeleton-block">
              <div className="skeleton-line md" style={{ width: '55%' }} />
              <div className="skeleton-stack" style={{ marginTop: '.9rem' }}>
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="skeleton-line text" style={{ height: 10, width: `${95 - i * 15}%` }} />
                ))}
                <div className="skeleton-line text" style={{ height: 10, width: '70%' }} />
              </div>
            </div>
          </div>
          <div className="right-column" style={{ minWidth: 0 }}>
            <div className="skeleton-block compact" style={{ position: 'sticky', top: '5.25rem' }}>
              <div className="skeleton-line lg" style={{ width: '65%' }} />
              <div className="skeleton-gap" />
              <div className="skeleton-flex">
                <div className="skeleton-line sm" style={{ width: '40%' }} />
                <div className="skeleton-line sm" style={{ width: '28%' }} />
              </div>
              <div className="skeleton-gap" />
              <div className="skeleton-progress" />
              <div className="skeleton-gap" />
              <div className="skeleton-line sm" style={{ width: '58%' }} />
              <div className="skeleton-gap" />
              <div className="skeleton-invest">
                <div className="skeleton-line md" style={{ width: '70%' }} />
                <div className="skeleton-flex">
                  <div className="skeleton-line xs" style={{ width: '30%' }} />
                  <div className="skeleton-line xs" style={{ width: '25%' }} />
                  <div className="skeleton-line xs" style={{ width: '35%' }} />
                </div>
                <div className="skeleton-cta" />
                <div className="skeleton-line xs" style={{ width: '60%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
              <div className="community-label">One of the most trusted borrowers on Lending Mate</div>
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

            {investmentConfirmed ? (
              <div className="confirmation-message">
                <div className="tick-icon">✓</div>
                <p className="confirmation-text">Thank you for your support!</p>
                <p className="confirmation-review">You can check updates under “My Investments” tab.</p>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BorrowerProfile
