// const Test = require('./test-class');
import Test from './test-class';
import data from './data';

const t = Test.create('t1');

t.showName(data.name);

t.work1();

t.work2().then();

const work3 = t.work3();
work3.next();
work3.next();
