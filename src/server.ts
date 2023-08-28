import fastify from "fastify";
import bookRoutes from "./routes/bookRoutes";

const server = fastify({
  logger: true,
});

server.register(bookRoutes);

const start = async () => {
  try {
    await server.listen(3000);
    server.log.info(`Server running at http://localhost:3000/`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
