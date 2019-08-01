class UsersController < ApplicationController


  def show
    @user = User.find(params[:id])
    @memberhsips = Team.find(params[:id])

  end

end
