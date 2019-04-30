require("dotenv").config();

const authToken = process.env.TWILIO_TOKEN;
const accountSid = process.env.TWILIO_SID;

const client = require("twilio")(accountSid, authToken);

client.messages
 .create({
   from: "whatsapp:+14155238886",
   body: "Hello there!",
   to: "whatsapp:+254712345678"
 })
 .then(message => console.log(message.sid));
