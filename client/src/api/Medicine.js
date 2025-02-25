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
