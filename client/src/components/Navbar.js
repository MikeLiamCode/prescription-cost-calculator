export default function Navbar({ medicines, budget, setBudget }) {
  const minPrice = Math.min(...medicines.map(med => med.unit_price));

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleBlurBudget = () => {
    if (budget < minPrice) {
      setBudget(minPrice);
    }
  };

  return (
    <nav className="navbar navbar-light bg-light px-3 d-flex justify-content-between">
      <h3 className="navbar-brand">Medicine Tracker</h3>
      <div className="d-flex align-items-center">
        <label htmlFor="budget" className="me-2 fw-bold text-dark">Budget:</label>
        <input
          id="budget"
          type="number"
          className="form-control form-control-sm w-25"
          value={budget}
          onChange={handleBudgetChange}
          onBlur={handleBlurBudget}
          placeholder="Enter budget"
          min={minPrice}
        />
      </div>
    </nav>
  );
}
