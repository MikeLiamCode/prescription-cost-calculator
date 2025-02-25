export default function Navbar(props) {
  return (
		<nav className="navbar navbar-light bg-light px-3 d-flex justify-content-between">
			<h3 className="navbar-brand">Medicine Tracker</h3>
			<div className="d-flex align-items-center">
				<label htmlFor="budget" className="me-2 fw-bold text-dark">Budget:</label>
				<input
					id="budget"
					type="text"
					className="form-control form-control-sm w-25"
					value={props.budget}
					onChange={props.handleBudgetChange}
					placeholder="Enter budget"
				/>
			</div>
		</nav>
	)
}