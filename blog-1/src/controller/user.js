/*
 * @Author: your name
 * @Date: 2021-07-08 01:34:54
 * @LastEditTime: 2021-07-12 18:54:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-test/blog-1/src/controller/user.js
 */

const { exec } = require("../db/mysql");

const login = (username, password) => {
  const sql = `select username, realname from users where username='${username}' and password='${password}'`;
  return exec(sql).then((loginData) => {
    return loginData[0] || {};
  });
};

module.exports = {
  login,
};
