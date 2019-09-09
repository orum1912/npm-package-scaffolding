export default class Test {
  static props = 'static props';
  static create = (name) => {
    return new Test(name);
  };
  constructor(name) {
    this.name = name;
  }
  showName() {
    console.log('My name is ' + this.name);
  }
  work1 = () => {
    // object rest & spread
    ((a, b, ...c) => {
      console.log(a, b, c);
    })(1,2,3,4,5);
  };
  async work2() {
    console.log('begin work1');
    await new Promise(resolve => {
      setTimeout(resolve, 300);
    });
    console.log('done work1');
  }
  *work3() {
    console.log('begin work2');
    yield new Promise(resolve => {
      setTimeout(resolve, 300);
    });
    console.log('done work2');
    yield;
  }
}
