drop database dbcleanfood;

-- Criando o banco 
create database dbcleanfood;

-- Usando o banco de dados 
use dbcleanfood;


-- Criando as tabelas 
create table tbusuarios(
codUsuario int not null auto_increment,
datanasc date not null,
endereco varchar(50) not null,
cidade varchar(50) not null,
bairro varchar(50) not null,
cep char(9) not null,
nome varchar(100) not null,
cpf char(14) not null unique,
email varchar(40) not null,
telCel char(10) not null,
senha varchar(8) not null,
primary key(codUsuario)         
);
create table tbclientes(
codCliente int not null auto_increment,
nome varchar(100) not null,
sobrenome varchar(100) not null,
senha varchar(9) not null,
datanasc date not null,
cpf char(14) not null unique,
email varchar(40) not null,
codUsuario int not null,
primary key(codCliente),
foreign key(codUsuario)references tbusuarios(codUsuario)
);

create table tbreceitas(
codReceita int not null auto_increment,
rendePorcoes int default 0 check(rendePorcoes>=0),
nomeReceita varchar(50) not null,
imagemDaReceita blob not null,
codCliente int not null,
primary key(codReceita),
foreign key(codCliente)references tbclientes(codCliente)
);
select codReceita from tbreceitas where codReceita = 1;
create table tbavaliacoes(
codAvaliacao int not null auto_increment,
comentario varchar(100) not null,
dataComentario date not null,
codReceita int not null,
primary key(codAvaliacao),
foreign key(codReceita)references tbreceitas(codReceita)
);
create table tbingredientes(
codIngrediente int not null auto_increment,
nomeIngrediente varchar (50) not null,
rendeMedidas varchar(8),	
codReceita int not null,
primary key(codIngrediente),
foreign key(codReceita)references tbreceitas(codReceita)
);

create table tbmedidas(
codMedida int not null auto_increment,
grama char(1) default 'g',
quilograma char(2) default 'kg',
mililitro char(2) default 'ml',
codIngrediente int not null,
primary key(codMedida),
foreign key (codIngrediente)references tbingredientes(codIngrediente)
);
create table tbquantidades(
codQtde int not null auto_increment,
nomeQtde varchar(50) not null,
qtdeIngrediente varchar(50) not null,
codMedida int not null,
primary key (codQtde),
foreign key (codMedida)references tbmedidas(codMedida)
);

create table tbpassos(
codPasso int not null auto_increment,
mododePreparo varchar(100) not null,
tempodePreparo varchar(50) not null,
codReceita int not null,
descricao varchar(100) not null,
primary key (codPasso),
foreign key (codReceita)references tbreceitas(codReceita)
);


show tables;

-- Mostrando a estrutura das tabelas 
desc tbusuarios;
desc tbclientes;
desc tbreceitas;
desc tbavaliacoes;
desc tbingredientes;
desc tbmedidas;
desc tbquantidades;
desc tbpassos;


-- Insirindo dados na tbusuario
insert into tbusuarios(datanasc,endereco,cidade,bairro,cep,nome,cpf,email,telCel,senha)
values('2023/12/01','rua consolação','São Paulo','São judas','04858-260','Kaio santana','321.423.535-98','kaio.santana@hotmail','98754-4567','Teste@123');

insert into tbusuarios(datanasc,endereco,cidade,bairro,cep,nome,cpf,email,telCel,senha)
values('2019/05/11','rua inhamus','São Paulo','Vila Prudente','04785-589','Julia Santos','347.475.758-32','julinha.santod@gmail.com','97459-4753','Teste@78');

insert into tbusuarios(datanasc,endereco,cidade,bairro,cep,nome,cpf,email,telCel,senha)
values('2005/07/07','rua puruba','São Paulo','Vila gilda','07896-789','Roberto Andrade','789.756.376-18','robeto.andrade@hotmail.com','97569-3796','Teste@19');

insert into tbusuarios(datanasc,endereco,cidade,bairro,cep,nome,cpf,email,telCel,senha)
values('2012/04/05','rua taquandava','São Paulo','Cidade ipava','03214-456','Lucas Souza','461.693.478-63','kaio.santana@hotmail.com','95832-5497','Teste@89');                                

insert into tbusuarios(datanasc,endereco,cidade,bairro,cep,nome,cpf,email,telCel,senha)
values('2000/11/01','rua das nações unidas','São Paulo','São paulo','07514-527','Viviane Silva','189.347.534-56','vivi.silva@hotmail.com','96941-6764','Teste@63');


-- Insirindo dados  na tbclientes
insert into tbclientes(nome,sobrenome,senha,datanasc,cpf,email,codUsuario)
values("Gabriel","Nascimento","123456","2023/12/04","432.123.765-76","gabrwil.lindo@hotmail.br",1);

