var http = require("http");
const qstring=require("querystring")
const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    
const qparams=qstring.parse(req.url.split("?")[1]);
const url= req.url.split("?")[0];
console.log(qparams);
    if (url == "/") {
        res.writeHead(200, { "Content-type": "text/plain" })
        res.write("Welcome to Dominos!");
        res.end();
    }
    else if (url == "/contact") {
        res.writeHead(200, { "Content-type": "text/json" })
        res.write(JSON.stringify({
            phone: qparams.phone,
            email: qparams.email
        })
        )
        res.end();
    }
  else {
            res.writeHead(404, { "Content-type": "text/plain" })
            res.write("Page not found")
            res.end()
        }
    }
    httpServer.listen(8081, console.log("Server is up"));
    module.exports = httpServer;