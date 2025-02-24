class CreatePrescriptions < ActiveRecord::Migration[8.0]
  def change
    create_table :prescriptions do |t|
      t.decimal :total_cost, precision: 10, scale: 2, null: false, default: 0.0

      t.timestamps
    end
  end
end
