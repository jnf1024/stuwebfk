var http = require("http"); //获取http模块对象
var server = http.createServer();  //创建http.server对象实例
server.on("request",handle);

function handle(request,response){
	response.write("<h1>This is a test</h1>");
	response.end();
}

server.listen(3000);
