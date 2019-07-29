const conf=require('./mysql.conf');
const mysql=require('./g-mysql')(conf);
mysql.query('select id,message from test')
    .then((ret,fields) => console.log(ret,fields));