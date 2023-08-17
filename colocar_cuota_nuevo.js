let PARTIDOS_WPLAY = [
    [11700, 'ZA-BRA2', 'Londrina PR', 2.70, 'Empate', 3.00, 'Atletico GO', 2.70, 88],
    [11930, 'ZA-BRA2', 'Vila Nova FC', 2.30, 'Empate', 2.90, 'Mirassol SP', 3.45, 87],
    [12205, 'ZA-MEX2', 'Leones Negros', 1.95, 'Empate', 3.65, 'Venados FC', 3.55, 90],
    [11730, 'ZA-ARG1', 'CA Belgrano', 3.00, 'Empate', 3.00, 'Estudiantes de La Plata', 2.50, 159],
    [11800, 'ZA-COLC', 'Deportivo Pasto', 2.15, 'Empate', 3.40, 'Independiente Medellin', 3.50, 144],
    [11800, 'ZA-COLC', 'Atletico Bucaramanga', 2.625, 'Empate', 3.35, 'Millonarios', 2.75, 143],
    [12030, 'ZA-COLC', 'Atlético Nacional', 2.10, 'Empate', 3.50, 'América de Cali', 3.55, 145],
    [11400, 'ZA-ECU1', 'Libertad (Ecu)', 2.25, 'Empate', 3.20, 'Delfin', 3.00, 83],
    [11630, 'ZA-ECU1', 'Universidad Catolica Quito', 1.95, 'Empate', 3.45, 'Aucas', 3.40, 83],
    [11900, 'ZA-ECU1', 'Tecnico Universitario', 2.35, 'Empate', 3.20, 'Club Sport Emelec', 2.90, 78],
    [11100, 'U-EURO', 'HJK Helsinki', 2.95, 'Empate', 3.40, 'Qarabag FK', 2.30, 97],
    [11200, 'U-EURO', 'BK Hacken', 1.45, 'Empate', 4.50, 'VMFD Zalgiris', 6.50, 98],
    [11230, 'U-EURO', 'Breidablik', 2.875, 'Empate', 3.40, 'HSK Zrinjski Mostar', 2.30, 96],
    [11300, 'U-EURO', 'Bate Borisov', 3.55, 'Empate', 3.65, 'FC Sheriff Tiraspol', 1.95, 98],
    [11300, 'U-EURO', 'Ludogorets', 1.50, 'Empate', 4.20, 'FC Astana', 6.25, 96],
    [11300, 'U-EURO', 'SC Dnipro-1', 4.50, 'Empate', 3.90, 'Slavia Prague', 1.666, 96],
    [11300, 'U-EURO', 'Genk', 1.80, 'Empate', 3.75, 'Olympiacos', 4.00, 113],
    [11100, 'U-CONF', 'FK Aktobe', 2.35, 'Empate', 3.20, 'Sepsi OSK', 3.10, 98],
    [11100, 'U-CONF', 'Lincoln Red Imps', 4.00, 'Empate', 3.55, 'KF Ballkani', 1.85, 92],
    [11100, 'U-CONF', 'Pogon Szczecin', 3.45, 'Empate', 3.60, 'KAA Gent', 2.00, 98],
    [11100, 'U-CONF', 'FC Pyunik Yerevan', 4.50, 'Empate', 3.95, 'Bodo Glimt', 1.666, 90],
    [11200, 'U-CONF', 'Nordsjaelland', 1.533, 'Empate', 4.00, 'FCSB', 5.75, 98],
    [11200, 'U-CONF', 'Dynamo Kiev', 1.85, 'Empate', 3.35, 'Aris Thessaloniki', 4.00, 106],
    [11200, 'U-CONF', 'Brann Bergen', 1.80, 'Empate', 3.70, 'Arouca', 3.95, 101],
    [11200, 'U-CONF', 'Maccabi Tel Aviv', 1.45, 'Empate', 4.333, 'AEK Larnaca', 7.00, 98],
    [11200, 'U-CONF', 'Ferencvarosi TC', 1.153, 'Empate', 7.00, 'Hamrun Spartans', 17.00, 90],
    [11200, 'U-CONF', 'Levski Sofia', 2.30, 'Empate', 3.20, 'Hapoel Beer Sheva', 3.10, 98],
    [11200, 'U-CONF', 'Apoel Nicosia', 1.48, 'Empate', 4.20, 'FC Dila Gori', 6.50, 89],
    [11200, 'U-CONF', 'Riga FC', 4.50, 'Empate', 3.65, 'Twente', 1.727, 105],
    [11200, 'U-CONF', 'Austria Wien', 2.65, 'Empate', 3.40, 'Legia Warsaw', 2.50, 92],
    [11200, 'U-CONF', 'Gzira United FC', 8.50, 'Empate', 5.25, 'Viktoria Plzen', 1.30, 97],
    [11230, 'U-CONF', 'PAOK Thessaloniki', 2.00, 'Empate', 3.25, 'HNK Hajduk Split', 3.75, 113],
    [11245, 'U-CONF', 'Midtjylland', 1.35, 'Empate', 4.75, 'AC Omonia Nicosia', 9.00, 98],
    [11300, 'U-CONF', 'Besiktas', 1.222, 'Empate', 6.00, 'Neftchi Baku', 12.00, 88],
    [11300, 'U-CONF', 'FK Partizani Tirana', 1.45, 'Empate', 4.20, 'Valmiera FK', 6.50, 91],
    [11300, 'U-CONF', 'Spartak Trnava FC', 3.35, 'Empate', 3.45, 'Lech Poznan', 2.05, 93],
    [11300, 'U-CONF', 'NK Osijek', 2.50, 'Empate', 3.70, 'Adana Demirspor', 2.50, 89],
    [11300, 'U-CONF', 'Ka Akureyri', 19.00, 'Empate', 7.50, 'Club Brugge', 1.133, 88],
    [11300, 'U-CONF', 'Neman Grodno', 3.10, 'Empate', 3.25, 'NK Celje', 2.25, 91],
    [11300, 'U-CONF', 'Swift Hesperange', 1.65, 'Empate', 3.85, 'FC Struga Trim Lum', 5.00, 90],
    [11315, 'U-CONF', 'HNK Rijeka', 1.166, 'Empate', 7.00, 'B36 Torshavn', 13.00, 89],
    [11315, 'U-CONF', 'NK Maribor', 4.75, 'Empate', 4.00, 'Fenerbahce', 1.615, 92],
    [11345, 'U-CONF', 'Hearts', 2.05, 'Empate', 3.50, 'Rosenborg', 3.35, 106],
    [11345, 'U-CONF', 'Derry City', 1.95, 'Empate', 3.65, 'Tobol Kostanay', 3.60, 91],
    [11345, 'U-CONF', 'FC Luzern', 1.727, 'Empate', 3.95, 'Hibernian', 4.20, 108],
    [11345, 'U-CONF', 'AZ Alkmaar', 1.02, 'Empate', 17.00, 'FC Santa Coloma', 34.00, 86],
    [11400, 'U-CONF', 'Partizan Belgrade', 1.727, 'Empate', 3.75, 'Sabah', 4.333, 92],
    [11300, 'ZA-PER1', 'Atlético Grau', 3.00, 'Empate', 3.25, 'Sporting Cristal', 2.25, 82],
]

