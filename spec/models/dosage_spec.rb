require 'rails_helper'

RSpec.describe Dosage, type: :model do
  it { is_expected.to belong_to(:medication) }
  it { is_expected.to validate_presence_of(:dosage_amount) }
  it { is_expected.to validate_presence_of(:frequency) }
  it { is_expected.to validate_numericality_of(:default_duration).is_greater_than(0) }

  describe '#frequency_multiplier' do
    it 'returns correct multiplier for daily frequencies' do
      dosage = build(:dosage, frequency: :twice_daily)
      expect(dosage.frequency_multiplier).to eq(2)
    end

    it 'returns correct multiplier for weekly frequencies' do
      dosage = build(:dosage, frequency: :once_week)
      expect(dosage.frequency_multiplier).to eq(1.0 / 7)
    end
  end
end
