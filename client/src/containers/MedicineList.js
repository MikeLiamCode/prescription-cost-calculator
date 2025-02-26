import React, { useEffect, useState, useCallback } from "react";
import { getMedicines, calculateCost } from "../api";
import Navbar from "../components/Navbar";
import Medications from "../components/Medications";
import Prescription from "../components/Prescription";

const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicines, setSelectedMedicines] = useState({});
  const [budget, setBudget] = useState(100);
  const [result, setResult] = useState(null);

  const fetchMedicines = async () => {
    const data = await getMedicines();
    setMedicines(data);
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  const calculateBill = useCallback(async () => {
    const res = await calculateCost(selectedMedicines, budget);
    setResult(res);
  }, [selectedMedicines, budget]);

  const hasSelectedMedicines = Object.keys(selectedMedicines).length > 0;
  const isCalculateDisabled = Object.values(selectedMedicines).some(med => !med.dosageId);

  return (
    <div>
      <Navbar medicines={medicines} budget={budget} setBudget={setBudget} />

      <Medications
        medicines={medicines}
        selectedMedicines={selectedMedicines}
        setSelectedMedicines={setSelectedMedicines}
      />

      {hasSelectedMedicines && (
        <div className="mt-4">
          <button className="btn btn-primary" onClick={calculateBill} disabled={isCalculateDisabled}>
            Calculate Bill
          </button>
        </div>
      )}

      <Prescription result={result} />
    </div>
  );
};

export default MedicineList;
