import { IRedis, mysqld } from "../types/mysqld";

const env = process.env.NODE_ENV

let MYSQL_CONF: mysqld
let REDIS_CONF: IRedis

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'myblog'
  }
  REDIS_CONF = {
    host: 'localhost',
    port: 6379
  }
}

if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'myblog'
  }
}

export {
  MYSQL_CONF,
  REDIS_CONF
};
