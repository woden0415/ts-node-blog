import { ServerResponse } from "http";
import { SuccessModel } from "../model/resModel";
import { CustomIncomingMessage } from "../types";

const handleUserRouter = async (req: CustomIncomingMessage, res: ServerResponse): Promise<any> => {
  // 登录
  if (req.isPost && req.path === '/api/user/login') {
    return new SuccessModel(req.body)
  }
}

export {
  handleUserRouter
};
