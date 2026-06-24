import http from "node:http";

const users = [
	{
		name: "Pedro",
		status: true,
	},
	{
		name: "Tiken",
		status: false,
	},
	{
		name: "Tiago",
		status: true,
	},
];

http
	.createServer((request, response) => {
		if (request.url === "/users" && request.method === "GET") {
			response.writeHead(200, { "content-type": "application/json" });
			response.end(JSON.stringify(users));
			return;
		}

		response.writeHead(404, { "content-type": "text/plain" });
		response.end("Not Found!");
	})
	.listen(Number(process.env.PORT));
