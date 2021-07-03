/*--------- Date------------*/
let date = new Date();
    document.getElementById("currYear").innerHTML= date.getFullYear();
    document.getElementById("lastmod").innerHTML="Last Update: " + document.lastModified;

function toggleMenu(){
    document.getElementById("navAll").classList.toggle("hide");

}
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

/*---------------- LAST VISITED---------------*/
images.forEach(image =>{
    imgObserver.observe(image);
})

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

/*-------------CHANGE STORM SEVERITY RATING--------------*/
function changeRating(ratings) {
    document.getElementById("ratingsValue").textContent = ratings;
}

/*-------------------JSON------------------------- */
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  
    const towns = jsonObject['towns'];

    for (let twn = 0; twn !=3; twn++){
        if (twn==1) {
            i=2;
        }
        if (twn==2) {
            i=6;
        }        
        if (twn==0) {
            i=0;
        }
        


      /*create variables*/
      let card = document.createElement('section');
      let townName = document.createElement('h2');
      let motto=document.createElement("h5");
      let yearFounded= document.createElement("p");
      let currentPopulation = document.createElement("p");
      let image = document.createElement("img");
      let rainFall=document.createElement("p");
      let data=document.createElement("div");
      
      
      /*call and store information in variables*/
      townName.textContent = towns[i].name; 
      motto.textContent = towns[i].motto;
      yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
      currentPopulation.textContent = "Current Population: " + towns[i].currentPopulation;
      rainFall.textContent="Average Rain Fall (inches): " + towns[i].averageRainfall;
      data.setAttribute("id","data");
     
      
      /*append node*/
      card.appendChild(townName);
      card.appendChild(motto);
      card.appendChild(yearFounded);
      card.appendChild(currentPopulation);
      card.appendChild(rainFall);
      card.appendChild(image);
      card.appendChild(data);
      
      data.appendChild(townName);
      data.appendChild(motto);
      data.appendChild(yearFounded);
      data.appendChild(currentPopulation);
      data.appendChild(rainFall);
      
      
    document.querySelector("div.cards").appendChild(card);

    /*----------Set Image Attributes---------*/
    if (twn== 0){
        image.setAttribute("src","index_img/newhaven.jpg");
        image.setAttribute("alt", "Small town of Fish Haven by lake and mountians.")
        image.setAttribute("div", "img")

    }
    if (twn==1){
        image.setAttribute("src","index_img/sodaSprings.jpg")
        image.setAttribute("alt", "Picture of Soda Springs from above.")
        image.setAttribute("div", "img")
   
    }
    if(twn==2){
        image.setAttribute("src","index_img/preston.jpg")
        image.setAttribute("alt", "Picture of Preston and the crop fields.")
        
    
    }
}   
});




