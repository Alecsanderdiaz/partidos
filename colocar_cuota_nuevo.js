let PARTIDOS_WPLAY = [
    [11430, 'AMI-E', 'Benfica', 1.25, 'Empate', 6.25, 'Al Nassr Riyadh', 9.50, 96],
    [12130, 'MUJE', 'Nigeria (M)', 9.00, 'Empate', 4.50, 'Canadá (M)', 1.40, 114],
    [11330, 'U-CONF', 'Glentoran FC', 1.70, 'Empate', 3.65, 'Gzira United FC', 4.50, 84],
    [11330, 'U-CONF', 'FK Arsenal Tivat', 3.90, 'Empate', 3.45, 'FC Alashkert', 1.85, 14],
    [11345, 'U-CONF', 'Saint Patrick FC', 1.909, 'Empate', 3.70, 'Dudelange', 3.60, 93],
    [11345, 'U-CONF', 'Vikingur Reykjavik', 2.65, 'Empate', 3.20, 'Riga FC', 2.50, 79],
    [11345, 'U-CONF', 'Derry City', 1.50, 'Empate', 3.75, 'HB Torshavn', 6.25, 84],
    [11345, 'U-CONF', 'Haverfordwest County', 8.50, 'Empate', 4.50, 'FK Shkendija 79', 1.333, 84],
    [11345, 'U-CONF', 'KF Vllaznia Shkoder', 2.65, 'Empate', 3.20, 'Linfield FC', 2.55, 86],
    [11345, 'U-CONF', 'FC Dundalk', 1.333, 'Empate', 4.50, 'FCB Magpies', 8.50, 79],
    [11345, 'U-CONF', 'SS Cosmos', 7.50, 'Empate', 4.50, 'FK Sutjeska', 1.363, 78],
    [11400, 'U-CONF', 'Crusaders FC', 1.95, 'Empate', 3.65, 'FC Haka Valkeakoski', 3.55, 92],
    [11400, 'U-CONF', 'FK Sarajevo', 1.50, 'Empate', 4.00, 'Torpedo Kutaisi', 5.75, 78],
    [11400, 'U-CONF', 'KF Shkupi Skopje', 1.615, 'Empate', 3.75, 'Hegelmann Litauen', 4.75, 74],
    [11400, 'ZA-ARGC', 'Club Villa Mitre', 4.50, 'Empate', 3.40, 'Godoy Cruz', 1.80, 94],
    [11700, 'ZA-ARGC', 'CA Barracas Central', 3.50, 'Empate', 3.00, 'Boca Juniors', 2.20, 95],
    [12000, 'ZA-ARGC', 'River Plate', 1.65, 'Empate', 3.75, 'Talleres de Cordoba', 5.00, 98],
    [11430, 'ZA-B20', 'Gremio U20', 2.05, 'Empate', 3.40, 'SC Corinthians U20', 3.00, 9],
    [11700, 'ZA-B20', 'Atletico Paranaense U20', 2.45, 'Empate', 3.35, 'Flamengo U20', 2.45, 9],
    [11600, 'ZA-COL2', 'Orsomarso', 4.00, 'Empate', 3.30, 'Cucuta Deportivo', 1.85, 77],
    [11900, 'ZA-COL2', 'Tigres FC', 2.75, 'Empate', 2.875, 'Fortaleza FC', 2.625, 74],
    [11900, 'ZA-ECU2', 'Cuniburo FC', 2.15, 'Empate', 3.10, 'America De Quito', 3.20, 42],
    [11700, 'ZA-SUDA', 'Audax Italiano', 2.45, 'Empate', 3.00, 'Nublense', 3.10, 113],
    [11900, 'ZA-SUDA', 'CA Tigre', 2.30, 'Empate', 3.20, 'Libertad Asuncion', 3.10, 113],
]

let PARTIDOS_CON_CUOTA = [
    [11430, 'Benfica', 'Al Nassr Riyadh', 1.18],
    [12130, 'Nigeria (M)', 'Canadá (M)', 1.40],
    [11700, 'CA Barracas Central', 'Boca Juniors', 1.60],
    [12000, 'River Plate', 'Talleres de Cordoba', 1.40],
    [11600, 'Orsomarso', 'Cucuta Deportivo', 1.48],
    [11900, 'Tigres FC', 'Fortaleza FC', 1.61],
    [11900, 'Cuniburo FC', 'America De Quito', 1.42],
    [11700, 'Audax Italiano', 'Nublense', 1.60],
    [11900, 'CA Tigre', 'Libertad Asuncion', 1.50],
    [11330, 'Glentoran FC', 'Gzira United FC', 1.36],
    [11345, 'Saint Patrick FC', 'Dudelange', 1.35],
    [11345, 'Vikingur Reykjavik', 'Riga FC', 1.42],
    [11345, 'Derry City', 'HB Torshavn', 1.48],
    [11345, 'Haverfordwest County', 'FK Shkendija 79', 1.35],
    [11345, 'KF Vllaznia Shkoder', 'Linfield FC', 1.48],
    [11345, 'FC Dundalk', 'FCB Magpies', 1.30],
    [11345, 'SS Cosmos', 'FK Sutjeska', 1.33],
    [11400, 'Crusaders FC', 'FC Haka Valkeakoski', 1.40],
    [11400, 'FK Sarajevo', 'Torpedo Kutaisi', 1.36],
    [11400, 'KF Shkupi Skopje', 'Hegelmann Litauen', 1.38],
    [11400, 'Club Villa Mitre', 'Godoy Cruz', 1.57],
]



const retorno = []

for (const partido of PARTIDOS_WPLAY) {
    let local = partido[2]
    let partido_encontrado = PARTIDOS_CON_CUOTA.find(p => p[1] === local)

    console.log({ local, partido_encontrado })

    if (partido_encontrado) {
        let partido_retorno = {
            hora: partido[0],
            liga: partido[1],
            local: partido[2],
            visitante: partido[6],
            cuotaLocal: partido[3],
            empate: partido[5],
            cuotaVisitante: partido[7],
            cantidadDeApuestas: partido[8],
            cuotaCualquiera: partido_encontrado[3]
        }
        retorno.push(partido_retorno)
    } else {
        let partido_retorno = {
            hora: partido[0],
            liga: partido[1],
            local: partido[2],
            visitante: partido[6],
            cuotaLocal: partido[3],
            empate: partido[5],
            cuotaVisitante: partido[7],
            cantidadDeApuestas: partido[8],
            cuotaCualquiera: 1
        }
        retorno.push(partido_retorno)
    }
}

const fs = require('fs')

fs.writeFileSync('partidos_optimizados.txt', 'let PARTIDOS_OPTIMIZADOS = ' + JSON.stringify(retorno))