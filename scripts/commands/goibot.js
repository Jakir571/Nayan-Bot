const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["আমি এখন রায়হান maমার সাথে বিজি আছি..!!😾","ইস এত ডাকো কেনো লজ্জা লাগে তো..!🙊🙈","অনুমতি দিলে 𝚈𝚘𝚞𝚃𝚞𝚋𝚎-এ কল দিতাম..!😒","মন দে ছিনি মিনি খেলমু..!🤭🤭","আমি তো অন্ধ কিছু দেখি না🐸 😎","জান তোমার নানি'রে আমার হাতে তুলে দিবা-🙊🙆‍♂","আমাকে ডাকলে তোমার কি লাভ হবে-!!🥲😔","আরেক বার আমাকে ডাকলে তুমার জৈবন লক করে দিবো একটা থাপ্পড় দিয়ে-!!😈👊","এতো ডাকো কেনো আমাকে..!😒","তোর কি চোখে পড়ে না আমি রায়হান মামার সাথে ব্যাস্ত আছি..!!😒", "দিনশেষে পরের 𝐁𝐎𝐖 সুন্দর-☹️🤧"," আমি আবাল দের সাথে কথা বলি না -ok😒😏", "Love you 3000-😍💋💝", "তোর কি আর কোন কাজ নাই শুধু bot bot করতাছস?🤧🥶","আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস রায়হান ধরতে পারছে না-🐸🥲", " যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বস রায়হান এর সাথে প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗 ", "শুনবো না, তুমি আমার রায়হান মামাকে প্রেম করাই দেও নাই তুমি পচা..!!😒","তোর কথা তোর বাড়ির কেউ শোনে না তো আমি কেন শুনবো..!!🐸🙂", "Hmm jan ummah😘😘"," আমি কিন্তু এখন রেগে জাচ্ছি😑🤖","","মেয়ে হইলে বেশি bot bot না কইরে রায়হান বসকে I love you বলো 🙈আর ছেলে হলে একটা গার্লফ্রেন্ড খুঁজে দাও : নে রায়হান  বসের আইডির লিংক=> https://www.facebook.com/profile.php?id=100078140734060","💌:-চলো তো বিয়ে করে ফেলি ব!ল..!🙂 ","জি তুমি কি আমাকে ডেকেছো 😇🖤🥀","আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒","এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬","আহ্ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘 ","বুকের বাম পাশে এসি সহ একটা ফ্লাট খালি আছে...একজন বিশ্বস্ত ভাড়াটিয়া চাই😊...!🙈👀 ","বার বার ডাকলে মাথা গরম হয়ে জায় কিন্তু 😣😖","আমাকে ডেকো না,আমি রায়হান মামার সাথে ব্যাস্ত আছি..!!😤😤","বেশি bot Bot করলে leave নিবো কিন্তু😒😒","কি হলো , মিস্টেক করচ্ছিস নাকি🤣"," baby i love you😍😍","কি হইছে জান ডাকো কেন..!!😌","শুনতাছি বলো..!!👀"," Bot না জানু,বলো 😌😌"];
 
  var rand = tl[Math.floor(Math.random() * tl.length)]

