class CreateMedications < ActiveRecord::Migration[8.0]
  def change
    create_table :medications do |t|
      t.string :name, null: false
      t.decimal :unit_price, precision: 10, scale: 2, null: false, default: 0.0

      t.timestamps
    end
  end
end
