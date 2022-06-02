CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY IDENTITY(1,1),
    nome_razaosocial VARCHAR(45),
    dtNasc DATE,
    tipo CHAR(2),
    CHECK (tipo in('PF', 'PJ')),
    cpf_cnpj VARCHAR(14),
    cep CHAR(8),
    numero INT,
    email VARCHAR(60),
    senha VARCHAR(45),
    fkDependente INT,
    FOREIGN KEY (fkDependente) REFERENCES usuario(idUsuario)
);

CREATE TABLE estufa(
	idEstufa INT PRIMARY KEY IDENTITY(1,1),
    produto VARCHAR(45),
    tempIdeal DOUBLE,
    umidIdeal DOUBLE,
    lumiIdeal DOUBLE,
    comprimento DOUBLE,
    largura DOUBLE
);


CREATE TABLE acesso(
	idAcesso INT PRIMARY KEY IDENTITY(1,1),
    fkUsuario INT,
    fkEstufa INT,
    momento DATETIME,
    FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY(fkEstufa) REFERENCES estufa(idEstufa)
);

CREATE TABLE sensor(
	idSensor INT PRIMARY KEY IDENTITY(1,1),
    fkEstufa INT,
    localizacao VARCHAR(45),
    FOREIGN KEY(fkEstufa) REFERENCES estufa(idEstufa)
);

CREATE TABLE dado(
	idDado INT PRIMARY KEY IDENTITY(1,1),
    fkSensor INT,
    dht11Umidade DOUBLE,
    lm35Temperatura DOUBLE,
    luminosidade DOUBLE,
    momento DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(fkSensor) REFERENCES sensor(idSensor)
);