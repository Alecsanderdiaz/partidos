let PARTIDOS_WPLAY = [
  [10500, 'Tottenham', 2.00, 'Empate', 3.70, 'West Ham United', 3.50, 176],
  [10630, 'Bristol City', 1.533, 'Empate', 4.20, 'Swindon Town', 5.25, 78],
  [11000, 'Génova', 1.615, 'Empate', 3.90, 'WSG Tirol', 4.50, 76],
  [11100, 'Austria Wien', 2.30, 'Empate', 3.65, 'Aris Limassol', 2.55, 42],
  [11200, 'Valencia', 2.30, 'Empate', 3.45, 'Nottingham Forest', 2.875, 87],
  [11200, 'Real Oviedo', 2.30, 'Empate', 3.25, 'Racing Santander', 2.875, 77],
  [11200, 'Sturm Graz', 2.75, 'Empate', 3.50, 'Galatasaray', 2.25, 79],
  [11200, 'FC Penafiel', 4.00, 'Empate', 3.40, 'Desportivo Chaves', 1.833, 77],
  [11200, 'Sevilla', 1.125, 'Empate', 6.50, 'AD Ceuta', 17.00, 40],
  [11230, 'Osasuna', 1.571, 'Empate', 3.90, 'SD Huesca', 5.00, 75],
  [11230, 'Altach', 6.50, 'Empate', 4.75, 'Villarreal', 1.363, 75],
  [11300, 'Real Murcia', 4.20, 'Empate', 3.75, 'Sheffield Wednesday', 1.70, 76],
  [11300, 'Panathinaikos', 1.833, 'Empate', 3.45, 'Rayo Vallecano', 3.90, 77],
  [11300, 'Forest Green Rovers', 3.95, 'Empate', 3.65, 'Coventry', 1.75, 42],
  [11300, 'FC Lisse', 5.25, 'Empate', 4.333, 'SC Telstar', 1.45, 42],
  [11300, 'FC Rijnvogels', 5.75, 'Empate', 4.75, 'Koninklijke HFC', 1.40, 42],
  [11330, 'Brackley Town', 7.00, 'Empate', 5.25, 'Burton Albion', 1.30, 42],
  [11330, 'Southport FC', 4.75, 'Empate', 3.90, 'Morecambe', 1.60, 42],
  [11330, 'Swindon Supermarine', 2.45, 'Empate', 3.55, 'Chippenham Town', 2.45, 42],
  [11330, 'Gillingham', 3.10, 'Empate', 3.55, 'Charlton Athletic', 2.05, 42],
  [11330, 'Hereford United', 2.60, 'Empate', 4.00, 'Swindon Town', 2.15, 42],
  [11330, 'Stevenage', 1.95, 'Empate', 3.55, 'Colchester', 3.30, 42],
  [11330, 'Torquay United', 15.00, 'Empate', 8.00, 'Plymouth Argyle', 1.10, 41],
  [11345, 'Glasgow Rangers', 3.90, 'Empate', 3.85, 'Newcastle', 1.80, 110],
  [11345, 'Cheltenham Town', 4.50, 'Empate', 4.00, 'West Bromwich', 1.615, 77],
  [11345, 'Hull City', 1.85, 'Empate', 3.50, 'Barnsley', 3.75, 77],
  [11345, 'AFC Fylde', 2.95, 'Empate', 3.65, 'Barrow FC', 2.05, 42],
  [11345, 'Chester FC', 5.75, 'Empate', 4.50, 'Stockport County', 1.42, 42],
  [11345, 'Sutton United', 4.20, 'Empate', 3.75, 'Millwall', 1.70, 42],
]

const PARTIDOS_OPTIMIZADOS = PARTIDOS_WPLAY.map(partido => {
    return {
        hora: partido[0],
        local: partido[1],
        visitante: partido[5],
        cuotaLocal: partido[2],
        empate: partido[4],
        cuotaVisitante: partido[6],
        cantidadDeApuestas: partido[7]
    }
})

const fs = require('fs')

fs.writeFileSync('partidos_optimizados.txt', `let PARTIDOS_OPTIMIZADOS = ` + JSON.stringify(PARTIDOS_OPTIMIZADOS))