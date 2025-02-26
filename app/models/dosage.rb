class Dosage < ApplicationRecord
  belongs_to :medication
  enum :frequency, { once_daily: 1, twice_daily: 2, thrice_daily: 3, once_week: 3, twice_week: 4, thrice_week: 5 }
  validates :dosage_amount, presence: true
  validates :frequency, presence: true
  validates :default_duration, presence: true, numericality: { greater_than: 0 }

  def frequency_multiplier
    case frequency
    when 'once_daily' then 1
    when 'twice_daily' then 2
    when 'thrice_daily' then 3
    when 'once_week' then 1.0 / 7
    when 'twice_week' then 2.0 / 7
    when 'thrice_week' then 3.0 / 7
    else 1
    end
  end
end
