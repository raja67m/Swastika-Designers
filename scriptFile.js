
function resNavBar(){
document.querySelector('.topNav').style.display="block";

document.querySelector('.menu').style.display="none";
document.getElementById('close').style.display="block";
}

function closeNavBar(){
   document.querySelector('.topNav').style.display="none"; 
   document.querySelector('.menu').style.display="block";
   document.getElementById('close').style.display="none";

  
  
}
const closeNews=()=>{
 document.querySelector('.NewsLetterContainer').style.display="none";
}
// new letter show popup function

window.addEventListener("load",function(){
   setTimeout(function open(event){
      document.querySelector(".NewsLetterContainer").style.display="block";
   },2000)
})