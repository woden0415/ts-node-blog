import { ServerResponse } from 'http';
import { SuccessModel } from '../model/resModel';
import { CustomIncomingMessage } from '../types';
import { getBlogList } from './../controller.ts/blog';


const handleBlogRouter = (req: CustomIncomingMessage, res: ServerResponse) => {

  // 播客列表接口
  if (req.isGet && req.path === '/api/blog/list') {
    const author = req.query.author;
    const keyword = req.query.keyword;
    const listData = getBlogList(author, keyword)

    // return getBlogList()
    return new SuccessModel(listData);
  }

  // 播客详情接口
  if (req.isGet && req.path === '/api/blog/detail') {
    return {
      msg: '播客详情接口'
    }
  }

  // 播客新增
  if (req.isPost && req.path === '/api/blog/new') {
    return {
      msg: JSON.stringify(req.body) || ''
    }
  }

  // 播客更新
  if (req.isPost && req.path === '/api/blog/update') {
    return new SuccessModel(req.body)
  }

  // 播客删除
  if (req.isPost && req.path === '/api/blog/del') {
    return new SuccessModel(req.body)
  }

}
export {
  handleBlogRouter
};
