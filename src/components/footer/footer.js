import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './footer.less';
import view from './footer.stache';

export const ViewModel = DefineMap.extend({
  message: {
    default: 'This is the sin-footer component'
  }
});

export default Component.extend({
  tag: 'sin-footer',
  ViewModel,
  view
});
