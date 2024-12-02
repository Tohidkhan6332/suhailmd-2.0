const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Tohidkhan6332";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaGyP933bbVC7G0x0i2T" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/M1BzE37.jpeg" || "https://i.imgur.com/M1BzE37.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "TOHID KHAN" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/M1BzE37.jpeg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "917849917350,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_15_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcyLFxuICAgICAgICAzMixcbiAgICAgICAgMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDk5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMzLFxuICAgICAgICA0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI4LFxuICAgICAgICAzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDksXG4gICAgICAgIDcxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NixcbiAgICAgICAgMTAzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICA4MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODIsXG4gICAgICAgIDExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0LFxuICAgICAgICA3MixcbiAgICAgICAgMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk3LFxuICAgICAgICA1NixcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDUxLFxuICAgICAgICA1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVTNzTFlsT1pSMjZ2REhaV3FPc3J4NExweVo3NDNRa0UvNVdtdk9oR2lvaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc4NDk5MTczNTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBDNzQyQTBGNEYyNkQ5QTZFRTAxQkE2M0JGRjcxOEVBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzEyMzc0NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKQ0UycTJLM1FpMmlDSXE4VVV0UFBRXCIsXG4gIFwicGhvbmVJZFwiOiBcImJlOWRlZjZlLWVhNGUtNDI0Mi1iZTU0LThlYmJjYzFkZDA3MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICAyMjcsXG4gICAgICAwLFxuICAgICAgNzAsXG4gICAgICAxNDksXG4gICAgICAyMDgsXG4gICAgICAzNSxcbiAgICAgIDUyLFxuICAgICAgMjQwLFxuICAgICAgMjcsXG4gICAgICAxMjYsXG4gICAgICAxMjgsXG4gICAgICA1OSxcbiAgICAgIDY1LFxuICAgICAgMTc4LFxuICAgICAgNTIsXG4gICAgICAxMzcsXG4gICAgICAyMTcsXG4gICAgICA4OSxcbiAgICAgIDM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NixcbiAgICAgIDE5NCxcbiAgICAgIDc0LFxuICAgICAgMjQ0LFxuICAgICAgMjM2LFxuICAgICAgMTczLFxuICAgICAgMTMyLFxuICAgICAgMjAyLFxuICAgICAgMzQsXG4gICAgICAyMixcbiAgICAgIDI1MCxcbiAgICAgIDE5NCxcbiAgICAgIDE5NCxcbiAgICAgIDE2NCxcbiAgICAgIDI0NSxcbiAgICAgIDIxMSxcbiAgICAgIDk1LFxuICAgICAgMTQyLFxuICAgICAgOTYsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMNTYyQlFKSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3ODQ5OTE3MzUwOjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2VhPCdlaNcXG5cXG5cXG5cXG7wnZWLXFxuXFxuXFxu8J2VoFxcblxcblxcbvCdlZlcXG5cXG5cXG7wnZWaXFxuXFxuXFxu8J2VlVwiLFxuICAgIFwibGlkXCI6IFwiMTExODYyNjU4MTU0NjI3OjM5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09MUHhzY0NFSmk5dGJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRC9OVEVvYUR4blhJME1tbHYzOEdGTnRhTURmUmlMaWxKaTNUek5LQ0p6ST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLYU1WMUtjc05aRmQzYXBsWEV6TUpLV0tmeUFKcGxaQUlpMTZ3OGVoN1FiTVhjOGF6anM0cVVSTDF0dzFFRVNaamVZYzZUZEQvbEFQQVN1L1d5bDhCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSbzd2anpadG9mK3RVUnFOV2lsWVI5VHNKQXkyQ3BBbktlU2lqSlF0ajhHaGtCMUZacFJFcHNlMkx3eWtqb1hOVUNyTWxsK2VhNFUrWHpoSVR4Mm9pZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc4NDk5MTczNTA6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzEyMzczOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU80dVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTzR1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUEl0SnRsNHRDM2RQV0dlemZYUXhCMHEwbUNPTFVBVEJXZ0ZuTTNMSjVFcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2ODY5MjU3OTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzMxMjI5ODY0ODNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ TOHID ® 』" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "TOHID KHAN",
  packname: process.env.PACK_NAME || "TOHID KHAN",
  botname : process.env.BOT_NAME  || "TOHID KHAN",
  ownername:process.env.OWNER_NAME|| "TOHID KHAN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "TOHID KHAN"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
