const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
const prefix = '+'


client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});
client.on('ready', () => {
     client.user.setActivity("+help",{type: 'WATCHING'})

});

client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
('+avatar ' , 'كود الافاتار ') 
('+roll ' , 'كود القرعة ') 
('+id ' , 'لعرض معلوماتك') 
('+server' , 'لمعلومات سيرفر') 
('رابط السيرفر الي تكتب الاوامر بيه' ,' رابط  ')
('+invite   ' ,' لاضافه البوت   ')
('+roles' ,'لاضهار رتب  سيرفر بالترتيب')
('+infobot ' ,'معلومات البوت')
('+bc ' , 'لارسال رساله جماعية')
('+v2min ' , 'لانشاء روم مؤقت بتأكيد')
('+ping ' , 'سرعه بوت')
('+vc ' , 'كيك فويس')
('removeRoles+1 ' , 'لحذف جميع رتب')
('+invites ' , 'لمعرفه عدد الاعضاء الذي دخلوا عبرك')
('+mutechannel ' , 'لقفل الشات')
('+unmutechannel ' , 'لفتح الشات')
('+rooms ' , 'لاضهار الرومات')
('+calculator ' , 'الالة الحسابية')
('+serverimage ' , 'لاضهار صوره السيرفر')
('+image ' , 'لاضهار صورتك')
('roleadd ' , 'لاعطاء رتبه')
('+roleremove ' , 'لازاله الرتبه')
('+nickname ' , 'لتغير اسم العضو')
('+Mute ' , 'لاعطاء ميوت شات مع سبب')
('UnMute ' , 'لفك ميوت شات')
('+clear ' , 'لمسح الشات حد اقصى 200رساله') 
('+seroles' , 'انشاء رتب جاهزه')
('+removerooms' , 'لازالة جميع الرومات')
('+createcolors' , 'لانشاء 137 الوان')
('+deletecolors' , 'لحذف جميع الوان')
('+bcc ' , 'لارسال رساله جماعية')
('+watch ' , 'اسم البوت')
('+hide' , 'لاخفاء جميع رومات في سسيرفر')
     ('اوامر صاحب البوت')
('prefix ', '+')
('playing ', 'تم تغيير الحالة')
('streem ', 'لتم تغيير الحالة الى ستريمنج')
('setavatar ', 'لتم تغير صورة البوت')
('setname ', 'لتم تغير الأسم')
('roleCreate' , '')
('roleDelete' , '')
('deleteChannel' , '')
('messageUpdate' , 'تعديل رسالة ارسالة')
('guildMemberAdd' , '')
('guildMemberRemove' , '')
('+removeroles' , 'لحذف جميع رتب')
('+unhide' , 'لفتح جميع رومات')
('+ban' , 'لاعطاء باند')
('+unbans' , 'لفك باند عن جميع')
('لاتخيار الوان الذي تريده' , 'لون')
('+e' , 'You must provide some text to emojify!')
('+data' , 'التاريخ : " + اليوم + "-" + الشهر + "-" +السنة')
('+rps' , 'حجرة','ورقة','مقص')
('قوانين' , '')
('+voice' , 'كود الفويس اونلاين بشكل حلو')
('خواطر' , '')
('+color' , '')
('+owner' , 'كود تأكد من ملكيه البوت')
تحذير :البوت يمتلك لوق يعمل في روم يسمى log
البوت يقوم بطرد من ينشر سيرفر تحذير`)


   message.author.sendEmbed(embed)
   
   }
   }); 
client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
	const prefix = '+'
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});






client.login(process.env.BOT_TOKEN);
