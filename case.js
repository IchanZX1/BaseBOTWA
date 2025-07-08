const fs = require('fs');
const chalk = require('chalk');
const {
  default: makeWASocket,
  makeWALegacySocket,
  extractMessageContent,
  makeInMemoryStore,
  proto,
  downloadMediaMessage,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  getBinaryNodeChild,
  jidDecode,
  areJidsSameUser,
  generateWAMessage,
  generateWAMessageContent,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  WAMessageStubType,
  getContentType,
  relayMessage,
  WA_DEFAULT_EPHEMERAL
} = require('@whiskeysockets/baileys');
const { get } = require('http');
const moment = require('moment-timezone');

module.exports = chanzx = (chanzx, msg, messages, store) => {
       try {
 if (msg.key.id.startsWith('BAE5') && msg.key.id.length === 16) {
            return;
        }
        const type = getContentType(msg.message);
        const content = JSON.stringify(msg.message);
        const from = msg.key.remoteJid;
        const quoted = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage || null;
        var body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : 
                   (type === 'extendedTextMessage' && msg.message.extendedTextMessage.text) ? msg.message.extendedTextMessage.text : 
                   (type === 'imageMessage' && msg.message.imageMessage.caption) ? msg.message.imageMessage.caption : 
                   (type === 'videoMessage' && msg.message.videoMessage.caption) ? msg.message.videoMessage.caption : 
                   (type === 'documentMessage' && msg.message.documentMessage.caption) ? msg.message.documentMessage.caption : 
                   '';
                   const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
        const isGroup = from.endsWith('@g.us');
        const sender = isGroup ? msg.participant : msg.key.remoteJid;
        const senderJid = jidDecode(sender) || {};
        const senderNumber = senderJid.user || senderJid.id || senderJid;
        const senderName = msg.pushName || senderJid.user || senderJid.id || senderJid;
        const isMe = areJidsSameUser(sender, chanzx.user.id);
        const isBot = areJidsSameUser(sender, chanzx.user.id);

        // Handle incoming messages
        if (msg.message) {
            const time = moment().tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss');
            const bgColor = chalk.bgHex('#222831');
            const txtColor = chalk.hex('#00adb5');
            const cmdColor = chalk.hex('#f8b400');
            const senderColor = chalk.hex('#ff2e63');
            const nameColor = chalk.hex('#08d9d6');
            const statusColor = chalk.hex('#393e46');

            const status = isGroup ? 'Group' : 'Private';
            const statusStyled = isGroup
                ? statusColor.bgHex('#f8b400').bold(' [GROUP] ')
                : statusColor.bgHex('#00adb5').bold(' [PRIVATE] ');

            console.log( chalk.white.bold('[') +
                chalk.white.bgHex('#ffffff').bold(' NEW UPDATE MESSAGE ') + chalk.white.bold(']  ') + chalk.hex('#ffffff').bgHex('#bb16f7').bold(` ${botName} `) + '\n' +
                bgColor(' ') +
                txtColor(` [${time}] `) +
                statusStyled +
                cmdColor(` CMD: ${isCmd ? command : '-'} `) +
                senderColor(` FROM: ${senderNumber.replace(/^(\d{4})\d+(\d{4})$/, '$1*****$2')} `) +
                nameColor(` NAME: ${senderName} `) +
                txtColor(` MSG: ${body.slice(0, 60)}${body.length > 60 ? '...' : ''} `)
            );
        } else {
            console.log(`Received empty message from ${msg.key.remoteJid}`);
        }

        // Example: Send a response back
        if (isCmd) {
            // Handle commands here
            switch (command) {
                case 'ping':
                    chanzx.sendMessage(from, { text: 'Pong!' }, { quoted: msg });
                    break;
                case 'time':
                    chanzx.sendMessage(from, { text: `Current time: ${moment().tz('Asia/Jakarta').format('HH:mm:ss')}` }, { quoted: msg });
                    break;
                    case '':
                    chanzx.sendMessage(from, { text: `📦 *REALM MINECRAFT* 📦

Hai Hai Hai Minecrafter 👋🏻 

main Minecraft di server emang seru.. tapi setup nya susah gak si?
mana sering ngelag lagi 🤔

mendingan beli realm aja! *#DiZovaStore* digital store!

🗣️ : realm itu apa sih min
👤 : realm itu semacam server postingan langsung dari Minecraft, dengan setup yang sangat mudah karna langsung ingame, tanpa panel panel ribet, dan bahkan banyak include marketplace gratis yang akan kalian dapatkan, sehingga mempermudah pemasangan map serta kalian gabakal bosan!

💸 : 55.000,- / 2 bulan

Tunggu apa lagi? gassken sikat!!` }, { quoted: msg });
                    break;

                    // RegExp for greeting and product inquiry
                    case 'halo':
                    case 'admin':
                    case 'ahmad':
                    case 'zovamin1290':
                    case 'produk':
                    case 'zovastore':
                    case 'realm':
                    case 'minecraft':
                        // RegExp to match variations of the inquiry
                        const inquiryRegex = /halo.*admin.*ahmad.*zovamin1290.*(produk|zovastore|realm|minecraft)/i;
                        if (inquiryRegex.test(body.replace(/%2[0o]duk0przovastore/gi, 'produk zovastore'))) {
                            chanzx.sendMessage(from, { text: `📦 *REALM MINECRAFT* 📦

Hai Hai Hai Minecrafter 👋🏻 

main Minecraft di server emang seru.. tapi setup nya susah gak si?
mana sering ngelag lagi 🤔

mendingan beli realm aja! *#DiZovaStore* digital store!

🗣️ : realm itu apa sih min
👤 : realm itu semacam server postingan langsung dari Minecraft, dengan setup yang sangat mudah karna langsung ingame, tanpa panel panel ribet, dan bahkan banyak include marketplace gratis yang akan kalian dapatkan, sehingga mempermudah pemasangan map serta kalian gabakal bosan!

💸 : 55.000,- / 2 bulan

Tunggu apa lagi? gassken sikat!!` }, { quoted: msg });
                        }
                        break;
                default:
                    chanzx.sendMessage(from, { text: `Unknown command: ${command}` }, { quoted: msg });
            }
        }
       } catch (error) {
           console.error("Error in chanzx module:", error);
       }
    }

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})