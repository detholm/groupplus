class Api::V1::TeamsController < ApplicationController

  def index
    render json: {teams: current_user.teams, user: current_user}

  end

  def show
    team = Team.find(params[:id])
    users = team.users
    render json: {team: team, users: users, terms: Term.all}
  end
end
