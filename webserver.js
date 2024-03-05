import logger from "./util/logger.js"
import express from "express"
import database from "./util/database.js"
import ejs from "ejs"

const app = express()

app.use( express.static('public') )

export default function (config){
    const port = 3033
    if(!(config.webserver && config.webserver.port)){
        logger.warn("Config is missing webserver configuraion. Falling back to defaults...")
    }
    else {
        port = config.webserver.port
    }
    
    app.listen(port, () => {
        logger.info(`Webserver up and running on port ${port}`)
    })
}

app.get('', (req, res) => {
    logger.debug("Serving", req.url, "to", req.ip)
    req.next()
})
    
app.get('/', (req, res) => {
    
    res.render('layouts/master.ejs', { body: "list", data: database.getRows() })
})