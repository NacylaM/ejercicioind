const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');



ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
})

$(window).resize(function() {
  var width = $(window).width();
  if (width < 768) {
      $('nav ul').addClass('responsive');
  } else {
      $('nav ul').removeClass('responsive');
  }
});


('.footer-social a');

socialLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const url = e.currentTarget.href;
    window.open(url, '_blank');
  });
});





   
















const socialLinks = document.querySelectorAll('.footer-social a');

socialLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const url = e.currentTarget.href;
    window.open(url, '_blank');
  });
});