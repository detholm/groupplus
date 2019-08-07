class Api::V1::MatchesController < ApplicationController

  def index
    render json: Match.all
  end

  def create
    match_array = []
    match_params[:matches].each do |match|
      from_user = current_user
      to_user = User.find(match[:to_user])
      term = Term.find(match[:term])
      match_obj = Match.create!(from_user: from_user, to_user: to_user, term: term)
      match_array << match_obj
    end

    render json: match_array
  end

private

  def match_params
    params.permit(matches: [:from_user, :to_user, :term])
  end
end
