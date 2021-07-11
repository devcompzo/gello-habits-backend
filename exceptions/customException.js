class CustomException extends Error {
  constructor(name, message, status) {
    super();
    this.name = name;
    this.message = message;
    this.status = status;
  }
}

module.exports = CustomException;