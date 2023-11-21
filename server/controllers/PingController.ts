import { Request, Response } from "express"

export class PingController {
  public static ping = async (_req: Request, res: Response) => {
    res.send({
      test: "pong",
      test1: "pong",
      test2: "pong",
    })
  }
}
