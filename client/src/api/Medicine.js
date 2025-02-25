import axios from "axios";

export async function getMedicines() {
	try {
		const res = await axios.get('medications');
		return res.data.medicines;
	}
	catch(error) {
		console.error('There was an error fetching the tasks!', error);
	}
	return [];
}

export async function calculateCost(selectedMedicines, budget) {
	try {
		const res = await axios.post('calculate_cost', {medication: selectedMedicines, budget: budget});
		return res.data;
	}
	catch(error) {
		console.error('There was an error fetching the cost', error);
	}
	return [];
}