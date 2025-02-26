import SingleDosage from "../components/SingleDosage";

export default function DosageList({ medicine, selectedMedicines, setSelectedMedicines }) {
  return (
    <div className="mt-2">
      <h5 className="mb-2">
        <span className="text-danger h3">*</span> Select a Dosage for {medicine.name}
      </h5>
      <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
        {medicine.dosages.map((dosage) => (
          <SingleDosage
            key={dosage.id} // Ensure unique key
            dosage={dosage}
            medicine={medicine}
            selectedMedicines={selectedMedicines}
            setSelectedMedicines={setSelectedMedicines}
          />
        ))}
      </div>
    </div>
  );
}
