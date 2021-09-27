import { ServerResponse } from "http";
import * as querystring from 'querystring';
import { handleBlogRouter } from "./src/router/blog";
import { handleUserRouter } from "./src/router/user";
import { CustomIncomingMessage } from "./src/types";

const serverHandle = async (req: CustomIncomingMessage, res: ServerResponse) => {
  res.setHeader('Content-type', 'application/json')
  // 提前解析query

  const url = req.url;
  req.path = url.split('?')[0];
  req.isGet = req.method === 'GET';
  req.isPost = req.method === 'POST'

  req.query = querystring.parse(url.split('?')[1]);

  req.body = null;
  // req.on('data', (cusStream) => {
  //   cusStream+
  // })

  // 处理blog路由
  const blogData = handleBlogRouter(req, res)
  if (blogData) {
    res.end(JSON.stringify(blogData))
    return
  }
  const userData = handleUserRouter(req, res)
  if (userData) {
    res.end(JSON.stringify(userData))
    return
  }

  // 未命中路由
  res.writeHead(404, { "Content-type": "text/plain" })
  res.write("404 Not Found")
  res.end()
}

export default serverHandle

