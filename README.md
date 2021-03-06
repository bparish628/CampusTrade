# CampusTrade

branch | status
---    | ---
master | [![Build Status](https://travis-ci.org/bparish628/CampusTrade.svg?branch=master)](https://travis-ci.org/bparish628/CampusTrade)
develop| [![Build Status](https://travis-ci.org/bparish628/CampusTrade.svg?branch=develop)](https://travis-ci.org/bparish628/CampusTrade)

## Installing Dependencies
Before you can run this application you will need to install the latest node (nodejs.org).
Once node is installed then run the following command to install needed libraries

    npm install && npm run server-install

## Running The Application
First start off by starting the server. Make sure you are in the root directory of `CampusTrade`.
To reseed the application `cd server`, and run `npm run reseed`.
To run the server run the following command

    npm run start-server

Next you will start the ui.
To run the web application run the following command

    npm start
    
Anytime you make changes to your code and save, your browser will refresh because of `webpack`.


## Running Tests
To run tests run `npm test`.  
This will run a reseed and start the application up locally. It will then start up the selenium server and then run the tests in Chrome.

## Helpful commands
Be sure to always `git checkout develop && git pull` before creating a new branch for the new feature.

Create a new branch - `git checkout -b <branch name>`  
Add all files to staging area - `git add -A`  
Commit changes to your branch - `git commit -m "<message>"`  
Push to repository - `git push`  

## Style Guide
We are using Todd Motto's style guide which can be found [here](https://github.com/toddmotto/components-angular#styleguide).

## Submission of code
To submit code, please create a branch and make your edits in that branch. When it is complete, submit a pull request to develop. We will review it and if it's good, we will merge it.

## License
This project is licensed under the Creative Commons Attribution NonCommercial NoDerivs 4.0 (CC-BY-NC-ND-4.0).
