class CreateDosages < ActiveRecord::Migration[8.0]
  def change
    create_table :dosages do |t|
      t.references :medication, null: false, foreign_key: true
      t.string :dosage_amount, null: false
      t.integer :frequency, null: false, default: 0
      t.integer :default_duration, null: false, default: 7

      t.timestamps
    end
  end
end
