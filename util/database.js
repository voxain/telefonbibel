import fs from "node:fs"
import logger from "./logger.js"
import {config} from "../index.js" 

export default {
    getRows(){
        return getJSONData().contacts
    }
}

function checkExist(){
    if(!fs.existsSync(config.database)){
        logger.error("DBConnector: Database file has not been found at", config.database, "- not serving reques")
        return false
    }
    return true
}

function getJSONData(){
    if(!checkExist()){
        return {}
    }
    return JSON.parse(fs.readFileSync(config.database, {encoding: "utf-8"}))
}