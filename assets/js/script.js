const text = document.getElementById("text");
const mtext = " Telecommunication Engineer & Web Developer.   ";
let i = 1;
setInterval(typing, 100);
function typing() {


    text.innerHTML = mtext.slice(0, i);
    i++;
    if (i > mtext.length) {
        i = 1;
    }

};
// navbar chanhing color
let navbar = document.getElementById("navbar");
window.addEventListener("scroll",function(){
    if(window.scrollY > 50){
    navbar.classList.replace("bg-transparent","navbar-replacment");
 } 
    else if (window.scrollY <= 50){
        navbar.classList.replace("navbar-replacment","bg-transparent");
    };
})

//loading screen
let body = document.body;
body.style.overflow = "hidden";
document.querySelector(".loading").style.opacity = "1";
document.querySelector(".loading").style.visibility = "visible";
document.querySelector(".loading").style.transition = "1s";

window.addEventListener("load", function () {
    setTimeout(function () {
        document.querySelector(".loading").style.opacity = "0";
        document.querySelector(".loading").style.visibility = "hidden";
        document.querySelector(".loading").style.transition = "1s";
        body.style.overflow = "scroll";
    }, 2500);

})