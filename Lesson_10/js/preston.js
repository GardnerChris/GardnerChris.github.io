const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=833287fd200c9d39b282d693f69b5816&units=imperial";


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



