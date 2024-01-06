let PARTIDOS_OPTIMIZADOS = [
	{"hora":10600,"liga":"ESPC","local":"Burgos CF","visitante":"RCD Mallorca","cuotaLocal":3.1,"empate":3.2,"cuotaVisitante":2.375,"cantidadDeApuestas":97,"cuotaCualquiera":1.55,"cuotaFavorito":2.15,"rate":"1.39","stake":3,"favorito":"visitante"},
	{"hora":10600,"liga":"ESPC","local":"SD Amorebieta","visitante":"Celta de Vigo","cuotaLocal":4.5,"empate":3.6,"cuotaVisitante":1.8,"cantidadDeApuestas":99,"cuotaCualquiera":1.48,"cuotaFavorito":1.85,"rate":"1.25","stake":2,"favorito":"visitante"},
	{"hora":11000,"liga":"ESPC","local":"CD Castellon","visitante":"Osasuna","cuotaLocal":3.1,"empate":3.45,"cuotaVisitante":2.3,"cantidadDeApuestas":98,"cuotaCualquiera":1.4,"cuotaFavorito":1.93,"rate":"1.38","stake":2,"favorito":"visitante"},
	{"hora":11000,"liga":"ESPC","local":"Ferrol","visitante":"Sevilla","cuotaLocal":3.6,"empate":3.45,"cuotaVisitante":2.1,"cantidadDeApuestas":100,"cuotaCualquiera":1.48,"cuotaFavorito":1.95,"rate":"1.32","stake":2,"favorito":"visitante"},
	{"hora":11200,"liga":"ESPC","local":"Unionistas de Salamanca","visitante":"Villarreal","cuotaLocal":7.5,"empate":4.5,"cuotaVisitante":1.444,"cantidadDeApuestas":100,"cuotaCualquiera":1.363,"cuotaFavorito":1.55,"rate":"1.14","stake":2,"favorito":"visitante"},
	{"hora":11300,"liga":"ESPC","local":"SD Eibar","visitante":"Athletic Bilbao","cuotaLocal":3.7,"empate":3.5,"cuotaVisitante":2,"cantidadDeApuestas":100,"cuotaCualquiera":1.42,"cuotaFavorito":1.85,"rate":"1.30","stake":4,"favorito":"visitante"},
	{"hora":11300,"liga":"ESPC","local":"Cartagena","visitante":"Valencia","cuotaLocal":3.5,"empate":3.45,"cuotaVisitante":2.1,"cantidadDeApuestas":100,"cuotaCualquiera":1.45,"cuotaFavorito":1.9,"rate":"1.31","stake":2,"favorito":"visitante"},
	{"hora":11500,"liga":"ESPC","local":"Malaga","visitante":"Real Sociedad","cuotaLocal":7,"empate":4.2,"cuotaVisitante":1.5,"cantidadDeApuestas":98,"cuotaCualquiera":1.4,"cuotaFavorito":1.615,"rate":"1.15","stake":2,"favorito":"visitante"},
	{"hora":11500,"liga":"ESPC","local":"Barbastro","visitante":"Barcelona","cuotaLocal":23,"empate":9.5,"cuotaVisitante":1.111,"cantidadDeApuestas":106,"cuotaCualquiera":1.222,"cuotaFavorito":1.25,"rate":"1.02","stake":2,"favorito":"visitante"},
	{"hora":11600,"liga":"ESPC","local":"CD Tenerife","visitante":"Las Palmas","cuotaLocal":3.1,"empate":3.2,"cuotaVisitante":2.45,"cantidadDeApuestas":97,"cuotaCualquiera":1.55,"cuotaFavorito":2.4,"rate":"1.55","stake":2,"favorito":"local"},
	{"hora":10830,"liga":"FRAC","local":"RC Lens","visitante":"AS Monaco","cuotaLocal":2.25,"empate":3.6,"cuotaVisitante":2.95,"cantidadDeApuestas":112,"cuotaCualquiera":1.333,"cuotaFavorito":1.95,"rate":"1.46","stake":2,"favorito":"visitante"},
	{"hora":10830,"liga":"FRAC","local":"AC Le Havre","visitante":"Caen","cuotaLocal":1.727,"empate":3.55,"cuotaVisitante":5,"cantidadDeApuestas":95,"cuotaCualquiera":1.444,"cuotaFavorito":1.75,"rate":"1.21","stake":2,"favorito":"local"},
	{"hora":10830,"liga":"FRAC","local":"EA Guingamp","visitante":"Rennes","cuotaLocal":3.6,"empate":3.5,"cuotaVisitante":2,"cantidadDeApuestas":97,"cuotaCualquiera":1.42,"cuotaFavorito":1.85,"rate":"1.30","stake":2,"favorito":"visitante"},
	{"hora":10830,"liga":"FRAC","local":"CA Pontarlier","visitante":"Lyon","cuotaLocal":11,"empate":6.5,"cuotaVisitante":1.142,"cantidadDeApuestas":76,"cuotaCualquiera":1.2,"cuotaFavorito":1.285,"rate":"1.07","stake":2,"favorito":"visitante"},
	{"hora":10830,"liga":"FRAC","local":"Thionville FC","visitante":"Marseille","cuotaLocal":17,"empate":8,"cuotaVisitante":1.071,"cantidadDeApuestas":81,"cuotaCualquiera":1.2,"cuotaFavorito":1.25,"rate":"1.04","stake":2,"favorito":"visitante"},
	{"hora":11130,"liga":"FRAC","local":"Bergerac Perigord FC","visitante":"FC Libourne Saint-Seurin","cuotaLocal":3.1,"empate":3.35,"cuotaVisitante":2.15,"cantidadDeApuestas":85,"cuotaCualquiera":1.333,"cuotaFavorito":2.1,"rate":"1.58","stake":2,"favorito":"local"},
	{"hora":11130,"liga":"FRAC","local":"Chambery St O","visitante":"Toulouse","cuotaLocal":8,"empate":4.75,"cuotaVisitante":1.3,"cantidadDeApuestas":84,"cuotaCualquiera":1.285,"cuotaFavorito":1.48,"rate":"1.15","stake":2,"favorito":"visitante"},
	{"hora":11130,"liga":"FRAC","local":"Dieppe","visitante":"Laval","cuotaLocal":6.25,"empate":4.2,"cuotaVisitante":1.4,"cantidadDeApuestas":84,"cuotaCualquiera":1.3,"cuotaFavorito":2.875,"rate":"2.21","stake":2,"favorito":"local"},
	{"hora":11130,"liga":"FRAC","local":"Dinan Lehon","visitante":"Stade Reims","cuotaLocal":11,"empate":5.5,"cuotaVisitante":1.222,"cantidadDeApuestas":82,"cuotaCualquiera":1.25,"cuotaFavorito":1.42,"rate":"1.14","stake":2,"favorito":"visitante"},
	{"hora":11130,"liga":"FRAC","local":"Louhans Cuiseaux","visitante":"FC Rouen","cuotaLocal":4.5,"empate":3.4,"cuotaVisitante":1.65,"cantidadDeApuestas":83,"cuotaCualquiera":1.4,"cuotaFavorito":1.75,"rate":"1.25","stake":2,"favorito":"visitante"},
	{"hora":10630,"liga":"ITA1","local":"Empoli","visitante":"AC Milán","cuotaLocal":5,"empate":3.9,"cuotaVisitante":1.65,"cantidadDeApuestas":144,"cuotaCualquiera":1.333,"cuotaFavorito":1.65,"rate":"1.24","stake":2,"favorito":"visitante"},
	{"hora":10900,"liga":"ITA1","local":"Torino","visitante":"Napoles","cuotaLocal":2.95,"empate":3.35,"cuotaVisitante":2.375,"cantidadDeApuestas":145,"cuotaCualquiera":1.45,"cuotaFavorito":2.15,"rate":"1.48","stake":2,"favorito":"visitante"},
	{"hora":10900,"liga":"ITA1","local":"Udinese","visitante":"Lazio","cuotaLocal":3.35,"empate":3.25,"cuotaVisitante":2.2,"cantidadDeApuestas":144,"cuotaCualquiera":1.48,"cuotaFavorito":2.1,"rate":"1.42","stake":3,"favorito":"visitante"},
	{"hora":11200,"liga":"ITA1","local":"Salernitana","visitante":"Juventus","cuotaLocal":6.5,"empate":4.2,"cuotaVisitante":1.5,"cantidadDeApuestas":143,"cuotaCualquiera":1.38,"cuotaFavorito":1.615,"rate":"1.17","stake":5,"favorito":"visitante"},
	{"hora":11445,"liga":"ITA1","local":"Roma","visitante":"Atalanta","cuotaLocal":2.4,"empate":3.25,"cuotaVisitante":3,"cantidadDeApuestas":145,"cuotaCualquiera":1.45,"cuotaFavorito":2.1,"rate":"1.45","stake":2,"favorito":"local"},
	{"hora":10900,"liga":"R-INGF","local":"Luton Town","visitante":"Bolton Wanderers","cuotaLocal":1.533,"empate":4,"cuotaVisitante":5.25,"cantidadDeApuestas":144,"cuotaCualquiera":1.38,"cuotaFavorito":2.75,"rate":"1.99","stake":2,"favorito":"visitante"},
	{"hora":10900,"liga":"R-INGF","local":"Manchester City","visitante":"Huddersfield","cuotaLocal":1.09,"empate":7.5,"cuotaVisitante":19,"cantidadDeApuestas":146,"cuotaCualquiera":1.125,"cuotaFavorito":1.166,"rate":"1.04","stake":5,"favorito":"local"},
	{"hora":10900,"liga":"R-INGF","local":"West Ham United","visitante":"Bristol City","cuotaLocal":1.42,"empate":4.2,"cuotaVisitante":6.5,"cantidadDeApuestas":145,"cuotaCualquiera":1.3,"cuotaFavorito":1.55,"rate":"1.19","stake":2,"favorito":"local"},
	{"hora":10900,"liga":"R-INGF","local":"Peterborough United","visitante":"Leeds United","cuotaLocal":6,"empate":4.333,"cuotaVisitante":1.42,"cantidadDeApuestas":90,"cuotaCualquiera":1.3,"cuotaFavorito":1.571,"rate":"1.21","stake":2,"favorito":"visitante"},
	{"hora":10900,"liga":"R-INGF","local":"Shrewsbury","visitante":"Wrexham FC","cuotaLocal":2.55,"empate":3.25,"cuotaVisitante":2.55,"cantidadDeApuestas":89,"cuotaCualquiera":1.35,"cuotaFavorito":1.75,"rate":"1.30","stake":2,"favorito":"visitante"},
	{"hora":10900,"liga":"R-INGF","local":"West Bromwich","visitante":"Aldershot Town","cuotaLocal":1.2,"empate":6,"cuotaVisitante":13,"cantidadDeApuestas":89,"cuotaCualquiera":1.2,"cuotaFavorito":1.333,"rate":"1.11","stake":2,"favorito":"local"},
	{"hora":10900,"liga":"R-INGF","local":"Nottingham Forest","visitante":"Blackpool","cuotaLocal":1,"empate":1,"cuotaVisitante":1,"cantidadDeApuestas":100,"cuotaCualquiera":1.285,"cuotaFavorito":1.45,"rate":"1.13","stake":2,"favorito":"local"},
	{"hora":11130,"liga":"R-INGF","local":"Arsenal","visitante":"Liverpool","cuotaLocal":1,"empate":1,"cuotaVisitante":1,"cantidadDeApuestas":100,"cuotaCualquiera":1.3,"cuotaFavorito":1.769,"rate":"1.36","stake":2,"favorito":"local"},
	{"hora":10900,"liga":"R-INGN","local":"Boreham Wood","visitante":"York City","cuotaLocal":2,"empate":3.1,"cuotaVisitante":3.35,"cantidadDeApuestas":43,"cuotaCualquiera":1.42,"cuotaFavorito":1,"rate":1,"stake":0},
	{"hora":10800,"liga":"YE-GRE1","local":"Panseraikos","visitante":"Kifisias","cuotaLocal":2.1,"empate":3.1,"cuotaVisitante":3.2,"cantidadDeApuestas":78,"cuotaCualquiera":1.4,"cuotaFavorito":2.4,"rate":"1.71","stake":2,"favorito":"visitante"},
	{"hora":10800,"liga":"YE-GRE1","local":"Volos NPS","visitante":"Atromitos","cuotaLocal":2.3,"empate":3.1,"cuotaVisitante":2.8,"cantidadDeApuestas":78,"cuotaCualquiera":1.444,"cuotaFavorito":2.25,"rate":"1.56","stake":2,"favorito":"visitante"},
	{"hora":11000,"liga":"YE-GRE1","local":"Panathinaikos","visitante":"Panetolikos FC","cuotaLocal":1.181,"empate":5.25,"cuotaVisitante":12,"cantidadDeApuestas":76,"cuotaCualquiera":1.285,"cuotaFavorito":1.363,"rate":"1.06","stake":2,"favorito":"local"},
	{"hora":11030,"liga":"YE-GRE1","local":"Pas Giannina","visitante":"Asteras Tripolis","cuotaLocal":2.4,"empate":3,"cuotaVisitante":2.7,"cantidadDeApuestas":77,"cuotaCualquiera":1.5,"cuotaFavorito":2.35,"rate":"1.57","stake":2,"favorito":"visitante"},
	{"hora":11230,"liga":"YE-GRE1","local":"Aris Thessaloniki","visitante":"PAOK Thessaloniki","cuotaLocal":3.1,"empate":3,"cuotaVisitante":2.15,"cantidadDeApuestas":77,"cuotaCualquiera":1.42,"cuotaFavorito":1.85,"rate":"1.30","stake":2,"favorito":"visitante"},
	{"hora":11400,"liga":"YE-GRE1","local":"Olympiacos","visitante":"AEK Athens","cuotaLocal":2.35,"empate":3,"cuotaVisitante":2.8,"cantidadDeApuestas":78,"cuotaCualquiera":1.45,"cuotaFavorito":2.2,"rate":"1.52","stake":2,"favorito":"local"},
	{"hora":11300,"liga":"YE-POR1","local":"Rio Ave","visitante":"Portimonense SC","cuotaLocal":1.833,"empate":3.65,"cuotaVisitante":4.333,"cantidadDeApuestas":181,"cuotaCualquiera":1.4,"cuotaFavorito":1.8,"rate":"1.29","stake":2,"favorito":"local"},
	{"hora":11530,"liga":"YE-POR1","local":"FC Famalicao","visitante":"Desportivo Chaves","cuotaLocal":1.8,"empate":3.65,"cuotaVisitante":4.5,"cantidadDeApuestas":181,"cuotaCualquiera":1.4,"cuotaFavorito":1.8,"rate":"1.29","stake":2,"favorito":"local"},
	{"hora":10600,"liga":"YE-POR2","local":"Avs Futebol Sad","visitante":"Leixoes SC","cuotaLocal":1.615,"empate":3.3,"cuotaVisitante":5,"cantidadDeApuestas":82,"cuotaCualquiera":1.5,"cuotaFavorito":1.85,"rate":"1.23","stake":3,"favorito":"local"},
	{"hora":10900,"liga":"YE-POR2","local":"Pacos Ferreira","visitante":"FC Porto B","cuotaLocal":2.5,"empate":3.4,"cuotaVisitante":2.55,"cantidadDeApuestas":85,"cuotaCualquiera":1.35,"cuotaFavorito":2,"rate":"1.48","stake":2,"favorito":"visitante"},
	{"hora":11030,"liga":"YE-POR2","local":"Feirense","visitante":"Torreense","cuotaLocal":2.65,"empate":2.95,"cuotaVisitante":2.65,"cantidadDeApuestas":83,"cuotaCualquiera":1.48,"cuotaFavorito":2.25,"rate":"1.52","stake":2,"favorito":"visitante"},
	{"hora":10530,"liga":"YE-TUR1","local":"Kayserispor","visitante":"Sivasspor","cuotaLocal":2,"empate":3.65,"cuotaVisitante":3.55,"cantidadDeApuestas":183,"cuotaCualquiera":1.35,"cuotaFavorito":1.8,"rate":"1.33","stake":2,"favorito":"local"},
	{"hora":10800,"liga":"YE-TUR1","local":"Istanbulspor AS","visitante":"Fenerbahce","cuotaLocal":12,"empate":6.25,"cuotaVisitante":1.222,"cantidadDeApuestas":181,"cuotaCualquiera":1.222,"cuotaFavorito":1.35,"rate":"1.10","stake":3,"favorito":"visitante"},
	{"hora":11100,"liga":"YE-TUR1","local":"Galatasaray","visitante":"Konyaspor","cuotaLocal":1.285,"empate":5.75,"cuotaVisitante":10,"cantidadDeApuestas":184,"cuotaCualquiera":1.25,"cuotaFavorito":1.42,"rate":"1.14","stake":2,"favorito":"local"},
]
