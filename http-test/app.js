/*
 * @Author: your name
 * @Date: 2021-07-02 00:27:20
 * @LastEditTime: 2021-07-02 00:59:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-test/http-test/app.js
 */

const http = require("http");
const querystring = require("querystring");

// GET

// const server = http.createServer((req, res) => {
//   console.log("method", req.method);
//   const url = req.url;
//   console.log("url", url);
//   req.query = querystring.parse(url.split("?")[1]);
//   console.log("query", req.query);
//   res.end(JSON.stringify(req.query));
// });

// POST

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    console.log("req content-type", req.headers["content-type"]);
    let postData = "";
    req.on("data", (chunk) => {
      // chunk为二进制数据
      postData += chunk.toString();
    });
    req.on("end", () => {
      console.log("postData", postData);
      res.end("hello world");
    });
  }
});

server.listen(8000);
