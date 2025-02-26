# Seed Medications
metformin = Medication.create(name: 'Metformin', unit_price: 5.0)
phentermine = Medication.create(name: 'Phentermine', unit_price: 15.0)
naltrexone = Medication.create(name: 'Naltrexone', unit_price: 12.0)
wellbutrin = Medication.create(name: 'Wellbutrin', unit_price: 10.0)
topiramate = Medication.create(name: 'Topiramate', unit_price: 8.0)
ozempic = Medication.create(name: 'Ozempic', unit_price: 40.0)
bupropion = Medication.create(name: 'Bupropion', unit_price: 40.0)

# Seed Dosages
Dosage.create(medication: metformin, dosage_amount: '500 mg', frequency: 'once_daily', default_duration: 30)
Dosage.create(medication: metformin, dosage_amount: '500 mg', frequency: 'twice_daily', default_duration: 30)
Dosage.create(medication: metformin, dosage_amount: '1000 mg', frequency: 'once_daily', default_duration: 30)

Dosage.create(medication: phentermine, dosage_amount: '15 mg', frequency: 'once_daily', default_duration: 14)
Dosage.create(medication: phentermine, dosage_amount: '30 mg', frequency: 'once_daily', default_duration: 14)
Dosage.create(medication: phentermine, dosage_amount: '37.5 mg', frequency: 'once_daily', default_duration: 14)

Dosage.create(medication: naltrexone, dosage_amount: '25 mg', frequency: 'once_daily', default_duration: 7)
Dosage.create(medication: naltrexone, dosage_amount: '50 mg', frequency: 'once_daily', default_duration: 28)
Dosage.create(medication: naltrexone, dosage_amount: '50 mg', frequency: 'twice_daily', default_duration: 28)

Dosage.create(medication: wellbutrin, dosage_amount: '100 mg', frequency: 'twice_daily', default_duration: 14)
Dosage.create(medication: wellbutrin, dosage_amount: '150 mg', frequency: 'once_daily', default_duration: 14)
Dosage.create(medication: wellbutrin, dosage_amount: '150 mg', frequency: 'twice_daily', default_duration: 14)

Dosage.create(medication: topiramate, dosage_amount: '25 mg', frequency: 'once_daily', default_duration: 30)
Dosage.create(medication: topiramate, dosage_amount: '25 mg', frequency: 'twice_daily', default_duration: 30)
Dosage.create(medication: topiramate, dosage_amount: '50 mg', frequency: 'twice_daily', default_duration: 30)

Dosage.create(medication: ozempic, dosage_amount: '0.25 mg', frequency: 'once_week', default_duration: 28)
Dosage.create(medication: ozempic, dosage_amount: '0.5 mg', frequency: 'once_week', default_duration: 28)
Dosage.create(medication: ozempic, dosage_amount: '1 mg', frequency: 'once_week', default_duration: 28)

Dosage.create(medication: bupropion, dosage_amount: '75 mg', frequency: 'once_daily', default_duration: 21)
Dosage.create(medication: bupropion, dosage_amount: '150 mg', frequency: 'once_daily', default_duration: 21)
Dosage.create(medication: bupropion, dosage_amount: '150 mg', frequency: 'twice_daily', default_duration: 21)
