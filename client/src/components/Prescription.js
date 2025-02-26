export default function Prescription({ result }) {
  if (!result) return null;

  const { is_valid, medicine_details, total_cost, suggestion, is_discounted } = result;

  return (
    <div className="container mt-4 w-50">
      <div className="flex-wrap gap-2">
        <div className="w-100">
          <div className={`p-2 border rounded text-white ${is_valid ? 'bg-success' : 'bg-danger'}`}>
            {is_valid ? 'Valid' : 'Invalid (Total cost should be within your budget)'}
          </div>
        </div>
        <div className="w-100">
          <div className="p-2 border rounded text-white">
            <div className="row fw-bold h4">
              <span className="col-md-4">Name</span>
              <span className="col-md-3">Total Quantity</span>
              <span className="col-md-2">
                Cost <span className="h6">per unit</span>
              </span>
              <span className="col-md-3">Total Cost</span>
            </div>
            {medicine_details.map(({ name, quantity, unit_price }) => (
              <div key={name} className="row h5">
                <span className="col-md-4">{name}</span>
                <span className="col-md-3">{quantity}</span>
                <span className="col-md-2">{unit_price}$</span>
                <span className="col-md-3">{quantity * unit_price}$</span>
              </div>
            ))}
            <div className="row">
              <span className="col-md-4"></span>
              <span className="col-md-8 h5">Total Bill: {total_cost}$ <span className="text-success small"> {is_discounted ? '10% discount applied' : ''} </span></span>
            </div>
            {suggestion && (
              <div className="row">
                <span className="col-md-12 h5">Suggestions: {suggestion}</span>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
