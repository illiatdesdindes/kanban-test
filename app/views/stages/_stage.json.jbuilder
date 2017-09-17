json.extract! stage,
  :id,
  :name,
  :created_at,
  :updated_at
json.url stage_url(stage, format: :json)
json.applicants stage.applicants, partial: 'applicants/applicant', as: :applicant
