import * as http from 'http'
import * as querystring from 'querystring'
import { URLSearchParams } from 'url';
import { add } from "./a";

const sum: number = add(10,20)
console.log(sum)

const server = http.createServer((req, res) =>{
  const url = req.url
  console.log('url :>> ', url);
  const query = new URLSearchParams(url.split('?')[1])
  res.end(query.toString())
})

server.listen(3000, ()=>{
  console.log('3000端口已经启用');
})