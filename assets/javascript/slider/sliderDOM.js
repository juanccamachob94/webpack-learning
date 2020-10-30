import Slider from './slider';

let sliderText = document.querySelector('#slider-text');
let sliderTitle = document.querySelector('#slider-title');
let sliderSubTitle = document.querySelector('#slider-subtitle');
let sliderImage = document.querySelector('#slider-image');


let slider = new Slider({
  elements: [
    {
      title: 'Lorem Ipsum A',
      subtitle: 'Ipsum',
      image: '../public/images/5.jpg',
      text: 'Esta es una prueba de programación. COntraty ti poidfasd delkefias  daskldoisad us sunoke asdrasd text. Esto no es clasigacal fdesde 45 FBA.'
    },
    {
      title: 'Lorem Ipsum B',
      subtitle: 'Ipsum',
      image: '../public/images/6.jpg',
      text: 'Esta es una prueba de programación. COntraty ti poidfasd delkefias  daskldoisad us sunoke asdrasd text. Esto no es clasigacal fdesde 45 FBA.'
    },
    {
      title: 'Lorem Ipsum C',
      subtitle: 'Ipsum',
      image: '../public/images/7.jpg',
      text: 'Esta es una prueba de programación. COntraty ti poidfasd delkefias  daskldoisad us sunoke asdrasd text. Esto no es clasigacal fdesde 45 FBA.'
    }
  ],
  animationFunc: function(element) {
    sliderText.innerHTML = element.text;
    sliderTitle.innerHTML = element.title;
    sliderSubTitle.innerHTML = element.subtitle;
    sliderImage.src = element.image;
  },

  speed: 2000
});

console.log('play');
slider.play();
