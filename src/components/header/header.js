import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './header.less';
import view from './header.stache';

export const ViewModel = DefineMap.extend({
  message: {
    default: 'This is the header component'
  },

});

export default Component.extend({
  tag: 'header',
  ViewModel,
  view
});
