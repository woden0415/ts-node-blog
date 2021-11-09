import { ServerResponse } from 'http';
import { ErrorModel, SuccessModel } from '../model/resModel';
import { CustomIncomingMessage } from '../types';
import { getBlogList, getBolgDetail, newBlog, updateBlog, delBlog } from './../controller.ts/blog';


const handleBlogRouter = async (req: CustomIncomingMessage, res: ServerResponse) => {

  // 播客列表接口
  if (req.isGet && req.path === '/api/blog/list') {
    const author = req.query.author;
    const keyword = req.query.keyword;
    try {
      const listData = await getBlogList(author, keyword)
      return new SuccessModel(listData);
    } catch (error) {
      return new ErrorModel(error)
    }
  }

  // 播客详情接口
  if (req.isGet && req.path === '/api/blog/detail') {
    const id = req.query.id;
    try {
      const data = await getBolgDetail(id);
      return new SuccessModel(data)
    } catch (error) {
      return new ErrorModel(error)
    }
  }

  // 播客新增
  if (req.isPost && req.path === '/api/blog/new') {
    try {
      const data = await newBlog(req.body);
      return new SuccessModel(data)
    } catch (error) {
      return new ErrorModel(error)
    }
  }

  // 播客更新
  if (req.isPost && req.path === '/api/blog/update') {
    const id = req.query.id;
    const blogData = req.body;
    const data = await updateBlog(id, blogData);
    if (data) {
      return new SuccessModel(data)
    }
    return new ErrorModel('更新播客失败')
  }

  // 播客删除
  if (req.isPost && req.path === '/api/blog/del') {
    // return new SuccessModel(req.body)
    const id = req.query.id;
    const data = await delBlog(id);
    if (data) {
      return new SuccessModel('删除成功' + id)
    }
    return new ErrorModel('删除失败')
  }

}
export {
  handleBlogRouter
};
