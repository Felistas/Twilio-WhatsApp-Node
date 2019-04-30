# Twilio-WhatsApp-NodeJs
Send WhatsApp messages with image attachments using Twilio and Node js.

## Getting Started

Clone the Repo to your prefered directory. 
On your terrminal, run `cd Twilio-WhatsApp-Node` then 
run `npm install twilio dotenv` to install project dependancies.
Create `.env` file and add the following keys after obtaining the relevant values from your twilio dashboard
```
TWILIO_SID=your_twilio_sid
TWILIO_TOKEN=your_twilio_token
```
Activate your [WhatsApp Sandbox](https://www.twilio.com/blog/2018/08/twilio-whatsapp-api.html)

Run `node twilioWhatsAppMessaging.js`

Voila! We have sent out first WhatsApp message!. 
