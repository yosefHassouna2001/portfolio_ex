let fname = document.querySelector('.name input');
let email = document.querySelector('.email input');
let phone = document.querySelector('.phone input');
let Send = document.querySelector('.form .Send');
let span = document.querySelectorAll('.form .error');

// slider

let previous = document.querySelector('.slider .left ') ;
let next = document.querySelector('.slider .right ') ;

let content = document.querySelectorAll('.slide .content ');

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}
    showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.querySelectorAll('.slide .content ');
  let active = document.querySelectorAll('.slide .content .active ');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < active.length; i++) {
    active[i].className = active[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}

next.onclick=_=>{
    plusSlides(1);
}
previous.onclick=_=>{
    plusSlides(-1);
}
let up =document.querySelector('.up');

// chech form
Send.onclick= _=>{

    if (fname.value== "" || email.value== "" || phone.value== "") {
        if (fname.value== ""  ) {
            span[0].innerText= "The Name field is required.";
    
        }
        else{
            span[0].innerText= "";
        }
        if (email.value== "") {
            span[1].innerText= "The email field is required.";
    
        }
        else{
            span[1].innerText= "";
        }
        if (phone.value== "" ) {
            span[2].innerText= "The phone field is required.";
    
        }
        else{
            span[2].innerText= "";
        }
    }
    console.log(fname.value);
   
}


// menu
let menu = document.querySelector('.icon-bar');
let nav = document.querySelector('header .container nav');
let header = document.querySelector('header');

menu.onclick= _=>{
    if (nav.classList.contains('mobile')) {
        nav.classList.remove('mobile');
        
    } else {
        nav.classList.add('mobile');
    }

}



// up
onscroll = function () {
    if (window.pageYOffset > 200) {
        up.style.opacity = "1";
    } else {
        up.style.opacity = "0";
    }
}