insert into tbclientes(nome,sobrenome,senha,datanasc,cpf,email,codUsuario)
values("Humberto","Siberiano","789612","1902/03/05"," 115.632.524-69","humberto.siberiano@gmail.com",2);        

insert into tbclientes(nome,sobrenome,senha,datanasc,cpf,email,codUsuario)
values("Djalma","Silva","486324","2001/07/12","917.789.563-75","djalminha.silva@hotmail.br",3);

insert into tbclientes(nome,sobrenome,senha,datanasc,cpf,email,codUsuario)
values("Vitoria","Santos","56987","2003/03/04","412.837.564-99","vitorinha.santos@hotmail.br",4);

insert into tbclientes(nome,sobrenome,senha,datanasc,cpf,email,codUsuario)
values("Victor","Luis","569314","2004/08/13","733.455.713-35","victor.luis@gmail.com",5);


-- Insirindo dados na tbreceitas 
insert into tbreceitas(rendePorcoes,nomeReceita,imagemDaReceita,codCliente)
values(4,"Bolo vegano de brigadeiro",1,1);

insert into tbreceitas(rendePorcoes,nomeReceita,codCliente)
values(7,"Strogonoff vegano de grão de bico e palmito",2);        

insert into tbreceitas(rendePorcoes,nomeReceita,codCliente)
values(2,"Bolinho de brócolis assado",3);

insert into tbreceitas(rendePorcoes,nomeReceita,codCliente)
values(6,"Pão sem glúten com farinha de arroz",4);

insert into tbreceitas(rendePorcoes,nomeReceita,codCliente)
values(9,"Chips de abobrinha no forno",5);


-- Insirindo dados na tbavaliacoes
insert into tbavaliacoes(comentario,dataComentario,codReceita)
values("bom demais","2023/12/04 12:12:00",1);

insert into tbavaliacoes(comentario,dataComentario,codReceita)
values("Amei essa receita","2023/11/14 09:13:11",2);        

insert into tbavaliacoes(comentario,dataComentario,codReceita)
values("Gostei muito","2022/04/08 10:02:06",3);

insert into tbavaliacoes(comentario,dataComentario,codReceita)
values("Todo mundo aqui em casa adorou essa receita","2022/08/17 17:15:22",4);

insert into tbavaliacoes(comentario,dataComentario,codReceita)
values("Adorei demais essa receita","2023/07/18 21:45:37",5);




-- Insirindo dados na tbingredientes
insert into tbingredientes(nomeIngrediente,rendeMedidas,codReceita)
values("leite","1/2",1);

insert into tbingredientes(nomeIngrediente,rendeMedidas,codReceita)
values("Água","1/2",2);

insert into tbingredientes(nomeIngrediente,rendeMedidas,codReceita)
values("Copo de farinha de rosca","1/4",3);

insert into tbingredientes(nomeIngrediente,rendeMedidas,codReceita)
values("Farinha de Arroz integral","1/2",4);

insert into tbingredientes(nomeIngrediente,rendeMedidas,codReceita)
values("Abobrinha","1",5);


-- Insirindo dados na tbmedidas
insert into tbmedidas(codIngrediente)
values( 1);

insert into tbmedidas(codIngrediente)
values( 2);

insert into tbmedidas(codIngrediente)
values( 3);

insert into tbmedidas(codIngrediente)
values( 4);

insert into tbmedidas(codIngrediente)
values( 5);


-- Insirindo dados na tbquantidades
insert into tbquantidades(nomeQtde,qtdeIngrediente,codMedida)
values("gramas","duas coleres de sopa",1);

insert into tbquantidades(nomeQtde,qtdeIngrediente,codMedida)
values("gramas","duas colheres de (sopa) de azeite",2);

insert into tbquantidades(nomeQtde,qtdeIngrediente,codMedida)
values("gramas","dois dentes de alho",3);

insert into tbquantidades(nomeQtde,qtdeIngrediente,codMedida)
values("mililitro","um copo de iogurte",4);

insert into tbquantidades(nomeQtde,qtdeIngrediente,codMedida)
values("quilograma","uma abobrinha",5);


-- Insirindo dados na tbpassos
insert into tbpassos(mododePreparo,tempodePreparo,codReceita,descricao)
values("Aqueca o forno a temperatura ambiente","30 min",1,"tenha um aptite");

insert into tbpassos(mododePreparo,tempodePreparo,codReceita,descricao)
values("Deixe o grão de bico de molho, imerso em água por pelo menos 8 horas.","30 min",2,"Deixe esfriar e reserve");   

