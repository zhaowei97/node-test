/*
 * @Author: your name
 * @Date: 2021-07-12 15:02:52
 * @LastEditTime: 2021-07-12 15:04:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-test/blog-1/src/config/db.js
 */

const env = process.env.NODE_ENV;

let MYSQL_CONFIG;

if (env === "development") {
  MYSQL_CONFIG = {
    host: "localhost",
    user: "root",
    password: "qq971019",
    port: 3306,
    database: "myblog",
  };
}

if (env === "production") {
  MYSQL_CONFIG = {
    host: "localhost",
    user: "root",
    password: "qq971019",
    port: 3306,
    database: "myblog",
  };
}

module.exports = {
  MYSQL_CONFIG,
};
