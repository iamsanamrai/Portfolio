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
