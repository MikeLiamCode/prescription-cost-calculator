FactoryBot.define do
  factory :dosage do
    dosage_amount { 10 }
    frequency { :once_daily }
    default_duration { 7 }
    medication
  end
end
