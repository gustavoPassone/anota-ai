CREATE DATABASE db_anotaai;

USE db_anotaai;

CREATE TABLE tb_usuario(
	id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_nasc DATE NOT NULL
);

CREATE TABLE tb_anotacao(
	id_anotacao INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(500) NOT NULL,
    data_criacao DATETIME NOT NULL,
    data_finalizacao DATETIME NULL,
    id_usuario INT NULL,
    finalizado BOOL,
    
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario)
);

-- -------------------------------

-- consultas

SELECT * FROM tb_usuario;
SELECT * FROM tb_anotacao;

-- -------------------------------

INSERT INTO tb_usuario(nome, email, senha, data_nasc)
VALUES
(
	'Gustavo',
    'gustavo@gmail.com',
    '123',
    '2006-10-05'
),
(
	'João',
    'joao@gmail.com',
    '321',
    '2005-12-20'
);


INSERT INTO tb_anotacao(descricao, data_criacao, data_finalizacao, id_usuario)
VALUES
(
	'Estudar JS',
    '2025-10-18 10:50:00',
    '2025-10-18 11:00:00',
    1
),
(
	'Estudar React',
    '2025-10-19 09:15:00',
    '2025-10-19 10:30:00',
    1
),
(
	'Ir ao mercado',
    '2025-09-10 10:00:00',
    '2025-10-10 12:30:00',
    2
);