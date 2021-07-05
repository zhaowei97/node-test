/*
 * @Author: your name
 * @Date: 2021-07-04 23:11:12
 * @LastEditTime: 2021-07-04 23:40:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-test/blog-1/bin/www.js
 */

const http = require("http");

const PORT = 8000;

const serverHandle = require("../app");

const server = http.createServer(serverHandle);

server.listen(PORT);
