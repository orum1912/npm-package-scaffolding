"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dec, _dec2, _dec3, _dec4, _class, _class2, _init, _init2, _class3, _temp;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

let Test = (_dec = isTestable(true), _dec2 = enumerable(false), _dec3 = enumerable(false), _dec4 = enumerable(false), _dec(_class = (_class2 = (_temp = _class3 = class Test {
  constructor(name) {
    this.work1 = () => {
      // object rest & spread
      ((a, b, ...c) => {
        console.log(a, b, c);
      })(1, 2, 3, 4, 5);
    };

    this.name = name;
  }

  showName() {
    console.log('My name is ' + this.name);
  }

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

}, _class3.props = 'static props', _class3.create = name => {
  return new Test(name);
}, _temp), (_applyDecoratedDescriptor(_class2, "props", [_dec2], (_init = Object.getOwnPropertyDescriptor(_class2, "props"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function () {
    return _init;
  }
}), _class2), _applyDecoratedDescriptor(_class2, "create", [_dec3], (_init2 = Object.getOwnPropertyDescriptor(_class2, "create"), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function () {
    return _init2;
  }
}), _class2), _applyDecoratedDescriptor(_class2.prototype, "showName", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "showName"), _class2.prototype)), _class2)) || _class);
exports.default = Test;

function isTestable(value) {
  return function decorator(target) {
    target.isTestable = value;
  };
}

function enumerable(value) {
  return function (target, key, descriptor) {
    descriptor.enumerable = value;
    return descriptor;
  };
}
//# sourceMappingURL=test-class.js.map