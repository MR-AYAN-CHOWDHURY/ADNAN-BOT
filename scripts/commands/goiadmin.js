module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100078390232964") {
    var aid = ["100078390232964"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["𝗠𝗮𝗻𝘁𝗶𝗼𝗻 𝗱𝗶𝘆𝗲𝗻 𝗻𝗮𝗵 𝗔𝗻𝘁𝗵𝗼𝗻𝘆 𝗯𝗼𝘀𝘀 𝗮𝗿 𝗺𝗼𝗻 𝘃𝗮𝗹𝗼 𝗻𝗮𝗶 <😭💔", "𝗠𝘆 𝗔𝗻𝘁𝗵𝗼𝗻𝘆 𝗯𝗼𝘀𝘀 𝘃𝗲𝗿𝗿𝘆 𝗯𝘂𝘀𝘆 𝗽𝗮𝗿𝗮𝗼𝗻🏵️🖤🖤", "𝗔𝗻𝘁𝗵𝗼𝗻𝘆 𝗦𝗶𝗿 𝗸 𝗔𝗸𝘁𝗮 𝗴𝗳 𝗴𝗶𝗳𝘁 𝗸𝗼𝗿𝗲𝗻 <🥺🥺","𝗔𝗻𝘁𝗵𝗼𝗻𝘆 𝘀𝗶𝗿 𝗼𝗻𝗻𝗲𝗸 𝗰𝘂𝘁𝗲 𝗮𝗸𝘁𝗮 𝗽𝗿𝗲𝗺 𝗸𝗼𝗿𝗮𝗶 𝗱𝗲 𝘀𝗶𝗿 𝗸 <😇","𝗝𝗶 𝗯𝗼𝗹𝗲𝗻 𝗸𝗶 𝗯𝗼𝗹𝗯𝗲𝗻 𝗔𝗻𝘁𝗵𝗼𝗻𝘆 𝘀𝗶𝗿 𝗮𝗸𝘁𝘂 𝗯𝘂𝘀𝘆 𝗮𝘀𝗲 <☺️","𝗞𝗶𝗿𝗲 𝘀𝗶𝗿 𝗸 𝗮𝘁𝗼 𝗱𝗶𝘀𝘁𝘂𝗿𝗯 𝗸𝗼𝗿𝗼𝘀 𝗸𝗻 <😒","𝗔𝗻𝘁𝗵𝗼𝗻𝘆 𝘀𝗶𝗿 𝗯𝘂𝘀𝘆 𝗮𝘀𝗲 𝗮𝗸𝗵𝗼𝗻 𝗸𝗶 𝗯𝗼𝗹𝗯𝗲𝗻 𝗮𝗺𝗮𝗸𝗲 𝗯𝗼𝗹𝗲𝗻 🙂🙂","𝗠𝗮𝗻𝘁𝗶𝗼𝗻 𝗱𝗶𝘆𝗲 𝗹𝗮𝘃 𝗻𝗮𝗶 𝗿𝗲𝗽𝗹𝘆 𝗱𝗶𝗯𝗲 𝗻𝗮 𝘀𝗶𝗿 🙂🌼","𝗦𝗶𝗿 𝗻𝗮𝗶 𝗸𝗶 𝗯𝗼𝗹𝗯𝗲𝗻 𝗮𝗺𝗮𝗸𝗲 𝗯𝗼𝗹𝗲𝗻 <☺️","𝗦𝗶𝗿 𝗽𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗶𝗻𝗴 𝗸𝗼𝗿𝘁𝗲 𝗯𝘂𝘀𝘆 𝗮𝘀𝗲 <📔","𝗛𝗲 𝗶𝘀 𝘃𝗲𝗿𝗿𝘆 𝗯𝘂𝘀𝘆 <😎","𝗔𝗻𝘁𝗵𝗼𝗻𝘆 𝘀𝗶𝗿 𝗯𝘂𝘀𝘆 𝗮𝘀𝗲 𝗽𝗼𝗿𝗲 𝗺𝘀𝗴 𝗱𝗶𝗯𝗲𝗻𝗲 <🌼"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
