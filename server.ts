import app from "./src/app";
import config from "./src/configs/config.mongodb";
const { port } = config.app;
const PORT = port || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log(`Exit server express`));
});
