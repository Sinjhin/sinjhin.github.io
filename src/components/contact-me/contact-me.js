import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './contact-me.less';
import view from './contact-me.stache';

let animationTimer;

export const ViewModel = DefineMap.extend({
  toggleContact: 'any',
  shown: {
    type: 'boolean',
    default: false
  },
  connectedCallback() {
    this.shown = true;

    return function() {
      clearInterval(animationTimer);
    };
  },
  slideOut() {
    this.shown = false;
    animationTimer = setTimeout(() => {
      this.toggleContact();
    }, 250);
  }
});

export default Component.extend({
  tag: 'sin-contact-me',
  ViewModel,
  view
});
