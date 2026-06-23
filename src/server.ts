import http from "node:http";

http
	.createServer(() => console.log("Olá, mundo!"))
	.listen(Number(process.env.PORT));
