
const socialLinks = document.querySelectorAll('.footer-social a');

socialLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const url = e.currentTarget.href;
    window.open(url, '_blank');
  });
});
