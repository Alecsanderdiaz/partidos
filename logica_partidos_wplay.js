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
    let acumuladoFavorito = 1
    for (const partido of partidos) {
        if (partido.cuotaCualquiera) {
            acumulado = Math.floor(acumulado * partido.cuotaCualquiera * 100) / 100
        }
        if (acumulado > 50000) {
            acumulado = 1
        }
        let acumuladoEntero = Math.floor(acumulado)

        
        if (partido.cuotaFavorito) {
            acumuladoFavorito = Math.floor(acumuladoFavorito * partido.cuotaFavorito * 100) / 100
        }
        if (acumuladoFavorito > 50000) {
            acumuladoFavorito = 1
        }
        let acumuladoEnteroFavorito = Math.floor(acumuladoFavorito)

        indice++
        let partido_string = `${partido.local} - ${partido.visitante}`
        console.log({ partido_string, acumuladoEnteroFavorito })
        // let cantidad_de_letras = partido_string.length
        html += `
        <div class="row ${partido.cantidadDeApuestas < 60 ? 'bg-warning' : ''} ${partido.cantidadDeApuestas < 60 && partido.cuotaCualquiera > 1 && partido.cuotaCualquiera < 1.27 ? 'bg-danger' : ''}">
            <div class="col-1 border text-end">
                <small>${indice}/${total} - ${partido.hora - 10000}</small>
            </div>
            <div class="col-1 border">
                <strong>${partido.liga}</strong>
            </div>
            <div class="col-3 border ${partido.cuotaFavorito && partido.cuotaFavorito > 1 && partido.cuotaFavorito < 1.75 ? 'bg-warning' : ''} ${partido.cuotaCualquiera && partido.cuotaCualquiera > 1 && partido.cuotaCualquiera < 1.27 && partido.cuotaFavorito && partido.cuotaFavorito > 1 && partido.cuotaFavorito < 1.75 ? 'bg-danger' : ''}">
                <strong class="${partido.favorito === 'local' ? 'bg-success text-white' : ''}">${partido.local.substring(0, 30)}</strong>
                <br>
                <strong class="${partido.favorito === 'visitante' ? 'bg-success text-white' : ''}">${partido.visitante.substring(0, 30)}</strong>
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
            <div class="col-1 border">
                <strong>${ acumuladoEnteroFavorito }</strong>
            </div>
            <div class="col border">
                <div class="row">
                <div class="col">
                <strong>${partido.cantidadDeApuestas}</strong>
                </div>
                <div class="col">
                <small>${partido.stake || 0}</small>
                </div>
                <div class="col ${partido.cuotaFavorito && partido.cuotaFavorito < 1.74 ? 'bg-warning' : ''}">
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
                <div class="col ${partido.rate && partido.rate < 1.2 ? 'bg-warning' : ''}">
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
        <div class="row ${partido.cantidadDeApuestas < 50 ? 'bg-warning' : ''}">
            <div class="col-2 border">
                ${indice}/${total}<br>
                ${partido.hora - 10000}
            </div>
            <div class="col-4 border">
                ${partido.liga}
                <br>
                <small class="${partido.favorito === 'local' ? 'bg-secondary text-white' : ''}">${partido.local.substring(0, 10)}</small>
                <br>
                <small class="${partido.favorito === 'visitante' ? 'bg-secondary text-white' : ''}">${partido.visitante.substring(0, 10)}</small>
            </div>
            <div class="col-2 border text-center">
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
            if (nameA == nameB && a['favorito'] === 'local') {
                return -1;
            }

            // names must be equal
            return 0;
        });
    }
    dibujar()
    dibujarSM()
}

