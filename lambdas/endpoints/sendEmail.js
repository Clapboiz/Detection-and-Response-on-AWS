const Responses = require("../common/API_Responses");
// const AWS = require("aws-sdk");
var AWS = require("aws-sdk/dist/aws-sdk-react-native");

const SES = new AWS.SES();

exports.handler = async (event) => {
  console.log("event", event);

  const { to, from, subject, text } = JSON.parse(event.body);

  if (!to || !from || !subject || !text) {
    return Responses._400({
      message: "to, from, subject and text are all required in the body",
    });
  }

  const params = {
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Body: {
        Text: { Data: text },
      },
      Subject: { Data: subject },
    },
    Source: from,
  };

  try {
    await SES.sendEmail(params).promise();
    return Responses._200({});
  } catch (error) {
    console.log("error sending email ", error);
    return Responses._400({ message: "The email failed to send" });
  }
};
