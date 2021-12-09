# Final Assignment, Group 9

## Members
* Hector Cedeno-Indriago
* Jonathan Chen
* Bryan Emer

## Project Summary
This website is a cryptocurrency portfolio monitor. It allows users to input their account information and track selected cryptocurrencies. Users can also search through all available
currencies to track prices. 

# API Snippet
axios.get('https://api.nomics.com/v1/currencies/ticker?key=2b128e6260e7cd4c7aa84266e91583748dfa6f47')
    .then(function (response) {
        for (var c in response.data) {
            response.data[c].price = parseFloat(response.data[c].price).toFixed(2);
        }
        res.render('dashboard', {userInfo, currencies: response.data});

## Charting Library
The data that will be displayed is from the Nomics API, which has all of the cryptocurrency information. On the web app, only the active currencies by their names, symbols, and their current prices will be displayed in a table that is sorted by rank.

## ER Diagram
![ER Diagram](erd.png?raw=true "ER Diagram")

Test Decriptions:

-Testing checkAccount function:
1. The first test simply tests that the checkAccount function correctly identifies when an account already exists in users.json. A user is created and added to users.json, and then we test the function to see if it returns the proper boolean value.

2. The second test simply tests the inverse to see if checkAccount returns the correct value when the account does not exist in users.json.


-Testing check password functionality
1. Test if function returns correct output when password is valid

2. Test if returns correct output when password is too short

3. Test if returns correct output when password is too long

4. Test if returns correct output when password does not contain a special character

5. Test if returns correct output when passworder does not contain a number character

Future tests that will need to be implemented - 

1. Tests to ensure account data pulled from api is properly stored in database
  - We will need to test to make sure that all information pulled from the exchange apis are stored properly in the database. This will include positions, balances, and trades, as well as testing to make sure the api connection is successful.

2. Tests to verify manual position entry
  - We will need to test that when a user manually inputs a position, the app correctly pulls the price information from the Nomics API and then correctly adds that position to the user's account.

3. Tests to verify calculations functionality
  - We will need to test that any calculations performed on the account information are implemented correctly. This would include calculations to aggregate account balances, risk, and profit across exchanges and manually entered positions.