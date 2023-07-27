let PARTIDOS_WPLAY = [
    [2711800, 'ZA-CHIC', 'Temuco', 1.85, 'Empate', 3.45, 'Universidad de Concepcion', 3.70, 42],
    [2711600, 'ZA-COLC', 'Cucuta Deportivo', 3.20, 'Empate', 3.10, 'CD Junior', 2.30, 85],
    [2712000, 'ZA-COLC', 'Deportivo Cali', 2.55, 'Empate', 3.30, 'Independiente Santa Fe', 2.75, 143],
    [2711900, 'ZA-ECU2', 'Manta FC', 1.80, 'Empate', 3.10, 'Buhos ULVR', 4.50, 42],
    [2711000, 'U-CONF', 'FC Ararat Armenia', 3.80, 'Empate', 3.40, 'Aris Thessaloniki', 1.95, 98],
    [2711000, 'U-CONF', 'FC Alashkert', 2.875, 'Empate', 3.25, 'Debrecen', 2.40, 96],
    [2711000, 'U-CONF', 'Inter Club de Escaldes', 6.50, 'Empate', 4.75, 'Hibernian', 1.42, 97],
    [2711000, 'U-CONF', 'Ordabasy Shymkent', 3.25, 'Empate', 3.35, 'Legia Warsaw', 2.15, 96],
    [2711100, 'U-CONF', 'FK Qabala', 2.70, 'Empate', 3.20, 'AC Omonia Nicosia', 2.60, 97],
    [2711100, 'U-CONF', 'Bodo Glimt', 1.333, 'Empate', 6.00, 'Bohemians 1905', 7.00, 97],
    [2711200, 'U-CONF', 'Djurgardens IF', 2.15, 'Empate', 3.55, 'FC Luzern', 3.20, 96],
    [2711200, 'U-CONF', 'CSKA Sofia', 1.75, 'Empate', 3.55, 'Sepsi OSK', 4.50, 95],
    [2711200, 'U-CONF', 'Ferencvarosi TC', 1.333, 'Empate', 5.25, 'Shamrock Rovers', 8.50, 97],
    [2711200, 'U-CONF', 'Kecskemeti TE', 2.60, 'Empate', 3.35, 'Riga FC', 2.60, 96],
    [2711200, 'U-CONF', 'Kalmar FF', 1.833, 'Empate', 3.40, 'FC Pyunik Yerevan', 4.333, 97],
    [2711200, 'U-CONF', 'Torpedo Kutaisi', 2.70, 'Empate', 3.10, 'FK Aktobe', 2.70, 95],
    [2711200, 'U-CONF', 'Gzira United FC', 2.95, 'Empate', 3.30, 'Dudelange', 2.35, 96],
    [2711200, 'U-CONF', 'Apoel Nicosia', 1.571, 'Empate', 3.75, 'Vojvodina Novi Sad', 5.50, 82],
    [2711200, 'U-CONF', 'Viktoria Plzen', 1.166, 'Empate', 6.25, 'KF Drita', 13.00, 82],
    [2711200, 'U-CONF', 'FK Auda', 5.25, 'Empate', 3.60, 'Spartak Trnava FC', 1.615, 82],
    [2711230, 'U-CONF', 'CFR Cluj', 2.30, 'Empate', 3.40, 'Adana Demirspor', 2.90, 96],
    [2711230, 'U-CONF', 'PAOK Thessaloniki', 1.30, 'Empate', 5.25, 'Beitar Jerusalem', 9.00, 111],
    [2711230, 'U-CONF', 'Farul Constanta', 1.533, 'Empate', 3.95, 'FC Urartu', 6.00, 95],
    [2711230, 'U-CONF', 'Differdange FC 03', 4.75, 'Empate', 3.90, 'NK Maribor', 1.666, 95],
    [2711230, 'U-CONF', 'FC Basel', 1.25, 'Empate', 5.75, 'Tobol Kostanay', 11.00, 95],
    [2711230, 'U-CONF', 'Vorskla Poltava', 2.00, 'Empate', 3.30, 'FC Dila Gori', 3.70, 98],
    [2711230, 'U-CONF', 'Maccabi Tel Aviv', 1.285, 'Empate', 5.00, 'FC Petrocub', 9.00, 83],
    [2711300, 'U-CONF', 'Club Brugge', 1.60, 'Empate', 4.00, 'AGF Aarhus', 5.25, 94],
    [2711300, 'U-CONF', 'Twente', 1.285, 'Empate', 6.25, 'Hammarby IF', 10.00, 110],
    [2711300, 'U-CONF', 'NK Celje', 3.30, 'Empate', 3.45, 'Vitoria Guimaraes', 2.10, 97],
    [2711300, 'U-CONF', 'NK Osijek', 1.65, 'Empate', 3.80, 'Zalaegerszeg', 5.00, 94],
    [2711300, 'U-CONF', 'Hapoel Beer Sheva', 1.60, 'Empate', 3.80, 'FK Panevezys', 5.50, 95],
    [2711300, 'U-CONF', 'KAA Gent', 1.20, 'Empate', 6.50, 'Zilina', 13.00, 97],
    [2711300, 'U-CONF', 'Besiktas', 1.20, 'Empate', 6.25, 'KF Tirana', 12.00, 97],
    [2710520, 'AMI-E', 'Al Nassr Riyadh', 6.50, 'Empate', 5.25, 'Inter', 1.333, 77],
    [2710600, 'AMI-E', 'RKC Waalwijk', 4.75, 'Empate', 4.00, 'Marseille', 1.571, 75],
    [2711000, 'AMI-E', 'Sassuolo', 1.769, 'Empate', 3.85, 'FC Sudtirol', 3.70, 77],
    [2711200, 'AMI-E', 'Feyenoord Rotterdam', 2.45, 'Empate', 3.60, 'Villarreal', 2.60, 88],
    [2711200, 'AMI-E', 'Racing Santander', 4.20, 'Empate', 3.45, 'Athletic Bilbao', 1.769, 75],
    [2711230, 'AMI-E', 'Almeria', 1.571, 'Empate', 3.85, 'Malaga', 5.25, 75],
    [2712130, 'AMI-E', 'San Diego Loyal SC', 26.00, 'Empate', 10.00, 'Borussia Dortmund', 1.071, 91],
    [2712130, 'AMI-E', 'Juventus', 2.70, 'Empate', 3.45, 'AC Milán', 2.45, 101],
    [2710230, 'MUJE', 'Portugal (F)', 1.142, 'Empate', 7.00, 'Vietnam (F)', 19.00, 97],
    [2710500, 'MUJE', 'Australia (F)', 1.48, 'Empate', 4.00, 'Nigeria (F)', 7.00, 112],
    [2711900, 'MUJE', 'Argentina (F)', 2.05, 'Empate', 3.20, 'Sudáfrica (F)', 3.75, 112],
    [2711900, 'I-LEA', 'FC Cincinnati', 2.10, 'Empate', 3.50, 'Chivas Guadalajara', 3.35, 156],
    [2711930, 'I-LEA', 'Minnesota United FC', 1.95, 'Empate', 3.60, 'Chicago Fire', 3.65, 189],
    [2711930, 'I-LEA', 'Nashville SC', 2.05, 'Empate', 3.55, 'Toluca', 3.45, 174],
    [2712100, 'I-LEA', 'Saint Louis FC', 3.00, 'Empate', 3.45, 'America', 2.25, 157],
    [2711500, 'ZA-PER1', 'Sporting Cristal', 1.166, 'Empate', 6.25, 'EM Deportivo Binacional', 13.00, 48],
    [2711200, 'YE-RUSC', 'Krasnodar', 2.40, 'Empate', 3.35, 'Spartak Moscow', 2.625, 42],
    [2711600, 'ZA-VEN1', 'FC Angostura', 2.90, 'Empate', 3.10, 'Deportivo La Guaira', 2.35, 42],
]

