import { Router } from "../../../mod.ts";
import { IRouter, Response, Request } from "../../../src/types.ts";

const APIv1: IRouter = Router();

APIv1.get("/", function (req: Request, res: Response) {
  res.send("Hello from APIv1 root route.");
});

APIv1.get("/users", function (req: Request, res: Response) {
  res.send("List of APIv1 users.");
});

export default APIv1;
