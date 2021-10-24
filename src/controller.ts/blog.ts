import { blog } from './../types/blog';

/**
 * @description 播客列表的测试数据
 * @param author 
 * @param keyword 
 * @returns 
 */
export const getBlogList = (author: string, keyword: string): Array<blog> => {
  return [
    {
      id: 1,
      title: '标题1',
      content: '内容1',
      createTime: new Date().getTime(),
      author: author + '1',
      keyword: keyword + '1'
    },
    {
      id: 2,
      title: '标题2',
      content: '内容2',
      createTime: new Date().getTime(),
      author: author + '2',
      keyword: keyword + '2'
    }
  ]
}

export const getBolgDetail = (id: number): Promise<blog> => {
  console.log('id :>> ', id);
  const blogDetail = {
    id: 1,
    title: '标题1',
    content: '内容1',
    createTime: new Date().getTime(),
    author: '1',
    keyword: '1'
  }
  return new Promise((resolve) => {
    resolve(blogDetail)
  })
}

export const newBlog = (blogData: blog = {}): Promise<any> => {
  console.log('newBlog :>> ', blogData);
  // blogData是一个播客对象，包含tilte content
  return new Promise((resolve) => {
    resolve(3) // 表示新建播客的id
  })
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