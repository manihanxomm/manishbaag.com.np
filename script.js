// Slider
const images=['images/slide1.jpg','images/slide2.jpg','images/slide3.jpg'];
let index=0;const img=document.getElementById('slider-image');
const change=(d)=>{index=(index+d+images.length)%images.length;img.src=images[index];};
setInterval(()=>change(1),4000);
document.getElementById('next').onclick=()=>change(1);
document.getElementById('prev').onclick=()=>change(-1);

// Mobile menu
const ham=document.querySelector('.hamburger');
const nav=document.querySelector('.nav-links');
ham.onclick=()=>nav.classList.toggle('show');

// Dark / Light Mode
const toggle=document.getElementById('themeToggle');
toggle.onclick=()=>{
  const theme=document.body.getAttribute('data-theme')==='light'?'dark':'light';
  document.body.setAttribute('data-theme',theme);
};

// Contact Form (EmailJS placeholder)
document.getElementById('contactForm').onsubmit=e=>{
  e.preventDefault();
  document.getElementById('formStatus').innerText='Message sent successfully (connect EmailJS/backend).';
};
