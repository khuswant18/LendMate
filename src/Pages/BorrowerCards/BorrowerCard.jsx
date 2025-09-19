import { useState, useEffect, useMemo } from 'react';
import './BorrowerCard.css';
import { NavLink } from 'react-router-dom';

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
 
const filterCategories = ['All', 'Women', 'First Time Borrowers', 'Agriculture', 'Education', 'Small Business'];

const sortOptions = [
  { value: 'amount-desc', label: 'Amount (High → Low)' },
  { value: 'amount-asc', label: 'Amount (Low → High)' },
  { value: 'return-desc', label: 'Return (High → Low)' },
  { value: 'term-asc', label: 'Shortest Term' },
];

const SkeletonCard = () => (
  <div className="skeleton-card" aria-hidden="true">
    <div className="skeleton-line title" />
    <div className="skeleton-line subtitle" />
    <div className="skeleton-line text" />
    <div className="skeleton-line text" />
    <div className="skeleton-line text" />
    <div className="skeleton-badges">
      <div className="skeleton-badge" />
      <div className="skeleton-badge" />
    </div>
    <div className="skeleton-chips">
      <div className="skeleton-chip" />
      <div className="skeleton-chip" />
      <div className="skeleton-chip" />
    </div>
    <div className="skeleton-button" />
  </div>
);

const BorrowerDirectory = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('amount-desc');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800); // simulate fetch delay
    return () => clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    let result = borrowersData.filter(b =>
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.description.toLowerCase().includes(search.toLowerCase()) ||
      b.location.toLowerCase().includes(search.toLowerCase())
    );
    if (selectedCategory !== 'All') {
      result = result.filter(b => b.categories.includes(selectedCategory));
    }
    switch (sort) {
      case 'amount-asc':
        result.sort((a,b)=> a.loanAmount - b.loanAmount); break;
      case 'amount-desc':
        result.sort((a,b)=> b.loanAmount - a.loanAmount); break;
      case 'return-desc':
        result.sort((a,b)=> b.interestRate - a.interestRate); break;
      case 'term-asc':
        result.sort((a,b)=> a.loanTerm - b.loanTerm); break;
      default: break;
    }
    return result;
  }, [selectedCategory, search, sort]);

  return (
    <div className="borrower-directory" data-page="borrowers">
      <header className="directory-header">
        <h1>Discover Borrowers</h1>
        <p className="subheading">Curated opportunities aligned with impact and return.</p>
      </header>

      <div className="toolbar" role="region" aria-label="Search and sorting controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by name, use-case, location..."
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            aria-label="Search borrowers"
          />
        </div>
        <div className="sort-box">
          <select value={sort} onChange={e=> setSort(e.target.value)} aria-label="Sort borrowers">
            {sortOptions.map(o=> <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
      </div>

      <div className="category-chips" role="tablist" aria-label="Filter borrowers by category">
        {filterCategories.map(cat => (
          <button
            key={cat}
            className={`chip ${selectedCategory === cat ? 'active': ''}`}
            onClick={()=> setSelectedCategory(cat)}
            role="tab"
            aria-selected={selectedCategory === cat}
          >{cat}</button>
        ))}
      </div>

      <section className="borrowers-grid" aria-live="polite">
        {loading && Array.from({length:6}).map((_,i)=> <SkeletonCard key={i} />)}
        {!loading && filtered.length === 0 && (
          <div className="no-results">
            <h3>No borrowers found</h3>
            <p>Try changing filters or search terms.</p>
          </div>
        )}
        {!loading && filtered.map(borrower => {
          const tags = borrower.categories.slice(0,4);
          return (
            <article className="borrower-card" key={borrower.id} aria-label={borrower.name}>
              <h3>{borrower.name}</h3>
              <small>{borrower.location}</small>
              <p>{borrower.description}</p>
              <ul>
                <li><strong>₹{borrower.loanAmount.toLocaleString()}</strong>Amount</li>
                <li><strong>{borrower.loanTerm}m</strong>Term</li>
                <li><strong>{borrower.interestRate}%</strong>Return</li>
                <li><strong>{Math.round(borrower.loanAmount * (1 + (borrower.interestRate/100)) ).toLocaleString()}</strong>Est. Payback</li>
              </ul>
              <div className="card-tags">
                {tags.map(tag => <span key={tag} className="tag-chip">{tag}</span>)}
              </div>
              <NavLink to="/borrowerProfile" className="invest-button" aria-label={`Invest in ${borrower.name}`}>Invest Now →</NavLink>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default BorrowerDirectory;
