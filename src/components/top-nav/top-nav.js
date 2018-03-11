import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './top-nav.less';
import view from './top-nav.stache';

export const ViewModel = DefineMap.extend({
  message: {
    default: 'This is the sin-top-nav component'
  }
});

export default Component.extend({
  tag: 'sin-top-nav',
  ViewModel,
  view
});
