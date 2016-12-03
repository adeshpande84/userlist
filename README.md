## UserList

Frontend framework: Angular 2

Backend framework: Loopback

Database: MongoDB

#H3 To run the application on your local environment:

1. Install MongoDB
2. Clone the repository into a folder on your local environment 
3. Run npm install in the root folder
4. Run npm install in the client folder
5. In order to seed the database with given data from data.json file, run node bin/automigrate.js from the root folder

6. To start the loopback server run 'node .' from root folder

7. Run npm start from the client folder. It will open up the application in the browser 

### Things that are working:

1. Listing of users from the database by making an API call
2. Click on a user to show the user details with the ability to edit the fields and to go back to the user list
3. Delete a user from the user list
4. Click on add new user to open a form where we can enter user details and save to the database

### Things that are not working:

1. On saving a new user a new user object is created in the database with a auto generated id field but the other fields are blank

2. On editing an existing user, the user is not saved to the database. Getting 500 Internal server error

### TO DO:

1. Fix the above mentioned bugs

2. Write unit tests

3. Clean up the code to adhere to best practices 
