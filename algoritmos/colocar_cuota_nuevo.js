


let PARTIDOS_WPLAY = [
    [11830, 'ZA-EST1', 'Atlanta United', 2.10, 'Empate', 3.60, 'FC Cincinnati', 3.25, 148],
    [11830, 'ZA-EST1', 'Charlotte FC', 2.50, 'Empate', 3.55, 'Orlando City SC', 2.625, 147],
    [11830, 'ZA-EST1', 'Inter Miami CF', 2.00, 'Empate', 3.70, 'Nashville SC', 3.50, 148],
    [11830, 'ZA-EST1', 'New England Revolution', 1.50, 'Empate', 4.50, 'New York Red Bulls', 5.50, 145],
    [11830, 'ZA-EST1', 'New York City', 1.85, 'Empate', 3.55, 'CF Montreal', 4.20, 144],
    [11830, 'ZA-EST1', 'Toronto FC', 3.20, 'Empate', 3.45, 'Philadelphia Union', 2.20, 146],
    [11930, 'ZA-EST1', 'Austin FC', 1.95, 'Empate', 3.60, 'Seattle Sounders', 3.75, 146],
    [11930, 'ZA-EST1', 'Chicago Fire', 2.10, 'Empate', 3.60, 'Vancouver Whitecaps FC', 3.25, 148],
    [11930, 'ZA-EST1', 'Minnesota United FC', 1.65, 'Empate', 3.90, 'Colorado Rapids', 5.25, 144],
    [11930, 'ZA-EST1', 'Houston Dynamo', 2.10, 'Empate', 3.65, 'Columbus Crew', 3.20, 148],
    [11930, 'ZA-EST1', 'Saint Louis FC', 1.55, 'Empate', 4.20, 'FC Dallas', 5.75, 144],
    [12130, 'ZA-EST1', 'Portland Timbers', 2.30, 'Empate', 3.55, 'Real Salt Lake', 2.90, 148],
    [12130, 'ZA-EST1', 'San Jose Earthquakes', 1.65, 'Empate', 3.85, 'L.A. Galaxy', 5.25, 144],
    [11130, 'YE-POLE', 'Pogon Szczecin', 1.70, 'Empate', 3.55, 'Slask Wroclaw', 5.00, 88],
    [11330, 'ITA2', 'Sampdoria', 1.95, 'Empate', 3.45, 'Venezia', 3.80, 89],
    [11330, 'ITA2', 'Bari', 2.25, 'Empate', 3.10, 'Cittadella', 3.25, 88],
    [11330, 'ITA2', 'Ternana', 3.20, 'Empate', 3.20, 'Cremonese', 2.25, 88],
    [11330, 'ITA2', 'Catanzaro', 3.40, 'Empate', 3.10, 'Spezia', 2.20, 88],
    [11700, 'ZA-BRA2', 'Novorizontino SP', 1.666, 'Empate', 3.45, 'Ituano SP', 5.75, 86],
    [12000, 'ZA-MEX1', 'Toluca', 2.55, 'Empate', 3.50, 'Monterrey', 2.625, 147],
    [12006, 'ZA-MEX1', 'Queretaro FC', 3.00, 'Empate', 3.20, 'Atlas de Guadalajara', 2.375, 145],
    [12200, 'ZA-MEX1', 'Tigres UANL', 1.60, 'Empate', 4.20, 'Santos Laguna', 5.25, 144],
    [11200, 'ZA-ARGC', 'Talleres de Cordoba', 1.90, 'Empate', 3.50, 'Colon de Santa Fe', 3.95, 89],
    [11415, 'ZA-ARGC', 'Argentinos Juniors', 1.70, 'Empate', 3.60, 'San Martin de San Juan', 5.00, 87],
    [11630, 'ZA-ARGC', 'San Lorenzo', 2.10, 'Empate', 3.20, 'CA Belgrano', 3.60, 88],
    [11815, 'ZA-COL1', 'Union Magdalena', 2.95, 'Empate', 3.35, 'América de Cali', 2.45, 163],
    [12030, 'ZA-COL1', 'Rionegro Aguilas', 2.35, 'Empate', 3.10, 'Atlético Nacional', 3.40, 163],
    [11500, 'ZA-COL2', 'Fortaleza FC', 1.533, 'Empate', 3.85, 'Leones FC', 5.50, 42],
    [11630, 'ZA-ECU2', 'Manta FC', 2.75, 'Empate', 2.75, 'Macara', 2.70, 42],
    [11900, 'ZA-ECU2', 'Buhos ULVR', 2.30, 'Empate', 3.00, 'Club Nueve de Octubre', 2.95, 42],
    [11900, 'ZA-EST2', 'Rio Grande Valley FC', 3.20, 'Empate', 3.35, 'San Antonio', 2.05, 42],
    [12000, 'ZA-EST2', 'New Mexico United', 1.85, 'Empate', 3.50, 'Las Vegas Lights', 3.60, 42],
    [12130, 'ZA-EST2', 'Phoenix Rising FC', 2.15, 'Empate', 3.35, 'Sacramento Republic FC', 3.00, 42],
    [11800, 'ZA-MEX2', 'CD Tepatitlan de Morelos', 2.00, 'Empate', 3.40, 'Cancun FC', 3.55, 90],
    [12005, 'ZA-MEX2', 'Coyotes FC', 3.30, 'Empate', 3.40, 'Club Celaya', 2.10, 90],
    [12205, 'ZA-MEX2', 'Club Atletico La Paz', 2.10, 'Empate', 3.65, 'Cimarrones de Sonora', 3.10, 91],
    [11930, 'ZA-LIBE', 'Palmeiras SP', 1.222, 'Empate', 7.00, 'Deportivo Pereira', 13.00, 188],
    [11930, 'ZA-LIBE', 'Racing Club', 2.65, 'Empate', 3.10, 'Boca Juniors', 2.95, 187],
    [11700, 'ZA-SUDA', 'Defensa Y Justicia', 2.375, 'Empate', 3.00, 'Botafogo RJ', 3.25, 189],
    [10530, 'S-CHIF', 'Dalian Pro', 4.333, 'Empate', 3.50, 'Tianjin Jinmen Tiger', 1.727, 42],
    [10635, 'S-CHIF', 'Chongqing Tonglianglong', 4.50, 'Empate', 3.35, 'Shanghai Shenhua', 1.727, 42],
    [10500, 'S-JAPE', 'Kashiwa Reysol', 3.20, 'Empate', 3.20, 'Nagoya Grampus', 2.15, 77],
    [10500, 'S-JAPE', 'Avispa Fukuoka', 2.375, 'Empate', 3.10, 'Shonan Bellmare', 2.85, 77],
    [10500, 'S-JAPE', 'Albirex Niigata', 3.35, 'Empate', 3.40, 'Kawasaki Frontale', 2.00, 78],
    [10500, 'S-JAPE', 'Kumamoto', 4.333, 'Empate', 3.65, 'Vissel Kobe', 1.727, 77],
    [11400, 'U-CHAM', 'PSV Eindhoven', 1.50, 'Empate', 4.333, 'Glasgow Rangers', 6.00, 194],
    [11400, 'U-CHAM', 'AEK Athens', 1.75, 'Empate', 3.65, 'Antwerp', 4.75, 116],
    [11400, 'U-CHAM', 'FC Copenhagen', 1.65, 'Empate', 3.90, 'Rakow Czestochowa', 5.25, 116],
    [11345, 'R-INGE', 'Harrogate Town', 4.333, 'Empate', 4.00, 'Blackburn Rovers', 1.70, 114],
    [11345, 'R-INGE', 'Nottingham Forest', 2.25, 'Empate', 3.40, 'Burnley', 3.00, 113],
    [11345, 'R-INGE', 'Sheffield United', 1.42, 'Empate', 4.75, 'Lincoln City', 7.00, 114],
    [11345, 'R-INGE', 'Chelsea', 1.10, 'Empate', 9.00, 'AFC Wimbledon', 21.00, 113],
    [11400, 'R-INGE', 'Doncaster Rovers', 8.00, 'Empate', 5.00, 'Everton', 1.35, 119],
    [10915, 'YE-RUSC', 'FC Sochi - 04', 3.10, 'Empate', 3.30, 'CSKA Moscow', 2.10, 42],
    [10915, 'YE-RUSC', 'FC Akhmat Grozny', 2.20, 'Empate', 3.35, 'Krylia Sovetov Samara', 2.90, 42],
    [11130, 'YE-RUSC', 'Baltika', 3.45, 'Empate', 3.40, 'Zenit St Petersburg', 1.95, 42],
    

]




