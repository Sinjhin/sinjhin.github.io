import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './about-me.less';
import view from './about-me.stache';

export const ViewModel = DefineMap.extend({
  description: {
    type: 'string',
    default: ''
  },
  aboutMeDescriptionImage: {
    type: 'string',
    default: '/src/img/about-me/telekinetic-laptop.jpg'
  },
  setDescription(item) {
    switch(item) {
      case 'travel':
        this.description = 'travel';
        this.aboutMeDescriptionImage = '/src/img/about-me/mountain-top-buddha.jpg';
        break;
      case 'motorcycles':
        this.description = 'motorcycles';
        this.aboutMeDescriptionImage = '/src/img/about-me/bike-and-lake.jpg';
        break;
      case 'gaming':
        this.description = 'gaming';
        this.aboutMeDescriptionImage = '/src/img/about-me/gaming-setup.jpg';
        break;
      case 'reading':
        this.description = 'reading';
        this.aboutMeDescriptionImage = '/src/img/about-me/reading.jpg';
        break;
      case 'dog':
        this.description = 'dog';
        this.aboutMeDescriptionImage = '/src/img/about-me/cool-dog.JPG';
        break;
      default:
        this.description = '';
        this.aboutMeDescriptionImage = '/src/img/about-me/telekinetic-laptop.jpg';
        break;
    }
  }
});

export default Component.extend({
  tag: 'sin-about-me',
  ViewModel,
  view
});
