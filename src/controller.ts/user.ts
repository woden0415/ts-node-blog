import { blog } from './../types/blog';
import exec from '../db/mysql';
import { user } from '../types/user';

export const loginCheck = (username: string, password: string): Promise<user> => {
  const sql = `select username, realname from users where username='${username}' and password='${password}'`
  return exec(sql).then((rows: Array<user>) => {
    return rows[0] || {}
  })
}
