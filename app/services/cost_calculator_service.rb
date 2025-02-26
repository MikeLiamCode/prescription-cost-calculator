class CostCalculatorService
  def initialize(medications_params, budget)
    @medications_params = medications_params
    @budget = budget.to_f
    @total_cost = 0
    @medication_costs = []
  end

  def calculate
    process_medications
    generate_suggestion if @total_cost > @budget
    {
      total_cost: @total_cost.to_f.round(2),
      budget: @budget,
      is_valid: @total_cost <= @budget,
      medicince_details: @medication_costs.map do |medication|
        {
          name: medication[:medication],
          unit_price: medication[:unit_price],
          quantity: medication[:quantity]
        }
      end,
      suggestion: @suggestion
    }
  end

  private

  def process_medications
    @medications_params.each do |medication_id, details|
      medication = Medication.find_by(id: medication_id)
      dosage = Dosage.find_by(id: details[:dosageId])
      next unless medication && dosage

      quantity = dosage.frequency_multiplier * details[:duration].to_i
      cost = medication.unit_price * quantity
      cost *= 0.9 if details[:duration].to_i >= 30
      @total_cost += cost
      @medication_costs << {
        medication: medication.name,
        dosage: dosage.dosage_amount,
        cost: cost,
        quantity: quantity,
        unit_price: medication.unit_price
      }
    end
  end

  def generate_suggestion
    @medication_costs.sort_by! { |m| -m[:cost] }
    high_cost_med = @medication_costs.first
    @suggestion = "Consider reducing the duration of #{high_cost_med[:medication]} (#{high_cost_med[:dosage]}) to stay within budget."
  end
end
