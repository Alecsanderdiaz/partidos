let PARTIDOS_BACKUP = [...PARTIDOS_OPTIMIZADOS]
let indiceFavorito = 0
let favorito = 'local'

const CONTENEDOR_DATOS = document.getElementById('contenedor-datos')
const CONTENEDOR_DATOS_SM = document.getElementById('contenedor-datos-sm')

const elegirFavorito =  function (indice, valor) {
    indiceFavorito = indice - 1
    PARTIDOS_OPTIMIZADOS[indiceFavorito]['favorito']=valor
    const myModal = new bootstrap.Modal(document.getElementById('stakeModal'))
    myModal.show()
    // console.log(myModal)
    // dibujar()
}

const colocarStake = function (value) {
    PARTIDOS_OPTIMIZADOS[indiceFavorito]['stake']=value
    let modal_obj = bootstrap.Modal.getInstance(stakeModal);
        modal_obj.hide();
    dibujar()
}


const dibujar = function (partidos = PARTIDOS_OPTIMIZADOS) {
    let html = ''
    let indice = 0
    let total = partidos.length
    let acumulado = 1
    for (const partido of partidos) {
        if (partido.cuotaCualquiera) {
            acumulado = Math.floor(acumulado * partido.cuotaCualquiera * 100) / 100
        }
        if (acumulado > 50000) {
            acumulado = 1
        }
        let acumuladoEntero = Math.floor(acumulado)
        indice++
        let partido_string = `${partido.local} - ${partido.visitante}`
        // let cantidad_de_letras = partido_string.length
        html += `
        <div class="row ${partido.cantidadDeApuestas < 50 ? 'bg-warning' : ''}">
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
                <div class="col-4 border ${partido.cantidadDeApuestas > 43 && partido.cuotaLocal > partido.cuotaVisitante ? 'bg-success-subtle' : ''} ${partido.favorito === 'local' ? 'favorito' : ''}">
                    <span onclick="elegirFavorito(${ indice }, 'local')">${partido.cuotaLocal.toFixed(2)}<span>
                </div>
                <div class="col-4 border">${partido.empate.toFixed(2)}</div>
                <div class="col-4 border ${partido.cantidadDeApuestas > 43 && partido.cuotaLocal < partido.cuotaVisitante ? 'bg-success-subtle' : ''} ${partido.favorito === 'visitante' ? 'favorito' : ''}">
                    <span onclick="elegirFavorito(${ indice }, 'visitante')">${partido.cuotaVisitante.toFixed(2)}<span>
                </div>
            </div>
        </div>
        <div class="col border">
            <div class="row">
            <div class="col">
            <strong>${partido.cantidadDeApuestas}</strong>
            </div>
            <div class="col">
            <small>${partido.stake || 0}</small>
            </div>
            <div class="col">
            <small>${partido.cuotaFavorito?.toFixed(2) || 1}</small>
            </div>
            </div>
        </div> 
        <div class="col border">
             
            <div class="row">
            <div class="col">
            <strong>${partido.cuotaCualquiera?.toFixed(2) || ''}</strong>
            </div>
            <div class="col">
            ${ acumuladoEntero }
            </div>
            <div class="col">
            ${partido.rate}
            </div>
            </div>
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
    let acumulado = 1
    for (const partido of partidos) {
        if (partido.cuotaCualquiera) {
            acumulado = Math.floor(acumulado * partido.cuotaCualquiera * 100) / 100
        }
        if (acumulado > 50000) {
            acumulado = 1
        }
        let acumuladoEntero = Math.floor(acumulado)
        indice++
        html += `
        <div class="row">
            <div class="col-2 border">
                ${indice}/${total}<br>
                ${partido.hora - 10000}
            </div>
            <div class="col-4 border">
                ${partido.liga}
                <br>
                <small>${partido.local.substring(0, 15)}</small>
                <br>
                <small>${partido.visitante.substring(0, 15)}</small>
            </div>
            <div class="col-2 border text-center ${partido.cantidadDeApuestas < 43 ? 'bg-warning' : ''}">
                <div class="${partido.cantidadDeApuestas > 43 && partido.cuotaLocal > partido.cuotaVisitante ? 'bg-success-subtle' : ''}">${partido.cuotaLocal.toFixed(2)}</div>
                <div>${partido.empate.toFixed(2)}</div>
                <div class="${partido.cantidadDeApuestas > 43 && partido.cuotaLocal < partido.cuotaVisitante ? 'bg-success-subtle' : ''}">${partido.cuotaVisitante.toFixed(2)}</div>
            </div>
            <div class="col-2 border">
                <small>${partido.cuotaCualquiera?.toFixed(2) || ''}</small>
                <br>
                <small>${partido.cuotaFavorito?.toFixed(2) || 1}</small>
                <br>
                <small>${partido.rate || 1}</small>
            </div>
            <div class="col-2 border">
           

                <small>${ acumuladoEntero }</small>
                <br>
                <small>${partido.stake || 0}</small>
                <br>
                <small>${partido.cantidadDeApuestas || 0}</small>
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

