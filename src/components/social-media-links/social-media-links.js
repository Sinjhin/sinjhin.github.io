import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './social-media-links.less';
import view from './social-media-links.stache';
// import fontawesome from '@fortawesome/fontawesome';
// import faSolid from '@fortawesome/fontawesome-free-solid';
// import faBrands from '@fortawesome/fontawesome-free-brands';

// fontawesome.library.add(faSolid);
// fontawesome.library.add(faBrands);

export const ViewModel = DefineMap.extend({
  toggleFooter: 'any',
  connectedCallback() {
    // fontawesome.dom.css();
    // fontawesome.dom.i2svg();

    const animationTimer = setTimeout(() => {
      this.toggleFooter();
    }, 500);

    return function() {
      clearInterval(animationTimer);
    };
  }
});

export default Component.extend({
  tag: 'sin-social-media-links',
  ViewModel,
  view
});
