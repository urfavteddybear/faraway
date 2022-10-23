require("dotenv").config();
const { resolve } = require("path");

module.exports = {
    TOKEN: process.env.TOKEN || "",  // your bot token
    PREFIX: process.env.PREFIX || "", //<= default is #  // bot prefix
    EMBED_COLOR: process.env.EMBED_COLOR || "", //<= default is "#000001"

    OWNER_ID: process.env.OWNER_ID || "", //your owner discord id example: "515490955801919488"

    NP_REALTIME: process.env.NP_REALTIME || "false", // "true" = realtime, "false" = not realtime :3 // WARNING: on set to "true" = laggy and bot will ratelimit if you have a lot of servers
    LEAVE_TIMEOUT: parseInt(process.env.LEAVE_TIMEOUT || "120000"), // leave timeout default "120000" = 2 minutes // 1000 = 1 seconds

    LANGUAGE: {
      defaultLocale: process.env.LANGUAGE || "en", // "en" = default language
      directory: resolve("languages"), // <= location of language
    },

    DEV_ID: [], // if you want to use command bot only, you can put your id here example: ["123456789", "123456789"]

    MONGO_URI: process.env.MONGO_URI || "", // your mongo uri
    LIMIT_TRACK: parseInt(process.env.LIMIT_TRACK || "1000"),  //<= dafault is "50" // limit track in playlist
    LIMIT_PLAYLIST: parseInt(process.env.LIMIT_PLAYLIST || "20"), //<= default is "10" // limit can create playlist

    NODES: [
      { 
        identifier: process.env.NODE_IDENTIFIER || "",
        host: process.env.NODE_HOST || "",
        port: parseInt(process.env.NODE_PORT || ""),
        password: process.env.NODE_PASSWORD || "",
      },
	{ 
        identifier: process.env.NODE_IDENTIFIER_BACKUP || "",
        host: process.env.NODE_HOST_BACKUP || "",
        port: parseInt(process.env.NODE_PORT_BACKUP || ""),
        password: process.env.NODE_PASSWORD_BACKUP || "",
      } 
    ],
}
