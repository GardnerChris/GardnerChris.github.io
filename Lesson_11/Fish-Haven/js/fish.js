

/*-----------lazy load-------*/
let images = document.querySelectorAll("img[data-src]");
function preloadImage (img){
    let src=img.getAttribute("data-src");
    if (!src){
        return
    }
    img.src=src;
    img.removeAttribute("data-src");
}
    let imgOptions= {
        threshold:1,
        rootMargin:"0px 0px 60px 0px"};

let imgObserver= new IntersectionObserver((entries,imgObserver) =>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }
        else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
},imgOptions);



/*------------Weather API---------------*/
const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5585010&APPID=833287fd200c9d39b282d693f69b5816&units=imperial";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    
    /*---------Extract data from JSON and round----------*/
    document.getElementById("temp").textContent =Math.round(jsObject.main.temp);
    document.getElementById("currently").textContent =jsObject.weather[0].description;
    document.getElementById("maxTemp").textContent =Math.round(jsObject.main.temp_max);
    document.getElementById("humidity").textContent = Math.round(jsObject.main.humidity);
    document.getElementById("speed").textContent = Math.round(jsObject.wind.speed);

});

/*-----------------Events----------*/

const townURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(townURL)
.then(function (response) {
    return response.json();
})

.then(function (townURL) {
 //   console.table(townlist);
    const towns = townURL["towns"];
    for (i = 0; i < towns.length; i++) {
        if (towns[i].name == "Fish Haven") {
            let eventCard = document.createElement("section");
            let townName = document.createElement("h3");  
            let events = document.createElement("p");        

        townName.textContent = "Upcoming Events";
        events.textContent = towns[i].events;
        
        eventCard.appendChild(townName);
        eventCard.appendChild(events);        

        document.querySelector("div.eventCard").appendChild(eventCard); 
        
    }}
});

let newTime=new Date().getTime();

if(localStorage.getItem('time') !=="") {
    var past = localStorage.getItem('time');
    localStorage.setItem('time', String(newTime));
    var difference = Math.floor((newTime - past)/(86400000));
    document.getElementById('sinceVisit').innerHTML = "Days elapsed since your last visit: " + difference;
}
else {
    localStorage.setItem('time', String(newTime));
    document.getElementById("sinceVisit").innerHTML = "Days elapsed since your last Visit: 0 ";
}