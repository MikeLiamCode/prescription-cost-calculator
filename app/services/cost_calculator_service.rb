class CostCalculatorService
  DISCOUNT_THRESHOLD = 30
  DISCOUNT_RATE = 0.9

  def initialize(medications_params, budget)
    @medications_params = medications_params
    @budget = budget.to_f
    @total_cost = 0
    @medication_costs = []
  end

  def calculate
    process_medications
    generate_suggestion unless within_budget?
    build_response
  end

  private

  def process_medications
    @medications_params.each do |medication_id, details|
      medication = Medication.find_by(id: medication_id)
      dosage = Dosage.find_by(id: details[:dosageId])
      next unless medication && dosage

      quantity = calculate_quantity(dosage, details[:duration])
      cost = calculate_cost(medication.unit_price, quantity, details[:duration])

      @total_cost += cost
      @medication_costs << build_medication_details(medication, dosage, quantity, cost)
    end
  end

  def calculate_quantity(dosage, duration)
    dosage.frequency_multiplier * duration.to_i
  end

  def calculate_cost(unit_price, quantity, duration)
    cost = unit_price * quantity
    apply_discount(cost, duration)
  end

  def apply_discount(cost, duration)
    return cost if duration.to_i < DISCOUNT_THRESHOLD

    @discount_needed = true
    cost * DISCOUNT_RATE
  end

  def build_medication_details(medication, dosage, quantity, cost)
    {
      name: medication.name,
      dosage: dosage.dosage_amount,
      cost: cost,
      quantity: quantity,
      unit_price: medication.unit_price
    }
  end

  def generate_suggestion
    highest_cost_med = @medication_costs.max_by { |m| m[:cost] }
    @suggestion = "Consider reducing the duration of #{highest_cost_med[:medication]} (#{highest_cost_med[:dosage]}) to stay within budget."
  end

  def within_budget?
    @total_cost <= @budget
  end

  def build_response
    {
      is_discounted: @discount_needed,
      total_cost: @total_cost.round(2),
      is_valid: within_budget?,
      medicine_details: @medication_costs.map { |m| m.slice(:name, :unit_price, :quantity) },
      suggestion: @suggestion
    }
  end
end
