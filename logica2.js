const CONTENEDOR = document.querySelector('#contenedor');
const HORA = document.querySelector('#hora');
const GRUPO = document.querySelector('#grupo');

const PARTIDOS_COMPLETOS = JSON.parse(JSON.stringify(PARTIDOS))

const renderizar = () => {
    let contenidoHtml = '';
    let contenidoGrupos = (index) => `
        <span class="badge badge-primary pointer" onClick="escogerGrupo(1, ${index})">1</span>
        <span class="badge badge-primary pointer" onClick="escogerGrupo(2, ${index})">2</span>
        <span class="badge badge-success pointer" onClick="escogerGrupo(3, ${index})">3</span>
        <span class="badge badge-success pointer" onClick="escogerGrupo(4, ${index})">4</span>
        <span class="badge badge-secondary pointer" onClick="escogerGrupo(5, ${index})">5</span>
        <span class="badge badge-secondary pointer" onClick="escogerGrupo(6, ${index})">6</span>
        <span class="badge badge-warning pointer" onClick="escogerGrupo(7, ${index})">7</span>
        <span class="badge badge-warning pointer" onClick="escogerGrupo(8, ${index})">8</span>
        <span class="badge badge-danger pointer" onClick="escogerGrupo(9, ${index})">9</span>
        <span class="badge badge-danger pointer" onClick="escogerGrupo(10, ${index})">10</span>
    `;
    PARTIDOS.forEach((partido, index) => {
        contenidoHtml += `
        <div class="row border-bottom${partido[6] ? ' bg-info text-white' : ''}">
            <div class="col-3">
                ${ index + 1 }/${ PARTIDOS.length }
                <br>
                ${ partido[0] - 10000 }
            </div>
            <div class="col-2">
                ${ partido[3].length === 3 ? partido[3] : '' }
                <br>
                <strong>${ partido[4] || 0 }</strong>
            </div>
            <div class="col">
                ${ partido[1] === partido[3] ? `<span class="badge badge-primary pointer" onclick="copyText(${ partido[4] }, ${ index })">${ partido[1] }</span>`: partido[1] }
                <br>
                ${ partido[2] === partido[3] ? `<span class="badge badge-success pointer" onclick="copyText(${ partido[4] }, ${ index })">${ partido[2] }</span>`: partido[2] }
            </div>
            <div class="col d-none d-md-block">
                <span class="badge badge-secondary pointer" onClick="escogerGrupo(1, ${index})">TRUE</span>
            </div>
            <div class="col d-none d-md-block">
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

renderizar();




function copyText(element, index) {

    console.log({element, index})
    

    // return;

    // var textToCopy = element.innerText;
    var textToCopy = element;

    var myTemporaryInputElement = document.createElement("input");
    myTemporaryInputElement.type = "text";
    myTemporaryInputElement.value = textToCopy;

    document.body.appendChild(myTemporaryInputElement);

    myTemporaryInputElement.select();
    document.execCommand("Copy");

    document.body.removeChild(myTemporaryInputElement);

    PARTIDOS[ index ][6] = 1
    renderizar()
}