class Api::V1::TermsController < ApplicationController

  def index
    render json: Term.all
  end

  # def reduction
  #   answer = terms.each_with_object(sum) do |hash, sum|
  #     hash.each { |key, value| sum [key] += value }
  # end
end


# terms = [
# {id: 1, term: "Honest", created_at: "2019-08-07T02:32:25.915Z", updated_at: "2019-08-07T02:32:25.915Z"},
# {id: 1, term: "Honest", created_at: "2019-08-07T02:32:25.915Z", updated_at: "2019-08-07T02:32:25.915Z"},
# {id: 2, term: "Active Participant", created_at: "2019-08-07T02:32:25.957Z", updated_at: "2019-08-07T02:32:25.957Z"},
# {id: 2, term: "Active Participant", created_at: "2019-08-07T02:32:25.957Z", updated_at: "2019-08-07T02:32:25.957Z"},
# {id: 2, term: "Active Participant", created_at: "2019-08-07T02:32:25.957Z", updated_at: "2019-08-07T02:32:25.957Z"},
# {id: 2, term: "Active Participant", created_at: "2019-08-07T02:32:25.957Z", updated_at: "2019-08-07T02:32:25.957Z"},
# {id: 2, term: "Active Participant", created_at: "2019-08-07T02:32:25.957Z", updated_at: "2019-08-07T02:32:25.957Z"},
# {id: 3, term: "Focused", created_at: "2019-08-07T02:32:25.961Z", updated_at: "2019-08-07T02:32:25.961Z"},
# {id: 3, term: "Focused", created_at: "2019-08-07T02:32:25.961Z", updated_at: "2019-08-07T02:32:25.961Z"},
# {id: 3, term: "Focused", created_at: "2019-08-07T02:32:25.961Z", updated_at: "2019-08-07T02:32:25.961Z"},
# {id: 3, term: "Focused", created_at: "2019-08-07T02:32:25.961Z", updated_at: "2019-08-07T02:32:25.961Z"},
# {id: 4, term: "Passion", created_at: "2019-08-07T02:32:25.963Z", updated_at: "2019-08-07T02:32:25.963Z"},
# {id: 7, term: "Compassionate", created_at: "2019-08-07T02:32:25.968Z", updated_at: "2019-08-07T02:32:25.968Z"},
# {id: 7, term: "Compassionate", created_at: "2019-08-07T02:32:25.968Z", updated_at: "2019-08-07T02:32:25.968Z"},
# {id: 8, term: "Empowering", created_at: "2019-08-07T02:32:25.970Z", updated_at: "2019-08-07T02:32:25.970Z"}
# ]
