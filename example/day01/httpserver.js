var http = require("http"); //��ȡhttpģ�����
var server = http.createServer();  //����http.server����ʵ��
server.on("request",handle);

function handle(request,response){
	response.write("<b>This is a test</b>");
	response.end();
}

server.listen(3000);
