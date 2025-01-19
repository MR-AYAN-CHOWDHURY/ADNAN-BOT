module.exports.config = {
    name: "info",
    version: "1.0.0",
    permission: 0,
    credits: "VEX_ADNAN",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.imgur.com/RyivO4N.jpeg","https://i.imgur.com/Yp3jLKP.jpeg", "https://i.imgur.com/RyivO4N.jpeg",];
var callback = () => api.sendMessage({body:`➢🄾🅆🄽🄴🅁   🄰🄽🄳   🄱🄾🅃  🄸🄽🄵🄾

⁂𝘽𝙤𝙩 𝙉𝙖𝙢𝙚: ${global.config.BOTNAME}

✡𝘽𝙤𝙩 𝙋𝙧𝙚𝙛𝙞𝙭: ${global.config.PREFIX}

✫𝘽𝙤𝙩 𝙊𝙬𝙣𝙚𝙧🌼 :♦️𝗩𝗘𝗫_𝗔𝗗𝗡𝗔𝗡♦️,

✬𝐅𝐛 𝐋𝐢𝐧𝐤: ♣️
https://www.facebook.com/VEX.ADNAN.404,

➳✴️𝗩𝗘𝗫_𝗔𝗗𝗡𝗔𝗡-404✴️

🔰𝘽𝙤𝙩 𝘼𝙙𝙢𝙞𝙣𝙨🔰[𝗩𝗘𝗫_𝗔𝗗𝗡𝗔𝗡-404]


➳𝙐𝙥𝙩𝙞𝙢𝙚 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 ✨: 30.0.1

✬𝐌𝐨𝐝𝐢𝐟𝐢𝐞𝐝 𝐁𝐲 : 𝗩𝗘𝗫_𝗔𝗗𝗡𝗔𝗡-404 🔰

✬𝙏𝙤𝙙𝙖𝙮 𝙞𝙨📜: ${juswa} 

➳𝘽𝙤𝙩 𝙞𝙨 𝙍𝙪𝙣𝙣𝙞𝙣𝙜⌚ ${hours}:${minutes}:${seconds}.

🔻𝐁𝐎𝐓 𝐔𝐍𝐃𝐄𝐑 𝐏𝐑𝐎𝐓𝐄𝐂𝐓𝐄𝐃 𝐁𝐘 𝐀𝐃𝐌𝐈𝐍𝐒🔺 

✫𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧 𝙐𝙨𝙞𝙣𝙜 ${global.config.BOTNAME} Bot!`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
