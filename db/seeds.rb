# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

stages = []
stages << Stage.create!(name: "À rencontrer")
stages << Stage.create!(name: "Entretient")
stages << Stage.create!(name: "Drop")
stages << Stage.create!(name: "Acceptés")


10.times do 
  Applicant.create!(
    stage: stages.sample,
    name: Faker::Name.name,
    job: Faker::Job.title,
    avatar: "https://randomuser.me/api/portraits/men/#{Random.rand(90)}.jpg"
  )
end