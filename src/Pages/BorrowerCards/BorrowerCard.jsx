import { useState, useEffect } from "react";
import "./BorrowerCard.css";
import { NavLink } from "react-router-dom";

const borrowersData = [
  {
    id: 1,
    name: "Priya Sharma",
    photo: "./img01.png",
    description: "Needs a loan to buy facial kits for her beauty parlor setup.",
    location: "Jharkhand",
    loanAmount: 80000,
    loanTerm: 15,
    interestRate: 8,
    categories: ["Women", "First Time Borrowers", "Small Business"],
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    photo: "./img02.png",
    description:
      "Expanding his organic vegetable farm with modern irrigation systems.",
    location: "Punjab",
    loanAmount: 120000,
    loanTerm: 24,
    interestRate: 7.5,
    categories: ["Agriculture", "Sustainable"],
  },
  {
    id: 3,
    name: "Meena Patel",
    photo: "./img03.png",
    description:
      "Pursuing a master's degree in Computer Science to improve career prospects.",
    location: "Gujarat",
    loanAmount: 200000,
    loanTerm: 36,
    interestRate: 6.5,
    categories: ["Women", "Education"],
  },
  {
    id: 4,
    name: "Arjun Singh",
    photo: "./img04.png",
    description:
      "Starting a small textile manufacturing unit employing local artisans.",
    location: "Rajasthan",
    loanAmount: 150000,
    loanTerm: 18,
    interestRate: 8.2,
    categories: ["Manufacturing", "First Time Borrowers"],
  },
  {
    id: 5,
    name: "Lakshmi Devi",
    photo: "./img05.png",
    description:
      "Expanding her dairy farm with two more cows to increase milk production.",
    location: "Karnataka",
    loanAmount: 60000,
    loanTerm: 12,
    interestRate: 7.8,
    categories: ["Women", "Agriculture", "Sustainable"],
  },
  {
    id: 6,
    name: "Mohammed Farhan",
    photo: "./img06.png",
    description:
      "Opening a mobile repair shop after completing technical certification.",
    location: "Maharashtra",
    loanAmount: 45000,
    loanTerm: 9,
    interestRate: 8.5,
    categories: ["Small Business", "First Time Borrowers"],
  },
];
 
const filterCategories = ["All", "Women", "First Time Borrowers"];

const BorrowerDirectory = () => { 
  const [selectedCategory, setSelectedCategory] = useState("All"); 
  const [filteredBorrowers, setFilteredBorrowers] = useState(borrowersData); 
  const [Loading,setLoading]=useState(false);  

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      let result = [...borrowersData]; 
      if (selectedCategory !== "All") {
      result = result.filter((borrower) =>
        borrower.categories.includes(selectedCategory)
      );
    }
    setFilteredBorrowers(result);
  }, 2000);
}, [selectedCategory]); 

  return (
    <div className="borrower-directory">
      <header className="directory-header">
        <h1>Explore Borrowers Aligned with Your Investment Goals</h1>
        <p className="subheading">
          Discover real people with real businesses, farms, and educational
          pursuits.
        </p>
      </header>

      <section className="filter-section">
        <div className="filter-bar">
          <div className="category-filters">
            {filterCategories.map((category) => (
              <button
                key={category}
                className={`filter-chip ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category} 
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="borrowers-grid">
        {filteredBorrowers.length > 0 ? (
          filteredBorrowers.map((borrower) => (
            <div className="borrower-card" key={borrower.id}>
              <div className="borrower-photo">
                <img
                  src={borrower.photo || "/placeholder.svg"}
                  alt={borrower.name}
                />
              </div>
              <div className="borrower-info">
                <h3>{borrower.name}</h3>
                <p className="borrower-description">{borrower.description}</p>
                <p className="borrower-location">
                  <span className="location-icon">📍</span> {borrower.location}
                </p>
                <div className="loan-details">
                  <div className="loan-amount">
                    <span className="label">Loan Amount</span>
                    <span className="value">
                      ₹{borrower.loanAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="loan-term">
                    <span className="label">Term</span>
                    <span className="value">{borrower.loanTerm} months</span>
                  </div>
                  <div className="interest-rate">
                    <span className="label">Return</span>
                    <span className="value highlight">
                      up to {borrower.interestRate}% p.a.
                    </span>
                  </div>
                </div>
                <NavLink to="/borrowerProfile" className="invest-button">
                  Invest Now
                </NavLink>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <h3>No borrowers found</h3>
            <p>Try adjusting your filters to see more results.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default BorrowerDirectory;
