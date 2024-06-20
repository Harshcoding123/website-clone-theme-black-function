let moon =document.querySelector(".moon");
let body =document.querySelector("body");
let para= document.querySelector("#para");
let h1s =document.querySelector("#h1s");
let h1e= document.querySelector("#h1e");
let sun= document.createElement("img");
let header =document.querySelector("#header");
sun.setAttribute("class","moon");
sun.src ="dark theme icon/sun.png";

moon.addEventListener("click",()=>{
    body.style.backgroundColor ="black";
    para.style.color ="white";
    h1e.style.color ="white";
    h1s.style.color ="white";
    header.append(sun);
    moon.remove();
});
sun.addEventListener("click",()=>{
    body.style.backgroundColor ="white";
    para.style.color ="black";
    h1e.style.color ="black";
    h1s.style.color ="black";
    sun.remove();
    header.append(moon);

})