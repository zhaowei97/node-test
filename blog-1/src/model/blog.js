/*
 * @Author: your name
 * @Date: 2021-07-06 01:08:35
 * @LastEditTime: 2021-07-06 01:12:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-test/blog-1/src/model/blog.js
 */

class BaseModel {
  constructor(data, message) {
    if (typeof data === "string") {
      this.message = data;
      data = null;
      message = null;
    }
    if (data) {
      this.data = data;
    }
    if (message) {
      this.message = message;
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.errno = 0;
  }
}

class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.errno = -1;
  }
}

module.exports = {
  SuccessModel,
  ErrorModel,
};
