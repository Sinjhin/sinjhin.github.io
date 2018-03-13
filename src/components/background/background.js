import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './background.less';
import view from './background.stache';

export const ViewModel = DefineMap.extend({
  message: {
    default: 'This is the sin-background component'
  },
  connectedCallback(el) {
    const portfolioTimer = setTimeout(() => {
      el.classList.add('shown');
    });

    return function() {
      clearInterval(portfolioTimer);
    };
  }
});

export default Component.extend({
  tag: 'sin-background',
  ViewModel,
  view
});
