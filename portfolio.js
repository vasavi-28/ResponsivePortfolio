var typed=new Typed("#textchanging",{
strings:["Web Developer...","Python Developer...","Designer..."],
typeSpeed:150,
backSpeed:150,
loop:true
})
const menubtn=document.getElementById("menu");
const closingbtn=document.getElementById("closeingicon");
const navtagmobileview=document.getElementById("navtagmobileview");

menubtn.addEventListener("click",menufunc);
closingbtn.addEventListener("click",closefunc);

function menufunc(){
    console.log("Menu button Clicked")
    menubtn.style.display="none";
    closingbtn.style.display="block";
    navtagmobileview.style.display="block";
}
function closefunc(){
    console.log("closing btn clicked")
    menubtn.style.display="block";
    closingbtn.style.display="none";
    navtagmobileview.style.display="none";
}

