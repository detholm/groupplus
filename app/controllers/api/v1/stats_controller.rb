class Api::V1::StatsController < ApplicationController

  def show
    # TODO: Use current_user instead of params
    stats = User.find(params[:id]).count_terms
    # stats = current_user.count_terms

    res = {}
    stats.each do |term_id, count|
      name = Term.find(term_id).term
      res[name] = count
    end
    render json: res
  end
end
