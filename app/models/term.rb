class Term < ApplicationRecord
  
  has_many :users
  has_many :users, through: :matchs

end
