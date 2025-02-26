require 'rails_helper'

RSpec.describe MedicationsController, type: :controller do
  describe 'GET #index' do
    let!(:medication) { create(:medication) }
    let!(:dosage) { create(:dosage, medication: medication, dosage_amount: 20, frequency: :twice_daily) }

    subject { get :index }

    it 'returns a successful response' do
      subject
      expect(response).to have_http_status(:ok)
    end

    it 'returns medications with dosages' do
      subject
      json_response = JSON.parse(response.body)

      expect(json_response).to have_key('medicines')
      expect(json_response['medicines']).not_to be_empty

      medicine = json_response['medicines'].first
      expect(medicine['id']).to eq(medication.id)
      expect(medicine['name']).to eq(medication.name)

      expect(medicine['dosages']).to be_an(Array)
      expect(medicine['dosages'].first['id']).to eq(dosage.id)
      expect(medicine['dosages'].first['dosage_amount']).to eq(dosage.dosage_amount)
    end
  end

  describe 'POST #calculate_cost' do
    let!(:medication) { create(:medication, unit_price: 10.0) }
    let!(:dosage) { create(:dosage, medication: medication, frequency: :twice_daily) }

    let(:valid_params) do
      {
        medication: {
          medication.id.to_s => {
            dosageId: dosage.id,
            duration: 14
          }
        },
        budget: 500
      }
    end

    subject { post :calculate_cost, params: valid_params }

    it 'returns total cost and budget status' do
      subject
      expect(response).to have_http_status(:success)

      json_response = JSON.parse(response.body)
      expect(json_response['total_cost']).to eq("280.0")
      expect(json_response['is_valid']).to be_in([true, false])
    end

    context 'when budget is exceeded' do
      before { valid_params[:budget] = 10 }

      it 'returns a suggestion message' do
        subject
        json_response = JSON.parse(response.body)
        expect(json_response['suggestion']).to be_a(String)
      end
    end

    context 'when budget is missing' do
      before { valid_params.delete(:budget) }

      it 'returns a bad request error' do
        subject
        expect(response).to have_http_status(:bad_request)
        json_response = JSON.parse(response.body)
        expect(json_response['error']).to eq("param is missing or the value is empty or invalid: budget")
      end
    end
  end
end
