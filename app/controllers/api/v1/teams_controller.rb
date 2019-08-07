class Api::V1::TeamsController < ApplicationController

  def index
    render json: Team.all
  end

  def show
    team = Team.find(params[:id])
    users = team.users
    render json: {team: team, users: users, terms: Term.all}
  end
end
