const jsonServer = require("ra-data-json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.default.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Exemple de middleware pour modifier les requêtes
server.use((req, _, next) => {
    if (req.method === "POST") {
        req.body.createdAt = Date.now();
    }
    next();
});

server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`✅ JSON Server is running on http://localhost:${PORT}`);
});



// json-server --watch data.json --port 3001