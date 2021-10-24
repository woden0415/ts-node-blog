import { ServerResponse } from "http";
import { login } from "../controller.ts/user";
import { ErrorModel, SuccessModel } from "../model/resModel";
import { CustomIncomingMessage } from "../types";

const handleUserRouter = async (req: CustomIncomingMessage, res: ServerResponse): Promise<any> => {
  // 登录
  if (req.isPost && req.path === '/api/user/login') {
    const { username, password } = req.body;
    const data = await login(username, password)
    if (data) {
      return new SuccessModel('登录成功');
    }
    return new ErrorModel('登录失败')

  }
}

export {
  handleUserRouter
};
