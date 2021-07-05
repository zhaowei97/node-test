/*
 * @Author: your name
 * @Date: 2021-07-06 00:15:04
 * @LastEditTime: 2021-07-06 00:27:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-test/blog-1/src/routers/user.js
 */

const handleUserData = (req, res) => {
  const method = req.method;
  if (method === "POST" && req.path === "/api/user/login") {
    return {
      msg: "登录接口",
    };
  }
};

module.exports = handleUserData;
