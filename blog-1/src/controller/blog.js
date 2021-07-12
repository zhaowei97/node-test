/*
 * @Author: your name
 * @Date: 2021-07-06 01:14:03
 * @LastEditTime: 2021-07-12 17:36:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-test/blog-1/src/controller/blog.js
 */

const { exec } = require("../db/mysql");

const getList = (author, keyWord) => {
  // where 1=1 起占位作用
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}'`;
  }
  if (keyWord) {
    sql += `and title like '%${keyWord}%'`;
  }
  sql += `order by createtime desc`;
  return exec(sql);
};

const getDetail = (id) => {
  const sql = `select * from blogs where id=${id}`;
  return exec(sql).then((res) => {
    return res[0];
  });
};

const newBlog = (data = {}) => {
  const { title, content, createtime = Date.now(), author } = data;
  console.log(data, 34);
  const sql = `insert into blogs (title, content, createtime ,author) values ('${title}', '${content}', ${createtime}, '${author}')`;
  return exec(sql).then((insertData) => {
    return {
      id: insertData.insertId,
    };
  });
};

const updateBlog = (id, data = {}) => {
  const { title, content } = data;
  const sql = `update blogs set title='${title}', content='${content}' where id=${id}`;
  return exec(sql).then((updateData) => {
    if (updateData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

const deleteBlog = (id, author) => {
  const sql = `delete from  blogs where id=${id} and author='${author}'`;
  return exec(sql).then((deleteData) => {
    if (deleteData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog,
};
