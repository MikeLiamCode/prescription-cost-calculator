# Prescription Cost Calculator

## Overview
This application enhances an e-prescription tool by calculating the total cost of a prescription based on one or more selected medications and their dosages. It ensures the total cost does not exceed a configurable budget (default set to $100).

## Features
### Prescription Form
Collects the following information:
- Selected Medications
  - Predefined list of medications
  - Each medication has predefined dosages (amount and frequency)
  - Users can modify the duration of the selected dosage
- Budget Input (default: $100)

### Cost Calculation
- Formula: `Cost = (Frequency) × (Duration) × (Unit Price)`
- Discounts:
  - 10% discount applied for durations of 30 days or more
- Validation:
  - If total cost exceeds budget, suggestions are provided for reducing costs

### Prescription Summary
- Displays:
  - Selected medications
  - Dosages and durations
  - Cost breakdown
  - Validation result (valid/invalid)
  - Suggested adjustments (if needed)

## Technology Stack
- **Backend:** Rails 8.0.1
- **Frontend:** React
- **Database:** PostgreSQL
- **Testing:** RSpec 

## Setup Instructions
### Clone the Repository:
```sh
git clone https://github.com/MikeLiamCode/prescription-cost-calculator.git
cd prescription-cost-calculator
```

### Install Dependencies:
```sh
bundle install
```

### Database Setup
#### Create Database:
```sh
rails db:create
```
#### Initialize Schema & Seed Data:
```sh
rails db:migrate
rails db:seed
```

## Running the Application
### Start Rails Server:
```sh
rails server
```
### Start React Frontend:
```sh
cd client
npm install
npm start
```

## Running Tests
### Run RSpec for Backend:
```sh
bundle exec rspec
```

## CORS Configuration
Modify `config/initializers/cors.rb` to allow requests from the frontend domain:
```ruby
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'https://your-frontend-domain-link'
    resource '*',
      headers: :any,
      methods: [:get, :post]
  end
end
```

## Future Enhancements
- Add user authentication and session management
- Bind prescriptions to users and allow edits or cancellations
- Implement frontend test cases using Jest
- Improve cost-reduction suggestion algorithms
- Add an admin panel for managing medications and prescriptions

