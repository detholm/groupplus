class Api::V1::TeamsController < ApplicationController

  def index
    render json: Team.all
  end

  def show
    team = Team.find(params[:id])
    render json: team
  end
end
