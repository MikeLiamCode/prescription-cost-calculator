import SingleMedicine from "./SingleMedicine" 

export default function Medications(props) {
  return (
		<div className="container mt-4">
			<h2 className="mb-5">Select Medicines</h2>

			{/* Medicine Tiles */}
			<div className="d-flex flex-wrap gap-2">
				{props.medicines.map((medicine) => (
					<SingleMedicine 
						medicine={medicine}
						selectedMedicines={props.selectedMedicines}
						handleMedicineToggle={props.handleMedicineToggle}
						handleDosageSelect={props.handleDosageSelect}
						handleDurationChange={props.handleDurationChange}
					/>
				))}
			</div>
		</div>
	)
}