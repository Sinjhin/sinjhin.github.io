import QUnit from 'steal-qunit';
import { ViewModel } from './contact-me';

// ViewModel unit tests
QUnit.module('~/components/contact-me');

QUnit.test('Can Exist', function(){
  var vm = new ViewModel();
  QUnit.equal(vm instanceof ViewModel, true, 'It is instance of ViewModel');
});
