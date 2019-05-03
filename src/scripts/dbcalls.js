const apiBaseURL = "http://localhost:3000";//specify database location for easy referrence further down

// Get all data

const getAllChickens = () => {
    return fetch(`${apiBaseURL}/chicken`)
    .then(response => response.json())
   
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

//Make new entry in the database 

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

const deleteChicken = (chickenID) => {
    fetch(`${apiBaseURL}/chicken/${chickenID}`, 
        {
            method: "DELETE"
        }
    )
    .then(response => response.json())
    .then(parsedResult => {
        console.log("Delete Chicken", parsedResult);
    })    

}

// begin calls for above functions

getAllChickens();
getOneChicken(3); //call const and specify data to be retrieved

//can edit the chicken only AFTER it is called. 

const testChickenObj = {
    name: "Joe Thighsman",
    color: "red",
    gender: "male",
    spiceLevel: "3"
}
//updateChicken(1, testChickenObj); //calling the const updateChicken, passing new info


const newChickenObject = {
    name: "Cluck Norris",
    color: "Blue",
    gender: "Male",
    spiceLevel: "Head on Fire"
}

//makeChicken(newChickenObject); //calling the const makeChicken, passing in new info


//deleteChicken(5);