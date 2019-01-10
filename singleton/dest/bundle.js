(function () {
  'use strict';

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

  // Basic

  let instance = null;

  class Singleton1 {	
  	constructor() {
  		if (instance) {
  			return instance
  		}

      // constructor stuff here
      
      instance = this;
  		return instance;
  	}

    // method1() {}
  }

  // Less interesting but more clear?

  class _Singleton2 {	
  	constructor() {}
  }

  const Singleton2 = new _Singleton2;

  // Best
  // No dependency injection however
  var Singleton3 = {
  	method() {}
  };

  let instance$1 = null;

  class DatabaseSingleton {
  	constructor() {
      if (instance$1) {
        return instance$1
      } 
      
  		this.hash = {};
      instance$1 = this;
      return instance$1;
  	}

  	add(item) {
  		if (!(item in this.hash)) {
        this.hash[item] = null;
      }
  	}

    find(item) {
      return item in this.hash;
    }
  }

  // Learn about testing, the MOST SIMPLE form of testing

  ((desc) => {
    const a1 = new Singleton1();
    const b1 = new Singleton1();
    
    test(a1 === b1, `${desc}: assert that they are the same object.`);
  })('Singleton 1');

  ((desc) => {
    const a2 = Singleton2;
    const b2 = Singleton2;

    test(a2 === b2, `${desc}: assert that they are the same object.`);
  })('Singleton 2');

  ((desc) => {
    const a2 = Singleton3;
    const b2 = Singleton3;

    test(a2 === b2, `${desc}: assert that they are the same object.`);
  })('Singleton 3');

  ((desc) => {
    const db1 = new DatabaseSingleton();
    db1.add('first');
    test(db1.find('first') == true, `${desc}: add/find something we added passes.`);
    test(db1.find('third') == false, `${desc}: find something not there fails.`);
    
    db1.add('second');
    const db2 = new DatabaseSingleton();
    test(db2.find('second') == true, `${desc}: add to db1 and its found in db2.`);

    test(db1 === db2, `${desc}: assert that db1 and db2 are the same object.`);
  })('Database Singleton');

}());
