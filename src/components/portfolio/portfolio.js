import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './portfolio.less';
import view from './portfolio.stache';

export const ViewModel = DefineMap.extend({
  message: {
    default: 'This is the sin-portfolio component'
  }
});

export default Component.extend({
  tag: 'sin-portfolio',
  ViewModel,
  view
});
