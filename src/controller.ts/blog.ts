import exec from '../db/mysql';
import { blog } from './../types/blog';

/**
 * @description 播客列表的测试数据
 * @param author 
 * @param keyword 
 * @returns 
 */
export const getBlogList = async (author: string, keyword: string): Promise<Array<blog>> => {
  let sql = `select * from blogs where 1=1 `
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

export const newBlog = async (blog: blog = {}): Promise<{ id: number }> => {
  const sql = `insert into blogs (title, content, createtime, author) values ('${blog.title}', '${blog.content}', ${blog.createTime}, '${blog.author}');`
  try {
    const row = await exec(sql) as { insertId: number };
    return { id: row.insertId };
  } catch (e) {
    return { id: e };
  }
}

// 更新
export const updateBlog = (id: number, blogData: blog = {}): Promise<any> => {
  console.log('id :>> ', id);
  console.log('updateBlog :>> ', id, blogData);
  return new Promise((resolve) => {
    resolve(true)
  })
}

export const delBlog = (id: number): Promise<any> => {
  console.log('id :>> ', id);
  return new Promise((resolve) => {
    resolve(true)
  })
}