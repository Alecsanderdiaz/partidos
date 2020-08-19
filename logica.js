const CONTENEDOR = document.querySelector('#contenedor');



const renderizar = () => {
    let contenidoHtml = '';
    let contenidoGrupos = (index) => `
        <span class="badge badge-primary pointer" onClick="escogerGrupo(1, ${index})">1</span>
        <span class="badge badge-primary pointer" onClick="escogerGrupo(2, ${index})">2</span>
        <span class="badge badge-success pointer" onClick="escogerGrupo(3, ${index})">3</span>
        <span class="badge badge-success pointer" onClick="escogerGrupo(4, ${index})">4</span>
        <span class="badge badge-warning pointer" onClick="escogerGrupo(5, ${index})">5</span>
        <span class="badge badge-warning pointer" onClick="escogerGrupo(6, ${index})">6</span>
        <span class="badge badge-danger pointer" onClick="escogerGrupo(7, ${index})">7</span>
        <span class="badge badge-danger pointer" onClick="escogerGrupo(8, ${index})">8</span>
    `;
    PARTIDOS.forEach((partido, index) => {
        contenidoHtml += `
        <div class="row border-bottom">
            <div class="col-2">${ partido[0] - 10000 }</div>
            <div class="col-2">
            ${ partido[1] } <br>
            <strong>${ partido[5] || 0 }</strong>
            </div>
            <div class="col">
               ${ partido[4] === 1 ? `<span class="badge badge-primary">${ partido[2] }</span>`: `${ partido[4] === 3 ? `<span class="badge badge-success">${ partido[2] }</span>`: `${ partido[4] === 5 ? `<span class="badge badge-warning">${ partido[2] }</span>`: `${ partido[4] === 7 ? `<span class="badge badge-danger">${ partido[2] }</span>`: `${ partido[2]}`}`}`}`}<br>
               ${ partido[4] === 2 ? `<span class="badge badge-primary">${ partido[3] }</span>`: `${ partido[4] === 4 ? `<span class="badge badge-success">${ partido[3] }</span>`: `${ partido[4] === 6 ? `<span class="badge badge-warning">${ partido[3] }</span>`: `${ partido[4] === 8 ? `<span class="badge badge-danger">${ partido[3] }</span>`: `${ partido[3]}`}`}`}`}
            </div>
            <div class="col d-none d-md-block">
                <input type="number" value="${ partido[5] ? partido[5] : 0 }" onfocusout="grabarCuota(event, ${index})">
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
    PARTIDOS.sort((a, b) => a[indice] - b[indice])
    renderizar();
}

renderizar();
