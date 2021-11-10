import { OkPacket } from 'mysql';
import exec from '../db/mysql';
import { blog } from './../types/blog';

export const getBlogList = async (id: number, author: string, keyword: string): Promise<Array<blog>> => {
  let sql = `select * from blogs where 1=1 `
  if (id) {
    sql += `and id='${id}' `
    sql += `order by createtime desc`
    return exec(sql) as Promise<Array<blog>>;
  }

  if (author) {
    sql += `and author='${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
    sql += `or content like '%${keyword}%' `
  }
  sql += `order by createtime desc`
  return exec(sql) as Promise<Array<blog>>;
}

export const getBolgDetail = async (id: number): Promise<blog> => {
  const sql = `select * from blogs where id='${id}'`;
  const rows = await exec(sql) as Array<blog>;
  return rows[0];
}

export const newBlog = async (blog: blog = {}): Promise<blog> => {
  const sql = `insert into blogs (title, content, createtime, author) values ('${blog.title}', '${blog.content}', ${blog.createTime}, '${blog.author}');`
  try {
    const row = await exec(sql) as OkPacket;
    return { id: row.insertId };
  } catch (e) {
    return { id: e };
  }
}

// 更新
export const updateBlog = async (id: number, blogData: blog = {}): Promise<Boolean> => {
  const { title, content } = blogData
  const sql = `update blogs set title='${title}', content='${content}' where id=${id}`

  try {
    const updateData = await exec(sql) as OkPacket;
    if (updateData.affectedRows > 0) return true;
    return false;
  } catch (error) {
    return error
  }
}

export const delBlog = async (id: number, author: string): Promise<Boolean> => {
  const sql = `delete from blogs where id='${id}' and author='${author}'`
  try {
    const deleteData = await exec(sql) as OkPacket;
    if (deleteData.affectedRows > 0) return true;
    return false;
  } catch (error) {
    return error;
  }
}