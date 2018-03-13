import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './project.less';
import view from './project.stache';

export const ViewModel = DefineMap.extend({
  title: 'string',
  duty: 'string',
  pic: 'string',
  toggleNav: 'any',
  picShown: {
    type: 'boolean',
    default: false
  },
  detailsShown: {
    type: 'boolean',
    default: false
  },
  showProjectPic() {
    this.picShown = true;
  },
  hideProjectPic() {
    this.picShown = false;
  },
  showProject(event) {
    event.preventDefault();
    this.toggleNav();
    this.detailsShown = true;
    this.hideProjectPic();
  },
  closeProject() {
    this.toggleNav();
    this.detailsShown = false;
  }
});

export default Component.extend({
  tag: 'sin-project',
  ViewModel,
  view
});
