/*
 * @Author: your name
 * @Date: 2021-07-06 01:14:03
 * @LastEditTime: 2021-07-06 01:15:32
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

module.exports = {
  getList,
};
