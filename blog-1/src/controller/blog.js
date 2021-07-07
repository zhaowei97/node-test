/*
 * @Author: your name
 * @Date: 2021-07-06 01:14:03
 * @LastEditTime: 2021-07-08 01:34:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-test/blog-1/src/controller/blog.js
 */

const getList = (author, keyWord) => {
  return [
    {
      id: 1,
      title: "标题A",
      content: "内容A",
      createTime: 15343534334,
      author: "zw",
    },
    {
      id: 2,
      title: "标题B",
      content: "内容B",
      createTime: 15343534334,
      author: "zw",
    },
  ];
};

const getDetail = (id) => {
  return [
    {
      id: 1,
      title: "标题A",
      content: "内容A",
      createTime: 15343534334,
      author: "zw",
    },
  ];
};

const newBlog = (data = {}) => {
  return {
    id: 3,
  };
};

const updateBlog = (id, data = {}) => {
  return true;
};

const deleteBlog = (id) => {
  return true;
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog,
};
