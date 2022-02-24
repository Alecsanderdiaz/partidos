const CONTENEDOR = document.querySelector('#contenedor');
const HORA = document.querySelector('#hora');
const GRUPO = document.querySelector('#grupo');
const INICIO = document.querySelector('#inicio');
const FIN = document.querySelector('#fin');

const PARTIDOS_COMPLETOS = JSON.parse(JSON.stringify(PARTIDOS))

const renderizar = () => {
    let contenidoHtml = '';
    let cuotaOGrupo = (cuota, indice, grupo) => {
        if (grupo) {
            return `
            <div class="col d-none d-md-block">
                <input type="number" value="${ cuota }" onfocusout="grabarCuota(event, ${indice})">
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
        contenidoHtml += `
        <div class="row border-bottom${partido[6] ? ' bg-info text-white': '' }">
            <div class="col-xs-3 col-sm-1 col-lg-1">
                ${ index + 1 }/${ PARTIDOS.length }
                <br>
                <span role="button" class="badge badge-success" onClick="marcarTrue(${index})">${ partido[0] - 10000 }</span>
            </div>
            <div class="col-xs-3 col-sm-2 text-nowrap col-lg-1">
                ${ partido[1] }-${ !partido[4] ? '' : partido[4] % 2 !== 0 ? 'L' : 'V'}
                <br>
                <strong>C-${ partido[5] || 0 }</strong>
            </div>
            <div class="col-xs-6 col-sm-8 col-lg-2">
               ${ partido[4] === 1 ? `<span class="badge badge-primary">${ partido[2] }</span>`: `${ partido[4] === 3 ? `<span class="badge badge-success">${ partido[2] }</span>`: `${ partido[4] === 5 ? `<span class="badge badge-secondary">${ partido[2] }</span>`: `${ partido[4] === 7 ? `<span class="badge badge-warning">${ partido[2] }</span>`: `${ partido[4] === 9 ? `<span class="badge badge-danger">${ partido[2] }</span>`: `${ partido[4] === 11 ? `<span class="badge badge-danger">${ partido[2][0] }</span>${ partido[2].substring(1) }`: `${ partido[2]}`}`}`}`}`}`}<br>
               ${ partido[4] === 2 ? `<span class="badge badge-primary">${ partido[3] }</span>`: `${ partido[4] === 4 ? `<span class="badge badge-success">${ partido[3] }</span>`: `${ partido[4] === 6 ? `<span class="badge badge-secondary">${ partido[3] }</span>`: `${ partido[4] === 8 ? `<span class="badge badge-warning">${ partido[3] }</span>`: `${ partido[4] === 10 ? `<span class="badge badge-danger">${ partido[3] }</span>`: `${ partido[4] === 11 ? `<span class="badge badge-danger">${ partido[3][0] }</span>${ partido[3].substring(1) }`: `${ partido[3]}`}`}`}`}`}`}
            </div>
                ${ cuotaOGrupo(partido[5], index, partido[4]) }
            <div class="col d-none d-sm-block h1 col-lg-8">
                ${ partido[4] ? '' : contenidoGrupos(index) }
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
    console.log({ funcion: 'marcarTrue', indice})
    PARTIDOS[indice][6] = true;
    console.log({ partido: PARTIDOS[indice]})
    renderizar();
}

const grabarCuota = ($event, indice) => {
    PARTIDOS[indice][5] = +$event.target.value;
    renderizar();
}

const ordenar = (indice) => {
    console.log({ indice })
    PARTIDOS.sort(function (a, b) {
        if (a[indice] > b[indice]) {
          return 1;
        }
        if (a[indice] < b[indice]) {
          return -1;
        }
        // a must be equal to b

        if (a[4] && b[4] && typeof a[4] === 'number' && typeof b[4] === 'number' && a[4] %  2 === 0 && b[4] %  2 !== 0 ) {
            // console.log({
            //     'a[4]': `${a[2]}-${a[4]}`,
            //     'b[4]': `${b[2]}-${b[4]}`
            // })
            return 1
        }

        if (a[4] && b[4] && typeof a[4] === 'number' && typeof b[4] === 'number' && a[4] %  2 !== 0 && b[4] %  2 === 0 ) {
            // console.log({
            //     'a[4]': `${a[2]}-${a[4]}`,
            //     'b[4]': `${b[2]}-${b[4]}`
            // })
            return -1
        }
        return 0;
      })
    renderizar();
}

const filtrarHora = () => {
    PARTIDOS = PARTIDOS_COMPLETOS.filter(p => {
        let hora = +HORA.value + 10000
        console.log({ hora })
        return p[0] >= hora
    })
    renderizar()
}

const filtrarGrupo = () => {
    PARTIDOS = PARTIDOS_COMPLETOS.filter(p => p[4] <= GRUPO.value)
    renderizar()
}

const reset = () => {
    PARTIDOS = PARTIDOS_COMPLETOS
    renderizar()
}

const filtrar = () => {
    PARTIDOS = PARTIDOS_COMPLETOS.slice(INICIO.value - 1, FIN.value)
    renderizar()
}

renderizar();
