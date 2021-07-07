/*
 * @Author: your name
 * @Date: 2021-07-04 23:11:23
 * @LastEditTime: 2021-07-08 01:43:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-test/blog-1/app.js
 */
const querystring = require("querystring");
const handleBlogData = require("./src/routers/blog");
const handleUserData = require("./src/routers/user");

const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method === "GET") {
      resolve({});
      return;
    }
    if (req.headers["content-type"] !== "application/json") {
      resolve({});
      return;
    }
    let postData = "";
    req.on("data", (chunk) => {
      postData += chunk.toString();
    });
    req.on("end", () => {
      if (!postData) {
        resolve({});
        return;
      }
      resolve(JSON.parse(postData));
    });
  });
  return promise;
};

const serverHandle = (req, res) => {
  const env = process.env.NODE_ENV;
  const url = req.url;
  req.path = url.split("?")[0];
  req.query = querystring.parse(url.split("?")[1]);
  res.setHeader("Content-type", "application/json");
  getPostData(req).then((postData) => {
  console.log(45, postData);
    req.body = postData;
    const blogData = handleBlogData(req, res);
    if (blogData) {
      res.end(JSON.stringify(blogData));
      return;
    }
    const userData = handleUserData(req, res);
    if (userData) {
      res.end(JSON.stringify(userData));
      return;
    }

    res.writeHeader(404, { "Content-type": "text/plain" });
    res.write("404 Not Found\n");
    res.end();
  });
};

module.exports = serverHandle;