if ((event.body.toLowerCase() == "রায়হান") || (event.body.toLowerCase() == "raihan")) {
     return api.sendMessage("রায়হান বস এখন বিজি আছে জা বলবেন আমাকে বলেন 🥰🥰", threadID);
   };
   
  if ((event.body.toLowerCase() == "sunny leon") || (event.body.toLowerCase() == "mia khalifa")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা,,এটা আমার বস রায়হান এর বউ এর নাম..!😠🥰🥀", threadID);
   };

    if ((event.body.toLowerCase() == "জারা") || (event.body.toLowerCase() == "zara")) {
     return api.sendMessage("খবরদার কেউ এই নাম ধরে ডাক দিবা না__ এটা হলো আমার বস রায়হানের কলিজার বেস্ট ফ্রেন্ডের নাম..!🥰🖤🥀", threadID);
   };
   
    if ((event.body.toLowerCase() == "assalamualaikum") || (event.body.toLowerCase() == "আসসালামু আলাইকুম")) {
     return api.sendMessage("ওয়ালাইকুম আসসালাম..!😌🩷", threadID);
   };

   if ((event.body.toLowerCase() == "bot love you") || (event.body.toLowerCase() == "bot i love you")) {
     return api.sendMessage("i love you too xaan's 🥵🙈", threadID);
   };
  
   if ((event.body.toLowerCase() == "bot kar") || (event.body.toLowerCase() == "kar bot")) {
     return api.sendMessage("আমাকে রায়হান বস বানাইছে..!!😒🫶", threadID);
   };

   if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gd n8")) {
     return api.sendMessage("যা যা ঘুমা সারাদিন অনেক টাংকি মারছোস..!!😴😴", threadID);
   };

  if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "শুভ সকাল")) {
     return api.sendMessage("good morning.. দাঁত ব্রাশ করে খেয়ে নাও..!!😊🥰", threadID);
   };

   if ((event.body.toLowerCase() == "miss you") || (event.body.toLowerCase() == "i miss you")) {
     return api.sendMessage("আমার রায়হান বস ও আপনাকে মিস করে..!😞🥀", threadID);
   };

   if ((event.body.toLowerCase() == "valobashi") || (event.body.toLowerCase() == "ভালোবাসি")) {
     return api.sendMessage("রায়হান বস আপনাকে রাইতে ভালোবাসে..!!🙈", threadID);
   };

   if ((event.body.toLowerCase() == "abl") || (event.body.toLowerCase() == "abal")) {
     return api.sendMessage("তুই আবাল তোর চৌদ্দগুষ্টি আবাল..!!🤬", threadID);
   };

   if ((event.body.toLowerCase() == "Hi") || (event.body.toLowerCase() == "hlw")) {
     return api.sendMessage("Hii Hlw না দিয়ে সালাম দাও..!!🥰", threadID);
   };

   if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣")) {
     return api.sendMessage("ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে..!🌚🤣", threadID);
   };


   if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👎")) {
     return api.sendMessage("️সর এখান থেকে লাইকার আবাল..!🐸🤣👍⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🫦")) {
     return api.sendMessage("️ এই লুচ্চা এখানে আমি আছি দেখস না লুচ্চামি করছ কেন..!!🤬🤬", threadID);
   };

   if ((event.body.toLowerCase() == "kemon acho") || (event.body.toLowerCase() == "kmn acho")) {
     return api.sendMessage("️আমি তখনই ভালো থাকি যখন আপনাকে হাসতে দেখি🤎☺️", threadID);
   };

   if ((event.body.toLowerCase() == "👀") || (event.body.toLowerCase() == "🫣")) {
     return api.sendMessage("️ কিরে কানা কি দেখোস..!!😒", threadID);
   };

   if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "💜")) {
     return api.sendMessage("️ এত ভালবাসা কই পাও  আমার বস রায়হান কে একটু ভালোবাসো..!!🥹🫶", threadID);
   };

   if ((event.body.toLowerCase() == "link") || (event.body.toLowerCase() == "I'd")) {
     return api.sendMessage("️ লে লো বসের আইডি লিংক https://www.facebook.com/profile.php?id=61552312071816", threadID);
   };

   if ((event.body.toLowerCase() == "ami raihan") || (event.body.toLowerCase() == "mui raihan")) {
     return api.sendMessage("️ওহ, রায়হান মামা কেমন আছেন..!!❤️", threadID);
   };

   if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ উপরে কি দেখোস, রায়হান বস এইদিকে..!!🙄", threadID);
   };

   if ((event.body.toLowerCase() == "tor boss ke") || (event.body.toLowerCase() == "tor boss kida")) {
     return api.sendMessage("️𝐨𝐧𝐥𝐲 𝐑𝐚𝐢𝐡𝐚𝐧..!!😘😇", threadID);
   };

   if ((event.body.toLowerCase() == "😾") || (event.body.toLowerCase() == "🤬")) {
     return api.sendMessage("️ রাগ দেখাও কেন, রাগ শরীরের জন্য ভালো না..!!😒", threadID);
   };
  
   if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "break up")) {
     return api.sendMessage("️ কিরে বলদ কই থেকে ছ্যাকা খেয়ে আসলি..!!💔 :)", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("️ কিস দেস না তোর মুখে অনেক গন্ধ..!🤢", threadID);
   };

   if ((event.body.toLowerCase() == "khaiso") || (event.body.toLowerCase() == "tmi khaicho")) {
     return api.sendMessage("না ঝাং 🥹 তুমি রান্না করে রাখো আমি এসে খাবো <😘", threadID);
   };
   
   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
     return api.sendMessage("𝐬𝐚𝐦𝐞 𝐭𝐨 𝐲𝐨𝐮 😊", threadID);
   };

   if ((event.body.toLowerCase() == "tor bal") || (event.body.toLowerCase() == "bal")) {
     return api.sendMessage("তোমার বাল উঠে নাই নাকি..?? 🤖", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "cup")) {
     return api.sendMessage("তুই চুপ তোর ১৪ গুষ্টি চুপ😼", threadID);
   };

   if ((event.body.toLowerCase() == "KISS ME") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("তুমি পঁচা তোমাকে কিস দিবো না 🤭", threadID);
   };

   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("এতো ধন্যবাদ না দিয়ে পারলে রায়হান বসকে তোর গার্লফ্রেন্ড টা দিয়ে দে..!🌚⛏️🌶️", threadID);
   };

   if ((event.body.toLowerCase() == "BOT ER BACCHA") || (event.body.toLowerCase() == "bot er baccha")) {
     return api.sendMessage("আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️🌶️", threadID);
   };

   if ((event.body.toLowerCase() == "xudi") || (event.body.toLowerCase() == "tore xudi")) {
     return api.sendMessage("এত চোদা চুদি করস কেনো দেখা যাবে বাসর-রাতে-তুই-কতো পারিস..!🥱🌝🌚⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "😔")) {
     return api.sendMessage("কি গো কলিজা তোমার কি মন খারাপ🥺", threadID);
   };

   if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye")) {
     return api.sendMessage("কিরে তুই কই যাস কার সাথে চিপায় যাবি..!🌚🌶️🫵", threadID);
   };
  
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
