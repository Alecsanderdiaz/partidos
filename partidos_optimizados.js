let PARTIDOS_OPTIMIZADOS = [
	{"hora":11030,"liga":"I-AFC","local":"Corea del Sur Sub 23","visitante":"United Arab Emirates U23","cuotaLocal":1.333,"empate":4.5,"cuotaVisitante":8,"cantidadDeApuestas":43,"cuotaCualquiera":1.363,"ambosAnotan":2.2,"over":1.9,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":32287},
	{"hora":11030,"liga":"I-AFC","local":"Irak Sub 23","visitante":"Tailandia Sub 23","cuotaLocal":1.55,"empate":3.75,"cuotaVisitante":5.5,"cantidadDeApuestas":43,"cuotaCualquiera":1.4,"ambosAnotan":1.95,"over":1.95,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":32287},
	{"hora":11130,"liga":"YE-RUSC","local":"CSKA Moscow","visitante":"Baltika","cuotaLocal":1.727,"empate":3.4,"cuotaVisitante":4.5,"cantidadDeApuestas":43,"cuotaCualquiera":1.42,"ambosAnotan":1.9,"over":2.1,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":19467},
	{"hora":11300,"liga":"I-AFC","local":"Arabia Saudí Sub 23","visitante":"Tajikistan U23","cuotaLocal":1.25,"empate":5,"cuotaVisitante":10,"cantidadDeApuestas":42,"cuotaCualquiera":1.333,"ambosAnotan":2.3,"over":1.75,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":32287},
	{"hora":11345,"liga":"R-INGN","local":"Halifax Town","visitante":"Ebbsfleet United","cuotaLocal":2.25,"empate":3.35,"cuotaVisitante":2.8,"cantidadDeApuestas":46,"cuotaCualquiera":1.363,"ambosAnotan":1.6,"over":1.769,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":19374},
	{"hora":11345,"liga":"R-INGN","local":"Oxford City","visitante":"Bromley FC","cuotaLocal":6,"empate":4.333,"cuotaVisitante":1.42,"cantidadDeApuestas":46,"cuotaCualquiera":1.3,"ambosAnotan":1.8,"over":1.65,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":19374},
	{"hora":11345,"liga":"R-INGN","local":"Rochdale","visitante":"Boreham Wood","cuotaLocal":2.8,"empate":3.45,"cuotaVisitante":2.2,"cantidadDeApuestas":46,"cuotaCualquiera":1.333,"ambosAnotan":1.55,"over":1.7,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":19374},
	{"hora":11345,"liga":"R-INGN","local":"Wealdstone FC","visitante":"Eastleigh FC","cuotaLocal":1.85,"empate":3.7,"cuotaVisitante":3.5,"cantidadDeApuestas":46,"cuotaCualquiera":1.285,"ambosAnotan":1.48,"over":1.533,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":19374},
	{"hora":11345,"liga":"R-INGO","local":"Bolton Wanderers","visitante":"Shrewsbury","cuotaLocal":1.35,"empate":5,"cuotaVisitante":8.5,"cantidadDeApuestas":111,"cuotaCualquiera":1.333,"ambosAnotan":2.05,"over":1.75,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19326},
	{"hora":11345,"liga":"R-INGO","local":"Bristol Rovers","visitante":"Cambridge United","cuotaLocal":2.2,"empate":3.45,"cuotaVisitante":3.1,"cantidadDeApuestas":110,"cuotaCualquiera":1.4,"ambosAnotan":1.727,"over":1.95,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19326},
	{"hora":11345,"liga":"R-INGO","local":"Burton Albion","visitante":"Cheltenham Town","cuotaLocal":2.4,"empate":3.3,"cuotaVisitante":2.9,"cantidadDeApuestas":110,"cuotaCualquiera":1.45,"ambosAnotan":1.833,"over":2.15,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19326},
	{"hora":11345,"liga":"R-INGO","local":"Oxford United","visitante":"Lincoln City","cuotaLocal":2.05,"empate":3.45,"cuotaVisitante":3.55,"cantidadDeApuestas":111,"cuotaCualquiera":1.4,"ambosAnotan":1.75,"over":2,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19326},
	{"hora":11345,"liga":"R-INGO","local":"Peterborough United","visitante":"Fleetwood Town","cuotaLocal":1.42,"empate":4.75,"cuotaVisitante":7,"cantidadDeApuestas":112,"cuotaCualquiera":1.25,"ambosAnotan":1.615,"over":1.5,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19326},
	{"hora":11345,"liga":"R-INGO","local":"Port Vale","visitante":"Wycombe Wanderers","cuotaLocal":2.4,"empate":3.4,"cuotaVisitante":2.9,"cantidadDeApuestas":110,"cuotaCualquiera":1.42,"ambosAnotan":1.769,"over":2,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19326},
	{"hora":11345,"liga":"R-INGO","local":"Portsmouth","visitante":"Barnsley","cuotaLocal":1.8,"empate":3.65,"cuotaVisitante":4.333,"cantidadDeApuestas":112,"cuotaCualquiera":1.35,"ambosAnotan":1.666,"over":1.769,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19326},
	{"hora":11345,"liga":"R-INGT","local":"Colchester","visitante":"Grimsby Town","cuotaLocal":2.2,"empate":3.45,"cuotaVisitante":3.1,"cantidadDeApuestas":110,"cuotaCualquiera":1.38,"ambosAnotan":1.7,"over":1.9,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19300},
	{"hora":11345,"liga":"R-INGT","local":"Crawley Town","visitante":"Barrow FC","cuotaLocal":2.55,"empate":3.4,"cuotaVisitante":2.7,"cantidadDeApuestas":111,"cuotaCualquiera":1.4,"ambosAnotan":1.666,"over":1.909,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19300},
	{"hora":11345,"liga":"R-INGT","local":"Mansfield Town","visitante":"Accrington","cuotaLocal":1.333,"empate":5.25,"cuotaVisitante":8.5,"cantidadDeApuestas":111,"cuotaCualquiera":1.222,"ambosAnotan":1.666,"over":1.45,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19300},
	{"hora":11345,"liga":"R-INGT","local":"Notts County","visitante":"Stockport County","cuotaLocal":3.7,"empate":3.75,"cuotaVisitante":1.9,"cantidadDeApuestas":112,"cuotaCualquiera":1.3,"ambosAnotan":1.533,"over":1.615,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19300},
	{"hora":11345,"liga":"R-INGT","local":"Walsall","visitante":"Swindon Town","cuotaLocal":1.833,"empate":3.75,"cuotaVisitante":4,"cantidadDeApuestas":112,"cuotaCualquiera":1.333,"ambosAnotan":1.55,"over":1.65,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19300},
	{"hora":11400,"liga":"R-ING2","local":"Southampton","visitante":"Preston","cuotaLocal":1.363,"empate":5,"cuotaVisitante":8,"cantidadDeApuestas":192,"cuotaCualquiera":1.25,"ambosAnotan":1.8,"over":1.571,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19156},
	{"hora":11400,"liga":"U-CHAM","local":"Barcelona","visitante":"PSG","cuotaLocal":2.2,"empate":3.95,"cuotaVisitante":3,"cantidadDeApuestas":324,"cuotaCualquiera":1.25,"ambosAnotan":1.363,"over":1.444,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19161},
	{"hora":11400,"liga":"U-CHAM","local":"Borussia Dortmund","visitante":"Atlético Madrid","cuotaLocal":2.25,"empate":3.65,"cuotaVisitante":3.1,"cantidadDeApuestas":308,"cuotaCualquiera":1.3,"ambosAnotan":1.48,"over":1.6,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19161},
	{"hora":11415,"liga":"YE-POR1","local":"FC Famalicao","visitante":"Sporting De Lisboa","cuotaLocal":9,"empate":5,"cuotaVisitante":1.333,"cantidadDeApuestas":144,"cuotaCualquiera":1.333,"ambosAnotan":2.1,"over":1.727,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19211},
	{"hora":11600,"liga":"ZA-COL1","local":"Envigado FC","visitante":"Tolima","cuotaLocal":5.25,"empate":3.75,"cuotaVisitante":1.727,"cantidadDeApuestas":143,"cuotaCualquiera":1.444,"ambosAnotan":2,"over":2.1,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19311},
	{"hora":11600,"liga":"ZA-URU1","local":"Montevideo Wanderers","visitante":"Liverpool Montevideo","cuotaLocal":3.45,"empate":3.2,"cuotaVisitante":2.05,"cantidadDeApuestas":85,"cuotaCualquiera":1.48,"ambosAnotan":1.833,"over":2.15,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":true,"codigoWplay":19398},
	{"hora":11630,"liga":"ZA-ECU2","local":"Cuniburo FC","visitante":"Vargas Torres","cuotaLocal":1.55,"empate":3.55,"cuotaVisitante":5.75,"cantidadDeApuestas":43,"cuotaCualquiera":1.45,"ambosAnotan":2.25,"over":2.3,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":30530},
	{"hora":11730,"liga":"ZA-ARG1","local":"Atletico Lanus","visitante":"Estudiantes de La Plata","cuotaLocal":2.5,"empate":3,"cuotaVisitante":3,"cantidadDeApuestas":162,"cuotaCualquiera":1.55,"ambosAnotan":2,"over":2.45,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19296},
	{"hora":11730,"liga":"ZA-ARG1","local":"Boca Juniors","visitante":"Godoy Cruz","cuotaLocal":1.65,"empate":3.6,"cuotaVisitante":5.75,"cantidadDeApuestas":164,"cuotaCualquiera":1.5,"ambosAnotan":2.25,"over":2.375,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19296},
	{"hora":11730,"liga":"ZA-ARG1","local":"CA Belgrano","visitante":"Racing Club","cuotaLocal":3.8,"empate":3.3,"cuotaVisitante":2,"cantidadDeApuestas":165,"cuotaCualquiera":1.48,"ambosAnotan":1.95,"over":2.2,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19296},
	{"hora":11730,"liga":"ZA-ARG1","local":"Defensa Y Justicia","visitante":"Newells Old Boys","cuotaLocal":2.35,"empate":3.2,"cuotaVisitante":3.1,"cantidadDeApuestas":162,"cuotaCualquiera":1.533,"ambosAnotan":2,"over":2.4,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19296},
	{"hora":11800,"liga":"ZA-ESTC","local":"Charlotte Independence","visitante":"Rhode Island FC","cuotaLocal":3.25,"empate":3.3,"cuotaVisitante":2.05,"cantidadDeApuestas":46,"cuotaCualquiera":1.4,"ambosAnotan":1.666,"over":1.9,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":19497},
	{"hora":11800,"liga":"ZA-ESTC","local":"Detroit City","visitante":"Michigan Stars","cuotaLocal":1.35,"empate":4.333,"cuotaVisitante":8,"cantidadDeApuestas":46,"cuotaCualquiera":1.333,"ambosAnotan":1.95,"over":1.727,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":19497},
	{"hora":11800,"liga":"ZA-ESTC","local":"Louisville City","visitante":"Greenville Triumph SC","cuotaLocal":1.533,"empate":4,"cuotaVisitante":5,"cantidadDeApuestas":46,"cuotaCualquiera":1.285,"ambosAnotan":1.65,"over":1.6,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":19497},
	{"hora":11810,"liga":"ZA-COL1","local":"Jaguares De Córdoba","visitante":"Deportivo Cali","cuotaLocal":2.2,"empate":3.2,"cuotaVisitante":3.7,"cantidadDeApuestas":145,"cuotaCualquiera":1.5,"ambosAnotan":1.95,"over":2.3,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19311},
	{"hora":11830,"liga":"ZA-URU1","local":"Miramar Misiones","visitante":"Nacional Montevideo","cuotaLocal":5.5,"empate":3.55,"cuotaVisitante":1.6,"cantidadDeApuestas":83,"cuotaCualquiera":1.45,"ambosAnotan":2.1,"over":2.2,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":true,"codigoWplay":19398},
	{"hora":11900,"liga":"ZA-ECU2","local":"Guayaquil City FC","visitante":"Manta FC","cuotaLocal":2,"empate":3.1,"cuotaVisitante":3.6,"cantidadDeApuestas":43,"cuotaCualquiera":1.48,"ambosAnotan":2,"over":2.4,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":30530},
	{"hora":11930,"liga":"ZA-BRA1","local":"Bahia BA","visitante":"Fluminense RJ","cuotaLocal":2.35,"empate":3.25,"cuotaVisitante":3,"cantidadDeApuestas":190,"cuotaCualquiera":1.42,"ambosAnotan":1.769,"over":2,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19297},
	{"hora":12020,"liga":"ZA-COL1","local":"Once Caldas","visitante":"Independiente Santa Fe","cuotaLocal":3.5,"empate":3.1,"cuotaVisitante":2.35,"cantidadDeApuestas":142,"cuotaCualquiera":1.571,"ambosAnotan":2.05,"over":2.55,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19311},
]
