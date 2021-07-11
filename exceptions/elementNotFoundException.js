const CustomException = require('./customException');

class ElementNotFoundException extends CustomException {
  constructor(message) {
    super('ELEMENT_NOT_FOUND', message, 404);
  }
}

module.exports = ElementNotFoundException;
