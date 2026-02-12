let slideIndex=0;
const slides=document.getElementsByClassName("slide");

function showSlide(n){
if(n>=slides.length) slideIndex=0;
if(n<0) slideIndex=slides.length-1;

for(let i=0;i<slides.length;i++){
slides[i].style.display="none";
}
slides[slideIndex].style.display="block";
}

function nextSlide(){slideIndex++;showSlide(slideIndex);}
function prevSlide(){slideIndex--;showSlide(slideIndex);}

function autoSlides(){
slideIndex++;
showSlide(slideIndex);
setTimeout(autoSlides,5000);
}

showSlide(slideIndex);
autoSlides();

document.querySelector(".next").onclick=nextSlide;
document.querySelector(".prev").onclick=prevSlide;

/* SHOW SELECTED SECTION */
document.querySelectorAll("[data-target]").forEach(btn=>{
btn.addEventListener("click",function(e){
e.preventDefault();
let target=this.dataset.target;

document.querySelectorAll(".content-section").forEach(sec=>{
sec.classList.remove("show");
});

document.getElementById(target).classList.add("show");

window.scrollTo({
top:document.querySelector("main").offsetTop-60,
behavior:"smooth"
});
});
});
