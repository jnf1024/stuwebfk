var http = require("http"); //��ȡhttpģ�����
var server = http.createServer();  //����http.server����ʵ��
server.on("request",handle);

function handle(request,response){
	response.write("<h1>This is a test</h1>");
	response.end();
}

server.listen(3000);
