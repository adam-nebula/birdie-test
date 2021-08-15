const MySqlService = require("./mysqlService");

let sqlServices = [];

function getMySqlService(database){

    let existingSqlService = sqlServices.filter(s => s.database == database)[0];

    if(existingSqlService != null){
        return existingSqlService;
    }else{
        let newSqlService = new MySqlService(database);
        sqlServices.push(newSqlService);

        return newSqlService;
    }
}

exports.getMySqlService = getMySqlService;
