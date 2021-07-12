/*
 * @Author: your name
 * @Date: 2021-07-12 15:04:42
 * @LastEditTime: 2021-07-12 15:34:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-test/blog-1/src/db/mysql.js
 */

const mysql = require("mysql");
const { MYSQL_CONFIG } = require("../config/db");

// 创建链接对象
const con = mysql.createConnection(MYSQL_CONFIG);

// 开始连接
con.connect();

// 统一执行sql的函数
function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, res) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(res);
    });
  });
  return promise;
}

module.exports = {
  exec,
};
