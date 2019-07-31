class UsersController < ApplicationController


  def show
    @user = User.find(params[:id])
    binding.pry
    @team = Team.find(params[:id])
  end

end
