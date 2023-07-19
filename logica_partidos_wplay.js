let PARTIDOS_BACKUP = [...PARTIDOS_OPTIMIZADOS]

const CONTENEDOR_DATOS = document.getElementById('contenedor-datos')
const CONTENEDOR_DATOS_SM = document.getElementById('contenedor-datos-sm')

const dibujar = function (partidos = PARTIDOS_OPTIMIZADOS) {
    let html = ''
    let indice = 0
    let total = partidos.length
    for (const partido of partidos) {
        indice++
        let partido_string = `${partido.local} - ${partido.visitante}`
        // let cantidad_de_letras = partido_string.length
        html += `
        <div class="row ${partido.cantidadDeApuestas < 43 ? 'bg-warning' : ''}">
        <div class="col-2 border text-end">
            <strong>${indice}/${total} - ${partido.hora - 10000}</strong>
        </div>
        <div class="col-1 border">
            <strong>${partido.liga}</strong>
        </div>
        <div class="col-3 border">
            <strong>${partido_string.substring(0, 30)}</strong>
        </div>
        <div class="col border">
            <div class="row">
                <div class="col-4 border">${partido.cuotaLocal}</div>
                <div class="col-4 border">${partido.empate}</div>
                <div class="col-4 border">${partido.cuotaVisitante}</div>
            </div>
        </div>
        <div class="col border">
            <strong>${partido.cantidadDeApuestas}</strong>
        </div> 
        <div class="col border">
            <strong>${partido.cuotaCualquiera || ''}</strong>
        </div> 
    </div>
        `
    }

    CONTENEDOR_DATOS.innerHTML = html
}

const dibujarSM = function (partidos = PARTIDOS_OPTIMIZADOS) {
    let html = ''
    let indice = 0
    let total = partidos.length
    for (const partido of partidos) {
        indice++
        html += `
        <div class="row ${partido.cantidadDeApuestas < 43 ? 'bg-warning' : ''}">
            <div class="col-2 border">
                ${indice}/${total}<br>
                ${partido.hora - 10000}
            </div>
            <div class="col-6 border">
                ${partido.liga}
                <br>
                <small>${partido.local.substring(0, 15)}</small>
                <br>
                <small>${partido.visitante.substring(0, 15)}</small>
            </div>
            <div class="col-2 border">
                ${partido.cuotaLocal.toFixed(2)}
                <br>
                ${partido.empate.toFixed(2)}
                <br>
                ${partido.cuotaVisitante.toFixed(2)}
            </div>
            <div class="col-2 border">
                ${partido.cuotaCualquiera?.toFixed(2) || ''}
            </div>
        </div>
        `
    }

    CONTENEDOR_DATOS_SM.innerHTML = html
}

dibujar()
dibujarSM()

const ordenar = function (value) {
    console.log({ value })
    if (value === 'cuotaCualquiera') {
        const filtrados = PARTIDOS_OPTIMIZADOS.filter(partido => partido.hasOwnProperty('cuotaCualquiera'))
        PARTIDOS_OPTIMIZADOS = filtrados
    }
    if (value !== 'liga') {
        PARTIDOS_OPTIMIZADOS.sort((a, b) => a[value] - b[value])
    } else {
        PARTIDOS_OPTIMIZADOS.sort((a, b) => {
            const nameA = a[value].toUpperCase(); // ignore upper and lowercase
            const nameB = b[value].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });
    }
    dibujar()
    dibujarSM()
}