let PARTIDOS_WPLAY = [
    [10300, 'AMI-E', 'Sheffield Wednesday', 1.65, 'Empate', 3.65, 'CD Eldense', 4.75, 75],
    [10700, 'AMI-E', 'Jong Utrecht', 2.35, 'Empate', 3.65, 'FC Oss', 2.50, 42],
    [10800, 'AMI-E', 'Cologne', 2.35, 'Empate', 3.40, 'RCD Mallorca', 2.70, 78],
    [10900, 'AMI-E', 'Strasbourg', 3.25, 'Empate', 3.40, 'Besiktas', 2.05, 76],
    [11000, 'AMI-E', 'FC Lokomotive Leipzig', 3.85, 'Empate', 3.75, 'MSV Duisburg', 1.769, 76],
    [11000, 'AMI-E', 'Paris S.G.', 1.285, 'Empate', 5.00, 'AC Le Havre', 8.00, 42],
    [11030, 'AMI-E', 'Paderborn', 4.75, 'Empate', 4.20, 'Bayer Leverkusen', 1.55, 78],
    [11100, 'AMI-E', 'Fortuna Dusseldorf', 2.75, 'Empate', 3.60, 'VfL Bochum', 2.20, 79],
    [11100, 'AMI-E', 'Standard Liege', 2.20, 'Empate', 3.65, 'Hertha Berlin', 2.75, 77],
    [11200, 'AMI-E', 'FC Dordrecht', 2.15, 'Empate', 3.65, 'FC Den Bosch', 2.75, 42],
    [11230, 'AMI-E', 'CD Teruel', 4.333, 'Empate', 3.55, 'Real Zaragoza', 1.70, 42],
    [11315, 'AMI-E', 'Hibernian', 2.10, 'Empate', 3.85, 'Groningen', 2.875, 77],
    [11330, 'AMI-E', 'Fleetwood Town', 3.65, 'Empate', 3.55, 'Blackburn Rovers', 1.833, 42],
    [11330, 'AMI-E', 'Oxford United', 3.10, 'Empate', 3.55, 'Swansea', 2.05, 42],
    [11345, 'AMI-E', 'Real Sociedad', 2.00, 'Empate', 3.30, 'Osasuna', 3.45, 77],
    [11430, 'AMI-E', 'Benfica', 2.10, 'Empate', 3.65, 'Celta de Vigo', 3.10, 90],
    [10200, 'AMI-C', 'CSM Jiul Petrosani', 2.85, 'Empate', 3.40, 'CNS Cetate Deva', 2.10, 9],
    [10300, 'AMI-C', 'Port Vale', 2.00, 'Empate', 3.20, 'Grimsby Town', 3.25, 9],
    [11900, 'I-LEA', 'Inter Miami CF', 2.20, 'Empate', 3.55, 'Cruz Azul', 3.30, 157],
    [11900, 'I-LEA', 'Orlando City SC', 2.00, 'Empate', 3.45, 'Houston Dynamo', 3.60, 164],
    [11930, 'I-LEA', 'Austin FC', 1.90, 'Empate', 3.65, 'Mazatlan FC', 4.20, 163],
    [12000, 'I-LEA', 'FC Dallas', 2.10, 'Empate', 3.35, 'Charlotte FC', 3.55, 163],
    [12130, 'I-LEA', 'Vancouver Whitecaps FC', 2.55, 'Empate', 3.35, 'Leon', 2.875, 147],
    [10000, 'MUJE', 'Filipinas (F)', 13.00, 'Empate', 6.25, 'Suiza (F)', 1.20, 47],
    [10230, 'MUJE', 'España (F)', 1.015, 'Empate', 17.00, 'Costa Rica (F)', 41.00, 39],
    [12000, 'MUJE', 'EE.UU (F)', 1.01, 'Empate', 23.00, 'Vietnam (F)', 41.00, 77],
    [10635, 'S-CHI1', 'Tianjin Jinmen Tiger', 1.111, 'Empate', 7.00, 'Shenzhen FC', 21.00, 87],
    [10635, 'S-CHI1', 'Henan Songshan Longmen', 2.15, 'Empate', 3.20, 'Nantong Zhiyun', 3.25, 83],
    [10635, 'S-CHI1', 'Shanghai Port', 1.285, 'Empate', 5.00, 'Cangzhou Mighty Lions', 9.00, 85],
    [10530, 'S-COR1', 'Pohang Steelers', 2.10, 'Empate', 3.45, 'Jeonbuk Hyundai Motors', 3.25, 95],
    [10530, 'S-COR1', 'Ulsan Hyundai Horang-I', 1.615, 'Empate', 4.00, 'Jeju United', 5.00, 95],
    [11100, 'YE-POLE', 'Warta Poznan', 3.90, 'Empate', 3.65, 'Pogon Szczecin', 1.85, 96],
    [11330, 'YE-POLE', 'Legia Warsaw', 1.35, 'Empate', 4.75, 'LKS Lodz', 8.00, 89],
    [11415, 'YE-PORT', 'Torreense', 2.10, 'Empate', 3.25, 'CD Mafra', 3.20, 44],
    [11030, 'YE-RUM1', 'Sepsi OSK', 1.85, 'Empate', 3.40, 'FC U Craiova 1948', 3.80, 81],
    [11330, 'YE-RUM1', 'FC Uta Arad', 3.20, 'Empate', 3.20, 'CFR Cluj', 2.15, 81],
    [11100, 'YE-RUS1', 'Dinamo Moscow', 2.15, 'Empate', 3.50, 'Krasnodar', 2.95, 83],
    [11230, 'YE-SUI2', 'FC Thun', 1.55, 'Empate', 4.00, 'Stade Nyonnais', 4.75, 42],
    [11230, 'YE-SUI2', 'Neuchatel Xamax FC', 2.15, 'Empate', 3.40, 'FC Schaffhausen', 2.95, 42],
    [11315, 'YE-SUI2', 'FC Aarau', 1.45, 'Empate', 4.333, 'FC Baden', 5.50, 42],
    [10730, 'ZA-B20', 'Grêmio Recreativo Pague Menos CE U20', 5.75, 'Empate', 4.00, 'Fortaleza CE U20', 1.42, 9],
    [11700, 'ZA-BRA2', 'CRB Maceio AL', 2.00, 'Empate', 3.20, 'Ponte Preta SP', 3.90, 101],
    [11700, 'ZA-CHI1', 'Union La Calera', 2.00, 'Empate', 3.30, 'Magallanes Santiago', 3.45, 83],
    [12000, 'ZA-EST2', 'Tulsa Roughnecks FC', 2.35, 'Empate', 3.30, 'Rio Grande Valley FC', 2.70, 42],
    [12005, 'ZA-MEX2', 'Venados FC', 2.35, 'Empate', 3.20, 'Coyotes FC', 3.00, 89],
    [11800, 'ZA-PAR1', 'Club Tacuary', 2.95, 'Empate', 3.30, 'Guarani Asuncion', 2.25, 76],
    [11300, 'ZA-PER1', 'Union Comercio', 2.30, 'Empate', 3.30, 'Universidad Cesar Vallejo', 2.85, 83],
    [11945, 'ZA-PER1', 'Club Sportivo Cienciano', 2.10, 'Empate', 3.30, 'Sport Huancayo', 3.25, 82],
    [11300, 'ZA-URU1', 'Atletico Fenix Montevideo', 3.00, 'Empate', 3.30, 'Liverpool Montevideo', 2.20, 76],
    [11800, 'ZA-URU1', 'La Luz FC', 2.50, 'Empate', 3.25, 'Montevideo City Torque', 2.65, 77],
    [11600, 'ZA-VEN1', 'Metropolitano SC', 1.615, 'Empate', 3.45, 'FC Angostura', 5.25, 42],
    [11815, 'ZA-VEN1', 'Zamora FC', 2.05, 'Empate', 3.25, 'Rayo Zuliano', 3.30, 42],
    [11600, 'ZA-COL1', 'Tolima', 1.95, 'Empate', 3.30, 'Once Caldas', 4.20, 187],
    [11815, 'ZA-COL1', 'La Equidad', 1.70, 'Empate', 3.65, 'Envigado FC', 5.00, 187],
    [12030, 'ZA-COL1', 'Deportivo Pasto', 1.95, 'Empate', 3.50, 'Alianza Petrolera', 3.90, 188],
]

