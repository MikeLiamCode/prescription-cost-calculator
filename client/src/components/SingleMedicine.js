import DosageList from "../components/DosageList";

export default function SingleMedicine(props) {
  return (
    <div key={props.medicine.id} className="w-100">
      <div
        className={`p-2 border rounded cursor-pointer ${
          props.selectedMedicines[props.medicine.id] ? "bg-primary text-white" : ""
        }`}
        onClick={() => props.handleMedicineToggle(props.medicine.id)}
      >
        {props.medicine.name}
      </div>

      {/* Show dosages beneath selected medicine */}
      {props.selectedMedicines[props.medicine.id] && (
        <DosageList 
          medicine={props.medicine}
          selectedMedicines={props.selectedMedicines}
          handleDosageSelect={props.handleDosageSelect}
          handleDurationChange={props.handleDurationChange}
        />
      )}
    </div>
  )
}