import SingleMedicine from "./SingleMedicine";

export default function Medications({ medicines, selectedMedicines, setSelectedMedicines }) {
  return (
    <div className="container mt-4">
      <h2 className="mb-5">Select Medicines</h2>

      {/* Medicine Tiles */}
      <div className="d-flex flex-wrap gap-2">
        {medicines.map((medicine) => (
          <SingleMedicine
            key={medicine.id} // Ensure unique key
            medicine={medicine}
            selectedMedicines={selectedMedicines}
            setSelectedMedicines={setSelectedMedicines}
          />
        ))}
      </div>
    </div>
  );
}
