
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                 Saqlain Xd  𝐁𝐎𝐓                                                //
//                                                                                                     // 
//                                         Ｖ：3.0                                                      // 
//                                                                                                      // 
//              ██╗  ██╗██╗     ██╗ ██████╗ ██████╗ ███╗   ██╗      ██╗   ██╗██████╗                    //
//              ╚██╗██╔╝██║     ██║██╔════╝██╔═══██╗████╗  ██║      ██║   ██║╚════██╗                   //
//                ╚███╔╝ ██║     ██║██║     ██║   ██║██╔██╗ ██║█████╗██║   ██║ █████╔╝                  //
//               ██╔██╗ ██║     ██║██║     ██║   ██║██║╚██╗██║╚════╝╚██╗ ██╔╝ ╚═══██╗                   //
//              ██╔╝ ██╗███████╗██║╚██████╗╚██████╔╝██║ ╚████║       ╚████╔╝ ██████╔╝                   //
//              ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝        ╚═══╝  ╚═════╝                    //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
 //  * @project_name : Saqlain Xd Bot
 //  * @author : 🤴⃝💫𝐒ᴀͥϙʟᴀɪɴ 𝐊ʜᷧᴀͫɴ❦⃝🤴🏻
 //  * @youtube : https://youtube.com/@SAQLAINTECH184
//   * @description : Saqlain Xd Bot ,A Multi-functional whatsapp user bot.
//*
//* 
//base by Saqlain Xd Bot
//re-upload? recode? copy code? give credit ya :)
//Instagram: https://www.instagram.com/msaqlainroy?igsh=MWp1ZjI3ZXVzbm9ubg==
//Telegram: t. me/saqlainkhan184
//GitHub: @mrsaqlainkhan184
//WhatsApp: +923310256226
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@SAQLAINTECH184
//   * Created By Github: Saqlain Xd Bot
//   * Credit To Mr Saqlain
//   * © 2024 Saqlain Xd Bot
// ⛥┌┤
// */

const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//owmner v card
//________________________________________________________________________________________________________
global.ytname = process.env.YT_NAME || "YT: SAQLAINTECH184" //SAQLAINTECH184
//________________________________________________________________________________________________________
global.socialm = process.env.MEDIA || "GitHub: msaqlainroy" //msaqlainroy
//________________________________________________________________________________________________________
global.location = process.env.GL_INFO || "Pakistan, Lahore, Sabzazar" //ur location
//________________________________________________________________________________________________________

//new
//________________________________________________________________________________________________________
global.botname = process.env.BOT_NAME || 'Saqlain Xd Bot' //ur bot name
//________________________________________________________________________________________________________
global.ownernumber = process.env.SUDO || '923310256226' //ur owner number
//________________________________________________________________________________________________________
global.ownername = process.env.SUDO_NAME || '🤴⃝💫𝐒ᴀͥϙʟᴀɪɴ 𝐊ʜᷧᴀͫɴ❦⃝🤴🏻' //ur owner name
//________________________________________________________________________________________________________
global.websitex = process.env.YT_LINK || "https://youtube.com/@SAQLAINTECH184"
//________________________________________________________________________________________________________
global.wagc = process.env.GL_PUSH || "https://whatsapp.com/channel/0029VaSWb88EFeXd75qqZN1k"
//________________________________________________________________________________________________________
global.themeemoji = process.env.GL_EMOJI || '🏮'
//________________________________________________________________________________________________________
global.wm = process.env.GL_WM || "Saqlain Xd Bot"
//_________________________________________________________________________________________________
global.botscript = process.env.GL_SC || 'https://github.com/salmanytofficial/XLICON-V3-MD' //script link
//________________________________________________________________________________________________________
global.packname = process.env.PACK_NAME || "Saqlain Xd Bot"
//________________________________________________________________________________________________________
global.author = process.env.AUTHER_NAME || "ᗰᗩᗪE ᗷY 🤴⃝💫𝐒ᴀͥϙʟᴀɪɴ 𝐊ʜᷧᴀͫɴ❦⃝🤴🏻"
//________________________________________________________________________________________________________
global.creator = process.env.GL_DEVS || "923310256226@s.whatsapp.net"
//________________________________________________________________________________________________________
global.xprefix = process.env.PREFIX || '.'
//________________________________________________________________________________________________________
global.premium = process.env.GL_VIP || ["923310256226"] // Premium User
//________________________________________________________________________________________________________
global.hituet = 0
//________________________________________________________________________________________________________

//bot sett
//________________________________________________________________________________________________________
global.typemenu = process.env.MENU_DESIGN || 'v4' // menu type 'v1' => 'v8'
//________________________________________________________________________________________________________
global.typereply = process.env.REPLY_TYPE || 'v2' // reply type 'v1' => 'v3'
//________________________________________________________________________________________________________
global.autoblocknumber = process.env.AUTO_BAN || '212' //set autoblock country code
//________________________________________________________________________________________________________
global.antiforeignnumber = process.env.AUTO_BLOCK || '212' //set anti foreign number country code
//________________________________________________________________________________________________________
global.welcome = process.env.WELCOME_MSG || true //welcome/left in groups
//________________________________________________________________________________________________________
global.anticall = process.env.GL_NOCALL || false //bot blocks user when called
//________________________________________________________________________________________________________
global.autoswview = process.env.AUTO_STATUS_SEEN || true //auto status/story view
//________________________________________________________________________________________________________
global.adminevent = process.env.ANNOUNCE_MSG  || true //show promote/demote message
//________________________________________________________________________________________________________
global.groupevent = process.env.GROUP_ANNOUNCE_MSG || true //show update messages in group chat
//________________________________________________________________________________________________________


//msg
global.mess = {
	limit: '_*Your limit is up!*_',
	nsfw: '_*Nsfw is disabled in this group, Please tell the admin to enable*_',
    done: '_*Done ✓*_',
    error: '_*I am having error to execute this*_',
    success: '_*Here you go!*_'
}
//thumbnail
global.thumb = fs.readFileSync('./XliconMedia/theme/xliconpic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
