function scrollToSection(id){
    var element = document.getElementById(id);
    element.scrollIntoView({behavior: 'smooth'});
}

var i = 0;
var txt = 'Frontend Developer and Cloud Engineer';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = function() {
  typeWriter();
};

//header nav scroll unsticky
let lastScrollTop = 0; // Track the last scroll position

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Scroll Down
        document.getElementById("mainHeader").style.top = "-400px"; // Adjust this value based on your header's height
    } else {
        // Scroll Up
        document.getElementById("mainHeader").style.top = "0px";
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);
