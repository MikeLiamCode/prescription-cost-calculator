require 'rails_helper'

RSpec.describe CostCalculatorService do
  describe '#calculate' do
    let(:medication) { create(:medication, unit_price: 10.0) }
    let(:dosage) { create(:dosage, medication: medication, frequency: :twice_daily) }

    let(:medications_params) do
      {
        medication.id.to_s => {
          dosageId: dosage.id,
          duration: 14
        }
      }
    end

    let(:budget) { 500 }

    subject { described_class.new(medications_params, budget).calculate }

    it 'calculates total cost correctly' do
      result = subject
      expect(result[:total_cost]).to be_a(Numeric)
      expect(result[:total_cost]).to be > 0
    end

    it 'validates if the total cost is within budget' do
      result = subject
      expect(result[:is_valid]).to eq(result[:total_cost] <= budget)
    end

    it 'suggests reduction when over budget' do
      over_budget_service = described_class.new(medications_params, 10)
      result = over_budget_service.calculate
      expect(result[:suggestion]).to be_a(String)
    end
  end
end
