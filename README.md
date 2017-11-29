![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Bit-Ching!
===

## Bit-Ching for BitCoin Notifications
* Sends an email with notification that the current price has dropped below the buying price.
* Allows the user to monitor bitcoin rates and buy during drops in rates.

## Installation
* npm install after pulling in our github repo.
* set secret in an env file.

## Features
Allows a user to create an account, sign-in on that account, and request bitcoin prices and store that information with that users account. And if the user would like to delete their account they can also.
#### User Schema/Routes
* Open up Postman
* http://www.bit-ching.me/signup (POST)
  - Select authorization tab and select no auth.
  - Select body tab, click the raw circle, and make sure you are sending application/json.
  - Enter valid json for Username, Email, Password
  - Send the data
  - Take the data that gets sent back and copy that. Then go to authorization tab and click bearer token. Then enter that data in the token box.
* http://www.bit-ching.me/signin (GET)
  - Select basic auth on the authorization tab
  - User gets sent back user schema.
* http://www.bit-ching.me/quitBit-ching/:id (DELETE)
  - Enter the users id in the the url for :id to delete a user.
* http://www.bit-ching.me/api (GET)
  - Set authorization to bear token.
  - Requests the current price of bitcoin and saves in the database.
* http://www.bit-ching.me/sendmail or http://localhost:3000/sendmail(POST)
  - Set authorization to bear token.
  - Requests an email sent to users email if the price of the coin falls below the buying price.
  - To get email sent to you change the email address in the code to yours. And run off localhost. The   live version won't have those changes stored.
  - Because of security can only get the email if you're at codefellows.
#### Database
* Stores bitcoin rates for up to 1 month.
#### Email Notifications
* Sends email when the current bitcoin price is below the buying the bitcoin price.
#### Authentication
* Basic Authentication
* Bearer Authentication
#### Interface (Pending)
* User Interface in the local command line.
* User can (eventually) sign up with a username, email, and password.
* User can (eventually) enter commands to update username, email, start/stop bitcoin rate tracking, get current rate, and get stored rates since start.
#### Tests (Pending)
* Clear database tests, to insure testing enviroments are pure.
* Fake user tests, to test the tests for userSchema.
* API tests, to test our API route for data. Had to comment this out since we weren't able to get data until right before presentation.
* Base tests, to test our test for test accuracy.
* File testing, to test to make sure our files exist and responds.
* Lib, Model, and Route testing, all pending due to not having a database working until right before the presentation.


## API
* Coinbase




## About Us (Do we want to add this part?)
#### Joel
Network Support Engineer - Working to become a full stack JavaScript dev.

#### Rylee
Part-time developer, full time party-developer.

#### Sidney
Contractor working on prototypes and developmental technologies.  My goal is to become a backend or full stack developer.

#### TJay
Coding dad, punk mailman.  

#### Cole
Accountant - Working to enter data analyst/cost analyst/pricing analyst fields and need data manipulation experience.
