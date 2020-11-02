function scrollToElement(element) {
  window.scrollTo({
    'behavior': 'smooth',
    'top': element.offsetTop
  });
}

document.querySelector('.menu').addEventListener('click', function() {
  document.querySelector('.menu-screen').classList.add('active');
});


document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.menu-screen').classList.remove('active');
});

document.querySelectorAll('.menu-screen a').forEach(link => {
  link.addEventListener('click', function(ev) {
    if(window.scrollTo) ev.preventDefault();
    document.querySelector('.menu-screen').classList.remove('active');
    console.log(this.href);
    paths = this.href.split('/');
    scrollToElement(document.querySelector(paths[paths.length - 1]));
    return !!window.scrollTo;
  });
});
