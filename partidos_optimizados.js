let PARTIDOS_OPTIMIZADOS = [
	{"hora":11145,"liga":"YE-HOL1","mitad":true,"mitadFavorito":true,"codigoWplay":19358,"local":"ADO Den Haag","visitante":"SBV Excelsior","cuotaLocal":2.45,"empate":3.6,"cuotaVisitante":2.85,"cantidadDeApuestas":166,"cuotaCualquiera":1.3,"ambosAnotan":1.48,"over":1.6,"cuotaFavorito":1.85,"rate":1,"stake":0,"localMitad":1.833,"visitanteMitad":1.93,"favorito":"visitante"},
	{"hora":11330,"liga":"ZA-PAR1","mitad":false,"mitadFavorito":true,"codigoWplay":19359,"local":"Sol de America","visitante":"Club Tacuary","cuotaLocal":2.4,"empate":3.1,"cuotaVisitante":2.9,"cantidadDeApuestas":85,"cuotaCualquiera":1,"ambosAnotan":1.833,"over":2.2,"cuotaFavorito":2.4,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":2.35,"favorito":"visitante"},
	{"hora":11400,"liga":"ZA-BOL1","mitad":false,"mitadFavorito":false,"codigoWplay":19786,"local":"Real Tomayapo","visitante":"Universitario de Vinto","cuotaLocal":2.15,"empate":3.2,"cuotaVisitante":3.1,"cantidadDeApuestas":43,"cuotaCualquiera":1,"ambosAnotan":1.55,"over":1.75,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"U-EURO","mitad":true,"mitadFavorito":true,"codigoWplay":19162,"local":"Atalanta","visitante":"Bayer Leverkusen","cuotaLocal":4.75,"empate":3.7,"cuotaVisitante":1.8,"cantidadDeApuestas":313,"cuotaCualquiera":1.35,"ambosAnotan":1.727,"over":1.8,"cuotaFavorito":1.727,"rate":1,"stake":0,"localMitad":2.5,"visitanteMitad":1.727,"favorito":"visitante"},
	{"hora":11530,"liga":"ZA-ECU1","mitad":true,"mitadFavorito":true,"codigoWplay":19373,"local":"Mushuc Runa","visitante":"Universidad Catolica Quito","cuotaLocal":3.5,"empate":3.35,"cuotaVisitante":2.05,"cantidadDeApuestas":115,"cuotaCualquiera":1.333,"ambosAnotan":1.571,"over":1.75,"cuotaFavorito":1.7,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":1.7,"favorito":"visitante"},
	{"hora":11630,"liga":"ZA-PAR1","mitad":false,"mitadFavorito":true,"codigoWplay":19359,"local":"Sportivo Luqueno","visitante":"Olimpia Asuncion","cuotaLocal":2.35,"empate":3,"cuotaVisitante":3.1,"cantidadDeApuestas":86,"cuotaCualquiera":1,"ambosAnotan":1.833,"over":2.2,"cuotaFavorito":2.375,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":2.375,"favorito":"visitante"},
	{"hora":11700,"liga":"ZA-BRAC","mitad":false,"mitadFavorito":true,"codigoWplay":19465,"local":"EC Vitoria","visitante":"Botafogo RJ","cuotaLocal":2.75,"empate":3.2,"cuotaVisitante":2.45,"cantidadDeApuestas":92,"cuotaCualquiera":1,"ambosAnotan":1.833,"over":2.15,"cuotaFavorito":2.25,"rate":1,"stake":0,"localMitad":2.35,"visitanteMitad":2.2,"favorito":"visitante"},
	{"hora":11700,"liga":"ZA-BRAC","mitad":false,"mitadFavorito":true,"codigoWplay":19465,"local":"Atletico GO","visitante":"Brusque FC","cuotaLocal":1.48,"empate":3.8,"cuotaVisitante":6.5,"cantidadDeApuestas":92,"cuotaCualquiera":1,"ambosAnotan":2.25,"over":2.15,"cuotaFavorito":1.727,"rate":1,"stake":0,"localMitad":1.727,"visitanteMitad":3.55,"favorito":"local"},
	{"hora":11700,"liga":"ZA-BRAC","mitad":false,"mitadFavorito":true,"codigoWplay":19465,"local":"Fluminense RJ","visitante":"Sampaio Correa MA","cuotaLocal":1.133,"empate":6.5,"cuotaVisitante":19,"cantidadDeApuestas":89,"cuotaCualquiera":1,"ambosAnotan":2.4,"over":1.5,"cuotaFavorito":1.35,"rate":1,"stake":0,"localMitad":1.363,"visitanteMitad":4.2,"favorito":"local"},
	{"hora":11800,"liga":"ZA-BRAC","mitad":false,"mitadFavorito":true,"codigoWplay":19465,"local":"Corinthians SP","visitante":"America RN","cuotaLocal":1.285,"empate":4.75,"cuotaVisitante":9.5,"cantidadDeApuestas":91,"cuotaCualquiera":1,"ambosAnotan":2.2,"over":1.769,"cuotaFavorito":1.533,"rate":1,"stake":0,"localMitad":1.533,"visitanteMitad":3.75,"favorito":"local"},
	{"hora":11800,"liga":"ZA-BRAC","mitad":false,"mitadFavorito":true,"codigoWplay":19465,"local":"Sport Recife PE","visitante":"Atletico MG","cuotaLocal":3.65,"empate":3.45,"cuotaVisitante":1.9,"cantidadDeApuestas":94,"cuotaCualquiera":1,"ambosAnotan":1.85,"over":2.1,"cuotaFavorito":1.95,"rate":1,"stake":0,"localMitad":2.625,"visitanteMitad":1.95,"favorito":"visitante"},
	{"hora":11800,"liga":"ZA-BOL1","mitad":false,"mitadFavorito":false,"codigoWplay":19786,"local":"Club Aurora","visitante":"Bolivar","cuotaLocal":2.1,"empate":3.35,"cuotaVisitante":3,"cantidadDeApuestas":43,"cuotaCualquiera":1,"ambosAnotan":1.48,"over":1.615,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11800,"liga":"ZA-ESTC","mitad":false,"mitadFavorito":true,"codigoWplay":19497,"local":"Indy Eleven","visitante":"Detroit City","cuotaLocal":1.727,"empate":3.75,"cuotaVisitante":4,"cantidadDeApuestas":82,"cuotaCualquiera":1,"ambosAnotan":1.8,"over":1.85,"cuotaFavorito":1.8,"rate":1,"stake":0,"localMitad":1.769,"visitanteMitad":2.6,"favorito":"local"},
	{"hora":11815,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"Atletico Bucaramanga","visitante":"Millonarios","cuotaLocal":2.625,"empate":2.85,"cuotaVisitante":3.25,"cantidadDeApuestas":182,"cuotaCualquiera":1.615,"ambosAnotan":2.15,"over":2.8,"cuotaFavorito":2.4,"rate":1,"stake":0,"localMitad":2.4,"visitanteMitad":2.7,"favorito":"local"},
	{"hora":11830,"liga":"ZA-ESTC","mitad":false,"mitadFavorito":true,"codigoWplay":19497,"local":"Tampa Bay Rowdies","visitante":"FC Dallas","cuotaLocal":2.55,"empate":3.5,"cuotaVisitante":2.45,"cantidadDeApuestas":84,"cuotaCualquiera":1,"ambosAnotan":1.55,"over":1.727,"cuotaFavorito":1.95,"rate":1,"stake":0,"localMitad":2,"visitanteMitad":1.95,"favorito":"visitante"},
	{"hora":11900,"liga":"ZA-ECU1","mitad":true,"mitadFavorito":true,"codigoWplay":19373,"local":"Barcelona SC","visitante":"LDU Quito","cuotaLocal":2.35,"empate":3.1,"cuotaVisitante":3.2,"cantidadDeApuestas":106,"cuotaCualquiera":1.42,"ambosAnotan":1.727,"over":2.05,"cuotaFavorito":1.95,"rate":1,"stake":0,"localMitad":1.95,"visitanteMitad":2.15,"favorito":"local"},
	{"hora":11900,"liga":"ZA-ECU2","mitad":false,"mitadFavorito":false,"codigoWplay":30530,"local":"Club Leones Del Norte","visitante":"Vargas Torres","cuotaLocal":2.05,"empate":2.95,"cuotaVisitante":3.65,"cantidadDeApuestas":43,"cuotaCualquiera":1,"ambosAnotan":2.1,"over":2.6,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11900,"liga":"ZA-PAR1","mitad":false,"mitadFavorito":true,"codigoWplay":19359,"local":"Cerro Porteño","visitante":"Guarani Asuncion","cuotaLocal":1.48,"empate":4,"cuotaVisitante":6.25,"cantidadDeApuestas":85,"cuotaCualquiera":1,"ambosAnotan":1.93,"over":1.833,"cuotaFavorito":1.6,"rate":1,"stake":0,"localMitad":1.615,"visitanteMitad":3,"favorito":"local"},
	{"hora":11910,"liga":"ZA-ARGC","mitad":true,"mitadFavorito":true,"codigoWplay":19572,"local":"Atletico Tucuman","visitante":"Gimnasia LP","cuotaLocal":2.55,"empate":2.95,"cuotaVisitante":3,"cantidadDeApuestas":98,"cuotaCualquiera":1.55,"ambosAnotan":1.95,"over":2.45,"cuotaFavorito":2.15,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":2.35,"favorito":"local"},
	{"hora":11930,"liga":"ZA-BRAC","mitad":false,"mitadFavorito":true,"codigoWplay":19465,"local":"Amazonas FC","visitante":"Flamengo RJ","cuotaLocal":9,"empate":4.75,"cuotaVisitante":1.3,"cantidadDeApuestas":92,"cuotaCualquiera":1,"ambosAnotan":1.95,"over":1.65,"cuotaFavorito":1.48,"rate":1,"stake":0,"localMitad":3.2,"visitanteMitad":1.48,"favorito":"visitante"},
	{"hora":11930,"liga":"ZA-BOL1","mitad":false,"mitadFavorito":false,"codigoWplay":19786,"local":"Blooming","visitante":"Jorge Wilstermann","cuotaLocal":1.75,"empate":3.4,"cuotaVisitante":4.333,"cantidadDeApuestas":43,"cuotaCualquiera":1,"ambosAnotan":2.05,"over":2.25,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":12030,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"Deportivo Pereira","visitante":"CD Junior","cuotaLocal":2.55,"empate":2.875,"cuotaVisitante":3.3,"cantidadDeApuestas":181,"cuotaCualquiera":1.615,"ambosAnotan":2.15,"over":2.8,"cuotaFavorito":2.4,"rate":1,"stake":0,"localMitad":2.4,"visitanteMitad":2.75,"favorito":"local"},
	{"hora":12130,"liga":"ZA-ESTC","mitad":false,"mitadFavorito":true,"codigoWplay":19497,"local":"Seattle Sounders","visitante":"Phoenix Rising FC","cuotaLocal":1.55,"empate":4,"cuotaVisitante":5,"cantidadDeApuestas":81,"cuotaCualquiera":1,"ambosAnotan":1.666,"over":1.65,"cuotaFavorito":1.6,"rate":1,"stake":0,"localMitad":1.6,"visitanteMitad":2.6,"favorito":"local"},
]