# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Term.create!(term: "Honest")
Term.create!(term: "Active Participant")
Term.create!(term: "Focused")
Term.create!(term: "Passion")
Term.create!(term: "Respectful")
Term.create!(term: "Confident")
Term.create!(term: "Compassionate")
Term.create!(term: "Empowering")
Term.create!(term: "Collaborative")
Term.create!(term: "Supportive")
Term.create!(term: "Reliable")
Term.create!(term: "Communicates Constructively")
Term.create!(term: "Active Listener")
Term.create!(term: "Cooperative")
Term.create!(term: "Problem-solver")
Term.create!(term: "Out of the Box Thinker")
Term.create!(term: "Responsible")
Term.create!(term: "Adaptable")
Term.create!(term: "Helpful")
Term.create!(term: "Dedicated")
Term.create!(term: "Leader")
Term.create!(term: "Educator")
Term.create!(term: "Inclusive")
Term.create!(term: "Trustworthy")
Term.create!(term: "Empathetic")
Term.create!(term: "Accountable")
Term.create!(term: "Humble")
Term.create!(term: "Good Manners")
Term.create!(term: "Ethical")
Term.create!(term: "Sense of Humor")


u1 = User.create!(email: "sally@gmail.com", first_name: "Sally", last_name: "Smith", password: "muller12")
u2 = User.create!(email: "detholm@comcast.net", first_name: "Didrik", last_name: "Etholm", password: "muller12")

t1 = Team.create!(name: "Team One")
t2 = Team.create!(name: "Team Two")

m1 = Membership.create!(user: u1, team: t1)
m2 = Membership.create!(user:u2, team: t1)
