import React, { useEffect, useState } from "react";
import { getMedicines, calculateCost } from "../api";

const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicines, setSelectedMedicines] = useState({});

  useEffect(() => {
    const fetchMedicines = async () => {
      const _medicines = await getMedicines();
      setMedicines(_medicines);
    };
    fetchMedicines();
  }, []);

  const handleMedicineToggle = (id) => {
    setSelectedMedicines((prev) => {
      const newSelection = { ...prev };
      if (newSelection[id]) {
        delete newSelection[id]; // Deselect medicine
      } else {
        newSelection[id] = null; // Select medicine with no dosage
      }
      return newSelection;
    });
  };

  const handleDosageSelect = (medicineId, dosageId) => {
    setSelectedMedicines((prev) => ({
      ...prev,
      [medicineId]: dosageId, // Assign dosage to selected medicine
    }));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Select Medicines</h2>

      {/* Medicine Tiles */}
      <div className="d-flex flex-wrap gap-2">
        {medicines.map((medicine) => (
          <div key={medicine.id} className="w-100">
            <div
              className={`p-2 border rounded cursor-pointer ${
                selectedMedicines[medicine.id] !== undefined ? "bg-primary text-white" : ""
              }`}
              onClick={() => handleMedicineToggle(medicine.id)}
            >
              {medicine.name}
            </div>

            {/* Show dosages beneath selected medicine */}
            {selectedMedicines[medicine.id] !== undefined && (
              <div className="mt-2">
                <h5 className="mb-2">Select a Dosage for {medicine.name}</h5>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {medicine.dosages.map((dosage) => (
                    <div
                      key={dosage.id}
                      className={`p-2 border rounded cursor-pointer ${
                        selectedMedicines[medicine.id] === dosage.id ? "bg-success text-white" : ""
                      }`}
                      onClick={() => handleDosageSelect(medicine.id, dosage.id)}
                    >
                      {dosage.dosage_amount} - {dosage.frequency} - {dosage.default_duration} days
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {Object.keys(selectedMedicines).length > 0 && (
        <div className="mt-4">
          <button className="btn btn-primary" onClick={calculateCost}>
            Calculate Bill
          </button>
        </div>
      )}
    </div>
  );
};

export default MedicineList;
