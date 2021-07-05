/*
 * @Author: your name
 * @Date: 2021-07-06 00:14:59
 * @LastEditTime: 2021-07-06 01:18:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-test/blog-1/src/routers/blog.js
 */

const { SuccessModel, ErrorModel } = require("../model/blog");
const { getList } = require("../controller/blog");

const handleBlogData = (req, res) => {
  const method = req.method;
  if (method === "GET" && req.path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyWord = req.query.keyWord || "";
    const listData = getList(author, keyWord);
    return new SuccessModel(listData);
  }
  if (method === "GET" && req.path === "/api/blog/detail") {
    return {
      msg: "获取博客详情接口",
    };
  }
  if (method === "POST" && req.path === "/api/blog/new") {
    return {
      msg: "新建博客接口",
    };
  }
};

module.exports = handleBlogData;
