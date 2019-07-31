class Term < ApplicationRecord

  validates :term, presence: true

  has_many :users
  has_many :users, through: :matchs

end
