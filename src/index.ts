import "dotenv/config";
import { koa } from "./components/router";

const port = parseInt(process.env.HTTP_PORT!) || 3001;
koa.listen(port, process.env.HTTP_HOST);

for (let route of ["static-pages"]) {
  require("./routes/" + route)?.init?.();

  console.log(`Site running on port ${port}.`);
}
