const FECHA_PARTIDO_MANANA = 1060600000
const FECHA_PARTIDO_HOY = 1060500000

const fs = require('node:fs');
const readline = require('node:readline');

const { LIGAS_OBJETOS } = require('./ligas_objetos')
const { convertirArrayEnTextoPlanoConFormato } = require('./helper-escribir-archivo-plano-como-array')

let inputPartidosFlashscore = "01-input-partidos-flashscore.txt"
let inputPartidosWplay = "02-input-partidos-wplay.txt"
let inputSeMarcaraEnLaPrimeraMitad = "03-input-se-marcara-en-la-primera-mitad.txt"
let inputAmbosMarcan = "04-input-ambos-marcan.txt"
let inputOver = "05-input-over.txt"
let inputLocalPrimeraMitad = "06-input-local-primera-mitad.txt"
let inputVisitantePrimeraMitad = "07-input-visitante-primera-mitad.txt"
let inputFavorito = "08-input-favorito.txt"
let inputApuestasAbiertas = "09-input-apuestas-abiertas.txt"

let archivoSalida = "partidos_optimizados.js"
let archivoSalida2 = "ligas.js"
let archivoSalida3 = "partidos_optimizados_flashscore.js"

let outputPartidosWplay = "partidos_optimizados_wplay.js"
let outputSeMarcaraEnLaPrimeraMitad = "03-output-se-marcara-en-la-primera-mitad.txt"
let outputAmbosMarcan = "04-output-ambos-marcan.txt"
let outputOver = "05-output-over.txt"
let outputLocalPrimeraMitad = "06-output-local-primera-mitad.txt"
let outputVisitantePrimeraMitad = "07-output-visitante-primera-mitad.txt"
let outputFavorito = "08-output-favorito.txt"
let outputApuestasAbiertas = "apuestas-abiertas.js"

let PartidosWplay = []
let PartidosSeMarcaraEnLaPrimeraMitad = []
let PartidosAmbosMarcan = []
let PartidosOver = []
let PartidosLocalPrimeraMitad = []
let PartidosVisitantePrimeraMitad = []
let PartidosFavorito = []

let partidos = []

