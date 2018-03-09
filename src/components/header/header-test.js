import QUnit from 'steal-qunit';
import { ViewModel } from './header';

// ViewModel unit tests
QUnit.module('~/components/header');

QUnit.test('Can Exist', function(){
  var vm = new ViewModel();
  QUnit.equal(vm instanceof ViewModel, true, 'It is instance of ViewModel');
});
