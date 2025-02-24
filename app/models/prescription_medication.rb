class PrescriptionMedication < ApplicationRecord
  belongs_to :prescription
  belongs_to :medication
  belongs_to :dosage
  validates :duration, presence: true, numericality: { greater_than: 0 }
end
