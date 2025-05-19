# Question -

-   Build a web-app using ReactJS (state management, hooks, HOC etc), NextJS (optional), Typescript, Python (with or without flask / other ORM), NodeJS (optional), MySQL (or any other DB).
-   Requirement:
    -   Customer is applying a loan and lead has to be created so that call centre can call them.
    -   There are two data gathering screens:
-   Screen-1 contains First name (alpha 100 length), Last name (alpha 100 length), Email-id and Phone number (10 digit number). All are mandatory fields. All fields Regex validation to be done. On click of Next button, screen-2 to be displayed.
-   Screen-2 contains Zip code (6-digit number), loan amount (number/integer). All are mandatory fields. All data to be validated. There should be a back button. On click of back button, first screen data should be available so manage state properly. On click of submit, it has to call REST API (Lead endpoint with POST method) using API-Key

-   Backend logic: - In request, get all frontend data. Check Zip code validation with Google maps / places API. If zip code is invalid, no lead_id generation. - If the loan amount is > 10K and <100K, generate lead_id using UUID. - Store all this data in MySQL Customer master table. - Send response to Frontend with 200 and lead_id. - Frontend has to display, lead_id and congratulations message to user.
    Round-1 Live coding: Sachin Shukla

# Answer

BACKEND -

API-Key -> Middleware -> 401, Unauth
Zip Validator -> Middleware -> Google APIs

APIs -

POST ->
fName -> string,
lName -> string,
email -> string,
phone -> string,
zip -> number,
loan -> number

    CONTROLLER -
        if < 10K || >100k -> REJECT -> 402, "Loan Rejected"

        ADD LEAD -> Send Response -> 200, lead_id, message
        IF ERROR -> Send Response -> 500

DB -
Leads -
UUID -> string,
fName -> string,
lName -> string,
email -> string,
phone -> string,
zip -> number,
loan -> number,
status -> number
