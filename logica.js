const CONTENEDOR = document.querySelector('#contenedor');
const HORA = document.querySelector('#hora');
const GRUPO = document.querySelector('#grupo');
const INICIO = document.querySelector('#inicio');
const FIN = document.querySelector('#fin');

const HORA2 = document.querySelector('#hora2');
const GRUPO2 = document.querySelector('#grupo2');
const INICIO2 = document.querySelector('#inicio2');
const FIN2 = document.querySelector('#fin2');

let PARTIDOS_ARCHIVO = JSON.stringify(PARTIDOS)
let PARTIDOS_COMPLETOS = JSON.parse(PARTIDOS_ARCHIVO)

const renderizar = () => {
    let contenidoHtml = '';
    let cuotaOGrupo = (cuota, indice, grupo) => {
        if (grupo && (!cuota || cuota < 1)) {
            return `
            <div class="col d-none d-lg-block">
                <input type="number" value="${cuota}" onfocusout="grabarCuota(event, ${indice})">
            </div>
            `
        } else {
            return `
            <div class="col d-none">
            </div>
            `
        }
    }
    let contenidoGrupos = (index) => `
        <span class="ml-3 badge badge-primary pointer" onClick="escogerGrupo(1, ${index})">1</span>
        <span class="ml-3 badge badge-primary pointer" onClick="escogerGrupo(2, ${index})">2</span>
        <span class="ml-3 badge badge-success pointer" onClick="escogerGrupo(3, ${index})">3</span>
        <span class="ml-3 badge badge-success pointer" onClick="escogerGrupo(4, ${index})">4</span>
        <span class="ml-3 badge badge-secondary pointer" onClick="escogerGrupo(5, ${index})">5</span>
        <span class="ml-3 badge badge-secondary pointer" onClick="escogerGrupo(6, ${index})">6</span>
        <span class="ml-3 badge badge-warning pointer" onClick="escogerGrupo(7, ${index})">7</span>
        <span class="ml-3 badge badge-warning pointer" onClick="escogerGrupo(8, ${index})">8</span>
        <span class="ml-3 badge badge-danger pointer" onClick="escogerGrupo(9, ${index})">9</span>
        <span class="ml-3 badge badge-danger pointer" onClick="escogerGrupo(10, ${index})">10</span>
        <span class="ml-3 badge badge-dark pointer" onClick="escogerGrupo(11, ${index})">11</span>
        <span class="ml-3 badge badge-dark pointer" onClick="escogerGrupo(12, ${index})">12</span>
    `;
    PARTIDOS.forEach((partido, index) => {
        if (partido[5]) {
            if (index === 0) {
                partido[7] = partido[5]
            } else {
                partido[7] = Math.floor( PARTIDOS[index - 1][7] * partido[5] * 100 ) / 100
            }
        }
        contenidoHtml += `
        <div class="row border-bottom${partido[6] ? ' bg-info text-white' : ''}">

            <!-- HORA E INDICE -->
            <div class="col-3 col-lg-1">
                ${index + 1}/${PARTIDOS.length}
                <span role="button" class="badge badge-success" onClick="marcarTrue(${index})">${partido[0] - 10000}</span>
                <br>
                ${ partido[7] || 0}
            </div>

            <!-- LIGA Y CUOTA -->            
            <div class="col-3 col-lg-1 text-nowrap">
                ${partido[1]}-${!partido[4] ? '' : partido[4] % 2 !== 0 ? 'L' : 'V'}
                <br>
                <strong>C-${partido[5] || 0}</strong>
            </div>

            <!-- LOCAL Y VISITANTE -->
            <div class="col-6 col-lg-2 text-truncate">
               ${partido[4] === 1 ? `<span class="badge badge-primary">${partido[2]}</span>` : `${partido[4] === 3 ? `<span class="badge badge-success">${partido[2]}</span>` : `${partido[4] === 5 ? `<span class="badge badge-secondary">${partido[2]}</span>` : `${partido[4] === 7 ? `<span class="badge badge-warning">${partido[2]}</span>` : `${partido[4] === 9 ? `<span class="badge badge-danger">${partido[2]}</span>` : `${partido[4] === 11 ? `<span class="badge badge-danger">${partido[2][0]}</span>${partido[2].substring(1)}` : `${partido[2]}`}`}`}`}`}`}
               <br>
               ${partido[4] === 2 ? `<span class="badge badge-primary">${partido[3]}</span>` : `${partido[4] === 4 ? `<span class="badge badge-success">${partido[3]}</span>` : `${partido[4] === 6 ? `<span class="badge badge-secondary">${partido[3]}</span>` : `${partido[4] === 8 ? `<span class="badge badge-warning">${partido[3]}</span>` : `${partido[4] === 10 ? `<span class="badge badge-danger">${partido[3]}</span>` : `${partido[4] === 11 ? `<span class="badge badge-danger">${partido[3][0]}</span>${partido[3].substring(1)}` : `${partido[3]}`}`}`}`}`}`}
            </div>

            <!-- INPUT PARA GRABAR CUOTA -->
                ${cuotaOGrupo(partido[5], index, partido[4])}

            <!-- ESCOGER GRUPO -->
            <div class="col-8 d-none d-lg-block h1">
                ${partido[4] ? '' : contenidoGrupos(index)}
            </div>
        </div>
        `;
    });
    CONTENEDOR.innerHTML = contenidoHtml;
}

