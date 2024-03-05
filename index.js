import { parseArgs } from "node:util"
import logger from "./util/logger.js"
import fs from "node:fs"
import webserver from "./webserver.js"
import id from "./util/id.js"

export const {values: args} = parseArgs({
    options: {
        development: {
            type: "boolean",
            short: "d",
        }
    },
});

if(args.development){
    logger.info("Development environment active")
}

logger.debug("Trying to find config...")
export let config
{
    let config_path = "./config/config.json"
    if(args.development) config_path = "./config/config.development.json"
    
    if(fs.existsSync(config_path)){
        logger.log("Config found at", config_path)
        config = JSON.parse( fs.readFileSync(config_path, { encoding: "utf-8" }) )
    }
    else{
        logger.error("Unable to load config, searching for", config_path)
        logger.error("Exiting...")
        process.exit(1)
    }
}

if(!config.database){
    logger.error("Config missing mandatory entry".red, "database")
    logger.error("Exiting...")
    process.exit(1)
}
logger.debug("Using database", config.database)

logger.debug("Starting up webserver...")

webserver(config)