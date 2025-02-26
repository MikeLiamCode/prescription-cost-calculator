import DosageList from "../components/DosageList";

export default function SingleMedicine({ medicine, selectedMedicines, setSelectedMedicines }) {
  const isSelected = !!selectedMedicines[medicine.id];

  const handleMedicineToggle = () => {
    setSelectedMedicines((prev) => {
      const newSelection = { ...prev };
      if (isSelected) {
        delete newSelection[medicine.id];
      } else {
        newSelection[medicine.id] = { dosageId: null, duration: 0 };
      }
      return newSelection;
    });
  };

  return (
    <div className="w-100">
      <div
        className={`p-2 border rounded cursor-pointer ${isSelected ? "bg-primary text-white" : ""}`}
        onClick={handleMedicineToggle}
      >
        {medicine.name}
      </div>

      {isSelected && (
        <DosageList
          medicine={medicine}
          selectedMedicines={selectedMedicines}
          setSelectedMedicines={setSelectedMedicines}
        />
      )}
    </div>
  );
}
