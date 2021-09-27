import * as http from 'http';
import serverHandle from '../app';
const server = http.createServer(serverHandle)


server.listen(3000, () => {
  console.log('3000端口已经启用');
})