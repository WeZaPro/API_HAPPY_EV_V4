const axios = require("axios");

const sendLineNotify = async (userId, message) => {
  const CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN;

  let messagesPayload;
  if (typeof message === "string") {
    messagesPayload = [{ type: "text", text: message }];
  } else if (typeof message === "object" && message !== null) {
    messagesPayload = [message];
  } else {
    throw new Error("Invalid message format");
  }

  const response = await axios.post(
    "https://api.line.me/v2/bot/message/push",
    {
      to: userId,
      messages: messagesPayload,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
      },
    }
  );

  return response.data;
};

module.exports = { sendLineNotify }; // ✅ ส่งออกเป็น object
