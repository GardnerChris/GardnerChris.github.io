let date = new Date();
document.getElementById("currYear").innerHTML= date.getFullYear();
document.getElementById("lastmod").innerHTML="Last Update: " + document.lastModified;

function toggleMenu(){
    document.getElementById("navAll").classList.toggle("hide");

}
//lazy load
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