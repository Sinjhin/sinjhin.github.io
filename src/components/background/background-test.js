import QUnit from 'steal-qunit';
import { ViewModel } from './background';

// ViewModel unit tests
QUnit.module('~/components/background');

QUnit.test('Can Exist', function(){
  var vm = new ViewModel();
  QUnit.equal(vm instanceof ViewModel, true, 'It is instance of ViewModel');
});
