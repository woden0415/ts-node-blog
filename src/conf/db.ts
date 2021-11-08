import { mysqld } from "../types/mysqld";

const env = process.env.NODE_ENV

let MYSQL_CONF: mysqld

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'myblog'
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
  MYSQL_CONF
};
