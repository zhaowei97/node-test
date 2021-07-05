/*
 * @Author: your name
 * @Date: 2021-07-02 00:27:20
 * @LastEditTime: 2021-07-02 01:19:17
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

// const server = http.createServer((req, res) => {
//   if (req.method === "POST") {
//     console.log("req content-type", req.headers["content-type"]);
//     let postData = "";
//     req.on("data", (chunk) => {
//       // chunk为二进制数据
//       postData += chunk.toString();
//     });
//     req.on("end", () => {
//       console.log("postData", postData);
//       res.end("hello world");
//     });
//   }
// });

// 综合

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split("?")[0];
  const query = querystring.parse(url.split("?")[1]);

  // 设置返回格式为json
  res.setHeader("Content-Type", "application/json");

  const resData = {
    method,
    url,
    path,
    query,
  };

  // 返回
  if (method === "GET") {
    res.end(JSON.stringify(resData));
  }

  if (method === "POST") {
    const postData = "";
    req.on("data", (chunk) => {
      postData += chunk.toString();
    });
    req.on("end", () => {
      resData.postData = postData;
      res.end(JSON.stringify(resData));
    });
  }
});

server.listen(8000);
