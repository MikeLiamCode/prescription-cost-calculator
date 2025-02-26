class MedicationsController < ApplicationController
  before_action :fetch_params, only: [:calculate_cost]

  def index
    medications = Medication.includes(:dosages)
    render json: { medicines: medications.any? ? medications.as_json(include: :dosages) : [] }
  end

  def calculate_cost
    result = CostCalculatorService.new(@medications, @budget).calculate
    render json: result, status: :ok
  end

  private

  def fetch_params
    @medications = params.require(:medication).permit!
    @budget = params.require(:budget)
  rescue ActionController::ParameterMissing => e
    render json: { error: e.message }, status: :bad_request
  end
end
