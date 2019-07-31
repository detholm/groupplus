class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

     has_many :memberships
     has_many :users, through: :memberships
     has_many :terms
     has_many :terms, through: :matches


  def admin?
    role == "admin"
  end
end
