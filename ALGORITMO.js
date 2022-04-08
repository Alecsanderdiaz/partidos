let PARTIDOS_CON_CUOTA = [
    [11700, 'Atletico Tucuman', 'Gimnasia LP', 'Atletico Tucuman', 2.20],
    [11930, 'Rosario Central', 'Colon de Santa Fe', 'Rosario Central', 2.00],
    [11700, 'Arsenal de Sarandi', 'Godoy Cruz', 'Godoy Cruz', 2.15],
    [11930, 'Sarmiento', 'San Lorenzo', 'San Lorenzo', 2.25],
    [11910, 'Atletico Rafaela', 'Club Atletico Alvarado', 'Atletico Rafaela', 2.25],
    [11700, 'Vasco Da Gama RJ', 'Vila Nova FC', 'Vasco Da Gama RJ', 1.90],
    [11700, 'Brusque FC', 'Guarani SP', 'Guarani SP', 2.25],
    [11930, 'Bahia BA', 'Cruzeiro MG', 'Cruzeiro MG', 2.35],
    [12000, 'Millonarios', 'La Equidad', 'Millonarios', 1.90],
    [11800, 'Boyaca Chico FC', 'Atletico Huila', 'Atletico Huila', 3.30],
    [11900, 'Tecnico Universitario', 'Gualaceo SC', 'Tecnico Universitario', 2.10],
    [11900, 'Puebla', 'Pumas Unam', 'Pumas Unam', 2.50],
    [12100, 'Mazatlan FC', 'Cruz Azul', 'Cruz Azul', 2.30],
    [11915, 'Olimpia Asuncion', 'Nacional Asuncion', 'Olimpia Asuncion', 1.75],
    [11700, '12 de Octubre', 'Resistencia', 'Resistencia', 2.10],
    [11715, 'Cerro Largo FC', 'Defensor Sporting', 'Defensor Sporting', 2.20],
    [11700, 'Deportivo Lara', 'Portuguesa FC', '0.5', 1.53],
    [11300, 'Roda JC', 'Ajax (R)', 'Roda JC', 1.50],
    [11300, 'NAC Breda', 'VVV Venlo', 'VVV Venlo', 2.15],
    [11300, 'FC Oss', 'PSV (R)', 'PSV (R)', 1.76],
    [11100, 'Zaglebie Lubin', 'Stal Mielec', 'Zaglebie Lubin', 1.80],
    [11330, 'Pogon Szczecin', 'Wisla Plock', 'Pogon Szczecin', 1.61],
    [11415, 'Gil Vicente', 'Moreirense', 'Gil Vicente', 1.80],
    [11200, 'FC Penafiel', 'Varzim FC', 'FC Penafiel', 2.25],
    [11230, 'Dinamo Bucuresti', 'FC U Craiova 1948', 'Dinamo Bucuresti', 2.20],
    [10930, 'CS FC Clinceni', 'Chindia', 'Chindia', 1.55],
    [11330, 'Stuttgart', 'Borussia Dortmund', 'Borussia Dortmund', 1.61],
    [11130, 'Fortuna Dusseldorf', 'Hansa Rostock', 'Fortuna Dusseldorf', 1.70],
    [11130, 'Jahn Regensburg', 'FC Ingolstadt 04', 'Jahn Regensburg', 1.65],
    [11200, 'Wurzburger Kickers', '1. FC Kaiserslautern', '1. FC Kaiserslautern', 1.75],
    [11400, 'Sevilla', 'Granada', 'Sevilla', 1.66],
    [11400, 'CD Lugo', 'Cartagena', 'Cartagena', 2.20],
    [11400, 'Lorient', 'Saint Etienne', 'Saint Etienne', 2.40],
    [11345, 'Queen of the South', 'Partick Thistle', '0.5', 1.42],
    [11400, 'Newcastle', 'Wolverhampton Wanderers', 'Newcastle', 2.15],
    [11300, 'GO Ahead Eagles', 'Willem II Tilburg', 'GO Ahead Eagles', 2.00],
    [11300, 'FC Den Bosch', 'FC Dordrecht', 'FC Den Bosch', 1.53],
    [11300, 'ADO Den Haag', 'Helmond Sport', 'ADO Den Haag', 1.40],
    [11300, 'FC Eindhoven', 'Almere City FC', 'FC Eindhoven', 1.80],
    [11300, 'SBV Excelsior', 'SC Telstar', 'SBV Excelsior', 1.45],
    [11300, 'FC Emmen', 'AZ Alkmaar (R)', 'FC Emmen', 1.40],
    [11300, 'Volendam', 'De Graafschap', 'Volendam', 1.76],
    [11300, 'MVV Maastricht', 'Utrecht (R)', 'MVV Maastricht', 1.85],
]

