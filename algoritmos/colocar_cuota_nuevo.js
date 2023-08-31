


let PARTIDOS_WPLAY = [
    [11930, 'ZA-BRA2', 'Juventude RS', 1.833, 'Empate', 3.20, 'Chapecoense SC', 4.75, 85],
    [12205, 'ZA-MEX2', 'Atlante', 1.222, 'Empate', 6.00, 'Dorados', 12.00, 89],
    [11930, 'ZA-LIBE', 'Olimpia Asuncion', 2.80, 'Empate', 3.35, 'Fluminense RJ', 2.60, 177],
    [11700, 'ZA-SUDA', 'Fortaleza CE', 1.65, 'Empate', 3.95, 'America Mineiro MG', 5.50, 190],
    [11700, 'ZA-SUDA', 'Sao Paulo SP', 1.45, 'Empate', 4.50, 'LDU Quito', 7.50, 190],
    [10635, 'S-CHIF', 'Nantong Zhiyun', 2.25, 'Empate', 3.30, 'Qingdao Hainiu', 2.80, 42],
    [11900, 'ZA-CHI1', 'Union Espanola', 2.15, 'Empate', 3.35, 'Universidad Catolica', 3.10, 82],
    [11500, 'ZA-ECU2', 'Independiente Juniors', 1.75, 'Empate', 3.30, 'Chacaritas SC', 4.50, 42],
    [11900, 'ZA-ECU2', 'Imbabura SC', 1.909, 'Empate', 3.25, 'Cuniburo FC', 3.75, 42],
    [11100, 'U-EURO', 'Qarabag FK', 1.70, 'Empate', 3.80, 'NK Olimpija Ljubljana', 5.00, 171],
    [11200, 'U-EURO', 'Zorya Lugansk', 7.50, 'Empate', 4.50, 'Slavia Prague', 1.42, 170],
    [11200, 'U-EURO', 'AC Sparta Praha', 1.909, 'Empate', 3.65, 'NK Dinamo Zagreb', 3.80, 158],
    [11200, 'U-EURO', 'Aris Limassol', 1.80, 'Empate', 3.60, 'Slovan Bratislava', 4.20, 100],
    [11200, 'U-EURO', 'FC Sheriff Tiraspol', 1.45, 'Empate', 4.20, 'Ki Klaksvik', 7.00, 98],
    [11300, 'U-EURO', 'Ajax Amsterdam', 1.285, 'Empate', 6.00, 'Ludogorets', 9.00, 176],
    [11300, 'U-EURO', 'Cukaricki', 5.25, 'Empate', 4.20, 'Olympiacos', 1.571, 189],
    [11330, 'U-EURO', 'FC Lugano', 2.80, 'Empate', 3.45, 'St. Gilloise', 2.45, 193],
    [11345, 'U-EURO', 'Aberdeen', 2.80, 'Empate', 3.50, 'BK Hacken', 2.35, 114],
    [11400, 'U-EURO', 'HSK Zrinjski Mostar', 2.90, 'Empate', 3.35, 'LASK Linz', 2.40, 192],
    [11100, 'U-CONF', 'Bodo Glimt', 1.222, 'Empate', 6.25, 'Sepsi OSK', 11.00, 99],
    [11100, 'U-CONF', 'HJK Helsinki', 2.15, 'Empate', 3.50, 'Farul Constanta', 3.10, 100],
    [11145, 'U-CONF', 'Breidablik', 1.95, 'Empate', 3.50, 'FC Struga Trim Lum', 3.65, 100],
    [11200, 'U-CONF', 'Twente', 2.25, 'Empate', 3.70, 'Fenerbahce', 2.95, 178],
    [11200, 'U-CONF', 'Apoel Nicosia', 2.90, 'Empate', 3.35, 'KAA Gent', 2.35, 112],
    [11200, 'U-CONF', 'Viktoria Plzen', 1.222, 'Empate', 6.00, 'Tobol Kostanay', 11.00, 100],
    [11200, 'U-CONF', 'Brann Bergen', 2.85, 'Empate', 3.65, 'AZ Alkmaar', 2.25, 118],
    [11230, 'U-CONF', 'PAOK Thessaloniki', 1.42, 'Empate', 4.50, 'Hearts', 7.00, 115],
    [11300, 'U-CONF', 'Fiorentina', 1.133, 'Empate', 7.50, 'Rapid Vienna', 19.00, 113],
    [11300, 'U-CONF', 'SC Dnipro-1', 2.70, 'Empate', 3.30, 'Spartak Trnava FC', 2.55, 99],
    [11300, 'U-CONF', 'Ferencvarosi TC', 1.285, 'Empate', 5.50, 'VMFD Zalgiris', 9.00, 97],
    [11300, 'U-CONF', 'FK Partizani Tirana', 3.20, 'Empate', 3.35, 'FC Astana', 2.20, 98],
    [11300, 'U-CONF', 'NK Celje', 3.45, 'Empate', 3.55, 'Maccabi Tel Aviv', 2.00, 100],
    [11300, 'U-CONF', 'Adana Demirspor', 2.30, 'Empate', 3.70, 'Genk', 2.75, 114],
    [11300, 'U-CONF', 'Besiktas', 1.45, 'Empate', 4.50, 'Dynamo Kiev', 6.25, 113],
    [11300, 'U-CONF', 'Bate Borisov', 2.90, 'Empate', 3.55, 'KF Ballkani', 2.25, 99],
    [11315, 'U-CONF', 'HNK Rijeka', 4.20, 'Empate', 3.65, 'Lille', 1.80, 115],
    [11330, 'U-CONF', 'Club Brugge', 2.05, 'Empate', 3.45, 'Osasuna', 3.45, 114],
    [11330, 'U-CONF', 'Eintracht Frankfurt', 1.20, 'Empate', 6.25, 'Levski Sofia', 13.00, 112],
    [11400, 'U-CONF', 'Partizan Belgrade', 3.10, 'Empate', 3.45, 'Nordsjaelland', 2.20, 96],
    [11400, 'U-CONF', 'Aston Villa', 1.125, 'Empate', 9.00, 'Hibernian', 15.00, 110],
    [11400, 'U-CONF', 'Legia Warsaw', 1.833, 'Empate', 3.70, 'Midtjylland', 3.90, 101],
]




