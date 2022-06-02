var database = require("../database/config");

function buscarUltimasMedidas(idEstufa) {
    instrucaoSql = `SELECT dht11Umidade AS umidade, lm35Temperatura AS temperatura, luminosidade AS luminosidade, momento, DATE_FORMAT  (momento,'%H:%i:%s') AS momento FROM dado
    JOIN estufa ON fkEstufa = idEstufa 
    where idEstufa = ${idEstufa}
    order by idDado desc limit 7;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idEstufa) {
    instrucaoSql = `SELECT MAX(dht11Umidade) AS umidade, MIN(lm35Temperatura) AS temperatura, MAX(luminosidade) AS luminosidade, momento, DATE_FORMAT  (momento,'%H:%i:%s') AS momento FROM dado
    JOIN estufa ON fkEstufa = idEstufa 
    where idEstufa = ${idEstufa}
    order by idDado desc limit 7;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}

// select
//                         dht11Umidade,
//                         lm35Temperatura,
//                         fkEstufa
//                         from dado where fk_Estufa = ${idEstufa}
//                     order by id desc limit 1