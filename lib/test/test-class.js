'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Test = function () {
  function Test(name) {
    _classCallCheck(this, Test);

    _initialiseProps.call(this);

    this.name = name;
  }

  _createClass(Test, [{
    key: 'showName',
    value: function showName() {
      console.log('My name is ' + this.name);
    }
  }, {
    key: 'work2',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('begin work1');
                _context.next = 3;
                return new Promise(function (resolve) {
                  setTimeout(resolve, 300);
                });

              case 3:
                console.log('done work1');

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function work2() {
        return _ref.apply(this, arguments);
      }

      return work2;
    }()
  }, {
    key: 'work3',
    value: /*#__PURE__*/regeneratorRuntime.mark(function work3() {
      return regeneratorRuntime.wrap(function work3$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('begin work2');
              _context2.next = 3;
              return new Promise(function (resolve) {
                setTimeout(resolve, 300);
              });

            case 3:
              console.log('done work2');
              _context2.next = 6;
              return;

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, work3, this);
    })
  }]);

  return Test;
}();

Test.props = 'static props';

Test.create = function (name) {
  return new Test(name);
};

var _initialiseProps = function _initialiseProps() {
  this.work1 = function () {
    // object rest & spread
    (function (a, b) {
      for (var _len = arguments.length, c = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        c[_key - 2] = arguments[_key];
      }

      console.log(a, b, c);
    })(1, 2, 3, 4, 5);
  };
};

exports.default = Test;