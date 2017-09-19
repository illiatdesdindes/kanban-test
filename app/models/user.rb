class User < ApplicationRecord
  def self.find_or_create_user(id)
    User.find_by(id: id) || 
      User.create(name: Faker::Name.name, avatar: Faker::Avatar.image)
  end
end