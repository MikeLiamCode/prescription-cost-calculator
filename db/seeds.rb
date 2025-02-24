# Seed Medications
atorvastatin = Medication.create(name: 'Atorvastatin', unit_price: 5.0)
metformin = Medication.create(name: 'Metformin', unit_price: 13.5)
panadol = Medication.create(name: 'Panadol', unit_price: 7.0)
evion = Medication.create(name: 'Evion', unit_price: 20.0)

# Seed Dosages
Dosage.create(medication: atorvastatin, dosage_amount: '2.5 mg', frequency: 'once daily', default_duration: 14)
Dosage.create(medication: atorvastatin, dosage_amount: '5 mg', frequency: 'twice daily', default_duration: 7)
Dosage.create(medication: metformin, dosage_amount: '500 mg', frequency: 'once daily', default_duration: 30)
Dosage.create(medication: panadol, dosage_amount: '500 mg', frequency: 'once week', default_duration: 21)
Dosage.create(medication: panadol, dosage_amount: '600 mg', frequency: 'once week', default_duration: 21)
Dosage.create(medication: evion, dosage_amount: '250 mg', frequency: 'twice week', default_duration: 30)


# Create a Prescription
prescription = Prescription.create(total_cost: 0) # Initially 0, will update later

# Add Medications to Prescription with Custom Duration
prescription.prescription_medications.create(
  medication: atorvastatin,
  dosage: atorvastatin.dosages.find_by(dosage_amount: '2.5 mg'),
  duration: 10
)

prescription.prescription_medications.create(
  medication: atorvastatin,
  dosage: atorvastatin.dosages.find_by(dosage_amount: '5 mg'),
  duration: 10
)

prescription.prescription_medications.create(
  medication: panadol,
  dosage: panadol.dosages.find_by(dosage_amount: '600 mg'),
  duration: 10
)

prescription.prescription_medications.create(
  medication: evion,
  dosage: evion.dosages.find_by(dosage_amount: '250 mg')
)
