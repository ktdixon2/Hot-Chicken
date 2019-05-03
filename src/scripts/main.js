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
    let sold =`<p class="buy">Eat More Chicken</p>`;
    let purchased = item.purchased;
    if (item.purchased){
        sold = `<p class="buy">All Sold Out</p>`;
    }

    let block = `
        <section id="card--${index}" style="border: 2px solid ${item.color}">
        <h3>name:${item.name}</h3>
        <h4>Spice Level: ${item.spiceLevel}</h4>
        ${sold}
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

function handlEdit(chicken){
    let whichChicken = chicken.getAttribute("data-edit-id");
    console.log("let's edit", whichChicken);
}

function handlDelete(chicken){
    let whichChicken = chicken.getAttribute("data-delete-id");
    console.log("let's delete", whichChicken);
}