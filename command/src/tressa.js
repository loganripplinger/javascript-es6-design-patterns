/*! by @WebReflection & @daw985 */

// full module, compatible with node 0.8+ & browser
// https://github.com/WebReflection/tressa

// for sync tests
function test(condition, message) {
  try {
    console.assert.apply(console, arguments);
    if (typeof message === 'string' && condition) {
      console.log('✔ ' + message);
    }
  } catch(error) {
    test.exitCode = 1;
    console.error('✖ ' + error);
  }
}

// for async tests
test.async = function (fn, timeout) {
  var timer = setTimeout(
    function () { test(false, 'timeout ' + fn); },
    timeout || test.timeout
  );
  fn(function () { clearTimeout(timer); });
};

// default timeout
test.timeout = 10000;

// for node env only
try {
  process.on('exit', function () {
    process.exit(test.exitCode || 0);
  });
  module.exports = test;
} catch(browser) {}

export default test;