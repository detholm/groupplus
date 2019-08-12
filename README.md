# README
Please use the test profile to Log In to the app
email: Test@test.com password: test123

# Group Plus
GroupPlus and it aims to strengthen the bonds of teams by focusing on each team members strengths. It does this by having team members select what they believe are their teammates 3 greatest strengths Group Plus aims to inspire positive action in members to work on elevating their strengths to new heights, by first highlighting them and then by presenting the user with educational material for the top 3 specific strengths that they have.
## Appreciative Inquiry
The app is built upon the research model of Appreciative Inquiry. A quick overview of this approach is:
###Constructionist Principle
***Words create worlds***
Reality, as we know it, is a subjective vs. objective state and is socially created through language and conversations.

###Simultaneity Principle
***Inquiry creates change***
The moment we ask a question, we begin to create a change. “The questions we ask are fateful.”

###Poetic Principle
***We can choose what we study***
Teams and organizations, like open books, are endless sources of study and learning. What we choose to study makes a difference. It describes – even creates – the world as we know it.

###Anticipatory Principle
***Images inspire action***
Human systems move in the direction of their images of the future. The more positive and hopeful the image of the future, the more positive the present-day action.

###Positive Principle
***Positive questions lead to positive change***
Momentum for [small or] large-scale change requires large amounts of positive affect and social bonding. This momentum is best generated through positive questions that amplify the positive core

– From Cooperrider, D.L., & Whitney, D. A Positive Revolution in Change: Appreciative Inquiry. Taos, NM: Corporation for Positive Change, 1999.

##Tech used
Group Plus is built on a Ruby on Rails frame work. The front end is built with React. Google charts API is used to show the data of each user.

## How to Use:
User creation and login is created using the devise gem, users have access to the teams they are a part of and their user profile.
The app uses a react form that asks each team member to select 3 Strengths from a predefined list, that they believe best reflects each person in their team, as teams come together and break apart a user will start to build up a record of selected terms.
On a user’s personal page, I’m using google charts to present the terms that have been selected for that user.   A stretch goal of mine is to implement an api that will show learning materials for the user’s top 3 strengths.