insert into tbpassos(mododePreparo,tempodePreparo,codReceita,descricao)
values("Cozinhe o brócolis em uma panela com água e uma pitada de sal por 2 minutos","15 min",3,"Faça pequenas bolinhas com a massa e coloque-as em uma forma antiaderente");    

insert into tbpassos(mododePreparo,tempodePreparo,codReceita,descricao)
values("Coloque todos os ingredientes na ordem dos ingredientes no liquidificador","40 min",4,"Despeje em uma forma untada e enfarinhada e coloque no forno preaquecido, por 40 minutos");    

insert into tbpassos(mododePreparo,tempodePreparo,codReceita,descricao)
values("Fatie a abobrinha finamente e espelhe as fatias na assadeira","1h40 min",5,"Quando os chips estiverem dourados e crocantes, está pronto");    


-- Atualizando dados na tbusuarios
update tbusuarios set  nome = "Redriguinho atualizado" where codUsuario = 1;
update tbusuarios set  nome = "Heloisa atualizada" where codUsuario = 2;
UPDATE tbusuarios SET  datanasc = "2021/02/20", endereco = "test07", cidade = "test06", bairro = "test06", cep = "04858-260", nome = "test06", cpf ="540.079.798-98", email ="test06@gamil", telCel = "98754-4562", senha = "12345678"
        WHERE codUsuario = 2;

update tbusuarios SET  datanasc = "2021/02/20", endereco = "test07", cidade = "test06", bairro = "test06", cep = "04585-260" where codUsuario = 3;


-- Atualizando dados na tbclients 
update tbclientes set senha = "999999" where codCliente = 1;
update tbclientes set cpf = "000.000.000-01" where codCliente = 2;
UPDATE tbclientes SET nome = "Rute", sobrenome = "Freita", senha = "1234", datanasc = "1981/04/28", cpf="888.888.888-88", email = "Rute.Freita@hotmail.com" WHERE codCliente = 3; 



-- Atualizando dados na tbreceitas 
update tbreceitas set rendePorcoes = 25 where codReceita = 1;
update tbreceitas set nomeReceita = "Pizza de pepino atualizado" where codReceita = 2;


-- Atualizando dados na tbavaliacoes
update tbavaliacoes set comentario = "Isso está maravilhoso atualizado" where codAvaliacao = 1;
update tbavaliacoes set dataComentario ="2024-02-08" where codAvaliacao = 2;
UPDATE tbavaliacoes SET comentario = "Atualizando cométario", dataComentario = "2024/05/01" WHERE codAvaliacao = 1;


-- Atualizando dados na tbingredientes
update tbingredientes set nomeIngrediente = "Cacau atualizado" where codIngrediente = 1;
update tbingredientes set rendeMedidas = "5 atualizado" where codIngrediente = 2;
UPDATE tbingredientes SET nomeIngrediente = "NomeAtualizado",rendeMedidas = "Atulizando" WHERE codIngrediente = 1;


-- Atualizando dados na tbmedidas
UPDATE tbmedidas SET grama = "g" , quilograma = "Kg" , mililitro = "ml" where codMedida = 1;

-- Atualizando dados na tbquantidades
update tbquantidades set qtdeIngrediente = "Três xicaras de de oléo atualizado" where codQtde = 1;
update tbquantidades set nomeQtde = "gramas atualizado"  where codQtde = 2;
update tbquantidades set nomeQtde = "NomeAtualizando", qtdeIngrediente = "QtdeAtualizada" where codQtde = 3;

-- Atualizando dados na tpassps
update tbpassos set mododePreparo = "Aqueca o forno e coloque uma forma dentro atualizado" where codPasso = 1;
update tbpassos set tempodePreparo = "5h atualizado com sucesso!" where codPasso = 2;
update tbpassos set descricao = "Depois adicionar complemento ao seu gosto atualizado" where codPasso = 1;
UPDATE tbpassos SET mododePreparo = "NomeAtualizado", tempodePreparo = "TempoAtualizado" WHERE codPasso = 1;
UPDATE tbpassos SET  mododePreparo = "test", tempodePreparo= "test", descricao = "test" where codPasso = 2;


-- apagando os dados da tabela 
delete from tbpassos where codReceita = 5; 
delete from tbquantidades where codMedida = 5;
delete from tbmedidas where codMedida = 5;
delete from tbingredientes where codIngrediente = 5;
delete from tbavaliacoes where codAvaliacao = 5;
delete from tbreceitas where codReceita = 5;
delete from tbclientes where codCliente = 5;
delete from tbusuarios where codUsuario = 5;

-- Buscando dados 

select * from tbusuarios;
select * from tbclientes;
select * from tbreceitas;
select * from tbavaliacoes;
select * from tbingredientes;
select * from tbmedidas;
select * from tbquantidades;
select * from tbpassos;