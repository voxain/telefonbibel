import colors from "colors"
import {args} from "./../index.js"

const tags = {
    log: " [" + "LOG" + "]  ",
    info: "█".cyan + "IFO".bgCyan + "█ ".cyan,
    warn: "█".yellow + "WRN".bgYellow + "█ ".yellow,
    error: "█".red + "ERR".bgRed + "█ ".red,
    debug: "█".gray + "DBG".bgGray + "█ ".gray
}

export default {
    log: (...text) => {
        console.log(process.uptime().toFixed(7).toString().gray, tags.log, ...text)
    },
    info: (...text) => {
        console.log(process.uptime().toFixed(7).toString().gray, tags.info, ...text)
    },
    warn: (...text) => {
        console.log(process.uptime().toFixed(7).toString().gray, tags.warn, ...text)
    },
    error: (...text) => {
        console.log(process.uptime().toFixed(7).toString().gray, tags.error, ...text)
    },
    debug: (...text) => {
        if(args.development) console.log(process.uptime().toFixed(7).toString().gray, tags.debug, ...text)
    },
}
