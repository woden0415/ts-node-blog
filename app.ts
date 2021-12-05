import { ServerResponse } from "http";
import * as querystring from 'querystring';
import { handleBlogRouter } from "./src/router/blog";
import { handleUserRouter } from "./src/router/user";
import { CustomIncomingMessage } from "./src/types";
import { getCookieExpires } from "./src/util";

const SESSION_DATA: any = {}

const getPostData = (req: CustomIncomingMessage) => {
  return new Promise((resolve, reject) => {
    if (!req.isPost) {
      resolve({})
      return;
    }
    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
      return;
    }
    let postData = '';
    req.on('data', (chunk: Buffer) => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return;
      }
      resolve(JSON.parse(postData))
    })
  })
}

const serverHandle = async (req: CustomIncomingMessage, res: ServerResponse) => {
  res.setHeader('Content-type', 'application/json')
  // 提前解析query

  const url = req.url;
  req.path = url.split('?')[0];
  req.isGet = req.method === 'GET';
  req.isPost = req.method === 'POST'

  req.query = querystring.parse(url.split('?')[1]);

  // 解析cookie
  req.cookie = {};
  const cookieStr = req.headers.cookie || ''; // k1=v1;k2=k2
  cookieStr.split(';').forEach((item) => {
    if (!item) return;
    const arr = item.split('=');
    const key = arr[0].trim()
    const val = arr[1].trim()
    req.cookie[key] = val
  })

  // 解析session 
  let needSetSession = false // 
  let userId = req.cookie.userid;
  if (userId) {
    if (!SESSION_DATA[userId]) {
      SESSION_DATA[userId] = {}
    }
  } else {
    needSetSession = true
    userId = `${Date.now()}_${Math.random()}`
    SESSION_DATA[userId] = {}
  }
  req.session = SESSION_DATA[userId]
  try {
    const postData = await getPostData(req)
    req.body = postData
    // 处理blog路由
    try {
      const blogData = await handleBlogRouter(req, res)
      if (blogData) {
        if (needSetSession) {
          res.setHeader('Set-Cookie', `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)
        }
        res.end(JSON.stringify(blogData))
        return
      }
    } catch (error) {
      res.end(error)
      return;
    }

    const userData = await handleUserRouter(req, res)
    if (userData) {
      res.end(JSON.stringify(userData))
      return
    }

    // 未命中路由
    res.writeHead(404, { "Content-type": "text/plain" })
    res.write("404 Not Found")
    res.end()
  } catch (error) {
    res.write(JSON.stringify(error))
  }
}

export default serverHandle

