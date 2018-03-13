import QUnit from 'steal-qunit';
import { ViewModel } from './project';

// ViewModel unit tests
QUnit.module('~/components/project');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the sin-project component');
});
