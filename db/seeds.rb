require 'json'

medications_data = JSON.parse(File.read(Rails.root.join('db/medication_data.json')))

medications = medications_data.map do |med|
  Medication.new(name: med['name'], unit_price: med['unit_price'])
end
Medication.import medications, validate: false

medications_by_name = Medication.pluck(:name, :id).to_h

dosages = medications_data.flat_map do |med|
  med['dosages'].map do |dosage|
    Dosage.new(
      medication_id: medications_by_name[med['name']],
      dosage_amount: dosage['dosage_amount'],
      frequency: dosage['frequency'],
      default_duration: dosage['default_duration']
    )
  end
end
Dosage.import dosages, validate: false

puts 'Seeding completed successfully!'
