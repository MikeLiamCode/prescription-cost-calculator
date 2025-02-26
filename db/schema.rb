# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_02_24_220004) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "dosages", force: :cascade do |t|
    t.bigint "medication_id", null: false
    t.string "dosage_amount", null: false
    t.string "frequency", null: false
    t.integer "default_duration", default: 7, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["medication_id"], name: "index_dosages_on_medication_id"
  end

  create_table "medications", force: :cascade do |t|
    t.string "name", null: false
    t.decimal "unit_price", precision: 10, scale: 2, default: "0.0", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "prescription_medications", force: :cascade do |t|
    t.bigint "prescription_id", null: false
    t.bigint "medication_id", null: false
    t.bigint "dosage_id", null: false
    t.integer "duration", default: 7, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dosage_id"], name: "index_prescription_medications_on_dosage_id"
    t.index ["medication_id"], name: "index_prescription_medications_on_medication_id"
    t.index ["prescription_id"], name: "index_prescription_medications_on_prescription_id"
  end

  create_table "prescriptions", force: :cascade do |t|
    t.decimal "total_cost", precision: 10, scale: 2, default: "0.0", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
  
  add_foreign_key "dosages", "medications"
  add_foreign_key "prescription_medications", "dosages"
  add_foreign_key "prescription_medications", "medications"
  add_foreign_key "prescription_medications", "prescriptions"
end
