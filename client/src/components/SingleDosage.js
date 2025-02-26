export default function SingleDosage({ dosage, medicine, selectedMedicines, setSelectedMedicines }) {
  
  const handleDurationChange = (e) => {
    const value = e.target.value.replace(/\D/, ""); // Ensure only numbers
    setSelectedMedicines((prev) => ({
      ...prev,
      [medicine.id]: { ...prev[medicine.id], duration: value || 0 },
    }));
  };

  const handleDosageSelect = () => {
    setSelectedMedicines((prev) => ({
      ...prev,
      [medicine.id]: {
        dosageId: dosage.id,
        duration: selectedMedicines[medicine.id]?.dosageId === dosage.id
          ? selectedMedicines[medicine.id]?.duration
          : dosage.default_duration,
      },
    }));
  };

  const isSelected = selectedMedicines[medicine.id]?.dosageId === dosage.id;
  const durationValue = isSelected ? selectedMedicines[medicine.id]?.duration : dosage.default_duration;

  return (
    <div
      key={dosage.id}
      className={`p-2 border rounded cursor-pointer d-flex ${isSelected ? "bg-success text-white" : ""}`}
      onClick={handleDosageSelect}
    >
      {dosage.dosage_amount} - {dosage.frequency.replace(/_/g, " ")} -
      <input
        type="text"
        className="form-control form-control-sm duration-field"
        value={durationValue}
        onChange={handleDurationChange}
      />
      days
    </div>
  );
}
