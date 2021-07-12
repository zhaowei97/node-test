/*
 * @Author: your name
 * @Date: 2021-07-12 11:43:10
 * @LastEditTime: 2021-07-12 11:48:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-test/mysql-test/index.js
 */

const mysql = require('mysql');

// 创建链接对象
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qq971019",
  port: 3306,
  database: "myblog",
});

// 开始连接
con.connect();

// 执行sql语句
const sql = "select * from users";
con.query(sql, (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(res);
});

// 关闭连接
con.end();
