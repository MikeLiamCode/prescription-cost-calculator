class CreateDosages < ActiveRecord::Migration[8.0]
  def change
    create_table :dosages do |t|
      t.references :medication, null: false, foreign_key: true
      t.string :dosage_amount, null: false
      t.string :frequency, null: false
      t.integer :default_duration, null: false, default: 7

      t.timestamps
    end
  end
end
