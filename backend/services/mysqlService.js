let mysql = require('mysql');

class MySqlService {

    constructor(database) {
        this.mysqlConn = mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            port: process.env.MYSQL_PORT,
            database: database
        })
    }

    async queryDatabase(query) {

        return new Promise((resolve, reject) => {
            this.mysqlConn.connect((err) => {
                if (err) reject(err);

                this.mysqlConn.query(query, (err, result, fields) => {
                    if(err) reject(err);

                    resolve(result);
                })
            })
        })
    }
}

module.exports = MySqlService;