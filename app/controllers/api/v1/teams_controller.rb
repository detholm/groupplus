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


# When user votes for term, that goes to MatchesController
# If match for user + term doesn't already exist, create it
# If it does, increment its count by 1
