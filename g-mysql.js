const mysql = require('mysql');

let conf = null;

module.exports = function (config) {
    if (conf == null) {
        conf = config;

        if (!conf['connectionLimit'])
            conf['connectionLimit'] = 10;
    }
    const pool = mysql.createPool(conf);
    return {
        query(sql, paras) {
            const strSql = mysql.format(sql, paras);
            console.log(strSql);
            return new Promise((resolve, reject) => {
                pool.getConnection((err, conn) => {
                    if (err)
                        reject(err);

                    conn.query(strSql, (error, ret, fields) => {
                        if (!error)
                            resolve(ret,fields);

                        conn.release();
                        if (error)
                            reject(err);
                    })
                });
            })
        }
    };
};
