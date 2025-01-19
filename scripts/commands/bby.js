const axios = require("axios");

module.exports = {
  config: {
    name: "bby",
    version: "0.0.2",
    permission: 0,
    prefix: true,
    credits: "VEX_ADNAN",
    description: "Auto video download and chat teaching",
    category: "user",
    usages: "",
    cooldowns: 5,
  },

  start: async function({ nayan, events, args }) {
    try {
      const msg = args.join(' ').trim();

      if (!msg) {
        return nayan.sendMessage(
          { body: "❗ Please provide a message or teaching input." }, 
          events.threadID, 
          events.messageID
        );
      }

      if (args[0] === "teach") {
        const ask = msg.slice(5).trim();
        const parts = ask.split('-');

        if (parts.length === 2) {
          const ask1 = parts[0].trim();
          const ans = parts[1].trim();

         const res =  await axios.post(`https://adnan-simsimi-apis.onrender.com/teach`, {
            input: ask1,
            response: ans,
          });

          console.log(res.data)

          return nayan.sendMessage(
            { body: `✅ Successfully taught: "${ask1}" with response: "${ans}"` }, 
            events.threadID, 
            events.messageID
          );
        } else {
          return nayan.sendMessage(
            { body: "❗ Use the format: teach question-answer" }, 
            events.threadID, 
            events.messageID
          );
        }
      }

      
      const response = await axios.post(`https://adnan-simsimi-apis.onrender.com/chat`, {
        input: msg,
        lang: 'en',
      });

      const res = response.data.response;
      nayan.sendMessage({ body: res }, events.threadID, events.messageID);

    } catch (error) {
      console.error(error);
      nayan.sendMessage(
        { body: "❗ An error occurred. Please try again later." }, 
        events.threadID, 
        events.messageID
      );
    }
  }
};
