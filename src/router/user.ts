import { request, ServerResponse } from "http";
import { login } from "../controller.ts/user";
import { ErrorModel, SuccessModel } from "../model/resModel";
import { CustomIncomingMessage } from "../types";
import { getCookieExpires } from "../util";




const handleUserRouter = async (req: CustomIncomingMessage, res: ServerResponse): Promise<any> => {
  // 登录
  if (req.isGet && req.path === '/api/user/login') {
    const { username, password } = req.query;
    try {
      const data = await login(username, password)
      res.setHeader('Set-Cookie', `username=${username}; path=/; httpOnly; expires=${getCookieExpires()}`)
      req.session.username = data.username;
      req.session.realName = data.realname;
      if (data.username) return new SuccessModel('登录成功');
      return new ErrorModel('登录失败')
    } catch (error) {
      return new ErrorModel(error)
    }
  }

  if (req.isGet && req.path === '/api/user/login-test') {
    if (req.session.username) {
      return new SuccessModel({ session: req.session })
    }

    return new ErrorModel('尚未登录')
  }

}

export {
  handleUserRouter
};
