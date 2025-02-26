class Medication < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :unit_price, presence: true, numericality: { greater_than_or_equal_to: 0 }

  has_many :dosages, dependent: :destroy
end
