import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'john-gardner-resume-site/models/test';

import '~/components/background/background-test';

import '~/components/main/main-test';

import '~/components/footer/footer-test';

import '~/components/top-nav/top-nav-test';

import '~/components/portfolio/portfolio-test';

import '~/components/project/project-test';

F.attach(QUnit);

QUnit.module('john-gardner-resume-site functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('john-gardner-resume-site main page shows up', function() {
  F('title').text('John Gardner Resume Site', 'Title is set');
});