async function main() {



    async function sacarLigasPartidosSinCuota() {
        const fileStream = fs.createReadStream(inputPartidosFlashscore);

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity,
        });

        let lineas = []
        let ligas = []


        let opciones = [
            'Tabla En Directo',
            'Clasificación',
            'Cuadro'
        ]

        let indice = 0
        let esMundial = false
        let esHora = false
        let indiceEsHora = 0


        for await (const line of rl) {
            // Each line in input.txt will be successively available here as `line`.
            if (!line || line === '-' || line === ': ') {
                continue
            }
            // console.log(`Line from file: ${line}`);
            lineas.push(line)

            if (esMundial) {
                console.log({ testigo: 'esMundial', line, lineas })
                let liga = `${lineas[indice]}`
                let ligaEncontrada = LIGAS_OBJETOS.find(ligaObjeto => ligaObjeto.nombreFlashcore === liga)
                if (!ligaEncontrada) {
                    console.log({ nombreFlashcore: liga, error: 'No se encontró, Editar manualmente y volver a ejecutar' })
                    let mensajeDeError = `No se encontró, Editar manualmente y volver a ejecutar ${ liga }`
                    throw new Error(mensajeDeError)
                }
                let ligaObjeto = {
                    liga: ligaEncontrada.abreviado,
                    mitad: ligaEncontrada.mitad,
                    mitadFavorito: ligaEncontrada.favorito,
                    codigoWplay: ligaEncontrada.codigoWplay,
                }
                ligas.push(ligaObjeto)
                lineas = []
                indice = 0
                esMundial = false
                continue
            }

            if (opciones.includes(line)) {
                console.log({ testigo: 'opciones.includes(line)', line, lineas })
                let liga = `${lineas[indice - 2]} - ${lineas[indice - 1]}`
                let ligaEncontrada = LIGAS_OBJETOS.find(ligaObjeto => ligaObjeto.nombreFlashcore === liga)
                if (!ligaEncontrada) {
                    console.log({ nombreFlashcore: liga, error: 'No se encontró, Editar manualmente y volver a ejecutar' })
                    let mensajeDeError = `No se encontró, Editar manualmente y volver a ejecutar ${ liga }`
                    throw new Error(mensajeDeError)
                }
                let ligaObjeto = {
                    liga: ligaEncontrada.abreviado,
                    mitad: ligaEncontrada.mitad,
                    mitadFavorito: ligaEncontrada.favorito,
                    codigoWplay: ligaEncontrada.codigoWplay,
                }
                ligas.push(ligaObjeto)
                lineas = []
                indice = 0
                continue
            }

            if (line === 'MUNDIAL') {
                esMundial = true
            }

            if (esHora && indiceEsHora + 2 === indice) {
                let partido = {
                    hora: 10000 + ((lineas[indice - 2].replace(':', '')) * 1),
                    ...ligas[ligas.length - 1],
                    local: lineas[indice - 1],
                    visitante: lineas[indice],
                    cuotaLocal: 1,
                    empate: 1,
                    cuotaVisitante: 1,
                    cantidadDeApuestas: 0,
                    cuotaCualquiera: 1,
                    ambosAnotan: 1,
                    over: 1,
                    cuotaFavorito: 1,
                    rate: 1,
                    stake: 0,
                }

                // console.log({ hora: partido.hora })

                partidos.push(partido)
                esHora = false
                indiceEsHora = 0
                lineas = []
                indice = 0
                continue
            }

            if (line.length === 5 && line.charAt(2) === ':') {
                esHora = true
                indiceEsHora = indice
            }



            indice++
        }

        if (partidos.length === 0) throw new Error(`${inputPartidosFlashscore} Vacio`)

        const LIGAS_RESPONSE = await convertirArrayEnTextoPlanoConFormato(ligas, 'LIGAS', archivoSalida2)
        const PARTIDOS_RESPONSE = await convertirArrayEnTextoPlanoConFormato(partidos, 'PARTIDOS_OPTIMIZADOS', archivoSalida3)

        console.log({ LIGAS_RESPONSE, PARTIDOS_RESPONSE })

    }

    await sacarLigasPartidosSinCuota();

    let meses = {
        'Ene': '01',
        'Feb': '02',
        'Mar': '03',
        'Abr': '04',
        'Mayo': '05',
        'Jun': '06',
        'Jul': '07',
        'Ago': '08',
        'Sep': '09',
        'Oct': '10',
        'Nov': '11',
        'Dic': '12',
    }

    let arrayMeses = Object.keys(meses)

    const convertirFechaANumero = (fechaEnString) => {
        fechaEnString = fechaEnString.replace(':', '')
        let fechaArray = fechaEnString.split(' ')
        let fechaEnStringModificado = `1${meses[fechaArray[2]]}${fechaArray[1]}1${fechaArray[0]}`
        // console.log({fechaEnString, fechaArray, fechaEnStringModificado})
        return fechaEnStringModificado * 1
    }

    async function sacarPartidosWplay() {
        const fileStream = fs.createReadStream(inputPartidosWplay);

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity,
        });
        // Note: we use the crlfDelay option to recognize all instances of CR LF
        // ('\r\n') in input.txt as a single line break.

        let lineas = []
        let indice = 0

        let partidos = []

        let ligaDelPartido = ''


        for await (const line of rl) {
            // Each line in input.txt will be successively available here as `line`.
            // console.log(`Line from file: ${line}`);
            // continue

            if (line.includes('LIGA---')) {
                ligaDelPartido = line.replace('LIGA---', '')
                continue
            }

            if (line.startsWith(' ★ ')) {
                let ligaWplayName = line.replace(' ★ ', '')
                ligaDelPartido = LIGAS_OBJETOS.find(l => l.nombreWplay === ligaWplayName)?.abreviado || ''
                if (ligaDelPartido === '') {
                    console.log({ ligaWplayName })
                    throw new Error('Una liga no fue encontrada, arregla para seguir')
                }
                continue
            }

            if (!line || line === 'Streaming' || line === '★') {
                continue
            }
            lineas.push(line)

            if (line.includes('>')) {


                let partido = {
                    hora: convertirFechaANumero(lineas[indice - 8] + ' ' + lineas[indice - 7]),
                    liga: ligaDelPartido, // TODO
                    mitad: LIGAS_OBJETOS.find(liga => liga.abreviado === ligaDelPartido)?.mitad,
                    mitadFavorito: LIGAS_OBJETOS.find(liga => liga.abreviado === ligaDelPartido)?.favorito,
                    codigoWplay: LIGAS_OBJETOS.find(liga => liga.abreviado === ligaDelPartido)?.codigoWplay,
                    local: lineas[indice - 6],
                    visitante: lineas[indice - 2],
                    cuotaLocal: lineas[indice - 5] * 1, // cuotalocal
                    empate: lineas[indice - 3] * 1,
                    cuotaVisitante: lineas[indice - 1] * 1,
                    cantidadDeApuestas: lineas[indice - 0].split(' ')[0] * 1,
                    cuotaCualquiera: 1,
                    ambosAnotan: 1,
                    over: 1,
                    cuotaFavorito: 1,
                    rate: 1,
                    stake: 0,
                    localMitad: 1,
                    visitanteMitad: 1,
                }

                // console.log({ hora: partido.hora })

                
                if (partido.hora < FECHA_PARTIDO_MANANA && partido.hora >= FECHA_PARTIDO_HOY) {
                    PartidosWplay.push(partido)
                    // console.log({ partido })
                }

                lineas = []
                indice = 0
                continue
            }

            indice++
        }

        if (PartidosWplay.length < 10) {
            console.log({ FECHA_PARTIDO_MANANA })
            throw new Error('No hay suficientes partidos')
        }

        await convertirArrayEnTextoPlanoConFormato(PartidosWplay, 'PARTIDOS_WPLAY', outputPartidosWplay)

        // console.log({
        //     inputPartidosWplay,
        //     outputPartidosWplay
        // })
    }

    await sacarPartidosWplay();

    async function sacarPartidosGolEnLaPrimeraMitad() {
        const fileStream = fs.createReadStream(inputSeMarcaraEnLaPrimeraMitad);

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity,
        });
        // Note: we use the crlfDelay option to recognize all instances of CR LF
        // ('\r\n') in input.txt as a single line break.


        let partidos = []

        let partido = ['local', 'visitante', 'cuota']
        let indiceSi = false



        for await (let line of rl) {

            if (indiceSi) {
                partido[2] = line * 1
                PartidosSeMarcaraEnLaPrimeraMitad.push(partido)
                partido = ['local', 'visitante', 'cuota']
                indiceSi = false
                continue
            }


            if (line === 'Si') {
                indiceSi = true
                continue
            }

            if (line.includes('>')) {
                line = line.trim()
                // console.log(line)
                let [local, resto] = line.split(' v ')
                if (!resto) {
                    continue
                }
                let arrayResto = resto.split(' ')
                let indiceMes = -1
                for (const mes of arrayMeses) {
                    indiceMes = arrayResto.findIndex(r => r === mes)
                    if (indiceMes >= 0) {
                        break
                    }
                }
                let fecha = arrayResto.slice(indiceMes - 1, indiceMes + 2).join(' ')
                // console.log({ fecha })
                let visitante = arrayResto.slice(0, indiceMes - 1).join(' ')
                partido = [
                    // convertirFechaANumero(lineas[indice - 7]),
                    // convertirFechaANumero(fecha),
                    local,
                    visitante,
                    'cuota'
                ]
                continue
            }

        }

        // await convertirArrayEnTextoPlanoConFormato(partidos, 'PARTIDOS_CON_CUOTA', outputSeMarcaraEnLaPrimeraMitad)

        // console.log({
        //     inputSeMarcaraEnLaPrimeraMitad,
        //     outputSeMarcaraEnLaPrimeraMitad
        // })
    }

    await sacarPartidosGolEnLaPrimeraMitad();

    async function sacarPartidosAmbosMarcan() {
        const fileStream = fs.createReadStream(inputAmbosMarcan);

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity,
        });
        // Note: we use the crlfDelay option to recognize all instances of CR LF
        // ('\r\n') in input.txt as a single line break.


        let partidos = []

        let partido = ['local', 'visitante', 'cuota']
        let indiceSi = false



        for await (let line of rl) {

            if (indiceSi) {
                partido[2] = line * 1
                PartidosAmbosMarcan.push(partido)
                partido = ['local', 'visitante', 'cuota']
                indiceSi = false
                continue
            }


            if (line === 'Si') {
                indiceSi = true
                continue
            }

            if (line.includes('>')) {
                line = line.trim()
                let [local, resto] = line.split(' v ')
                // console.log({ line })
                if (!resto) {
                    // console.log({ line })
                    continue
                }
                let arrayResto = resto.split(' ')
                let indiceMes = -1
                for (const mes of arrayMeses) {
                    indiceMes = arrayResto.findIndex(r => r === mes)
                    if (indiceMes >= 0) {
                        break
                    }
                }



                let visitante = arrayResto.slice(0, indiceMes - 1).join(' ')
                let fecha = arrayResto.slice(indiceMes - 1, indiceMes + 2).join(' ')

                let dia = arrayResto[indiceMes - 1]
                dia = dia * 1

                // console.log({dia})

                if (Number.isNaN(dia) || dia > 31) {
                    let valorParaArreglar = arrayResto[indiceMes - 1]
                    let cantidadDeLetrasDelValorParaArreglar = valorParaArreglar.length
                    let ultimoValorVisitante = valorParaArreglar.substring(0, cantidadDeLetrasDelValorParaArreglar - 2)
                    let valorDia = valorParaArreglar.substring(cantidadDeLetrasDelValorParaArreglar - 2)
                    // console.log({ valorParaArreglar, ultimoValorVisitante, valorDia })

                    arrayResto.splice(indiceMes - 1, 1)
                    arrayResto.splice(indiceMes - 1, 0, valorDia)
                    arrayResto.splice(indiceMes - 1, 0, ultimoValorVisitante)
                    // console.log({ arrayResto })

                    visitante = arrayResto.slice(0, indiceMes).join(' ')
                    fecha = arrayResto.slice(indiceMes, indiceMes + 3).join(' ')
                }

                // console.log({ fecha, visitante })
                // console.log({ local, indiceMes, arrayResto, fecha })

                // console.log({ fecha })
                partido = [
                    // convertirFechaANumero(lineas[indice - 7]),
                    // convertirFechaANumero(fecha),
                    local,
                    visitante,
                    'cuota'
                ]
                continue
            }

        }

        // await convertirArrayEnTextoPlanoConFormato(partidos, 'PARTIDOS_AMBOS_ANOTAN', outputAmbosMarcan)

        // console.log({
        //     inputAmbosMarcan,
        //     outputAmbosMarcan
        // })
    }

    await sacarPartidosAmbosMarcan();

    async function sacarPartidosOver() {
        const fileStream = fs.createReadStream(inputOver);

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity,
        });
        // Note: we use the crlfDelay option to recognize all instances of CR LF
        // ('\r\n') in input.txt as a single line break.


        let partidos = []

        let partido = ['local', 'visitante', 'cuota']
        let indiceSi = false



        for await (let line of rl) {

            if (indiceSi) {
                partido[2] = line * 1
                PartidosOver.push(partido)
                partido = ['local', 'visitante', 'cuota']
                indiceSi = false
                continue
            }


            if (line === 'Más de (2.5)') {
                indiceSi = true
                continue
            }

            if (line.includes('>')) {
                // console.log({ line })
                if (line[0] !== ' ') {
                    continue
                }
                line = line.trim()
                let [local, resto] = line.split(' v ')
                if (!resto) {
                    // console.log({ line })
                    continue
                }
                let arrayResto = resto.split(' ')
                let indiceMes = -1
                for (const mes of arrayMeses) {
                    indiceMes = arrayResto.findIndex(r => r === mes)
                    if (indiceMes >= 0) {
                        break
                    }
                }
                let fecha = arrayResto.slice(indiceMes - 1, indiceMes + 2).join(' ')
                // console.log({ fecha })
                let visitante = arrayResto.slice(0, indiceMes - 1).join(' ')

                let dia = arrayResto[indiceMes - 1]
                dia = dia * 1

                // console.log({dia})

                if (Number.isNaN(dia) || dia > 31) {
                    let valorParaArreglar = arrayResto[indiceMes - 1]
                    let cantidadDeLetrasDelValorParaArreglar = valorParaArreglar.length
                    let ultimoValorVisitante = valorParaArreglar.substring(0, cantidadDeLetrasDelValorParaArreglar - 2)
                    let valorDia = valorParaArreglar.substring(cantidadDeLetrasDelValorParaArreglar - 2)
                    // console.log({ valorParaArreglar, ultimoValorVisitante, valorDia })

                    arrayResto.splice(indiceMes - 1, 1)
                    arrayResto.splice(indiceMes - 1, 0, valorDia)
                    arrayResto.splice(indiceMes - 1, 0, ultimoValorVisitante)
                    // console.log({ arrayResto })

                    visitante = arrayResto.slice(0, indiceMes).join(' ')
                    fecha = arrayResto.slice(indiceMes, indiceMes + 3).join(' ')
                }


                partido = [
                    // convertirFechaANumero(lineas[indice - 7]),
                    // convertirFechaANumero(fecha),
                    local,
                    visitante,
                    'cuota'
                ]
                continue
            }

        }

        // await convertirArrayEnTextoPlanoConFormato(partidos, 'PARTIDOS_OVER', outputOver)

        // console.log({
        //     inputOver,
        //     outputOver
        // })
    }

    await sacarPartidosOver();

    async function sacarPartidosLocal() {
        const fileStream = fs.createReadStream(inputLocalPrimeraMitad);

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity,
        });
        // Note: we use the crlfDelay option to recognize all instances of CR LF
        // ('\r\n') in input.txt as a single line break.


        let partidos = []

        let partido = ['local', 'visitante', 'cuota']
        let indiceSi = false



        for await (let line of rl) {

            if (indiceSi) {
                partido[2] = line * 1
                PartidosLocalPrimeraMitad.push(partido)
                partido = ['local', 'visitante', 'cuota']
                indiceSi = false
                continue
            }


            if (line === 'Más de (0.5)') {
                indiceSi = true
                continue
            }

            if (line.includes('>')) {
                // console.log({ line })
                if (line[0] !== ' ') {
                    continue
                }
                line = line.trim()
                let [local, resto] = line.split(' v ')
                if (!resto) {
                    // console.log({ line })
                    continue
                }
                let arrayResto = resto.split(' ')
                let indiceMes = -1
                for (const mes of arrayMeses) {
                    indiceMes = arrayResto.findIndex(r => r === mes)
                    if (indiceMes >= 0) {
                        break
                    }
                }
                let fecha = arrayResto.slice(indiceMes - 1, indiceMes + 2).join(' ')
                // console.log({ fecha })
                let visitante = arrayResto.slice(0, indiceMes - 1).join(' ')

                let dia = arrayResto[indiceMes - 1]
                dia = dia * 1

                // console.log({dia})

                if (Number.isNaN(dia) || dia > 31) {
                    let valorParaArreglar = arrayResto[indiceMes - 1]
                    let cantidadDeLetrasDelValorParaArreglar = valorParaArreglar.length
                    let ultimoValorVisitante = valorParaArreglar.substring(0, cantidadDeLetrasDelValorParaArreglar - 2)
                    let valorDia = valorParaArreglar.substring(cantidadDeLetrasDelValorParaArreglar - 2)
                    // console.log({ valorParaArreglar, ultimoValorVisitante, valorDia })

                    arrayResto.splice(indiceMes - 1, 1)
                    arrayResto.splice(indiceMes - 1, 0, valorDia)
                    arrayResto.splice(indiceMes - 1, 0, ultimoValorVisitante)
                    // console.log({ arrayResto })

                    visitante = arrayResto.slice(0, indiceMes).join(' ')
                    fecha = arrayResto.slice(indiceMes, indiceMes + 3).join(' ')
                }


                partido = [
                    // convertirFechaANumero(lineas[indice - 7]),
                    // convertirFechaANumero(fecha),
                    local,
                    visitante,
                    'cuota'
                ]
                continue
            }

        }

        // await convertirArrayEnTextoPlanoConFormato(partidos, 'PARTIDOS_OVER', outputLocalPrimeraMitad)

        // console.log({
        //     inputLocalPrimeraMitad,
        //     outputLocalPrimeraMitad
        // })
    }

    await sacarPartidosLocal();

    async function sacarPartidosVisitante() {
        const fileStream = fs.createReadStream(inputVisitantePrimeraMitad);

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity,
        });
        // Note: we use the crlfDelay option to recognize all instances of CR LF
        // ('\r\n') in input.txt as a single line break.


        let partidos = []

        let partido = ['local', 'visitante', 'cuota']
        let indiceSi = false



        for await (let line of rl) {

            if (indiceSi) {
                partido[2] = line * 1
                PartidosVisitantePrimeraMitad.push(partido)
                partido = ['local', 'visitante', 'cuota']
                indiceSi = false
                continue
            }


            if (line === 'Más de (0.5)') {
                indiceSi = true
                continue
            }

            if (line.includes('>')) {
                // console.log({ line })
                if (line[0] !== ' ') {
                    continue
                }
                line = line.trim()
                let [local, resto] = line.split(' v ')
                if (!resto) {
                    // console.log({ line })
                    continue
                }
                let arrayResto = resto.split(' ')
                let indiceMes = -1
                for (const mes of arrayMeses) {
                    indiceMes = arrayResto.findIndex(r => r === mes)
                    if (indiceMes >= 0) {
                        break
                    }
                }
                let fecha = arrayResto.slice(indiceMes - 1, indiceMes + 2).join(' ')
                // console.log({ fecha })
                let visitante = arrayResto.slice(0, indiceMes - 1).join(' ')

                let dia = arrayResto[indiceMes - 1]
                dia = dia * 1

                // console.log({dia})

                if (Number.isNaN(dia) || dia > 31) {
                    let valorParaArreglar = arrayResto[indiceMes - 1]
                    let cantidadDeLetrasDelValorParaArreglar = valorParaArreglar.length
                    let ultimoValorVisitante = valorParaArreglar.substring(0, cantidadDeLetrasDelValorParaArreglar - 2)
                    let valorDia = valorParaArreglar.substring(cantidadDeLetrasDelValorParaArreglar - 2)
                    // console.log({ valorParaArreglar, ultimoValorVisitante, valorDia })

                    arrayResto.splice(indiceMes - 1, 1)
                    arrayResto.splice(indiceMes - 1, 0, valorDia)
                    arrayResto.splice(indiceMes - 1, 0, ultimoValorVisitante)
                    // console.log({ arrayResto })

                    visitante = arrayResto.slice(0, indiceMes).join(' ')
                    fecha = arrayResto.slice(indiceMes, indiceMes + 3).join(' ')
                }


                partido = [
                    // convertirFechaANumero(lineas[indice - 7]),
                    // convertirFechaANumero(fecha),
                    local,
                    visitante,
                    'cuota'
                ]
                continue
            }

        }

        // await convertirArrayEnTextoPlanoConFormato(PartidosVisitantePrimeraMitad, 'PARTIDOS_OVER', outputVisitantePrimeraMitad)

        // console.log({
        //     inputVisitantePrimeraMitad,
        //     outputVisitantePrimeraMitad
        // })
    }

    await sacarPartidosVisitante();

    async function sacarPartidosFavorito() {
        const fileStream = fs.createReadStream(inputFavorito);

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity,
        });
        // Note: we use the crlfDelay option to recognize all instances of CR LF
        // ('\r\n') in input.txt as a single line break.

        let lineas = []
        let indice = 0

        let partidos = []

        let ligaDelPartido = ''


        for await (const line of rl) {
            // Each line in input.txt will be successively available here as `line`.
            // console.log(`Line from file: ${line}`);
            // continue

            let lineModificado = ''

            if (line.includes('	1ª Mitad más/Menos de ')) {
                // console.log(line)
                lineModificado = line.replace('	1ª Mitad más/Menos de ', '***')
                lineModificado = lineModificado.replace(' Total Goles	Más de (0.5)	', '***')
                lineModificado = lineModificado.replace('	 -', '')
                lineModificado = lineModificado.replace(' v ', '***')
                lineModificado = lineModificado.replace('	', '***')

                let arrayLine = lineModificado.split('***')

                let partidoMitad = [
                    // convertirFechaANumero(arrayLine[0]),
                    arrayLine[1],
                    arrayLine[2],
                    arrayLine[3] === arrayLine[1] ? 'local' : 'visitante',
                    arrayLine[4] * 1,
                ]

                PartidosFavorito.push(partidoMitad)

                continue
            }

        }

        // await convertirArrayEnTextoPlanoConFormato(partidos, 'PARTIDOS_CON_CUOTA', outputFavorito)


    }

    await sacarPartidosFavorito();

    async function sacarApuestasAbiertas() {
        const fileStream = fs.createReadStream(inputApuestasAbiertas);

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity,
        });
        // Note: we use the crlfDelay option to recognize all instances of CR LF
        // ('\r\n') in input.txt as a single line break.

        let lineas = []
        let indice = 0

        let partidos = []
        let arraySalida = []

        let ligaDelPartido = ''


        for await (const line of rl) {
            // Each line in input.txt will be successively available here as `line`.
            // console.log(`Line from file: ${line}`);
            // continue

            let lineModificado = ''

            if (line.endsWith('	 -')) {
                // console.log(line)
                lineModificado = line.replace('	1ª Mitad más/Menos de ', '***')

                lineModificado = lineModificado.replace('\t1ª Mitad más/Menos de ', '***')
                lineModificado = lineModificado.replace('	Total Goles Más/Menos de	Más de (2.5)	', '***over***')
                lineModificado = lineModificado.replace('	Se anotará gol en la 1er mitad	Si	', '***mitad***')
                lineModificado = lineModificado.replace('	Primera Mitad Total Goles Más/Menos de	Más de (0.5)	', '***mitad***')
                
                
                lineModificado = lineModificado.replace(' Total Goles	Más de (0.5)	', '***')
                lineModificado = lineModificado.replace('	 -', '')
                lineModificado = lineModificado.replace(' v ', '***')
                lineModificado = lineModificado.replace('	', '***')

                let arrayLine = lineModificado.split('***')

                let partidoMitad = [
                    // convertirFechaANumero(arrayLine[0]),
                    arrayLine[0].substring(7).replace(':', '') * 1 + 10000,
                    // arrayLine[0].substring(8).replace(':', '') * 1 + 10000,
                    arrayLine[1],
                    arrayLine[2],
                    arrayLine[3] === arrayLine[1] ? 'local' : arrayLine[3] === arrayLine[2] ? 'visitante': arrayLine[3],
                    arrayLine[4] * 1,
                ]

                // console.log({ arrayLine,hora: partidoMitad[0]})

                partidos.push(partidoMitad)

                continue
            } else {
                if (line.endsWith('	-')) {
                    lineModificado = line.replace('	-', '')
                    let totalArray = lineModificado.split('$')
                    let total = totalArray.pop()
                    console.log({ total })
                    partidos.push(total)
                    if (partidos.length > 0) {
                        arraySalida.push(partidos)
                        partidos = []
                    }
                }
            }



        }

        await convertirArrayEnTextoPlanoConFormato(arraySalida, 'APUESTAS_ABIERTAS', outputApuestasAbiertas)


    }

    await sacarApuestasAbiertas();

    let partidos_optimizados = PartidosWplay.map(partido => {
        return {
            ...partido,
            hora: ("" + partido.hora).substring(5) * 1,
            cuotaCualquiera: PartidosSeMarcaraEnLaPrimeraMitad.find(p => partido.local === p[0] && partido.visitante === p[1]) ? PartidosSeMarcaraEnLaPrimeraMitad.find(p => partido.local === p[0] && partido.visitante === p[1])[2] : 1,
            ambosAnotan: PartidosAmbosMarcan.find(p => partido.local === p[0] && partido.visitante === p[1]) ? PartidosAmbosMarcan.find(p => partido.local === p[0] && partido.visitante === p[1])[2] : 1,
            over: PartidosOver.find(p => partido.local === p[0] && partido.visitante === p[1]) ? PartidosOver.find(p => partido.local === p[0] && partido.visitante === p[1])[2] : 1,
            localMitad: PartidosLocalPrimeraMitad.find(p => partido.local === p[0] && partido.visitante === p[1]) ? PartidosLocalPrimeraMitad.find(p => partido.local === p[0] && partido.visitante === p[1])[2] : 1,
            visitanteMitad: PartidosVisitantePrimeraMitad.find(p => partido.local === p[0] && partido.visitante === p[1]) ? PartidosVisitantePrimeraMitad.find(p => partido.local === p[0] && partido.visitante === p[1])[2] : 1,
            favorito: PartidosFavorito.find(p => partido.local === p[0] && partido.visitante === p[1]) ? PartidosFavorito.find(p => partido.local === p[0] && partido.visitante === p[1])[2] : '',
            cuotaFavorito: PartidosFavorito.find(p => partido.local === p[0] && partido.visitante === p[1]) ? PartidosFavorito.find(p => partido.local === p[0] && partido.visitante === p[1])[3] : 1,
        }
    })

    partidos_optimizados.sort((a,b) => a.hora - b.hora)


    await convertirArrayEnTextoPlanoConFormato(partidos_optimizados, 'PARTIDOS_OPTIMIZADOS', archivoSalida)

    async function sacarCantidadDePartidos() {
        let totalPartidosFlashScore = partidos.length
        let totalPartidosWplay = partidos_optimizados.length
        let diferencia_de_partidos_total = totalPartidosFlashScore - totalPartidosWplay

        let ligas_flashscore = partidos.map(p => p.liga)
        let ligas_flashscore_no_repeat = [...new Set(ligas_flashscore)]
        let total_ligas_flashscore = ligas_flashscore_no_repeat.length

        let ligas_wplay = partidos_optimizados.map(p => p.liga)
        let ligas_wplay_no_repeat = [...new Set(ligas_wplay)]
        let total_ligas_wplay = ligas_wplay_no_repeat.length

        let diferencia_ligas_total = total_ligas_flashscore - total_ligas_wplay

        console.log({
            totalPartidosFlashScore,
            totalPartidosWplay,
            diferencia_de_partidos_total,
            total_ligas_flashscore,
            total_ligas_wplay,
            diferencia_ligas_total
        })

        if (diferencia_ligas_total > 0) {
            console.log('Ligas Flashcore')
            ligas_flashscore_no_repeat.forEach(liga => {
                if (!ligas_wplay_no_repeat.includes(liga)) {
                    console.log({ liga })
                }
            })
        } else if (diferencia_ligas_total < 0) {
            console.log('Ligas Wplay')
            ligas_wplay_no_repeat.forEach(liga => {
                if (!ligas_flashscore_no_repeat.includes(liga)) {
                    console.log({ liga })
                }
            })
        }

        if (diferencia_de_partidos_total > 0 && diferencia_ligas_total === 0) {
            ligas_flashscore_no_repeat.forEach(liga => {
                let tempPartidosEnLigasFlashcoreTotal = ligas_flashscore.filter( l => liga === l).length
                let tempPartidosLigasWplayTotal = ligas_wplay.filter( l => liga === l).length

                if (tempPartidosEnLigasFlashcoreTotal !== tempPartidosLigasWplayTotal) {
                    console.log({ analizando: 'Partidos Flashcore', tempPartidosEnLigasFlashcoreTotal, tempPartidosLigasWplayTotal, liga})
                }
            })
        } else if (diferencia_de_partidos_total < 0 && diferencia_ligas_total === 0) {
            ligas_wplay_no_repeat.forEach(liga => {
                let tempPartidosEnLigasFlashcoreTotal = ligas_flashscore.filter( l => liga === l).length
                let tempPartidosLigasWplayTotal = ligas_wplay.filter( l => liga === l).length

                if (tempPartidosEnLigasFlashcoreTotal !== tempPartidosLigasWplayTotal) {
                    console.log({ analizando: 'Partidos Wplay', tempPartidosEnLigasFlashcoreTotal, tempPartidosLigasWplayTotal, liga})
                }
            })
        }
    }

    await sacarCantidadDePartidos()
}

main()