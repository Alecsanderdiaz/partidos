let PARTIDOS_OPTIMIZADOS = [
	{"hora":11910,"liga":"ZA-COLC","mitad":true,"mitadFavorito":true,"codigoWplay":29698,"local":"Tigres FC","visitante":"Jaguares De Córdoba","cuotaLocal":3.8,"empate":3.7,"cuotaVisitante":1.85,"cantidadDeApuestas":80,"cuotaCualquiera":1.4,"ambosAnotan":1.833,"over":1.909,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":12000,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Pumas Unam","visitante":"Cruz Azul","cuotaLocal":3,"empate":3.45,"cuotaVisitante":2.4,"cantidadDeApuestas":184,"cuotaCualquiera":1.38,"ambosAnotan":1.666,"over":1.85,"cuotaFavorito":1.95,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":1.95,"favorito":"visitante"},
	{"hora":12210,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Tigres UANL","visitante":"Monterrey","cuotaLocal":2.55,"empate":3.3,"cuotaVisitante":2.9,"cantidadDeApuestas":186,"cuotaCualquiera":1.38,"ambosAnotan":1.65,"over":1.85,"cuotaFavorito":1.95,"rate":1,"stake":0,"localMitad":2,"visitanteMitad":2.1,"favorito":"local"},
	{"hora":11900,"liga":"ZA-ECU2","mitad":false,"mitadFavorito":false,"codigoWplay":30530,"local":"Gualaceo SC","visitante":"Chacaritas SC","cuotaLocal":1.8,"empate":3.4,"cuotaVisitante":4,"cantidadDeApuestas":43,"cuotaCualquiera":1,"ambosAnotan":2.05,"over":2.25,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11700,"liga":"ZA-LIBE","mitad":true,"mitadFavorito":true,"codigoWplay":19462,"local":"San Lorenzo","visitante":"Independiente Del Valle","cuotaLocal":2.15,"empate":3.25,"cuotaVisitante":3.7,"cantidadDeApuestas":183,"cuotaCualquiera":1.571,"ambosAnotan":2.15,"over":2.55,"cuotaFavorito":2.875,"rate":1,"stake":0,"localMitad":2.2,"visitanteMitad":2.75,"favorito":"visitante"},
	{"hora":11700,"liga":"ZA-LIBE","mitad":true,"mitadFavorito":true,"codigoWplay":19462,"local":"Liverpool Montevideo","visitante":"Palmeiras SP","cuotaLocal":8,"empate":4,"cuotaVisitante":1.48,"cantidadDeApuestas":183,"cuotaCualquiera":1.444,"ambosAnotan":2.15,"over":2.1,"cuotaFavorito":1.7,"rate":1,"stake":0,"localMitad":3.25,"visitanteMitad":1.75,"favorito":"visitante"},
	{"hora":11900,"liga":"ZA-LIBE","mitad":true,"mitadFavorito":true,"codigoWplay":19462,"local":"The Strongest","visitante":"Estudiantes de La Plata","cuotaLocal":1.6,"empate":4,"cuotaVisitante":5.75,"cantidadDeApuestas":184,"cuotaCualquiera":1.363,"ambosAnotan":1.8,"over":1.8,"cuotaFavorito":2.55,"rate":1,"stake":0,"localMitad":1.666,"visitanteMitad":2.8,"favorito":"visitante"},
	{"hora":11900,"liga":"ZA-LIBE","mitad":true,"mitadFavorito":true,"codigoWplay":19462,"local":"Colo Colo","visitante":"Fluminense RJ","cuotaLocal":2.3,"empate":3.3,"cuotaVisitante":3.35,"cantidadDeApuestas":185,"cuotaCualquiera":1.48,"ambosAnotan":1.93,"over":2.25,"cuotaFavorito":2.45,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":2.45,"favorito":"visitante"},
	{"hora":11700,"liga":"ZA-SUDA","mitad":true,"mitadFavorito":true,"codigoWplay":19348,"local":"CA Belgrano","visitante":"Delfin","cuotaLocal":1.666,"empate":3.7,"cuotaVisitante":5.5,"cantidadDeApuestas":184,"cuotaCualquiera":1.48,"ambosAnotan":2.15,"over":2.375,"cuotaFavorito":1.9,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":3.2,"favorito":"local"},
	{"hora":11900,"liga":"ZA-SUDA","mitad":true,"mitadFavorito":true,"codigoWplay":19348,"local":"Bragantino SP","visitante":"Racing Club","cuotaLocal":2.15,"empate":3.55,"cuotaVisitante":3.35,"cantidadDeApuestas":187,"cuotaCualquiera":1.38,"ambosAnotan":1.7,"over":1.85,"cuotaFavorito":1.95,"rate":1,"stake":0,"localMitad":1.9,"visitanteMitad":2.25,"favorito":"local"},
	{"hora":12100,"liga":"ZA-SUDA","mitad":true,"mitadFavorito":true,"codigoWplay":19348,"local":"Universidad Catolica Quito","visitante":"Union La Calera","cuotaLocal":1.285,"empate":5.5,"cuotaVisitante":11,"cantidadDeApuestas":187,"cuotaCualquiera":1.3,"ambosAnotan":2.15,"over":1.7,"cuotaFavorito":1.48,"rate":1,"stake":0,"localMitad":1.48,"visitanteMitad":3.55,"favorito":"local"},
	{"hora":12100,"liga":"ZA-SUDA","mitad":true,"mitadFavorito":true,"codigoWplay":19348,"local":"Deportivo Garcilaso","visitante":"Atletico Lanus","cuotaLocal":2.75,"empate":3.3,"cuotaVisitante":2.65,"cantidadDeApuestas":183,"cuotaCualquiera":1.45,"ambosAnotan":1.833,"over":2.1,"cuotaFavorito":2.2,"rate":1,"stake":0,"localMitad":2.2,"visitanteMitad":2.2,"favorito":"visitante"},
]

let ligas = PARTIDOS_OPTIMIZADOS.map(p => p.liga)
ligas = [...new Set(ligas)]
ligas.sort()
let cantidad = ligas.map(l => {
	return {
		liga: l,
		total: PARTIDOS_OPTIMIZADOS.filter(p => p.liga === l).length
	}
})
console.log({ cantidad })
