
let html = ''
let indice = 0
let total = PARTIDOS_OPTIMIZADOS.length
for (const partido of PARTIDOS_OPTIMIZADOS) {
    indice++
    let partido_string = `${ partido.local } - ${ partido.visitante }`
    // let cantidad_de_letras = partido_string.length
    html += `
    <div class="row ${ partido.cantidadDeApuestas < 43 ? 'bg-warning': ''}">
    <div class="col-2 border text-end">
        <strong>${ indice }/${ total } - ${ partido.hora - 10000 }</strong>
    </div>
    <div class="col-1 border">
        <strong>AMI</strong>
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
</div>
    `
}

const CONTENEDOR_DATOS = document.getElementById('contenedor-datos')

CONTENEDOR_DATOS.innerHTML = html