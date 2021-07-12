/*
 * @Author: your name
 * @Date: 2021-07-06 00:15:04
 * @LastEditTime: 2021-07-12 18:48:51
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
    const result = loginCheck(username, password);
    return result.then((resData) => {
      if (resData.username) {
        return new SuccessModel();
      } else {
        return new ErrorModel("账号或者密码错误");
      }
    });
  }
};

module.exports = handleUserData;
