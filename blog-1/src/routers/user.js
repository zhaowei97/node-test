/*
 * @Author: your name
 * @Date: 2021-07-06 00:15:04
 * @LastEditTime: 2021-07-08 01:39:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-test/blog-1/src/routers/user.js
 */

const { loginCheck } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/blog");

const handleUserData = (req, res) => {
  const method = req.method;
  if (method === "POST" && req.path === "/api/user/login") {
    const { username, password } = req.body;
    console.log(req.body);
    const resData = loginCheck(username, password);
    if (resData) {
      return new SuccessModel(resData);
    } else {
      return new ErrorModel('账号或者密码错误');
    }
  }
};

module.exports = handleUserData;
