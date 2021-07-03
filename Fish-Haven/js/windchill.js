let t = parseFloat(document.getElementById("maxTemp").innerHTML);
let w = parseFloat(document.getElementById("speed").innerHTML);

if (t >= 50 && w >= 3) {
    let wChill = 35.74 + 0.6215 * t - 35.75 * w **.16 + .4275 * t * w ** .16;
    document.getElementById("wChill").innerText = parseInt(wChill);
}
else{
    document.getElementById("wChill").innerText = "N/A";
}
