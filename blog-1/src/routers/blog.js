/*
 * @Author: your name
 * @Date: 2021-07-06 00:14:59
 * @LastEditTime: 2021-07-12 17:38:10
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
    const result = getList(author, keyWord);
    return result.then((listData) => {
      return new SuccessModel(listData);
    });
  }
  if (method === "GET" && req.path === "/api/blog/detail") {
    const id = req.query.id;
    const result = getDetail(id);
    return result.then((detailData) => {
      return new SuccessModel(detailData);
    });
  }
  if (method === "POST" && req.path === "/api/blog/new") {
    req.body.author = "zw";
    const data = req.body;
    const result = newBlog(data);
    return result.then((res) => {
      return new SuccessModel(res);
    });
  }
  if (method === "POST" && req.path === "/api/blog/update") {
    const data = req.body;
    const result = updateBlog(id, data);
    return result.then((res) => {
      if (res) {
        return new SuccessModel(res);
      } else {
        return new ErrorModel("更新博客失败");
      }
    });
  }
  if (method === "DELETE" && req.path === "/api/blog/delete") {
    const author = "zw";
    const result = deleteBlog(id, author);
    return result.then((res) => {
      if (res) {
        return new SuccessModel(res);
      } else {
        return new ErrorModel("删除博客失败");
      }
    });
  }
};

module.exports = handleBlogData;
