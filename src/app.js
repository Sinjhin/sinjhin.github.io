import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';
import 'can-stache-route-helpers';
import 'can-debug#?./is-dev';

const AppViewModel = DefineMap.extend({
  init(){
    window.appVM = this;
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
    serialize: true
  },
  navShown: {
    type: 'boolean',
    default: false,
    serialize: false
  },
  toggleNav() {
    this.navShown = !this.navShown;
  }
});

route.register( '{page}', { page: 'home' } );

export default AppViewModel;
