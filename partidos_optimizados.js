let PARTIDOS_OPTIMIZADOS = [
	{"hora":11030,"liga":"I-AMI","mitad":true,"mitadFavorito":true,"codigoWplay":19287,"local":"Republica Checa","visitante":"Malta","cuotaLocal":1.181,"empate":7,"cuotaVisitante":15,"cantidadDeApuestas":42,"cuotaCualquiera":1,"ambosAnotan":2.2,"over":1.5,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11030,"liga":"I-TOU","mitad":false,"mitadFavorito":false,"codigoWplay":20192,"local":"Francia Juvenil","visitante":"South Korea Youth","cuotaLocal":1.3,"empate":5.25,"cuotaVisitante":7,"cantidadDeApuestas":38,"cuotaCualquiera":1,"ambosAnotan":1.727,"over":1.48,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11100,"liga":"M-AFR","mitad":false,"mitadFavorito":true,"codigoWplay":452779,"local":"Madagascar","visitante":"Comores","cuotaLocal":3.45,"empate":2.85,"cuotaVisitante":2.4,"cantidadDeApuestas":88,"cuotaCualquiera":1.65,"ambosAnotan":2.2,"over":2.85,"cuotaFavorito":2.25,"rate":1,"stake":0,"localMitad":2.625,"visitanteMitad":2.25,"favorito":"visitante"},
	{"hora":11100,"liga":"M-AFR","mitad":false,"mitadFavorito":true,"codigoWplay":452779,"local":"Uganda","visitante":"Botsuana","cuotaLocal":1.833,"empate":3.2,"cuotaVisitante":5,"cantidadDeApuestas":38,"cuotaCualquiera":1,"ambosAnotan":2.2,"over":2.6,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11100,"liga":"M-AFR","mitad":false,"mitadFavorito":true,"codigoWplay":452779,"local":"Angola","visitante":"Eswatini","cuotaLocal":1.35,"empate":4.5,"cuotaVisitante":10,"cantidadDeApuestas":37,"cuotaCualquiera":1,"ambosAnotan":2.55,"over":2.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11100,"liga":"I-AMI","mitad":true,"mitadFavorito":true,"codigoWplay":19287,"local":"Armenia","visitante":"Kazajistán","cuotaLocal":2,"empate":3.4,"cuotaVisitante":3.75,"cantidadDeApuestas":58,"cuotaCualquiera":1,"ambosAnotan":1.833,"over":2.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11200,"liga":"I-AMI","mitad":true,"mitadFavorito":true,"codigoWplay":19287,"local":"Albania","visitante":"Azerbaiyán","cuotaLocal":1.9,"empate":3.25,"cuotaVisitante":4.333,"cantidadDeApuestas":113,"cuotaCualquiera":1.48,"ambosAnotan":1.93,"over":2.2,"cuotaFavorito":1.8,"rate":1,"stake":0,"localMitad":1.8,"visitanteMitad":2.6,"favorito":"local"},
	{"hora":11200,"liga":"I-AMI","mitad":true,"mitadFavorito":true,"codigoWplay":19287,"local":"Bielorrusia","visitante":"Rusia","cuotaLocal":4.75,"empate":3.55,"cuotaVisitante":1.666,"cantidadDeApuestas":38,"cuotaCualquiera":1,"ambosAnotan":1.85,"over":1.95,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11300,"liga":"I-AMI","mitad":true,"mitadFavorito":true,"codigoWplay":19287,"local":"Rumania","visitante":"Liechtenstein","cuotaLocal":1.062,"empate":8.5,"cuotaVisitante":19,"cantidadDeApuestas":29,"cuotaCualquiera":1,"ambosAnotan":1,"over":1.363,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11345,"liga":"I-AMI","mitad":true,"mitadFavorito":true,"codigoWplay":19287,"local":"Inglaterra","visitante":"Islandia","cuotaLocal":1.133,"empate":9,"cuotaVisitante":21,"cantidadDeApuestas":192,"cuotaCualquiera":1.2,"ambosAnotan":2.15,"over":1.38,"cuotaFavorito":1.285,"rate":1,"stake":0,"localMitad":1.285,"visitanteMitad":3.75,"favorito":"local"},
	{"hora":11345,"liga":"I-AMI","mitad":true,"mitadFavorito":true,"codigoWplay":19287,"local":"Alemania","visitante":"Grecia","cuotaLocal":1.285,"empate":6,"cuotaVisitante":11,"cantidadDeApuestas":176,"cuotaCualquiera":1.25,"ambosAnotan":1.95,"over":1.571,"cuotaFavorito":1.42,"rate":1,"stake":0,"localMitad":1.42,"visitanteMitad":3.3,"favorito":"local"},
	{"hora":11345,"liga":"I-AMI","mitad":true,"mitadFavorito":true,"codigoWplay":19287,"local":"Escocia","visitante":"Finlandia","cuotaLocal":1.666,"empate":3.7,"cuotaVisitante":5.25,"cantidadDeApuestas":117,"cuotaCualquiera":1.45,"ambosAnotan":2,"over":2.1,"cuotaFavorito":1.75,"rate":1,"stake":0,"localMitad":1.75,"visitanteMitad":2.75,"favorito":"local"},
	{"hora":11345,"liga":"I-AMI","mitad":true,"mitadFavorito":true,"codigoWplay":19287,"local":"Polonia","visitante":"Ucrania","cuotaLocal":2.6,"empate":3.1,"cuotaVisitante":2.75,"cantidadDeApuestas":113,"cuotaCualquiera":1.48,"ambosAnotan":1.85,"over":2.25,"cuotaFavorito":2.15,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":2.2,"favorito":"local"},
	{"hora":11400,"liga":"M-AFR","mitad":false,"mitadFavorito":true,"codigoWplay":452779,"local":"Nigeria","visitante":"Sudafrica","cuotaLocal":1.533,"empate":3.8,"cuotaVisitante":7,"cantidadDeApuestas":84,"cuotaCualquiera":1,"ambosAnotan":2.25,"over":2.25,"cuotaFavorito":1.769,"rate":1,"stake":0,"localMitad":1.769,"visitanteMitad":3.55,"favorito":"local"},
	{"hora":11400,"liga":"M-AFR","mitad":false,"mitadFavorito":true,"codigoWplay":452779,"local":"Costa de Marfil","visitante":"Gabón","cuotaLocal":1.35,"empate":4.5,"cuotaVisitante":10,"cantidadDeApuestas":78,"cuotaCualquiera":1,"ambosAnotan":2.25,"over":1.95,"cuotaFavorito":1.6,"rate":1,"stake":0,"localMitad":1.571,"visitanteMitad":3.75,"favorito":"local"},
	{"hora":11400,"liga":"M-AFR","mitad":false,"mitadFavorito":true,"codigoWplay":452779,"local":"Marruecos","visitante":"Zambia","cuotaLocal":1.3,"empate":5,"cuotaVisitante":10,"cantidadDeApuestas":85,"cuotaCualquiera":1,"ambosAnotan":2.3,"over":1.85,"cuotaFavorito":1.533,"rate":1,"stake":0,"localMitad":1.533,"visitanteMitad":3.8,"favorito":"local"},
	{"hora":11600,"liga":"ZF-COL","mitad":false,"mitadFavorito":false,"codigoWplay":48455,"local":"America de Cali (F)","visitante":"Atletico Nacional (F)","cuotaLocal":1.909,"empate":3.9,"cuotaVisitante":3.1,"cantidadDeApuestas":39,"cuotaCualquiera":1,"ambosAnotan":1.533,"over":1.615,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11700,"liga":"ZA-BRA2","mitad":true,"mitadFavorito":true,"codigoWplay":19393,"local":"Coritiba PR","visitante":"Ituano SP","cuotaLocal":1.45,"empate":4.2,"cuotaVisitante":7,"cantidadDeApuestas":116,"cuotaCualquiera":1.45,"ambosAnotan":2.25,"over":2.1,"cuotaFavorito":1.65,"rate":1,"stake":0,"localMitad":1.65,"visitanteMitad":3.3,"favorito":"local"},
	{"hora":11800,"liga":"ZA-ARGC","mitad":true,"mitadFavorito":true,"codigoWplay":19572,"local":"San Lorenzo","visitante":"Chacarita Juniors","cuotaLocal":1.75,"empate":3.3,"cuotaVisitante":5.25,"cantidadDeApuestas":101,"cuotaCualquiera":1.571,"ambosAnotan":2.4,"over":3.1,"cuotaFavorito":1.93,"rate":1,"stake":0,"localMitad":1.93,"visitanteMitad":3.2,"favorito":"local"},
	{"hora":11800,"liga":"ZA-CHI1","mitad":false,"mitadFavorito":true,"codigoWplay":19303,"local":"Union Espanola","visitante":"Union La Calera","cuotaLocal":1.65,"empate":3.85,"cuotaVisitante":4.333,"cantidadDeApuestas":90,"cuotaCualquiera":1,"ambosAnotan":1.5,"over":1.533,"cuotaFavorito":1.571,"rate":1,"stake":0,"localMitad":1.571,"visitanteMitad":2.3,"favorito":"local"},
	{"hora":11900,"liga":"ZA-BRA2","mitad":true,"mitadFavorito":true,"codigoWplay":19393,"local":"Novorizontino SP","visitante":"Santos SP","cuotaLocal":3.35,"empate":3.1,"cuotaVisitante":2.25,"cantidadDeApuestas":114,"cuotaCualquiera":1.571,"ambosAnotan":2.05,"over":2.55,"cuotaFavorito":2.1,"rate":1,"stake":0,"localMitad":2.5,"visitanteMitad":2.1,"favorito":"visitante"},
	{"hora":11930,"liga":"I-AMI","mitad":true,"mitadFavorito":true,"codigoWplay":19287,"local":"Perú","visitante":"Paraguay","cuotaLocal":2.5,"empate":2.95,"cuotaVisitante":3,"cantidadDeApuestas":113,"cuotaCualquiera":1.571,"ambosAnotan":2,"over":2.55,"cuotaFavorito":2.4,"rate":1,"stake":0,"localMitad":2.2,"visitanteMitad":2.4,"favorito":"visitante"},
]