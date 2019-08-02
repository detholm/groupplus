class Api::V1::TermsController < ApplicationController

  def index
    render json: Term.all
  end

end
