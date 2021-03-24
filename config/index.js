const { Console } = require('console');
const http=require('http');

let serveEntry=(response) => {
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("<h2>This is the entry point for this app</h2>");
    response.write("<a href='/nextpage'>Next Page</a>");
    response.end();
}
let serveNextPage=(response) => {
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("<h2>This is the Next Page for this app</h2>");
    response.write("<a href='/'>Main Page</a>");
    response.end();
}
let send404Error=(response) => {
    response.writeHead(404,{"Content-Type":"text/html"});
    response.write("What you ask that did not exist");
}
let onRequest=(request,response) => {
    if(request.method=='GET' && request.url=='/')
    {
        serveEntry(response);
    } 
    else if(request.method == 'GET' && request.url=='/nextpage')
    {
        serveNextPage(response);
    }
    else 
    {
        send404Error();
    }
    console.log('User made a Request');
    console.log(request.url);
    console.log(request.method);
}

http.createServer(onRequest).listen(3000,'127.0.0.1');
