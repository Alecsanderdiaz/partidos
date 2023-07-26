let PARTIDOS_WPLAY = [
    [260635, 'S-CHIF', 'Meizhou Hakka', 13.00, 'Empate', 6.50, 'Shandong Taishan', 1.153, 41],
    [260635, 'S-CHIF', 'Nantong Zhiyun', 11.00, 'Empate', 6.00, 'Wuhan Three Towns', 1.181, 41],
    [260635, 'S-CHIF', 'Qingdao Youth Island', 9.50, 'Empate', 5.25, 'Beijing Guoan FC', 1.25, 41],
    [261530, 'ZA-COLC', 'Tigres FC', 2.90, 'Empate', 3.30, 'Deportivo Pereira', 2.40, 143],
    [261830, 'ZA-COLC', 'Alianza Petrolera', 2.625, 'Empate', 3.25, 'Tolima', 2.625, 87],
    [262000, 'ZA-COLC', 'América de Cali', 2.30, 'Empate', 3.30, 'Atlético Nacional', 3.10, 141],
    [261500, 'ZA-ECU2', 'Club Nueve de Octubre', 2.05, 'Empate', 3.00, 'Vargas Torres', 3.70, 42],
    [261500, 'ZA-ECU2', 'Chacaritas SC', 2.25, 'Empate', 3.00, 'Cuniburo FC', 3.10, 42],
    [261900, 'ZA-ECU2', 'Independiente Juniors', 2.625, 'Empate', 2.85, 'Macara', 2.70, 42],
    [261800, 'ZA-EST2', 'Pittsburgh Riverhounds', 1.60, 'Empate', 3.60, 'Indy Eleven', 5.00, 42],
    [262100, 'ZA-EST2', 'Oakland Roots', 1.833, 'Empate', 3.50, 'Las Vegas Lights', 3.75, 42],
    [262200, 'ZA-EST2', 'Sacramento Republic FC', 1.95, 'Empate', 3.30, 'Phoenix Rising FC', 3.50, 42],
    [261600, 'ZA-ARGC', 'CA Excursionistas', 5.50, 'Empate', 3.45, 'Club Almagro', 1.70, 83],
    [261910, 'ZA-ARGC', 'San Lorenzo', 2.25, 'Empate', 2.85, 'Platense', 3.65, 90],
    [261830, 'I-LEAG', 'CF Montreal', 2.30, 'Empate', 3.55, 'DC United', 2.95, 175],
    [261830, 'I-LEAG', 'New York City', 1.75, 'Empate', 3.80, 'Toronto FC', 4.333, 172],
    [261830, 'I-LEAG', 'Philadelphia Union', 1.615, 'Empate', 4.00, 'Queretaro FC', 5.00, 172],
    [261830, 'I-LEAG', 'New England Revolution', 1.90, 'Empate', 3.70, 'Atletico San Luis', 3.80, 156],
    [262030, 'I-LEAG', 'Real Salt Lake', 2.30, 'Empate', 3.40, 'Monterrey', 3.00, 155],
    [262130, 'I-LEAG', 'L.A. Galaxy', 2.20, 'Empate', 3.65, 'Leon', 3.00, 176],
    [262200, 'I-LEAG', 'Portland Timbers', 2.45, 'Empate', 3.35, 'Tigres UANL', 2.875, 157],
    [260530, 'AMI-E', 'Bayern Munich', 3.10, 'Empate', 3.85, 'Manchester City', 2.10, 147],
    [260630, 'AMI-E', 'Lion City Sailors FC', 23.00, 'Empate', 12.00, 'Tottenham', 1.04, 2],
    [260700, 'AMI-E', 'Sheffield United', 2.00, 'Empate', 3.55, 'Girona', 3.55, 90],
    [261100, 'AMI-E', 'Empoli', 2.30, 'Empate', 3.60, '1. FC Heidenheim', 2.70, 78],
    [261100, 'AMI-E', 'Espanyol', 2.50, 'Empate', 3.50, 'Las Palmas', 2.50, 78],
    [261100, 'AMI-E', 'FC Ingolstadt 04', 7.50, 'Empate', 5.50, 'Borussia Monchengladbach', 1.285, 77],
    [261100, 'AMI-E', 'Spezia', 3.10, 'Empate', 3.70, 'VfL Bochum', 2.00, 79],
    [261130, 'AMI-E', 'Strasbourg', 2.50, 'Empate', 3.45, 'Sturm Graz', 2.50, 78],
    [261300, 'AMI-E', 'Getafe', 2.30, 'Empate', 3.45, 'Stade Reims', 2.95, 87],
    [261300, 'AMI-E', 'Red Star Belgrade', 3.25, 'Empate', 3.45, 'Fiorentina', 2.05, 76],
    [261300, 'AMI-E', 'PSV Eindhoven', 1.222, 'Empate', 6.00, 'FC Eindhoven', 9.00, 76],
    [261330, 'AMI-E', 'Bradford City', 3.95, 'Empate', 3.75, 'Middlesbrough', 1.769, 77],
    [261345, 'AMI-E', 'Glasgow Rangers', 2.05, 'Empate', 3.45, 'Olympiacos', 3.25, 76],
    [261400, 'AMI-E', 'Roma', 1.95, 'Empate', 3.60, 'Sporting Braga', 3.50, 90],
    [261630, 'AMI-E', 'Brentford', 3.00, 'Empate', 3.65, 'Brighton', 2.20, 165],
    [261800, 'AMI-E', 'Fulham', 3.40, 'Empate', 3.75, 'Aston Villa', 2.00, 165],
    [261900, 'AMI-E', 'Crystal Palace', 1.666, 'Empate', 3.80, 'Millonarios', 4.75, 86],
    [261915, 'AMI-E', 'Chelsea', 2.50, 'Empate', 3.50, 'Newcastle', 2.65, 147],
    [261930, 'AMI-E', 'Real Madrid', 2.45, 'Empate', 3.50, 'Manchester United', 2.60, 165],
    [262130, 'AMI-E', 'Arsenal', 2.35, 'Empate', 3.75, 'Barcelona', 2.75, 166],
    [260230, 'AMI-C', 'CS Concordia Chiajna', 2.15, 'Empate', 3.25, 'CSM Slatina', 2.90, 9],
    [260400, 'AMI-C', 'NK Triglav', 19.00, 'Empate', 8.50, 'Trabzonspor', 1.05, 8],
    [261000, 'AMI-C', 'Cremonese', 1.04, 'Empate', 9.00, 'AC Lumezzane', 23.00, 8],
    [261100, 'AMI-C', 'Rennes', 1.65, 'Empate', 3.70, 'Brest', 4.75, 77],
    [261100, 'AMI-C', 'Cosenza', 1.60, 'Empate', 3.70, 'AC Arezzo', 4.333, 9],
    [261100, 'AMI-C', 'Deinze', 5.50, 'Empate', 4.20, 'Valenciennes', 1.42, 9],
]

