const fs = require('fs')

const convertirArrayEnTextoPlanoConFormato = async (arrayEntrada, nombreArray, nombreArchivo, mensaje) => {
    let stringSalida = 'let ' + nombreArray + ' = [\n'
    for (const item of arrayEntrada) {
        stringSalida += '\t' + JSON.stringify(item) + ',\n'
        // stringSalida += '\t' + JSON.stringify(item, null, 2) + ',\n'
    }
    stringSalida += ']'
    if (mensaje) {
        stringSalida += mensaje
    }
    fs.writeFileSync(nombreArchivo, stringSalida)

    return true
}

module.exports = {
    convertirArrayEnTextoPlanoConFormato
}