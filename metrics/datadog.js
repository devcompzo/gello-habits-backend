const ddOptions = {
  response_code: true,
  tags: ['app:gello-habits'],
};

const datadog = require('connect-datadog')(ddOptions);

module.exports = datadog;
