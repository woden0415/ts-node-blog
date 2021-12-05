export interface mysqld {
  host: string,
  user: string,
  password: string,
  port: number,
  database: string
}

export interface IRedis {
  host: string,
  port: number
}