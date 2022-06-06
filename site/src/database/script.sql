CREATE DATABASE seinen;

USE seinen;

CREATE TABLE membro(
    idMembro INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(55),
    email VARCHAR(60),
    dtNasc DATE,
    cargo VARCHAR(45),
    CHECK (cargo IN('membro', 'diretoria')),
    cpf CHAR(11),
    telefone CHAR(9),
    senha VARCHAR(35)
);

CREATE TABLE evento(
    idEvento INT PRIMARY KEY AUTO_INCREMENT,
    nomeEvento VARCHAR(60),
    dt DATE,
    local VARCHAR(60),
    descricao VARCHAR(100)
);

CREATE TABLE comissao(
    idComissao INT AUTO_INCREMENT,
    fkMembro INT,
    fkEvento INT,
    PRIMARY KEY(idComissao, fkMembro, fkEvento),
    area VARCHAR(45),
    FOREIGN KEY(fkMembro) REFERENCES membro(idMembro),
    FOREIGN KEY(fkEvento) REFERENCES evento(idEvento)
);

CREATE TABLE mural(
    idMural INT AUTO_INCREMENT,
    fkMembro INT,
    PRIMARY KEY(idMural, fkMembro),
    titulo VARCHAR(45),
    descricao VARCHAR(150),
    FOREIGN KEY(fkMembro) REFERENCES membro(idMembro)
);

INSERT INTO membro VALUES
(null, 'Yuzo', 'yuzo@email.com', '2002-06-11', 'diretoria', 11111111111, 971626156, 123456);


INSERT INTO evento VALUES
(null, 'Dia das mães', '2022-05-15', 'Kaikan', 'Dia das mães');

INSERT INTO comissao VALUES
(null, 1, 1, 'Infraestrutura');

SELECT m.nome, c.area, e.nomeEvento  FROM membro m JOIN comissao c ON idMembro = fkMembro 
JOIN evento e ON fkEvento = idEvento;

truncate membro;
