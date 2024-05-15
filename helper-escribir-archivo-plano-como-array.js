const fs = require('fs')

const convertirArrayEnTextoPlanoConFormato = (arrayEntrada, nombreArray, nombreArchivo, mensaje) => {
    let stringSalida = 'let ' + nombreArray + ' = [\n'
    for (const item of arrayEntrada) {
        stringSalida += '\t' + JSON.stringify(item) + ',\n'
    }
    stringSalida += ']'
    if (mensaje) {
        stringSalida += mensaje
    }
    fs.writeFileSync(nombreArchivo, stringSalida)
}

module.exports = {
    convertirArrayEnTextoPlanoConFormato
}