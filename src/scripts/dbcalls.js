const apiBaseURL = "http://localhost:3000";

// Get all data

const getAllChickens = () => {
    fetch(`${apiBaseURL}/chicken`)
    .then(response => response.json())
    .then(parsedResult => {
        console.log("all Chicken", parsedResult);
    })
}

// Get specific data in the database.json

const getOneChicken = (chickenID) => {
    fetch(`${apiBaseURL}/chicken/${chickenID}`)
    .then(response => response.json())
    .then(parsedResult => {
        console.log("One Chicken", parsedResult);
    })
}

//Update the database

const updateChicken = (chickenID, chickenObj) => {
    fetch(`${apiBaseURL}/chicken/${chickenID}`,
    {
        method: "PATCH",
        headers: {
            "content-type": "application/json"

        },
        body: JSON.stringify(chickenObj)
    })
    .then(response => response.json())
    .then(parsedResult => {
        console.log("Updated Chicken", parsedResult);
    })    
}

//how to make new entry in the database 

const makeChicken = (chickenObj) => {
    fetch(`${apiBaseURL}/chicken/`,
    {
        method: "POST",
        headers: {
            "content-type": "application/json"

        },
        body: JSON.stringify(chickenObj)
    })

    .then(response => response.json())
    .then(parsedResult => {
        console.log("New Chicken", parsedResult);
    })
}

getAllChickens();
getOneChicken(3); //call const and specify data to be retrieved

//can edit the chicken only AFTER it is called. 

const testChickenObj = {
    name: "Joe Thighsman",
    color: "red",
    gender: "male",
    spiceLevel: "3"
}
updateChicken(1, testChickenObj); //calling the const updateChicken



const newChickenObject = {
    name: "Cluck Taylor",
    color: "Blue",
    gender: "Male",
    spiceLevel: "9000"
}

makeChicken(newChickenObject); //calling the const makeChicken