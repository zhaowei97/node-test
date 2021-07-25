/*
 * @Author: your name
 * @Date: 2021-07-06 00:15:04
 * @LastEditTime: 2021-07-25 18:09:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-test/blog-1/src/routers/user.js
 */

const { login } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/blog");

const handleUserData = (req, res) => {
  const method = req.method;
  if (method === "GET" && req.path === "/api/user/login") {
    const { username, password } = req.query;
    const result = login(username, password);
    return result.then((resData) => {
      if (resData.username) {
        // 操作cookie
        res.setHeader("Set-Cookie", `username=${resData.username};path=/`);
        return new SuccessModel();
      } else {
        return new ErrorModel("账号或者密码错误");
      }
    });
  }
};

module.exports = handleUserData;
