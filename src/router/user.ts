import { ServerResponse } from "http";
import { CustomIncomingMessage } from "../types";

const handleUserRouter = (req: CustomIncomingMessage, res: ServerResponse) => {
  // 登录
  if (req.isPost && req.path === '/api/user/login') {
    return '登录'
  }
}

export {
  handleUserRouter
};
