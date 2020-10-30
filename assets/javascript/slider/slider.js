export default class Slider {
  constructor({ elements, animationFunc, speed }) {
    this.elements = elements;
    this.animationFunc = animationFunc;
    this.speed = speed;
    this.index = 0;
    this.size = elements.length;

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
  }

  next() {
    this.index++;
    if(this.index >= this.size) this.index = 0;
    this.animationFunc(this.elements[this.index]);
  }

  prev() {
    this.index--;
    if(this.index < 0) this.index = this.size - 1;
    this.animationFunc(this.elements[this.index]);
  }

  play() {
    this.interval = setInterval(this.prev, this.speed);
  }

  stop() {
    clearInterval(this.interval);
  }
};

// let slider = new Slider({
//   elements: [1, 2, 3, 4, 5],
//   asnimationFunc: function() {
//   }
// });

// slider.play();
// setTimeout(slider.stop, 5000);
