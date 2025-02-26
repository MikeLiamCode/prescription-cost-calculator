class MedicationsController < ApplicationController
  def index
    medications = Medication.includes(:dosages).as_json(include: :dosages)
    render json: { medicines: medications }
  end

  def calculate_cost
    result = CostCalculatorService.new(params[:medication], params[:budget]).calculate
    render json: result
  end
end