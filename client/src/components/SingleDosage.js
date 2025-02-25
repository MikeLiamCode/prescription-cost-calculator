export default function SingleDosage(props) {
  return (
    <div
      key={props.dosage.id}
      className={`p-2 border rounded cursor-pointer d-flex ${
        props.selectedMedicines[props.medicine.id]?.dosageId === props.dosage.id ? "bg-success text-white" : ""
      }`}
      onClick={() => props.handleDosageSelect(props.medicine.id, props.dosage.id, props.dosage.default_duration)}
    >
      {props.dosage.dosage_amount} - {props.dosage.frequency} -
      <input
        type="text"
        className="form-control form-control-sm duration-field"
        value={props.selectedMedicines[props.medicine.id].dosageId == props.dosage.id ? props.selectedMedicines[props.medicine.id].duration : props.dosage.default_duration}
        onChange={(e) => props.handleDurationChange(props.medicine.id, e)}
      />
      days
    </div>
  )
}