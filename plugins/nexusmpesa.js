const axios = require("axios");
const { cmd } = require("../command");


cmd({
    pattern: "mpesamenu",
    alias: ["pesa"],
    desc: "menu the bot",
    category: "menu",
    react: "🎀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*╭───★BUY ME COFFEE☕ ★*
★‎├† .ᴍᴘᴇsᴀ*
‎★├† .ᴀɪʀᴛᴇʟᴍᴏɴᴇʏ*
‎★╰───────────────❍*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/ug8w1x.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '𝗟𝗮𝗱𝘆_𝗕𝗲𝗹𝗹𝗮🎀',
                        newsletterName: "𝗟𝗮𝗱𝘆_𝗕𝗲𝗹𝗹𝗮🎀 PAYMENT",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
