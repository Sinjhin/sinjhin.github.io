import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './header.less';
import view from './header.stache';

export const ViewModel = DefineMap.extend({
});

export default Component.extend({
  tag: 'header',
  ViewModel,
  view
});
