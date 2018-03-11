import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './main.less';
import view from './main.stache';

export const ViewModel = DefineMap.extend({
  message: {
    default: 'This is the sin-main component'
  }
});

export default Component.extend({
  tag: 'sin-main',
  ViewModel,
  view
});