let PARTIDOS_CON_CUOTA = [
    [11200, 'AC Sparta Praha', 'NK Dinamo Zagreb', 1.38],
    [11200, 'Aris Limassol', 'Slovan Bratislava', 1.40],
    [11200, 'FC Sheriff Tiraspol', 'Ki Klaksvik', 1.38],
    [11300, 'Ajax Amsterdam', 'Ludogorets', 1.181],
    [11300, 'Cukaricki', 'Olympiacos', 1.333],
    [11330, 'FC Lugano', 'St. Gilloise', 1.363],
    [11345, 'Aberdeen', 'BK Hacken', 1.333],
    [11400, 'HSK Zrinjski Mostar', 'LASK Linz', 1.40],
    [11930, 'Juventude RS', 'Chapecoense SC', 1.55],
    [11900, 'Union Espanola', 'Universidad Catolica', 1.363],
    [11500, 'Independiente Juniors', 'Chacaritas SC', 1.50],
    [11900, 'Imbabura SC', 'Cuniburo FC', 1.45],
    [11930, 'Olimpia Asuncion', 'Fluminense RJ', 1.40],
    [12205, 'Atlante', 'Dorados', 1.30],
    [11700, 'Fortaleza CE', 'America Mineiro MG', 1.42],
    [11700, 'Sao Paulo SP', 'LDU Quito', 1.38],
    [10635, 'Nantong Zhiyun', 'Qingdao Hainiu', 1.40],
    [11100, 'Bodo Glimt', 'Sepsi OSK', 1.20],
    [11100, 'HJK Helsinki', 'Farul Constanta', 1.40],
    [11145, 'Breidablik', 'FC Struga Trim Lum', 1.363],
    [11200, 'Twente', 'Fenerbahce', 1.285],
    [11200, 'Apoel Nicosia', 'KAA Gent', 1.363],
    [11200, 'Viktoria Plzen', 'Tobol Kostanay', 1.222],
    [11200, 'Brann Bergen', 'AZ Alkmaar', 1.30],
    [11230, 'PAOK Thessaloniki', 'Hearts', 1.30],
    [11300, 'Fiorentina', 'Rapid Vienna', 1.222],
    [11300, 'SC Dnipro-1', 'Spartak Trnava FC', 1.42],
    [11300, 'Ferencvarosi TC', 'VMFD Zalgiris', 1.222],
    [11300, 'FK Partizani Tirana', 'FC Astana', 1.40],
    [11300, 'NK Celje', 'Maccabi Tel Aviv', 1.333],
    [11300, 'Adana Demirspor', 'Genk', 1.285],
    [11300, 'Besiktas', 'Dynamo Kiev', 1.285],
    [11300, 'Bate Borisov', 'KF Ballkani', 1.30],
    [11315, 'HNK Rijeka', 'Lille', 1.35],
    [11330, 'Club Brugge', 'Osasuna', 1.38],
    [11330, 'Eintracht Frankfurt', 'Levski Sofia', 1.285],
    [11400, 'Partizan Belgrade', 'Nordsjaelland', 1.35],
    [11400, 'Aston Villa', 'Hibernian', 1.222],
    [11400, 'Legia Warsaw', 'Midtjylland', 1.333],
    [11100, 'Qarabag FK', 'NK Olimpija Ljubljana', 1.35],
    [11200, 'Zorya Lugansk', 'Slavia Prague', 1.30],
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
            cuotaCualquiera: partido_encontrado[3],
            favorito: undefined,
            cuotaFavorito: 1,
            rate: 1,
            stake: 0
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
            cuotaCualquiera: 1,
            favorito: undefined,
            cuotaFavorito: 1,
            rate: 1,
            stake: 0
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
        cuotaCualquiera: p[3],
        favorito: undefined,
        cuotaFavorito: 1,
        rate: 1,
        stake: 0
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