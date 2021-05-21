
function toggleMenu(){
    document.getElementById("navAll").classList.toggle("hide");
}
let date = new Date();
document.getElementById("currYear").innerHTML= date.getFullYear();
document.getElementById("lastmod").innerHTML="Last Update: " + document.lastModified;

if (date.getDay()==3){
    document.getElementById("pancake").style.display= "block" ;

}


