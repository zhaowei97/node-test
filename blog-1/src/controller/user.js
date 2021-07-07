/*
 * @Author: your name
 * @Date: 2021-07-08 01:34:54
 * @LastEditTime: 2021-07-08 01:38:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-test/blog-1/src/controller/user.js
 */

const loginCheck = (username, password) => {
  if (username === "zw" && password === "123") {
    return true;
  }
  return false;
};

module.exports = {
  loginCheck,
};
