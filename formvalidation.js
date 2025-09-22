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

const fform=document.getElementById('form');


fform.addEventListener('submit',function(event){
    event.preventDefault();

    const fname=document.getElementById('fname');
    const femail=document.getElementById('femail');
    const fphone=document.getElementById('fphone');
    const option=document.getElementById('option');
    const ffeed=document.getElementById('ffeed');

    if(!fname.value){
        fname.classList.add('error-input');
    }
    else{
          fname.classList.remove('error-input');
    }
    
    if(!femail.value){
        femail.classList.add('error-input');
    }
    else{
          femail.classList.remove('error-input');
    }
     if(!fphone.value){
        fphone.classList.add('error-input');
    }
    else{
          fphone.classList.remove('error-input');
    }
      if(!option.value){
        option.classList.add('error-input');
    }
    else{
          option.classList.remove('error-input');
    }
      if(!ffeed.value){
        ffeed.classList.add('error-input');
    }
    else{
          ffeed.classList.remove('error-input');
    }
if(fname.value && femail.value && ffeed.value && fphone &&option && ffeed){
    alert("Form submited");
}

})