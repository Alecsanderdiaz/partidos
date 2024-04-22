let PARTIDOS_OPTIMIZADOS = [
	{"hora":11600,"liga":"ZA-COL1","local":"Fortaleza FC","visitante":"Atletico Bucaramanga","cuotaLocal":1.909,"empate":3.4,"cuotaVisitante":4.5,"cantidadDeApuestas":172,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19311},
	{"hora":11700,"liga":"ZF-COL","local":"Deportivo Pasto (F)","visitante":"Internacional de Palmira (F)","cuotaLocal":1.533,"empate":3.75,"cuotaVisitante":5.5,"cantidadDeApuestas":43,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":48455},
	{"hora":11810,"liga":"ZA-COL1","local":"Boyaca Chico FC","visitante":"Rionegro Aguilas","cuotaLocal":2.7,"empate":3.2,"cuotaVisitante":2.85,"cantidadDeApuestas":170,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19311},
	{"hora":11900,"liga":"ZA-BRA2","local":"Vila Nova FC","visitante":"Guarani SP","cuotaLocal":2.05,"empate":3,"cuotaVisitante":3.6,"cantidadDeApuestas":113,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19393},
	{"hora":11910,"liga":"ZA-ARG2","local":"Quilmes AC","visitante":"Patronato Parana","cuotaLocal":1.65,"empate":3.2,"cuotaVisitante":5.5,"cantidadDeApuestas":45,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":false,"mitadFavorito":false,"codigoWplay":19342},
	{"hora":12020,"liga":"ZA-COL1","local":"Deportivo Pasto","visitante":"La Equidad","cuotaLocal":3.2,"empate":3.1,"cuotaVisitante":2.5,"cantidadDeApuestas":161,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"mitad":true,"mitadFavorito":true,"codigoWplay":19311},
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
