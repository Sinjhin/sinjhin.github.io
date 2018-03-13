import QUnit from 'steal-qunit';
import { ViewModel } from './top-nav';

// ViewModel unit tests
QUnit.module('~/components/top-nav');

QUnit.test('Can Exist', function(){
  var vm = new ViewModel();
  QUnit.equal(vm instanceof ViewModel, true, 'It is instance of ViewModel');
});
