let PARTIDOS_OPTIMIZADOS = [
	{"hora":11700,"liga":"ZA-BRAC","local":"Brasiliense DF","visitante":"Criciuma SC","cuotaLocal":4.5,"empate":3.5,"cuotaVisitante":1.769,"cantidadDeApuestas":88,"cuotaCualquiera":1.48,"cuotaFavorito":1.85,"rate":"1.25","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19465,"favorito":"visitante"},
	{"hora":11800,"liga":"ZA-BRAC","local":"Sao Bernardo SP","visitante":"Corinthians SP","cuotaLocal":5,"empate":3.3,"cuotaVisitante":1.769,"cantidadDeApuestas":86,"cuotaCualquiera":1.533,"cuotaFavorito":1.9,"rate":"1.24","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19465,"favorito":"visitante"},
	{"hora":11830,"liga":"ZA-BRAC","local":"Aguia de Maraba PA","visitante":"Capital FC TO","cuotaLocal":1.65,"empate":3.7,"cuotaVisitante":5.25,"cantidadDeApuestas":87,"cuotaCualquiera":1.48,"cuotaFavorito":1.7,"rate":"1.15","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19465,"favorito":"local"},
	{"hora":11930,"liga":"ZA-BRAC","local":"Botafogo SP","visitante":"Anapolis GO","cuotaLocal":1.571,"empate":3.95,"cuotaVisitante":5.5,"cantidadDeApuestas":88,"cuotaCualquiera":1.42,"cuotaFavorito":1.769,"rate":"1.25","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19465,"favorito":"local"},
	{"hora":11930,"liga":"ZA-BRAC","local":"Metropolitano Maringa PR","visitante":"Amazonas FC","cuotaLocal":2.2,"empate":3.4,"cuotaVisitante":3.2,"cantidadDeApuestas":89,"cuotaCualquiera":1.48,"cuotaFavorito":2.45,"rate":"1.66","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19465,"favorito":"visitante"},
	{"hora":11930,"liga":"ZA-BRAC","local":"Fortaleza CE","visitante":"Retro FC","cuotaLocal":1.45,"empate":4.333,"cuotaVisitante":6.5,"cantidadDeApuestas":89,"cuotaCualquiera":1.363,"cuotaFavorito":1.5,"rate":"1.10","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19465,"favorito":"local"},
	{"hora":11930,"liga":"ZA-LIBE","local":"Nacional Montevideo","visitante":"Always Ready","cuotaLocal":1.125,"empate":7.5,"cuotaVisitante":23,"cantidadDeApuestas":89,"cuotaCualquiera":1.25,"cuotaFavorito":1.3,"rate":"1.04","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19462,"favorito":"local"},
	{"hora":11900,"liga":"ZA-CONC","local":"LD Alajuelense","visitante":"New England Revolution","cuotaLocal":2.35,"empate":3.65,"cuotaVisitante":2.875,"cantidadDeApuestas":166,"cuotaCualquiera":1.333,"cuotaFavorito":2.15,"rate":"1.61","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":20140,"favorito":"visitante"},
	{"hora":12115,"liga":"ZA-CONC","local":"Monterrey","visitante":"FC Cincinnati","cuotaLocal":1.6,"empate":4.2,"cuotaVisitante":5.75,"cantidadDeApuestas":162,"cuotaCualquiera":1.363,"cuotaFavorito":1.666,"rate":"1.22","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":20140,"favorito":"local"},
	{"hora":11330,"liga":"ZA-PER1","local":"Alianza Atletico","visitante":"Universidad Cesar Vallejo","cuotaLocal":2.3,"empate":3.1,"cuotaVisitante":2.9,"cantidadDeApuestas":46,"cuotaCualquiera":1.42,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":19340},
	{"hora":11545,"liga":"ZA-PER1","local":"Comerciantes Unidos","visitante":"Sport Huancayo","cuotaLocal":3.1,"empate":3.1,"cuotaVisitante":2.15,"cantidadDeApuestas":46,"cuotaCualquiera":1.4,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":19340},
	{"hora":11900,"liga":"ZA-PER1","local":"Carlos Mannucci","visitante":"Sport Boys Association","cuotaLocal":2,"empate":3.25,"cuotaVisitante":3.4,"cantidadDeApuestas":43,"cuotaCualquiera":1.42,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":19340},
	{"hora":12005,"liga":"ZA-MEX2","local":"Atletico Morelia","visitante":"Cancun FC","cuotaLocal":2.1,"empate":3.4,"cuotaVisitante":3.3,"cantidadDeApuestas":89,"cuotaCualquiera":1.42,"cuotaFavorito":2.25,"rate":"1.58","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":61826,"favorito":"visitante"},
	{"hora":12205,"liga":"ZA-MEX2","local":"Leones Negros","visitante":"Club Celaya","cuotaLocal":2.3,"empate":3.25,"cuotaVisitante":3.1,"cantidadDeApuestas":89,"cuotaCualquiera":1.48,"cuotaFavorito":2.3,"rate":"1.55","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":61826,"favorito":"visitante"},
	{"hora":11530,"liga":"ZA-ARGC","local":"Talleres de Cordoba","visitante":"Agropecuario Argentino","cuotaLocal":1.533,"empate":3.9,"cuotaVisitante":6,"cantidadDeApuestas":95,"cuotaCualquiera":1.4,"cuotaFavorito":1.615,"rate":"1.15","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19572,"favorito":"local"},
	{"hora":11745,"liga":"ZA-ARGC","local":"Rosario Central","visitante":"Douglas Haig","cuotaLocal":1.25,"empate":5.5,"cuotaVisitante":11,"cantidadDeApuestas":95,"cuotaCualquiera":1.333,"cuotaFavorito":1.45,"rate":"1.09","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19572,"favorito":"local"},
	{"hora":11245,"liga":"U-CONF","local":"Viktoria Plzen","visitante":"Servette FC","cuotaLocal":1.85,"empate":3.6,"cuotaVisitante":4.333,"cantidadDeApuestas":187,"cuotaCualquiera":1.4,"cuotaFavorito":1.833,"rate":"1.31","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":413776,"favorito":"local"},
	{"hora":11245,"liga":"U-CONF","local":"PAOK Thessaloniki","visitante":"NK Dinamo Zagreb","cuotaLocal":1.833,"empate":3.75,"cuotaVisitante":4.333,"cantidadDeApuestas":188,"cuotaCualquiera":1.363,"cuotaFavorito":2.55,"rate":"1.87","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":413776,"favorito":"visitante"},
	{"hora":11245,"liga":"U-CONF","local":"Fenerbahce","visitante":"St. Gilloise","cuotaLocal":1.85,"empate":4,"cuotaVisitante":3.9,"cantidadDeApuestas":186,"cuotaCualquiera":1.285,"cuotaFavorito":1.65,"rate":"1.28","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":413776,"favorito":"local"},
	{"hora":11245,"liga":"U-CONF","local":"Fiorentina","visitante":"Maccabi Haifa","cuotaLocal":1.333,"empate":5.5,"cuotaVisitante":9,"cantidadDeApuestas":190,"cuotaCualquiera":1.25,"cuotaFavorito":1.45,"rate":"1.16","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":413776,"favorito":"local"},
	{"hora":11500,"liga":"U-CONF","local":"Aston Villa","visitante":"Ajax Amsterdam","cuotaLocal":1.35,"empate":5.25,"cuotaVisitante":8.5,"cantidadDeApuestas":190,"cuotaCualquiera":1.25,"cuotaFavorito":1.444,"rate":"1.16","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":413776,"favorito":"local"},
	{"hora":11500,"liga":"U-CONF","local":"Club Brugge","visitante":"Molde","cuotaLocal":1.444,"empate":4.75,"cuotaVisitante":7,"cantidadDeApuestas":189,"cuotaCualquiera":1.285,"cuotaFavorito":1.5,"rate":"1.17","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":413776,"favorito":"local"},
	{"hora":11500,"liga":"U-CONF","local":"Lille","visitante":"Sturm Graz","cuotaLocal":1.45,"empate":4.5,"cuotaVisitante":7.5,"cantidadDeApuestas":184,"cuotaCualquiera":1.35,"cuotaFavorito":1.6,"rate":"1.19","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":413776,"favorito":"local"},
	{"hora":11500,"liga":"U-CONF","local":"Maccabi Tel Aviv","visitante":"Olympiacos","cuotaLocal":3.1,"empate":3.7,"cuotaVisitante":2.2,"cantidadDeApuestas":190,"cuotaCualquiera":1.333,"cuotaFavorito":1.85,"rate":"1.39","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":413776,"favorito":"visitante"},
	{"hora":11500,"liga":"R-INGT","local":"Salford City","visitante":"Stockport County","cuotaLocal":3.75,"empate":3.6,"cuotaVisitante":1.85,"cantidadDeApuestas":113,"cuotaCualquiera":1.333,"cuotaFavorito":1.65,"rate":"1.24","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19300,"favorito":"visitante"},
	{"hora":11700,"liga":"ZA-BOL1","local":"Oriente Petrolero","visitante":"GV Club Deportivo San Jose de Oruro","cuotaLocal":1.48,"empate":4.2,"cuotaVisitante":5.5,"cantidadDeApuestas":43,"cuotaCualquiera":1.3,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":19786},
	{"hora":11900,"liga":"ZA-BOL1","local":"Bolivar","visitante":"Jorge Wilstermann","cuotaLocal":1.42,"empate":4.333,"cuotaVisitante":6,"cantidadDeApuestas":43,"cuotaCualquiera":1.285,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":19786},
	{"hora":11900,"liga":"ZA-ECU2","local":"Chacaritas SC","visitante":"Guayaquil City FC","cuotaLocal":3.3,"empate":3.1,"cuotaVisitante":2.1,"cantidadDeApuestas":43,"cuotaCualquiera":1.42,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":30530},
	{"hora":10730,"liga":"YE-RUSC","local":"SKA Khabarovsk","visitante":"FC Sochi - 04","cuotaLocal":4.5,"empate":3.55,"cuotaVisitante":1.666,"cantidadDeApuestas":43,"cuotaCualquiera":1.35,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":19467},
	{"hora":11000,"liga":"YE-RUSC","local":"Spartak Moscow","visitante":"FK Gazovik Orenburg","cuotaLocal":1.533,"empate":3.85,"cuotaVisitante":5.25,"cantidadDeApuestas":43,"cuotaCualquiera":1.333,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":19467},
	{"hora":11000,"liga":"YE-RUSC","local":"Lokomotiv Moscow","visitante":"Baltika","cuotaLocal":1.727,"empate":3.5,"cuotaVisitante":4.333,"cantidadDeApuestas":43,"cuotaCualquiera":1.4,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":19467},
	{"hora":11245,"liga":"U-EURO","local":"Villarreal","visitante":"Marseille","cuotaLocal":2.25,"empate":3.95,"cuotaVisitante":2.9,"cantidadDeApuestas":194,"cuotaCualquiera":1.25,"cuotaFavorito":1.909,"rate":"1.53","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19162,"favorito":"visitante"},
	{"hora":11245,"liga":"U-EURO","local":"Glasgow Rangers","visitante":"Benfica","cuotaLocal":2.8,"empate":3.75,"cuotaVisitante":2.4,"cantidadDeApuestas":194,"cuotaCualquiera":1.3,"cuotaFavorito":1.85,"rate":"1.42","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19162,"favorito":"visitante"},
	{"hora":11245,"liga":"U-EURO","local":"West Ham United","visitante":"Freiburg","cuotaLocal":1.7,"empate":4,"cuotaVisitante":5,"cantidadDeApuestas":191,"cuotaCualquiera":1.35,"cuotaFavorito":1.7,"rate":"1.26","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19162,"favorito":"local"},
	{"hora":11245,"liga":"U-EURO","local":"Slavia Prague","visitante":"AC Milán","cuotaLocal":3.3,"empate":3.8,"cuotaVisitante":2.1,"cantidadDeApuestas":194,"cuotaCualquiera":1.3,"cuotaFavorito":1.769,"rate":"1.36","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19162,"favorito":"visitante"},
	{"hora":11500,"liga":"U-EURO","local":"Liverpool","visitante":"AC Sparta Prague","cuotaLocal":1.3,"empate":6,"cuotaVisitante":9,"cantidadDeApuestas":193,"cuotaCualquiera":1.181,"cuotaFavorito":1.363,"rate":"1.15","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19162,"favorito":"local"},
	{"hora":11500,"liga":"U-EURO","local":"Brighton","visitante":"Roma","cuotaLocal":1.75,"empate":4.2,"cuotaVisitante":4.333,"cantidadDeApuestas":193,"cuotaCualquiera":1.285,"cuotaFavorito":2.3,"rate":"1.79","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19162,"favorito":"visitante"},
	{"hora":11500,"liga":"U-EURO","local":"Atalanta","visitante":"Sporting De Lisboa","cuotaLocal":1.95,"empate":3.85,"cuotaVisitante":3.7,"cantidadDeApuestas":193,"cuotaCualquiera":1.333,"cuotaFavorito":2.25,"rate":"1.69","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19162,"favorito":"visitante"},
	{"hora":11500,"liga":"U-EURO","local":"Bayer Leverkusen","visitante":"Qarabag FK","cuotaLocal":1.166,"empate":8,"cuotaVisitante":15,"cantidadDeApuestas":195,"cuotaCualquiera":1.2,"cuotaFavorito":1.3,"rate":"1.08","stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19162,"favorito":"local"},
]
