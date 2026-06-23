import http from "node:http";

const PORT = Number(process.env.PORT) || 3001;

const server = http.createServer(
	(req: http.IncomingMessage, res: http.ServerResponse) => {
		res.writeHead(200, { "content-type": "application/json" });
		res.end(JSON.stringify({ status: "ok" }));
	},
);

server.listen(PORT, () => {
	console.log(`Servidor na porta ${PORT}`);
});
