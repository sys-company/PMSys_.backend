'use strict';
var config = require("./config").database2;
var isNull = require("./script").isNull;
var sql = require('mssql');

module.exports = {
	'query': function(queryString){
		if(isNull(queryString)){
			return null;
		}else{
			sql.close();
			return new Promise((resolve, reject) => {
				console.log('Conectando ao banco de dados...');
				sql.connect(config).then(pool => {
					return pool.request().query(queryString);
				}).then(results => {
					console.log('Query efetuada com sucesso!');
					console.log('Fechando conexão...');
					sql.close();
					console.log('Conexão fechada...');
					resolve(results);
				}).catch(error => {
					console.log('Erro ao executar a query :(', error);
					console.log('Fechando conexão...');
					sql.close();
					reject(error);
				});
			});
		}
	}
};