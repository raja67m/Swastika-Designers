
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

// button location
bookAppointment=()=>{
   window.location="./Portfolio.html";
} 


// search function
function searchBar(){
   let input=document.getElementById('search').value;
    input=input.toLowerCase();
    let x=document.querySelectorAll(".feature-content");
 
    for(i=0;i<x.length;i++){
      if(input === ''){
         x[i].style.display='';

      }else if(!x[i].innerHTML.toLowerCase().includes(input)){
         x[i].style.display="none";
        
      }else{
         x[i].style.display='feature-content';
      
      }
    }
}





