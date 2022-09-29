const path = require("path")
const express = require("express")
const cors = require("cors")
const axios = require('axios');

const DiscoveryV2 = require('ibm-watson/discovery/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const discovery = new DiscoveryV2({
    version: /*process.env.DISCOVERY_VERSION*/,
    authenticator: new IamAuthenticator({
        apikey: /*process.env.DISCOVERY_APIKEY*/,
    }),
    serviceUrl: /*process.env.DISCOVERY_SERVICE_URL*/
});

const app = express()

const port = process.env.PORT || 3001

const publicDirPath = path.join(__dirname, "../public")

app.use(express.static(publicDirPath))

app.use(cors())

app.get("/search", async (req, res) => {
    discovery.listDocuments({ projectId: /*process.env.DISCOVERY_PROJECT_ID*/, collectionId: /*process.env.DISCOVERY_COLLECTION_ID*/ }).then((resu, err) => {
        res.send(resu.result)
    })
})

app.get("/getDocument", async (req, res) => {
    console.log(process.env.PORT)

    discovery.getDocument({
        projectId: /*process.env.DISCOVERY_PROJECT_ID*/,
        collectionId: /*process.env.DISCOVERY_COLLECTION_ID*/,
        documentId: 
    }).then((resu, err) => {
        res.send(resu)
    })
})

app.listen(port, () => {
    console.log("App is up on port " + port)
})