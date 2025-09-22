//  contact form validation:

const form=document.getElementById('form');

form.addEventListener('submit',function(event){
   event.preventDefault();


   const fullname=document.getElementById('fullName');
   const email=document.getElementById('emailID');
                             
   const feedback=document.getElementById('feedBack');

if(!fullname.value){
   fullname.classList.add('error-input');
}
else{
    fullname.classList.remove('error-input');
}
if(!email.value){
    email.classList.add('error-input');
}
else{
    email.classList.remove('error-input');
}

if(!feedback.value){
    feedback.classList.add('error-input');
}
else{
    feedback.classList.remove('error-input');
}
if(fullname.value && email.value && feedback.value){
    alert("Form submited");
}

});


// project form validation

