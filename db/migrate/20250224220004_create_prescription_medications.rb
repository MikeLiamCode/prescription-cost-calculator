class CreatePrescriptionMedications < ActiveRecord::Migration[8.0]
  def change
    create_table :prescription_medications do |t|
      t.references :prescription, null: false, foreign_key: true
      t.references :medication, null: false, foreign_key: true
      t.references :dosage, null: false, foreign_key: true
      t.integer :duration, null: false, default: 7

      t.timestamps
    end
  end
end
