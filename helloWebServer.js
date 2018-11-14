let http = require("http") 

function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"}) 
    response.write('Please give me bonus points for the "Tuesday Node Install Assignment " '+ request.url) 
    response.end() 
}

// create server & configure it with a callback function, invoked as each client connects
let server = http.createServer(onRequest) 
x=8888
server.listen(x)  // tell server to start listening on port 8888
console.log("Listening on port "+ x)
