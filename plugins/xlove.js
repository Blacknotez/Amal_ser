const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://helpdeskgeek.com/wp-content/pictures/2019/09/Hacker-Hat-Title-Image.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bot Name: Arora*

*Creator number : wa.me/918593938626?text=Hii%20Black%20notez.%20*

 *To check update .update   To update Bot .update now*
     
 *Instagram id: https://www.instagram.com/black_notez*

 *githublink : https://github.com/Blacknotez/arora*

 *Hope you Enjoy This Thanku 🥰*
`}) 

}));
