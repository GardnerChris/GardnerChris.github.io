/*-------------------Credit for JSON filtering by day and $ identifier---------
https://stackoverflow.com/questions/2722159/how-to-filter-object-array-based-on-attributes
https://www.thoughtco.com/and-in-javascript-2037515
https://stackoverflow.com/questions/67221312/how-to-filter-out-json-object-from-array-in-javascript
https://stackoverflow.com/questions/53924298/how-to-filter-the-key-value-object-based-on-value-substring
*/

const apiForecast="https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=833287fd200c9d39b282d693f69b5816&units=imperial";

fetch(apiForecast)   
.then((response) => response.json())
.then((jsObject) => { 
    console.log(jsObject);
    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const weatherList = jsObject.list.filter(dt => dt.dt_txt.includes('18:00:00'));

     
    for (let day = 0; day <= 4; day++) {
        let d = new Date(weatherList[day].dt_txt);
        document.getElementById(`day${day+1}`).textContent = dayOfWeek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = Math.round(weatherList[day].main.temp);

        const imgalt = weatherList[day].weather[0].description;
        const imagesrc = 'https://openweathermap.org/img/wn/' + weatherList[day].weather[0].icon + "@2x.png";
        document.getElementById(`icon${day+1}`).setAttribute("src", imagesrc);
        document.getElementById(`icon${day+1}`).setAttribute("alt", imgalt);
    }
});