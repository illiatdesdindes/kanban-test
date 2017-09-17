# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Stage.create!(name: "À rencontrer")
Stage.create!(name: "Entretient")

Applicant.create!(
  stage: Stage.first,
  name: "Steve Jobs",
  job: "Producteur de pommes",
  avatar: "https://randomuser.me/api/portraits/men/34.jpg"
)