const escogerGrupo = (grupo, indice) => {
    PARTIDOS[indice][4] = grupo;
    renderizar();
}

const marcarTrue = (indice) => {
    console.log({ funcion: 'marcarTrue', indice })
    PARTIDOS[indice][6] = true;
    console.log({ partido: PARTIDOS[indice] })
    renderizar();
}

const grabarCuota = ($event, indice) => {
    PARTIDOS[indice][5] = +$event.target.value;
    renderizar();
}

const ordenar = (indice) => {
    // indice 0 => Hora
    // indice 1 => Liga
    // indice 2 => Local
    // indice 3 => Visitante
    // indice 4 => Grupo
    // indice 5 => Cuota
    console.log({ funcion: 'ordenar', indice })
    PARTIDOS.sort(function (a, b) {
        if (a[indice] > b[indice]) {
            return 1;
        }
        if (a[indice] < b[indice]) {
            return -1;
        }


        // Si son la misma liga
        // si existe el grupo partido actual
        // si existe el grupo partido siguiente
        // si el grupo es numero partido actual
        // si el grupo es numero partido siguiente
        // si el partido actual es par
        // si el partido siguiente es impar
        if (a[1] === b[1] && a[4] && b[4] && typeof a[4] === 'number' && typeof b[4] === 'number' && a[4] % 2 === 0 && b[4] % 2 !== 0) {
            // console.log({
            //     'a[4]': `${a[2]}-${a[4]}`,
            //     'b[4]': `${b[2]}-${b[4]}`
            // })
            return 1
        }
        // Si son la misma liga
        // si existe el grupo partido actual
        // si existe el grupo partido siguiente
        // si el grupo es numero partido actual
        // si el grupo es numero partido siguiente
        // si el partido actual es par
        // si el partido siguiente es impar
        if (a[1] === b[1] && a[4] && b[4] && typeof a[4] === 'number' && typeof b[4] === 'number' && a[4] % 2 !== 0 && b[4] % 2 === 0) {
            // console.log({
            //     'a[4]': `${a[2]}-${a[4]}`,
            //     'b[4]': `${b[2]}-${b[4]}`
            // })
            return -1
        }


        return 0;
    })
    fijar()
    renderizar();
}

const filtrarHora = () => {
    let horaValue = +HORA.value || +HORA2.value
    PARTIDOS = PARTIDOS_COMPLETOS.filter(p => {
        let hora = horaValue + 10000
        console.log({ hora })
        return p[0] >= hora
    })
    fijar()
    renderizar()
}

const filtrarGrupo = () => {
    let grupoValue = GRUPO.value || GRUPO2.value
    PARTIDOS = PARTIDOS_COMPLETOS.filter(p => p[4] <= grupoValue)
    fijar()
    renderizar()
}

const reset = () => {
    PARTIDOS_COMPLETOS = JSON.parse(PARTIDOS_ARCHIVO)
    PARTIDOS = PARTIDOS_COMPLETOS
    renderizar()
}

const filtrar = () => {
    let inicioValue = INICIO.value || INICIO2.value
    let finValue = FIN.value || FIN2.value
    PARTIDOS = PARTIDOS_COMPLETOS.slice(inicioValue - 1, finValue)
    fijar()
    renderizar()
}

const fijar = () => {
    PARTIDOS_COMPLETOS = [...PARTIDOS]
    renderizar()
}

const crearGrupos = () => {

    console.log({
        funcion: 'Crear Grupos',
        cantidadDePartidos: PARTIDOS.length
    })
    let arrayDePosiciones = [...Array(PARTIDOS.length).keys()]

    console.log({arrayDePosiciones})

    let indice = 0
    while (arrayDePosiciones.length > 0) {
        let valor = Math.floor(Math.random() * arrayDePosiciones.length);
        console.log({ valor, arrayDePosiciones, PARTIDOS, indice })
        if (PARTIDOS[ indice ]) {
            PARTIDOS[ indice ][5] = arrayDePosiciones[valor]
        }
        arrayDePosiciones.splice(valor, 1)
        indice++
    }

    renderizar()
}

renderizar();
