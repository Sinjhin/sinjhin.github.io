import QUnit from 'steal-qunit';
import { ViewModel } from './project';

// ViewModel unit tests
QUnit.module('~/components/project');

QUnit.test('Can Exist', function(){
  var vm = new ViewModel();
  QUnit.equal(vm instanceof ViewModel, true, 'It is instance of ViewModel');
});
