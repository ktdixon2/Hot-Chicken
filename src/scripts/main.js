console.log("Hot Chicken");

// create the DOM element

{/* <div>
    <section>
        <h3>Name:</h3>
        <h4>Spice Level:</h4>
        <p>purchased</p>
        <p>Color:</p>
        <button>Edit</button>
        <button>Delete</button>
    </section>

</div> */}

//push object to DOM
function populatePage(chickenArray){
    let newDiv = document.createElement("div");
    newDiv.innerHTML = chickenArray.map(makeGrid).join("");
    document.querySelector("#chicken-cards").append(newDiv);
}

//create the object
const makeGrid = (item, index) => {
    let block = `
        <section id="card--${index}" style="border: 2px solid ${item.color}">
        <h3>name:${item.name}</h3>
        <h4>Spice Level: ${item.spiceLevel}</h4>
        <p>Color:${item.color}</p>
        <button data-edit-id="${item.id}" onClick="handlEdit(this)">Edit</button>
        <button data-delete-id="${item.id}" onClick="handlDelete(this)">Delete</button>
    `
    return block;
}

getAllChickens()
    .then(
        (inventoryFromGetAllChickens) => {
            console.log("The Chickens", inventoryFromGetAllChickens);
            populatePage(inventoryFromGetAllChickens);
        }
    )
