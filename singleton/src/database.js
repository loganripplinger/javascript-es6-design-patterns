let instance = null;

class DatabaseSingleton {
	constructor() {
    if (instance) {
      return instance
    } 
    
		this.hash = {}
    instance = this;
    return instance;
	}

	add(item) {
		if (!(item in this.hash)) {
      this.hash[item] = null;
    }
	}

  find(item) {
    return item in this.hash;
  }
};

export default DatabaseSingleton;