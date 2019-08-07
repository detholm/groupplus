class Api::V1::UsersController < ApplicationController

  def show
    user = User.find(params[:id])
    terms = user.terms
    render json: { user: user, terms: terms }
  end


end
