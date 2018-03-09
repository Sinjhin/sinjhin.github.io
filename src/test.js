import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'john-gardner-resume-site/models/test';

F.attach(QUnit);

QUnit.module('john-gardner-resume-site functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('john-gardner-resume-site main page shows up', function() {
  F('title').text('john-gardner-resume-site', 'Title is set');
});
