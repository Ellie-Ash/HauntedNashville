# Haunted Nashville

This is an app for people that want to explore and discuss the spooky side of Nashville. 

Users can create an account, search through the government API, leave reviews, edit/delete their reviews, and save specific locations to their profile.

These are all of the skills and concepts used to create this app.

1. Functions
1. Databases/external API
1. Github
1. CSS
1. React
1. Reactstrap/Bootstrap
1. Modals
1. Data entry/editing
1. Relational data
1. Session Storage

## How to Launch Nutshell

1. Clone the repository from Github
1. Open your terminal and type the command "npm install" to install React
1. In the main project directory, create a new directory called "API"
1. In the API directory, create a file called "database.json"
1. Copy the sample data below into database.json
1. Run json-server in port 5002 with database.json
1. In the terminal, type the command "npm start". You are now ready to use Haunted Nashville!

## Sample Data
```json
{
  "users": [
    {
      "email": "1@1.com",
      "username": "demo",
      "password": "123",
      "id": 1
    }
  ],
  "reviews": [],
  "savedLocations": []
}
```
