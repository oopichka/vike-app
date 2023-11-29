import { Request, Response } from "express"
export const pinFunc = () => {
  // get this thing thing
  // get this thing thing
  // get this thing thing
  // get this thing thing

  return {
    test: "pong",
    test1: "pong",
    test2: "pong",
  }
}
export class PingController {
  public static ping = async (_req: Request, res: Response) => {
    res.send(pinFunc())
  }
}
