import SingleDosage from '../components/SingleDosage'

export default function DosageList(props) {
	return (
		<div className="mt-2">
			<h5 className="mb-2">Select a Dosage for {props.medicine.name}</h5>
			<div className="d-flex flex-wrap gap-2 justify-content-center d-flex mb-5">
				{props.medicine.dosages.map((dosage) => (
					<SingleDosage 
						dosage={dosage}
						medicine={props.medicine}
						selectedMedicines={props.selectedMedicines}
						handleDosageSelect={props.handleDosageSelect}
						handleDurationChange={props.handleDurationChange}
					/>
				))}
			</div>
		</div>
	)
}