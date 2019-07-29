/**
 * test.js: mysql helper 测试
 *    creator: gainorloss
 * createTime: 2019-07-29
 */
const conf=require('./mysql.conf');
const mysql=require('./g-mysql')(conf);
mysql.query('select id,message from test')
    .then((ret,fields) => console.log(ret,fields));