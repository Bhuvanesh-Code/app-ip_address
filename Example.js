/**
 * Example IAP product using ES6 syntax.
 * @module ExampleItentialProduct
 */

/**
 * Demonstration IAP product
 */
class ExampleItentialProduct {

  /**
   * Object's constructor takes a name and assigns it to a private variable.
   * @param {string} name - A person's name.
   */
  constructor(name) {
    /** @private */
    this.name = name;
  }

  /**
   * This callback type is called 'iapCallback'.
   *
   * @callback iapCallback
   * @param {*} responseData - Data a function returns.
   * @param {*} responseError - A runtime error.
   */

  /**
   * Returns a hello prompt for the name passed to constructor.
   * @param {iapCallback} callback - The callback that handles the response.
   */
  sayhello(callback) {
    let name = this.name;
    let returnData = 'Hello ' + name;
    let returnError = null;
    callback(returnData, returnError);
  }
}

// Instantiate an object from class ExampleItentialProduct and add it to the root
// of the module so IAP can import the ExampleItentialProduct object.
module.exports = new ExampleItentialProduct("James Kirk");