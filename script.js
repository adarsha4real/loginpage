const signupbtn=document.querySelector("#signupbtn")
const signinbtn=document.querySelector("#signinbtn")
const title=document.querySelector("#title")
const namefield=document.querySelector("#namefield")

signinbtn.addEventListener("click",function (){
    namefield.style.maxHeight="0";
    title.innerHTML="Sign in";
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");

})
signupbtn.addEventListener("click",function (){
    namefield.style.maxHeight="65px";
    title.innerHTML="Sign in";
    signupbtn.classList.remove("disable");
    signinbtn.classList.add("disable");

})