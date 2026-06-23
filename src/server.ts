import http from "node:http";

http
	.createServer(() => console.log("knocked on the door!"))
	.listen(Number(process.env.PORT));
