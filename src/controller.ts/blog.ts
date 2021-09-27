import { blog } from "../types/blog"

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