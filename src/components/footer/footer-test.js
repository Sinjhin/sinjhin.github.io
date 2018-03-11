import QUnit from 'steal-qunit';
import { ViewModel } from './footer';

// ViewModel unit tests
QUnit.module('~/components/footer');

QUnit.test('Can Exist', function(){
  var vm = new ViewModel();
  QUnit.equal(vm instanceof ViewModel, true, 'It is instance of ViewModel');
});
