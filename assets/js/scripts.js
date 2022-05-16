/* ANCORAS DO MENU */

var $ancora = $('html, body');
$('.menu').click(function() {
    $ancora.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});





/* VOLTAR AO TOPO */

var $subir = $('html, body');
$('.topo-site').click(function() {
    $subir.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 700);
    return false;
});

//esconde o voltar ao topo
$(document).on('scroll', function() {
  let scroll = $(document).scrollTop();
  let length = 100;

  if (scroll > length) {
    $('.topo-site').show();
  } else {
    $('.topo-site').hide();
  }
});




/* LETRAS EM FORMATO DE DIGITAÇÃO */

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["WordPress Developer", "PHP Developer", "Creative Designer"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});






/* EFEITO MENU MOBILE */

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);