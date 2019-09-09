'use strict';

var _testClass = require('./test-class');

var _testClass2 = _interopRequireDefault(_testClass);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const Test = require('./test-class');
var t = _testClass2.default.create('t1');

t.showName(_data2.default.name);

t.work1();

t.work2().then();

var work3 = t.work3();
work3.next();
work3.next();