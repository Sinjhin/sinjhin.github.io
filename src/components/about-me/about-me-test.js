import QUnit from 'steal-qunit';
import { ViewModel } from './about-me';

// ViewModel unit tests
QUnit.module('~/components/about-me');

QUnit.test('Can Exist', function(){
  var vm = new ViewModel();
  QUnit.equal(vm instanceof ViewModel, true, 'It is instance of ViewModel');
});
