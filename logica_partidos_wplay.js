
const CONTENEDOR_DATOS = document.getElementById('contenedor-datos')

const dibujar = function ( partidos = PARTIDOS_OPTIMIZADOS) {
    let html = ''
    let indice = 0
    let total = partidos.length
    for (const partido of partidos) {
        indice++
        let partido_string = `${ partido.local } - ${ partido.visitante }`
        // let cantidad_de_letras = partido_string.length
        html += `
        <div class="row ${ partido.cantidadDeApuestas < 43 ? 'bg-warning': ''}">
        <div class="col-2 border text-end">
            <strong>${ indice }/${ total } - ${ partido.hora - 10000 }</strong>
        </div>
        <div class="col-1 border">
            <strong>${ partido.liga }</strong>
        </div>
        <div class="col-3 border">
            <strong>${ partido_string.substring(0,30) }</strong>
        </div>
        <div class="col border">
            <div class="row">
                <div class="col-4 border">${ partido.cuotaLocal }</div>
                <div class="col-4 border">${ partido.empate }</div>
                <div class="col-4 border">${ partido.cuotaVisitante }</div>
            </div>
        </div>
        <div class="col border">
            <strong>${ partido.cantidadDeApuestas }</strong>
        </div> 
        <div class="col border">
            <strong>${ partido.cuotaCualquiera || '' }</strong>
        </div> 
    </div>
        `
    }
    
    CONTENEDOR_DATOS.innerHTML = html
}

dibujar()

const ordenar = function ( value ) {
    console.log({ value })
    PARTIDOS_OPTIMIZADOS.sort((a, b) => a[ value ] - b[ value ])
    dibujar()
}