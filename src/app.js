import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';
import 'can-stache-route-helpers';
import 'can-debug#?./is-dev';
import './utils/konami';

const AppViewModel = DefineMap.extend({
  init(){
    window.appVM = this;
    console.log('%cThanks for checking out the source!', 'background: black; color: yellowgreen; font-size: large'); // eslint-disable-line no-console
    console.log('%cThis project is built for maximum performance.', 'background: black; color: yellowgreen; font-size: large'); // eslint-disable-line no-console
    console.log('%cIf you want to see un-bundled/un-minified code, OS repo is here:', 'background: black; color: yellowgreen; font-size: large'); // eslint-disable-line no-console
    console.log('%chttps://github.com/sinjhin/sinjhin.github.io', 'font-size: large'); // eslint-disable-line no-console
    console.log('%cAlso... the konami code certainly won`t work here...', 'background: black; color: yellowgreen; font-size: small'); // eslint-disable-line no-console
  },
  env: {
    default: () => ({NODE_ENV:'development'}),
    serialize: false
  },
  title: {
    default: 'John Gardner Resume Site',
    serialize: false
  },
  page: {
    type: 'string',
    serialize: true,
    set(val) {
      if (this.page === 'portfolio' && val !== 'portfolio') {
        this.navShown = true;
        this.footerShown = true;
      }
      return val;
    }
  },
  navShown: {
    type: 'boolean',
    default: false,
    serialize: false
  },
  contactShown: {
    type: 'boolean',
    default: false,
    serialize: false
  },
  footerShown: {
    type: 'boolean',
    default: false,
    serialize: false
  },
  toggleNav() {
    this.navShown = !this.navShown;
  },
  toggleContact() {
    this.contactShown = !this.contactShown;
  },
  toggleFooter() {
    this.footerShown = !this.footerShown;
  }
});

route.register( '{page}', { page: 'home' } );

export default AppViewModel;
