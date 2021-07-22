

/*-------------------JSON------------------------- */
const townURL="js/js.json";

fetch(townURL)
.then(function (response) {
    return response.json();
})

.then(function (town) {
    console.table(town); 
 //   console.table(townlist);

    const towns = town["towns"];
    for (let i = 0; i < towns.length; i++ ) {
            let eventCard = document.createElement("section");
            let name = document.createElement("h2");  
            let address=document.createElement("p")
            let website = document.createElement("p");       

        name.textContent = towns[i].name;
        address.textContent = towns[i].address;
        website.textContent=towns[i].website;
        website.textContent= towns[i].website;
        eventCard.appendChild(name);
        eventCard.appendChild(address);        
        eventCard.appendChild(website);
        document.querySelector("div.eventCard").appendChild(eventCard); 
    }
    
});

function toggleMenu(){

    document.getElementById("navBar2").classList.toggle("hide");
}
function toggleGrid(){

    document.getElementById("grid1").classList.toggle("eventCard");
}