let PARTIDOS_CON_CUOTA = [
    [11345, 'Hearts', 'Rosenborg', 1.38],
    [11345, 'Derry City', 'Tobol Kostanay', 1.42],
    [11345, 'FC Luzern', 'Hibernian', 1.333],
    [11345, 'AZ Alkmaar', 'FC Santa Coloma', 1.166],
    [11400, 'Partizan Belgrade', 'Sabah', 1.40],
    [11400, 'Debrecen', 'Rapid Vienna', 1.45],
    [11100, 'HJK Helsinki', 'Qarabag FK', 1.38],
    [11200, 'BK Hacken', 'VMFD Zalgiris', 1.285],
    [11230, 'Breidablik', 'HSK Zrinjski Mostar', 1.30],
    [11300, 'Bate Borisov', 'FC Sheriff Tiraspol', 1.333],
    [11300, 'Ludogorets', 'FC Astana', 1.35],
    [11300, 'SC Dnipro-1', 'Slavia Prague', 1.35],
    [11300, 'Genk', 'Olympiacos', 1.333],
    [11730, 'CA Belgrano', 'Estudiantes de La Plata', 1.615],
    [11700, 'Londrina PR', 'Atletico GO', 1.55],
    [11930, 'Vila Nova FC', 'Mirassol SP', 1.60],
    [11800, 'Deportivo Pasto', 'Independiente Medellin', 1.48],
    [11800, 'Atletico Bucaramanga', 'Millonarios', 1.48],
    [12030, 'Atlético Nacional', 'América de Cali', 1.48],
    [11400, 'Libertad (Ecu)', 'Delfin', 1.45],
    [11630, 'Universidad Catolica Quito', 'Aucas', 1.363],
    [11900, 'Tecnico Universitario', 'Club Sport Emelec', 1.45],
    [11805, 'Leones Negros', 'Venados FC', 1.363],
    [11300, 'Atlético Grau', 'Sporting Cristal', 1.40],
    [11100, 'FK Aktobe', 'Sepsi OSK', 1.50],
    [11100, 'Lincoln Red Imps', 'KF Ballkani', 1.40],
    [11100, 'Pogon Szczecin', 'KAA Gent', 1.333],
    [11100, 'FC Pyunik Yerevan', 'Bodo Glimt', 1.333],
    [11200, 'Nordsjaelland', 'FCSB', 1.363],
    [11200, 'Dynamo Kiev', 'Aris Thessaloniki', 1.48],
    [11200, 'Brann Bergen', 'Arouca', 1.333],
    [11200, 'Maccabi Tel Aviv', 'AEK Larnaca', 1.38],
    [11200, 'Ferencvarosi TC', 'Hamrun Spartans', 1.25],
    [11200, 'Levski Sofia', 'Hapoel Beer Sheva', 1.50],
    [11200, 'Apoel Nicosia', 'FC Dila Gori', 1.42],
    [11200, 'Riga FC', 'Twente', 1.38],
    [11200, 'Austria Wien', 'Legia Warsaw', 1.363],
    [11200, 'Gzira United FC', 'Viktoria Plzen', 1.25],
    [11230, 'PAOK Thessaloniki', 'HNK Hajduk Split', 1.48],
    [11245, 'Midtjylland', 'AC Omonia Nicosia', 1.363],
    [11300, 'Besiktas', 'Neftchi Baku', 1.25],
    [11300, 'FK Partizani Tirana', 'Valmiera FK', 1.38],
    [11300, 'Spartak Trnava FC', 'Lech Poznan', 1.40],
    [11300, 'NK Osijek', 'Adana Demirspor', 1.285],
    [11300, 'Ka Akureyri', 'Club Brugge', 1.20],
    [11300, 'Neman Grodno', 'NK Celje', 1.48],
    [11300, 'Swift Hesperange', 'FC Struga Trim Lum', 1.40],
    [11315, 'HNK Rijeka', 'B36 Torshavn', 1.20],
    [11315, 'NK Maribor', 'Fenerbahce', 1.30],
]


let retorno = []

let index = 0

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
        partido_encontrado[4] = true
        partido[9] = true
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

let PARTIDOS_CON_CUOTA_ = PARTIDOS_CON_CUOTA.filter(p => !p[4]).map(p => {
    return {
        hora: p[0],
        liga: 'XX-XXXX',
        local: p[1],
        visitante: p[2],
        cuotaLocal: 1,
        empate: 1,
        cuotaVisitante: 1,
        cantidadDeApuestas: 1,
        cuotaCualquiera: p[3]
    }
})

retorno = [...retorno, ...PARTIDOS_CON_CUOTA_]

console.log({
    PARTIDOS_WPLAY: PARTIDOS_WPLAY.length,
    PARTIDOS_CON_CUOTA: PARTIDOS_CON_CUOTA.length,
    PARTIDOS_CON_CUOTA_: PARTIDOS_CON_CUOTA_.length,
})

const fs = require('fs')

let retornoString = `
    let PARTIDOS_OPTIMIZADOS = ${JSON.stringify(retorno)}
`

fs.writeFileSync('partidos_optimizados.txt', retornoString)

console.log('VER -> partidos_optimizados.txt')