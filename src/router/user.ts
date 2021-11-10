import { ServerResponse } from "http";
import { loginCheck } from "../controller.ts/user";
import { ErrorModel, SuccessModel } from "../model/resModel";
import { CustomIncomingMessage } from "../types";

const handleUserRouter = async (req: CustomIncomingMessage, res: ServerResponse): Promise<any> => {
  // 登录
  if (req.isPost && req.path === '/api/user/login') {
    const { username, password } = req.body;
    try {
      const data = await loginCheck(username, password)
      if (data.username) return new SuccessModel('登录成功');
      return new ErrorModel('登录失败')
    } catch (error) {
      return new ErrorModel(error)
    }
  }
}

export {
  handleUserRouter
};