let PARTIDOS_CON_CUOTA = [
    [11230, 'CFR Cluj', 'Adana Demirspor', 1.40],
    [11230, 'PAOK Thessaloniki', 'Beitar Jerusalem', 1.30],
    [11230, 'Farul Constanta', 'FC Urartu', 1.42],
    [11230, 'Differdange FC 03', 'NK Maribor', 1.363],
    [11230, 'FC Basel', 'Tobol Kostanay', 1.285],
    [11230, 'Vorskla Poltava', 'FC Dila Gori', 1.48],
    [11230, 'Maccabi Tel Aviv', 'FC Petrocub', 1.30],
    [11300, 'Club Brugge', 'AGF Aarhus', 1.35],
    [11300, 'Twente', 'Hammarby IF', 1.285],
    [11300, 'NK Celje', 'Vitoria Guimaraes', 1.42],
    [11300, 'NK Osijek', 'Zalaegerszeg', 1.38],
    [11300, 'Hapoel Beer Sheva', 'FK Panevezys', 1.42],
    [11300, 'KAA Gent', 'Zilina', 1.222],
    [11300, 'Besiktas', 'KF Tirana', 1.25],
    [10520, 'Al Nassr Riyadh', 'Inter', 1.166],
    [10600, 'RKC Waalwijk', 'Marseille', 1.285],
    [11000, 'Sassuolo', 'FC Sudtirol', 1.30],
    [11200, 'Feyenoord Rotterdam', 'Villarreal', 1.333],
    [11200, 'Racing Santander', 'Athletic Bilbao', 1.48],
    [11230, 'Almeria', 'Malaga', 1.363],
    [10230, 'Portugal (F)', 'Vietnam (F)', 1.30],
    [10500, 'Australia (F)', 'Nigeria (F)', 1.45],
    [11200, 'Krasnodar', 'Spartak Moscow', 1.285],
    [11000, 'FC Ararat Armenia', 'Aris Thessaloniki', 1.42],
    [11000, 'FC Alashkert', 'Debrecen', 1.444],
    [11000, 'Inter Club de Escaldes', 'Hibernian', 1.30],
    [11000, 'Ordabasy Shymkent', 'Legia Warsaw', 1.48],
    [11100, 'FK Qabala', 'AC Omonia Nicosia', 1.48],
    [11100, 'Bodo Glimt', 'Bohemians 1905', 1.20],
    [11200, 'Djurgardens IF', 'FC Luzern', 1.38],
    [11200, 'CSKA Sofia', 'Sepsi OSK', 1.48],
    [11200, 'Ferencvarosi TC', 'Shamrock Rovers', 1.30],
    [11200, 'Kecskemeti TE', 'Riga FC', 1.45],
    [11200, 'Kalmar FF', 'FC Pyunik Yerevan', 1.48],
    [11200, 'Torpedo Kutaisi', 'FK Aktobe', 1.50],
    [11200, 'Gzira United FC', 'Dudelange', 1.45],
    [11200, 'Apoel Nicosia', 'Vojvodina Novi Sad', 1.42],
    [11200, 'Viktoria Plzen', 'KF Drita', 1.25],
    [11200, 'FK Auda', 'Spartak Trnava FC', 1.48],
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