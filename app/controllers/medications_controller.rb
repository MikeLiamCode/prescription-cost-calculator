class MedicationsController < ApplicationController
  def index
    medications = Medication.includes(:dosages).as_json(include: :dosages)
    render json: {medicines: medications}
  end
end