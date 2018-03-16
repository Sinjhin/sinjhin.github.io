import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './main.less';
import view from './main.stache';

export const ViewModel = DefineMap.extend({
  moto: {
    // default: 'The art of development'
    default: 'Passion for development in every keystroke'
  },
  message: {
    default: "Hi, I'm John and I specialize in creating quality on the web",  // eslint-disable-line
  },
  connectedCallback(el) {
    const animationTimer = setTimeout(() => {
      el.classList.add('shown');
    }, 500);

    return function() {
      clearInterval(animationTimer);
    };
  }
});

export default Component.extend({
  tag: 'sin-main',
  ViewModel,
  view
});
