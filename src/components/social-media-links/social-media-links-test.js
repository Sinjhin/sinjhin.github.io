import QUnit from 'steal-qunit';
import { ViewModel } from './social-media-links';

// ViewModel unit tests
QUnit.module('~/components/social-media-links');

QUnit.test('Can Exist', function(){
  var vm = new ViewModel();
  QUnit.equal(vm instanceof ViewModel, true, 'It is instance of ViewModel');
});
