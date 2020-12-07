$(document).ready(function () {
    
    var i = 0;
var txt = 'Hey I am Nayan Singhai';
var speed = 120;

typeWriter();

function typeWriter() {
console.log(txt[i]);
    if (i < txt.length) {
      document.getElementById("desc-intro").innerHTML += txt[i];
      i++;
      console.log(i);
      setTimeout(typeWriter, speed);
    }
    else
typeWriter1();

}



var text='SDE @ J.P. Morgan & Chase | Programmer | Web Developer | Traveler '; 
var j=0;


var speed1 = 70;
function typeWriter1() {
    console.log(text[j]);
    if (j < text.length) {
      document.getElementById("desc").innerHTML += text[j];
      j++;
      setTimeout(typeWriter1, speed1);
    }
   

}


});
function call(url){
window.open(url,"_blank");
}