let PARTIDOS_CON_CUOTA = [
    [11800, 'CD Tepatitlan de Morelos', 'Cancun FC', 1.42],
    [12005, 'Coyotes FC', 'Club Celaya', 1.42],
    [12205, 'Club Atletico La Paz', 'Cimarrones de Sonora', 1.333],
    [11900, 'Rio Grande Valley FC', 'San Antonio', 1.38],
    [12000, 'New Mexico United', 'Las Vegas Lights', 1.363],
    [12130, 'Phoenix Rising FC', 'Sacramento Republic FC', 1.38],
    [11700, 'Novorizontino SP', 'Ituano SP', 1.50],
    [11815, 'Union Magdalena', 'América de Cali', 1.444],
    [12030, 'Rionegro Aguilas', 'Atlético Nacional', 1.48],
    [11500, 'Fortaleza FC', 'Leones FC', 1.35],
    [11630, 'Manta FC', 'Macara', 1.615],
    [11900, 'Buhos ULVR', 'Club Nueve de Octubre', 1.48],
    [11839, 'Atlanta United', 'FC Cincinnati', 1.30],
    [11839, 'Charlotte FC', 'Orlando City SC', 1.333],
    [11839, 'Inter Miami CF', 'Nashville SC', 1.285],
    [11839, 'New England Revolution', 'New York Red Bulls', 1.363],
    [11839, 'New York City', 'CF Montreal', 1.363],
    [11839, 'Toronto FC', 'Philadelphia Union', 1.30],
    [11939, 'Austin FC', 'Seattle Sounders', 1.333],
    [11939, 'Chicago Fire', 'Vancouver Whitecaps FC', 1.30],
    [11939, 'Minnesota United FC', 'Colorado Rapids', 1.285],
    [11939, 'Houston Dynamo', 'Columbus Crew', 1.30],
    [11939, 'Saint Louis FC', 'FC Dallas', 1.35],
    [12139, 'Portland Timbers', 'Real Salt Lake', 1.30],
    [12139, 'San Jose Earthquakes', 'L.A. Galaxy', 1.30],
    [11930, 'Palmeiras SP', 'Deportivo Pereira', 1.30],
    [11930, 'Racing Club', 'Boca Juniors', 1.571],
    [12000, 'Toluca', 'Monterrey', 1.333],
    [12006, 'Queretaro FC', 'Atlas de Guadalajara', 1.45],
    [12200, 'Tigres UANL', 'Santos Laguna', 1.333],
    [11700, 'Defensa Y Justicia', 'Botafogo RJ', 1.50],
    [11330, 'Sampdoria', 'Venezia', 1.40],
    [11330, 'Bari', 'Cittadella', 1.55],
    [11330, 'Ternana', 'Cremonese', 1.45],
    [11330, 'Catanzaro', 'Spezia', 1.45],
    [11345, 'Harrogate Town', 'Blackburn Rovers', 1.30],
    [11345, 'Nottingham Forest', 'Burnley', 1.38],
    [11345, 'Sheffield United', 'Lincoln City', 1.30],
    [11345, 'Chelsea', 'AFC Wimbledon', 1.222],
    [11400, 'Doncaster Rovers', 'Everton', 1.285],
    [10530, 'Dalian Pro', 'Tianjin Jinmen Tiger', 1.40],
    [10635, 'Chongqing Tonglianglong', 'Shanghai Shenhua', 1.48],
    [10500, 'Kashiwa Reysol', 'Nagoya Grampus', 1.45],
    [10500, 'Avispa Fukuoka', 'Shonan Bellmare', 1.48],
    [10500, 'Albirex Niigata', 'Kawasaki Frontale', 1.40],
    [10500, 'Kumamoto', 'Vissel Kobe', 1.363],
    [11400, 'PSV Eindhoven', 'Glasgow Rangers', 1.285],
    [11400, 'AEK Athens', 'Antwerp', 1.40],
    [11400, 'FC Copenhagen', 'Rakow Czestochowa', 1.38],
    [11130, 'Pogon Szczecin', 'Slask Wroclaw', 1.333],
    [10915, 'FC Sochi - 04', 'CSKA Moscow', 1.40],
    [10915, 'FC Akhmat Grozny', 'Krylia Sovetov Samara', 1.363],
    [11130, 'Baltika', 'Zenit St Petersburg', 1.363],
    [11200, 'Talleres de Cordoba', 'Colon de Santa Fe', 1.45],
    [11415, 'Argentinos Juniors', 'San Martin de San Juan', 1.45],
    [11630, 'San Lorenzo', 'CA Belgrano', 1.55],
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