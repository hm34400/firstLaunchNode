const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(
	(request,response) => {
	response.statutsCode = 200;
	response.setHeader('Content-Type', 'text/plain');
	response.end('Salutttt');
	}
);

server.listen(port, hostname, function(){
	console.log('jecoute' + hostname + ":" + port )
});