let PARTIDOS_CON_CUOTA = [
    [11330, 'Fleetwood Town', 'Blackburn Rovers', 1.30],
    [11330, 'Oxford United', 'Swansea', 1.30],
    [11345, 'Real Sociedad', 'Osasuna', 1.42],
    [11430, 'Benfica', 'Celta de Vigo', 1.30],
    [11900, 'Inter Miami CF', 'Cruz Azul', 1.36],
    [11900, 'Orlando City SC', 'Houston Dynamo', 1.38],
    [11930, 'Austin FC', 'Mazatlan FC', 1.36],
    [12000, 'FC Dallas', 'Charlotte FC', 1.45],
    [12130, 'Vancouver Whitecaps FC', 'Leon', 1.38],
    [11330, 'Legia Warsaw', 'LKS Lodz', 1.33],
    [11415, 'Torreense', 'CD Mafra', 1.42],
    [11330, 'FC Uta Arad', 'CFR Cluj', 1.50],
    [11700, 'CRB Maceio AL', 'Ponte Preta SP', 1.53],
    [11700, 'Union La Calera', 'Magallanes Santiago', 1.40],
    [11600, 'Tolima', 'Once Caldas', 1.45],
    [11815, 'La Equidad', 'Envigado FC', 1.45],
    [12030, 'Deportivo Pasto', 'Alianza Petrolera', 1.45],
    [12000, 'Tulsa Roughnecks FC', 'Rio Grande Valley FC', 1.38],
    [12005, 'Venados FC', 'Coyotes FC', 1.48],
    [11800, 'Club Tacuary', 'Guarani Asuncion', 1.42],
    [11945, 'Club Sportivo Cienciano', 'Sport Huancayo', 1.38],
    [11800, 'La Luz FC', 'Montevideo City Torque', 1.40],
    [11600, 'Metropolitano SC', 'FC Angostura', 1.45],
    [11815, 'Zamora FC', 'Rayo Zuliano', 1.38],
    [10300, 'Sheffield Wednesday', 'CD Eldense', 1.36],
    [10700, 'Jong Utrecht', 'FC Oss', 1.25],
    [10800, 'Cologne', 'RCD Mallorca', 1.35],
    [10900, 'Strasbourg', 'Besiktas', 1.36],
    [11000, 'FC Lokomotive Leipzig', 'MSV Duisburg', 1.28],
    [11000, 'Paris S.G.', 'AC Le Havre', 1.22],
    [11030, 'Paderborn', 'Bayer Leverkusen', 1.25],
    [11100, 'Fortuna Dusseldorf', 'VfL Bochum', 1.28],
    [11100, 'Standard Liege', 'Hertha Berlin', 1.28],
    [11200, 'FC Dordrecht', 'FC Den Bosch', 1.25],
    [11230, 'CD Teruel', 'Real Zaragoza', 1.40],
    [10635, 'Tianjin Jinmen Tiger', 'Shenzhen FC', 1.22],
    [10635, 'Henan Songshan Longmen', 'Nantong Zhiyun', 1.48],
    [10635, 'Shanghai Port', 'Cangzhou Mighty Lions', 1.28],
    [10530, 'Pohang Steelers', 'Jeonbuk Hyundai Motors', 1.40],
    [10530, 'Ulsan Hyundai Horang-I', 'Jeju United', 1.30],
    [11100, 'Warta Poznan', 'Pogon Szczecin', 1.42],
    [11030, 'Sepsi OSK', 'FC U Craiova 1948', 1.42],
    [11100, 'Dinamo Moscow', 'Krasnodar', 1.33],
    [11230, 'FC Thun', 'Stade Nyonnais', 1.28],
    [11230, 'Neuchatel Xamax FC', 'FC Schaffhausen', 1.30],
    [11300, 'Union Comercio', 'Universidad Cesar Vallejo', 1.33],
    [11300, 'Atletico Fenix Montevideo', 'Liverpool Montevideo', 1.38],
    [11315, 'FC Aarau', 'FC Baden', 1.25],
    [11315, 'Hibernian', 'Groningen', 1.28],
    
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