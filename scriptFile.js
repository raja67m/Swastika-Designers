
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




// form validation:


const submitBtn=document.getElementById('sumbitFeed');

submitBtn.addEventListener('submit',function(event){
   event.preventDefault();
console.log(submitBtn,"the btn clicked");
const fullName=document.getElementById('fullName').value;
const email=document.getElementById('emailID');
const feedback=document.getElementById('feedBack');

if(!fullName){
   fullName.classList.add('error-input');
   console.log(fullName)
}

})

