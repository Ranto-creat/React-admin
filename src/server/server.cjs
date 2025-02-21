const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Middleware pour ajouter l'en-tête X-Total-Count
server.use((req, res, next) => {
    res.header("Access-Control-Expose-Headers", "X-Total-Count");
    next();
});

server.use(router);

server.listen(3004, () => {
    console.log("✅ JSON Server tourne sur le port 3004");
});

