class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

     has_many :memberships
     has_many :teams, through: :memberships
     has_many :matches, foreign_key: :to_user_id
     has_many :terms, through: :matches


  def count_terms
    terms.group('id').count
  end


  def admin?
    role == "admin"
  end
end
