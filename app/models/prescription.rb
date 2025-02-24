class Prescription < ApplicationRecord
	has_many :prescription_medications, dependent: :destroy
	has_many :medications, through: :prescription_medications
	has_many :dosages, through: :prescription_medications

	validates :total_cost, presence: true, numericality: { greater_than_or_equal_to: 0 }
end
