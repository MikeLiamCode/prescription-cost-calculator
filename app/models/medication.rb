class Medication < ApplicationRecord
  has_many :dosages, dependent: :destroy
  has_many :prescription_medications, dependent: :destroy
  has_many :prescriptions, through: :prescription_medications

  validates :name, presence: true, uniqueness: true
  validates :unit_price, presence: true, numericality: { greater_than_or_equal_to: 0 }
end
