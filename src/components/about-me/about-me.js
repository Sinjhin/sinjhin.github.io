import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './about-me.less';
import view from './about-me.stache';

export const ViewModel = DefineMap.extend({
  message: {
    default: 'This is the sin-about-me component'
  }
});

export default Component.extend({
  tag: 'sin-about-me',
  ViewModel,
  view
});
