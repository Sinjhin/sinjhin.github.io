import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './top-nav.less';
import view from './top-nav.stache';

export const ViewModel = DefineMap.extend({
  message: {
    default: 'This is the sin-top-nav component'
  },
  toggleNav: 'any',
  connectedCallback() {
    const animationTimer = setTimeout(() => {
      this.toggleNav();
    }, 500);

    return function() {
      clearInterval(animationTimer);
    };
  }
});

export default Component.extend({
  tag: 'sin-top-nav',
  ViewModel,
  view
});
