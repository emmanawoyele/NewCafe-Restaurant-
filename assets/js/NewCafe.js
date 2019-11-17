/*
document.querySelector('.menu-container').addEventListener('click', function(){
  document.querySelector('.pop-out1').style.display="block";
     
 });
 document.querySelector('.menu-container').addEventListener('click', function(){
  document.querySelector('.body-opacity').style.display='block';
  
});
 
 document.querySelector('.close-sign').addEventListener('click', function(){
     document. querySelector(".pop-out1").style.display='none';
    
 
 });
 document.querySelector('.close-sign').addEventListener('click', function(){
     document.querySelector('.body-opacity').style.display='none';
 });
 */




var customNav = document.querySelector(".navbar-container");
var mylinks = document.querySelectorAll(".nav-link");
var CustomSticky = customNav.offsetTop;


function myNav(){
    
    console.log("CustomSticy= " + CustomSticky);
    console.log("scrollY=" + window.scrollY);
  
    
    
  if (window.scrollY >= CustomSticky){
 
    customNav.classList.add("sticky-navbar")
   
    

  }else{
     
    customNav.classList.remove("sticky-navbar");
    
  }
}   
window.addEventListener('scroll', myNav)



 
