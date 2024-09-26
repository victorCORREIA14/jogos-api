create database games;
use games;

create table jogos(
id int primary key auto_increment,
titulo text,
genero text,
ano_lancamento int,
plataforma int,
capa text
);




select * from jogos; 