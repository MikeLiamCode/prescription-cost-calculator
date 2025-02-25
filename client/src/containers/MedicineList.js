import React, { useEffect, useState } from "react";
import { getMedicines, calculateCost } from "../api";
import Navbar from "../components/Navbar";
import Medications from "../components/Medications";

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
    await calculateCost(selectedMedicines, budget);
  }

  const handleMedicineToggle = (id) => {
    setSelectedMedicines((prev) => {
      const newSelection = { ...prev };
      if (newSelection[id]) {
        delete newSelection[id];
      } else {
        newSelection[id] = { dosageId: null, duration: 0 };
      }
      return newSelection;
    });
  };

  const handleDosageSelect = (medicineId, dosageId, defaultDuration) => {
    setSelectedMedicines((prev) => ({
      ...prev,
      [medicineId]: { dosageId, duration: defaultDuration },
    }));
  };

  const handleBudgetChange = (e) => {
    const value = e.target.value.replace(/\D/, "");
    setBudget(value);
  };

  const handleDurationChange = (medicineId, e) => {
    const value = e.target.value.replace(/\D/, "");
    setSelectedMedicines((prev) => ({
      ...prev,
      [medicineId]: { ...prev[medicineId], duration: value || 1 },
    }));
  };

  return (
    <div>
      <Navbar 
        budget={budget}
        handleBudgetChange={handleBudgetChange}
      />

      <Medications
        medicines={medicines}
        selectedMedicines={selectedMedicines}
        handleMedicineToggle={handleMedicineToggle}
        handleDosageSelect={handleDosageSelect}
        handleDurationChange={handleDurationChange}
      />
      
      {Object.keys(selectedMedicines).length > 0 && (
        <div className="mt-4">
          <button className="btn btn-primary" onClick={calculateBill}>
            Calculate Bill
          </button>
        </div>
      )}
    </div>
  );
};

export default MedicineList;
