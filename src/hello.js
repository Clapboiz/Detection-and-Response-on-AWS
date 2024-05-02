"use strict";

// Inject vulnerability using Codeguru library
var kramed = require("kramed");

function doNotDisableHtmlAutoEscapeNoncompliant() {
  var setOptions = {
    renderer: new kramed.Renderer({
      // Noncompliant: sanitize is set to 'false'.
      sanitize: false,
    }),
  };
}

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v2.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
