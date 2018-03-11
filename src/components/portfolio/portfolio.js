import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './portfolio.less';
import view from './portfolio.stache';

export const ViewModel = DefineMap.extend({
  message: {
    default: 'This is the sin-portfolio component'
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
  tag: 'sin-portfolio',
  ViewModel,
  view
});
