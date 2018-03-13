import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './project.less';
import view from './project.stache';

export const ViewModel = DefineMap.extend({
  message: {
    default: 'This is the sin-project component'
  }
});

export default Component.extend({
  tag: 'sin-project',
  ViewModel,
  view
});