let PARTIDOS_SIN_CUOTA = [
  [11330, "ALE1", "Stuttgart", "Borussia Dortmund", 4],
  [11130, "ALE2", "Fortuna Düsseldorf", "Rostock", 7],
  [11130, "ALE2", "Regensburg", "Ingolstadt", 7],
  [11200, "ALE3", "Würzburger Kickers", "Kaiserslautern", 8],
  [11700, "ZA-ARG1", "Arsenal Sarandí", "Godoy Cruz", 8],
  [11700, "ZA-ARG1", "Atl. Tucumán", "Gimnasia L.P.", 7],
  [11930, "ZA-ARG1", "Rosario Central", "Colón", 7],
  [11930, "ZA-ARG1", "Sarmiento", "San Lorenzo", 8],
  [11910, "ZA-ARG2", "Atl. Rafaela", "Alvarado", 7],
  [11400, "ZA-BOL1*", "Always Ready", "Universitario de Vinto", 12],
  [11700, "ZA-BRA2", "Brusque", "Guaraní", 10],
  [11700, "ZA-BRA2", "Vasco", "Vila Nova", 7],
  [11930, "ZA-BRA2", "Bahia", "Cruzeiro", 10],
  [12000, "ZA-COL1", "Millonarios", "La Equidad", 1],
  [11800, "ZA-COL2", "Boyacá Chicó", "Atl. Huila", 4],
  [11900, "ZA-ECU1", "Técnico U.", "Gualaceo", 7],
  [11900, "ZA-ECU2*", "Manta", "Libertad", 12],
  [11345, "R-ESC2*", "Queen of South", "Partick Thistle", 11],
  [11400, "ESP1", "Sevilla", "Granada", 3],
  [11400, "ESP2", "Lugo", "Cartagena", 10],
  [11400, "FRA1", "Lorient", "Saint-Étienne", 10],
  [11400, "R-ING1", "Newcastle", "Wolves", 7],
  [11900, "ZA-MEX1", "Puebla", "Pumas UNAM", 10],
  [12100, "ZA-MEX1", "Mazatlán", "Cruz Azul", 8],
  [11300, "YE-HOL1", "G.A. Eagles", "Willem II", 7],
  [11300, "YE-HOL2", "Breda", "Venlo", 10],
  [11300, "YE-HOL2", "Den Bosch", "Dordrecht", 7],
  [11300, "YE-HOL2", "Den Haag", "Helmond", 7],
  [11300, "YE-HOL2", "Eindhoven", "Almere", 7],
  [11300, "YE-HOL2", "Excelsior", "Telstar", 7],
  [11300, "YE-HOL2", "FC Emmen", "Jong AZ", 7],
  [11300, "YE-HOL2", "FC Volendam", "Graafschap", 7],
  [11300, "YE-HOL2", "Maastricht", "Jong Utrecht", 9],
  [11300, "YE-HOL2", "Oss", "Jong PSV", 8],
  [11300, "YE-HOL2", "Roda", "Jong Ajax", 7],
  [11700, "ZA-PAR1", "12 de Octubre", "Resistencia", 8],
  [11915, "ZA-PAR1", "Olimpia", "Nacional Asunción", 7],
  [12000, "ZA-PER1", "César Vallejo", "Sporting Cristal", 8],
  [11100, "YE-POL1", "Zaglebie", "Stal Mielec", 7],
  [11330, "YE-POL1", "Pogon Szczecin", "Plock", 7],
  [11415, "YE-POR1", "Gil Vicente", "Moreirense", 7],
  [11200, "YE-POR2", "Penafiel", "Varzim", 7],
  [10930, "YE-RUM1", "Academica Clinceni", "Chindia Targoviste", 8],
  [11230, "YE-RUM1", "Dinamo Bucarest", "U Craiova 1948", 7],
  [11230, "YE-SUI2*", "Xamax", "Thun", 12],
  [11315, "YE-SUI2*", "Aarau", "Winterthur", 12],
  [11715, "ZA-URU1", "Cerro Largo", "Defensor Sp.", 10],
  [11700, "ZA-VEN1*", "Lara", "Portuguesa", 11],
  [11915, "ZA-VEN1*", "Monagas", "Zulia", 11]
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
    PARTIDOS_CON_CUOTA.splice(indice_encontrado, 1)
  } else {
    let indice_encontrado_2 = PARTIDOS_CON_CUOTA.findIndex((p) => {
      // console.log({ p });
      return p[2].toLowerCase() === partido[3].toLowerCase();
    });

    if (indice_encontrado_2 >= 0) {
      //   PARTIDOS_CON_CUOTA_Y_GRUPO[indice] = partido;
      PARTIDOS_SIN_CUOTA[indice][5] =
        PARTIDOS_CON_CUOTA[indice_encontrado_2][4];
        PARTIDOS_CON_CUOTA.splice(indice_encontrado_2, 1)
    }
  }

  indice++;
  //   }
}

const { writeFile } = require('fs');

writeFile('partidos.txt', 'let PARTIDOS = ' + JSON.stringify(PARTIDOS_SIN_CUOTA), 'utf8', () => {
  writeFile('partidos_con_cuota.txt', 'let PARTIDOS = ' + JSON.stringify(PARTIDOS_CON_CUOTA), 'utf8', () => {
  console.log({
    PARTIDOS_SIN_CUOTA_C: PARTIDOS_SIN_CUOTA.length,
    PARTIDOS_CON_CUOTA_C: PARTIDOS_CON_CUOTA.length,
    // PARTIDOS_SIN_CUOTA: JSON.stringify(PARTIDOS_SIN_CUOTA),
  });
  });
});

