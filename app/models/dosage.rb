class Dosage < ApplicationRecord
  belongs_to :medication
  validates :dosage_amount, presence: true
  validates :frequency, presence: true
  validates :default_duration, presence: true, numericality: { greater_than: 0 }
end
