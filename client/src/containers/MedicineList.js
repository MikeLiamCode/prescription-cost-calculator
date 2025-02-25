import React, { useEffect, useState } from "react";
import { getMedicines, calculateCost } from "../api";

const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicines, setSelectedMedicines] = useState({});
  const [budget, setBudget] = useState(100);

  useEffect(() => {
    const fetchMedicines = async () => {
      const _medicines = await getMedicines();
      setMedicines(_medicines);
    };
    fetchMedicines();
  }, []);

  async function calculateBill() {
    const res = await calculateCost(selectedMedicines, budget);
  }

  const handleMedicineToggle = (id) => {
    setSelectedMedicines((prev) => {
      const newSelection = { ...prev };
      if (newSelection[id]) {
        delete newSelection[id]; // Deselect medicine
      } else {
        newSelection[id] = { dosageId: null, duration: 0 }; // Select medicine with no dosage
      }
      return newSelection;
    });
  };

  const handleDosageSelect = (medicineId, dosageId, defaultDuration) => {
    setSelectedMedicines((prev) => ({
      ...prev,
      [medicineId]: { dosageId, duration: defaultDuration }, // Store dosage and duration
    }));
  };

  const handleBudgetChange = (e) => {
    const value = e.target.value.replace(/\D/, "");
    setBudget(value);
  };

  const handleDurationChange = (medicineId, e) => {
    const value = e.target.value.replace(/\D/, ""); // Allow only numbers
    setSelectedMedicines((prev) => ({
      ...prev,
      [medicineId]: { ...prev[medicineId], duration: value || 1 }, // Update duration within selectedMedicines
    }));
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light px-3 d-flex justify-content-between">
        <h3 className="navbar-brand">Medicine Tracker</h3>
        <div className="d-flex align-items-center">
          <label htmlFor="budget" className="me-2 fw-bold text-dark">Budget:</label>
          <input
            id="budget"
            type="text"
            className="form-control form-control-sm w-25"
            value={budget}
            onChange={handleBudgetChange}
            placeholder="Enter budget"
          />
        </div>
      </nav>

      <div className="container mt-4">
        <h2 className="mb-3">Select Medicines</h2>

        {/* Medicine Tiles */}
        <div className="d-flex flex-wrap gap-2">
          {medicines.map((medicine) => (
            <div key={medicine.id} className="w-100">
              <div
                className={`p-2 border rounded cursor-pointer ${
                  selectedMedicines[medicine.id] ? "bg-primary text-white" : ""
                }`}
                onClick={() => handleMedicineToggle(medicine.id)}
              >
                {medicine.name}
              </div>

              {/* Show dosages beneath selected medicine */}
              {selectedMedicines[medicine.id] && (
                <div className="mt-2">
                  <h5 className="mb-2">Select a Dosage for {medicine.name}</h5>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    {medicine.dosages.map((dosage) => (
                      <div
                        key={dosage.id}
                        className={`p-2 border rounded cursor-pointer ${
                          selectedMedicines[medicine.id]?.dosageId === dosage.id ? "bg-success text-white" : ""
                        }`}
                        onClick={() => handleDosageSelect(medicine.id, dosage.id, dosage.default_duration)}
                      >
                        {dosage.dosage_amount} - {dosage.frequency} - {dosage.default_duration} days
                      </div>
                    ))}
                  </div>

                  {/* Editable Duration Field */}
                  {selectedMedicines[medicine.id]?.dosageId && (
                    <div className="mt-2 d-flex align-items-center">
                      <label className="me-2 fw-bold">Duration (days):</label>
                      <input
                        type="text"
                        className="form-control form-control-sm w-25"
                        value={selectedMedicines[medicine.id]?.duration || ""}
                        onChange={(e) => handleDurationChange(medicine.id, e)}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {Object.keys(selectedMedicines).length > 0 && (
          <div className="mt-4">
            <button className="btn btn-primary" onClick={calculateBill}>
              Calculate Bill
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicineList;
