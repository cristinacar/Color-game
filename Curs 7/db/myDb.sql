CREATE TABLE articles(
	artist varchar(25),
    titlu varchar(30),
    data_lansare data,
    );


CALL getDataFabr(2006,@anFabr);
select @anFabr;