let PARTIDOS_CON_CUOTA = [
    [12200, 'Sacramento Republic FC', 'Phoenix Rising FC', 1.40],
    [12205, 'Club Atletico La Paz', 'Club Celaya', 1.42],
    [11245, 'Rostov', 'Rubin Kazan', 1.42],
    [11330, 'FC Stade Ls Ouchy', 'FC Lugano', 1.35],
    [11630, 'Brentford', 'Brighton', 1.30],
    [11800, 'Fulham', 'Aston Villa', 1.30],
    [11900, 'Crystal Palace', 'Millonarios', 1.35],
    [11915, 'Chelsea', 'Newcastle', 1.30],
    [11930, 'Real Madrid', 'Manchester United', 1.285],
    [12130, 'Arsenal', 'Barcelona', 1.25],
    [11830, 'CF Montreal', 'DC United', 1.35],
    [11830, 'New York City', 'Toronto FC', 1.363],
    [11830, 'Philadelphia Union', 'Queretaro FC', 1.333],
    [11830, 'New England Revolution', 'Atletico San Luis', 1.333],
    [12200, 'Portland Timbers', 'Tigres UANL', 1.40],
    [12130, 'L.A. Galaxy', 'Leon', 1.25],
    [11600, 'CA Excursionistas', 'Club Almagro', 1.55],
    [11910, 'San Lorenzo', 'Platense', 1.769],
    [11930, 'Gremio RS', 'Flamengo RJ', 1.42],
    [11530, 'Tigres FC', 'Deportivo Pereira', 1.571],
    [11830, 'Alianza Petrolera', 'Tolima', 1.40],
    [12000, 'América de Cali', 'Atlético Nacional', 1.533],
    [11500, 'Club Nueve de Octubre', 'Vargas Torres', 1.533],
    [11500, 'Chacaritas SC', 'Cuniburo FC', 1.50],
    [11900, 'Independiente Juniors', 'Macara', 1.571],
    [11800, 'Pittsburgh Riverhounds', 'Indy Eleven', 1.444],
    [12100, 'Oakland Roots', 'Las Vegas Lights', 1.333],
    [11100, 'Rennes', 'Brest', 1.25],
    [11100, 'Empoli', '1. FC Heidenheim', 1.333],
    [11100, 'FC Ingolstadt 04', 'Borussia Monchengladbach', 1.20],
    [11100, 'Spezia', 'VfL Bochum', 1.25],
    [11100, 'CF Cadiz', 'Al Wakrah Sports Club', 1.40],
    [11200, 'Espanyol', 'Las Palmas', 1.38],
    [11230, 'Sanluqueno', 'Granada', 1.166],
    [11300, 'Getafe', 'Stade Reims', 1.38],
    [11300, 'Red Star Belgrade', 'Fiorentina', 1.333],
    [11300, 'PSV Eindhoven', 'FC Eindhoven', 1.181],
    [11300, 'Koninklijke HFC', 'Jong AZ Alkmaar', 1.20],
    [11330, 'Bradford City', 'Middlesbrough', 1.333],
    [11345, 'Glasgow Rangers', 'Olympiacos', 1.38],
    [11400, 'Roma', 'Sporting Braga', 1.363],
    [11345, 'Dundee', 'Dumbarton', 1.25],
    [11345, 'Peterhead', 'Spartans FC', 1.363],
    [11345, 'Kilmarnock', 'Raith Rovers', 1.35],
    [11345, 'Edinburgh City', 'Ross County', 1.285],
    [11000, 'FC Struga Trim Lum', 'FK Buducnost Podgorica', 1.48],
    [11100, 'Rigas Futbola Skola', 'Sabah', 1.50],
    [11145, 'Midtjylland', 'Progres Niedercorn', 1.20],
    [11230, 'CSKA 1948', 'FCSB', 1.50],
    [11300, 'Fenerbahce', 'FC Zimbru', 1.166],
    [11300, 'Neman Grodno', 'Balzan FC', 1.42],
    [11030, 'Fakel Voronezh', 'FC Sochi - 04', 1.48],
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