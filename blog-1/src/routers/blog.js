/*
 * @Author: your name
 * @Date: 2021-07-06 00:14:59
 * @LastEditTime: 2021-07-08 01:40:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-test/blog-1/src/routers/blog.js
 */

const { SuccessModel, ErrorModel } = require("../model/blog");
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/blog");

const handleBlogData = (req, res) => {
  const method = req.method;
  const id = req.query.id;
  if (method === "GET" && req.path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyWord = req.query.keyWord || "";
    const listData = getList(author, keyWord);
    return new SuccessModel(listData);
  }
  if (method === "GET" && req.path === "/api/blog/detail") {
    const id = req.query.id;
    const detailData = getDetail(id);
    return new SuccessModel(detailData);
  }
  if (method === "POST" && req.path === "/api/blog/new") {
    const data = req.body;
    const res = newBlog(data);
    return new SuccessModel(res);
  }
  if (method === "POST" && req.path === "/api/blog/update") {
    const data = req.body;
    const res = updateBlog(id, data);
    if (res) {
      return new SuccessModel(res);
    } else {
      return new ErrorModel("更新失败");
    }
  }
  if (method === "DELETE" && req.path === "/api/blog/delete") {
    const res = deleteBlog(id);
    if (res) {
      return new SuccessModel(res);
    } else {
      return new ErrorModel("删除失败");
    }
  }
};

module.exports = handleBlogData;
