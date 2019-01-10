// Best OOP example

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

  method1() {}
}

export default Singleton1;