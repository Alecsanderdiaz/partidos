//////////////////////////////////////////////////////////////////////
let PARTIDOS_SIN_CUOTA = [
  [11500, "CHAMP", "Manchester City", "Sporting CP", 1],
  [11500, "CHAMP", "Real Madrid", "PSG", 1],
  [12000, "CONCA", "New England Revolution (Usa)", "Pumas UNAM (Mex)", 7],
  [12200, "CONCA", "Cruz Azul (Mex)", "Club de Foot Montreal (Can)", 7],
  [11245, "EURO", "Oporto", "Lyon", 10],
  [11245, "EURO", "Real Betis", "Eintracht Frankfurt", 7],
  [11445, "R-ESC1", "Dundee FC", "St. Mirren", 8],
  [11030, "YE-REP1", "Liberec", "Pardubice", 7],
  [11230, "YE-REP1", "Jablonec", "Sparta Praga", 8],
  [11510, "ZA-ARGC", "Argentinos Jrs.", "Olimpo", 7],
  [11910, "ZA-ARGC", "River Plate", "Laferrere", 7],
  [12000, "ZA-COL1", "Pereira", "Once Caldas", 8],
  [11800, "ZA-COL2", "Atletico F.C.", "Real Santander", 7],
  [11715, "ZA-LIB", "Everton (Chi)", "Estudiantes L.P. (Arg)", 8],
  [11930, "ZA-LIB", "Fluminense (Bra)", "Olimpia (Par)", 5],
  [11800, "ZA-MEX2", "Leones Negros", "Tepatitlán", 10],
  [12005, "ZA-MEX2", "Pumas Tabasco", "Tlaxcala", 7],
  [12205, "ZA-MEX2", "Dorados", "Mineros", 7],
  [11715, "ZA-SUD", "Liverpool M. (Uru)", "River Plate (Uru)", 10],
  [11930, "ZA-SUD", "Ayacucho (Per)", "Sport Boys (Per)", 10],
  [11930, "ZA-SUD", "Ind. Medellín (Col)", "América de Cali (Col)", 5],
  [11930, "ZA-SUD", "Mushuc Runa (Ecu)", "LDU Quito (Ecu)", 2]
];

let PARTIDOS_CON_CUOTA = [
  [11500, 'Real Madrid', 'Paris S.G.', 'Real Madrid', 1.85],
  [11500, 'Manchester City', 'Sporting Lisbon', 'Manchester City', 1.30],
  [11245, 'Real Betis', 'Eintracht Frankfurt', 'Real Betis', 1.72],
  [11245, 'FC Porto', 'Lyon', 'Lyon', 2.25],
  [11445, 'Dundee', 'St Mirren', 'St Mirren', 2.05],
  [11030, 'Slovan Liberec', 'FK Pardubice', 'Slovan Liberec', 1.72],
  [11230, 'FK Baumit Jablonec', 'AC Sparta Praha', 'AC Sparta Praha', 1.95],
  [12000, 'New England Revolution', 'Pumas Unam', 'New England Revolution', 1.85],
  [12200, 'Cruz Azul', 'CF Montreal', 'Cruz Azul', 1.61],
  [11910, 'River Plate', 'Deportivo Laferrere', 'River Plate', 1.08],
  [12000, 'Deportivo Pereira', 'Once Caldas', 'Once Caldas', 2.35],
  [11800, 'Atletico de Cali', 'CD Real Santander', 'Atletico de Cali', 1.95],
  [11930, 'Fluminense RJ', 'Olimpia Asuncion', 'Fluminense RJ', 1.76],
  [11715, 'CD Everton Vina Del Mar', 'Estudiantes de La Plata', 'Estudiantes de La Plata', 2.15],
  [12005, 'Pumas Tabasco', 'Coyotes FC', 'Pumas Tabasco', 1.95],
  [12205, 'Dorados', 'Mineros de Zacatecas', 'Dorados', 1.90],
  [11800, 'Leones Negros', 'CD Tepatitlan de Morelos', 'CD Tepatitlan de Morelos', 2.55],
  [11930, 'Independiente Medellin', 'América de Cali', 'Independiente Medellin', 2.15],
  [11715, 'Liverpool Montevideo', 'Atletico River Plate (Uru)', 'Atletico River Plate (Uru)', 2.40],
  [11930, 'Mushuc Runa', 'LDU Quito', 'LDU Quito', 1.90],
  [11930, 'Ayacucho FC', 'Sport Boys Association', 'Sport Boys Association', 3.20],
]
























////////////////////////////////////////////////////////////////////////
// let PARTIDOS_SIN_CUOTA = [

// ];

// let PARTIDOS_CON_CUOTA = [

// ]



let PARTIDOS_CON_CUOTA_Y_GRUPO = [];

let indice = 0;
let cantidad_de_partidos_con_cuota = PARTIDOS_CON_CUOTA.length;
let cantidad_de_partidos_sin_cuota = PARTIDOS_SIN_CUOTA.length;

for (const partido of PARTIDOS_SIN_CUOTA) {
  //   if (indice < cantidad_de_partidos_con_cuota - 1) {
  //   console.log({ indice, cantidad_de_partidos_con_cuota, cantidad_de_partidos_sin_cuota})
  let indice_encontrado = PARTIDOS_CON_CUOTA.findIndex((p) => {
    // console.log({ p });
    return p[1].toLowerCase() === partido[2].toLowerCase();
  });

  if (indice_encontrado >= 0) {
    // PARTIDOS_CON_CUOTA_Y_GRUPO[indice] = partido;
    PARTIDOS_SIN_CUOTA[indice][5] = PARTIDOS_CON_CUOTA[indice_encontrado][4];
  } else {
    let indice_encontrado_2 = PARTIDOS_CON_CUOTA.findIndex((p) => {
      // console.log({ p });
      return p[2].toLowerCase() === partido[3].toLowerCase();
    });

    if (indice_encontrado_2 >= 0) {
      //   PARTIDOS_CON_CUOTA_Y_GRUPO[indice] = partido;
      PARTIDOS_SIN_CUOTA[indice][5] =
        PARTIDOS_CON_CUOTA[indice_encontrado_2][4];
    }
  }

  indice++;
  //   }
}

const { writeFile } = require('fs');

writeFile('partidos.txt', 'let PARTIDOS = ' + JSON.stringify(PARTIDOS_SIN_CUOTA), 'utf8', () => {
  console.log({
    PARTIDOS_SIN_CUOTA_C: PARTIDOS_SIN_CUOTA.length,
    PARTIDOS_CON_CUOTA_C: PARTIDOS_CON_CUOTA.length,
    // PARTIDOS_SIN_CUOTA: JSON.stringify(PARTIDOS_SIN_CUOTA),
  });
});

