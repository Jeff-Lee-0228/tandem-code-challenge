# Tandem Code Challenge

## Assumptions
- A round of trivia has 10 Questions
- All questions are multiple-choice questions
- Your score does not need to update in real time
- Results can update on form submit, button click, or any interaction you choose
- We will provide you with the trivia data such as the questions, correct and incorrect answers via a
JSON file.

## Acceptance Criteria
- A user can view questions.
- Questions with their multiple choice options must be displayed one at a time.
- Questions should not repeat in a round.
- A user can select only 1 answer out of the 4 possible answers.
- The correct answer must be revealed after a user has submitted their answer
- A user can see the score they received at the end of the round


## Explanation of Dependencies
- bootstrap / react-bootstrap: for styling react component
- prettier : formatting tool utilized for better readability
- chai / enzyme / mocha : used for unit test
- react / redux : fundamental structure implemented for building REST api
- webpack / babel : module bundler that compiled Javascript files into one

## How to Run
- git clone github.com/Jeff-Lee-0228/tandem-code-challenge
- npm install
- npm run start

## Deployment
- https://tandem-code-challenge-jeff-lee.herokuapp.com/

## STRETCH GOALS
- implement CRUD application integrating database and express API
- add user page for user's score history via Google O'Auth
- add timer to each question for more dynamic user experience
- write through unit test and automation test script
