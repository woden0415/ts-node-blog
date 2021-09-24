import * as http from 'http'
import { add } from "./a";

const sum: number = add(10,20)
console.log(sum)

const server = http.createServer((req, res) =>{
  res.writeHead(200, {'content-type': 'text/html'})
  res.end('<h1>hello world</h1>')
})

server.listen(3000, ()=>{
  console.log('3000端口已经启用');
})