let PARTIDOS_CON_CUOTA = [
  [11600, 'Portuguesa FC', 'Deportivo Lara', '0.5', 1.61],
  [11815, 'Metropolitano SC', 'Estudiantes de Merida', '0.5', 1.45],
  [11415, 'FC Famalicao', 'Sporting Braga', 'Sporting Braga', 1.80],
  [11700, 'Huracan', 'Sarmiento', 'Huracan', 1.85],
  [11700, 'Platense', 'Banfield', 'Banfield', 2.60],
  [11930, 'Patronato Parana', 'San Lorenzo', 'San Lorenzo', 2.30],
  [11635, 'Atletico Rafaela', 'Estudiantes de Buenos Aires', 'Estudiantes de Buenos Aires', 2.62],
  [11930, 'Bahia BA', 'Ituano SP', 'Bahia BA', 1.76],
  [11700, 'Vila Nova FC', 'Londrina PR', 'Londrina PR', 2.70],
  [11930, 'Brusque FC', 'Ponte Preta SP', 'Ponte Preta SP', 2.75],
  [11930, 'Coquimbo', 'Cobresal', 'Cobresal', 2.10],
  [11940, 'Atletico Bucaramanga', 'Union Magdalena', 'Union Magdalena', 2.85],
  [11900, 'Mushuc Runa', 'Orense SC', 'Mushuc Runa', 2.30],
  [12105, 'Tijuana', 'Puebla', 'Tijuana', 1.95],
  [11700, 'Plaza Colonia', 'Cerro Largo FC', 'Cerro Largo FC', 2.50],
  [12100, 'Necaxa', 'Monterrey', 'Monterrey', 2.10],
  [11330, 'Freiburg', 'Borussia Dortmund', 'Borussia Dortmund', 1.76],
  [11130, 'Nurnberg', '1. FC Heidenheim', 'Nurnberg', 1.75],
  [11130, '1. FC Kaiserslautern', 'Paderborn', 'Paderborn', 1.75],
  [11200, 'Hallescher FC', 'VfB Oldenburg', 'Hallescher FC', 2.00],
  [11400, 'Osasuna', 'Sevilla', 'Sevilla', 2.20],
  [11400, 'Levante', 'SD Huesca', 'Levante', 1.61],
  [11400, 'Nantes', 'Lille', 'Lille', 1.95],
  [11345, 'Parma', 'Bari', 'Parma', 1.76],
  [11345, 'Dundee', 'Arbroath', '0.5', 1.50],
  [11400, 'Watford', 'Burnley', 'Watford', 2.10],
  [11345, 'KV Oostende', 'KAA Gent', 'KV Oostende', 2.35],
  [11300, 'SBV Excelsior', 'Vitesse', 'SBV Excelsior', 2.10],
  [11300, 'Almere City FC', 'FC Oss', 'Almere City FC', 1.48],
  [11300, 'De Graafschap', 'VVV Venlo', 'VVV Venlo', 2.35],
  [11300, 'FC Eindhoven', 'Willem II Tilburg', 'Willem II Tilburg', 1.85],
  [11300, 'Helmond Sport', 'AZ Alkmaar (R)', 'AZ Alkmaar (R)', 1.90],
  [11300, 'Roda JC', 'Ajax (R)', 'Ajax (R)', 2.05],
  [11300, 'SC Telstar', 'Zwolle', 'Zwolle', 1.60],
  [11100, 'Miedz Legnica', 'Zaglebie Lubin', 'Zaglebie Lubin', 2.00],
  [11330, 'Widzew Lodz', 'Legia Warsaw', 'Legia Warsaw', 1.85],
  [11200, 'CD Tondela', 'Benfica B', 'CD Tondela', 1.85],
  [11330, 'FC Arges Pitesti', 'FC U Craiova 1948', 'FC Arges Pitesti', 2.30],
  [11130, 'Fakel Voronezh', 'FC Ural', 'FC Ural', 2.40],
  [11300, 'Trabzonspor', 'Hatayspor', 'Trabzonspor', 1.50],
  [11330, 'CA Boston River', 'Atletico River Plate (Uru)', 'CA Boston River', 2.30],
]

let PARTIDOS_SIN_CUOTA = [
  [11330,"ALE1","Friburgo","Borussia Dortmund",8],[11130,"ALE2","Kaiserslautern","Paderborn",8],[11130,"ALE2","Núremberg","Heidenheim",7],[11200,"ALE3","Hallescher","VfB Oldenburg",7],[11700,"ZA-ARG1","Huracán","Sarmiento",7],[11700,"ZA-ARG1","Platense","Banfield",10],[11930,"ZA-ARG1","Patronato","San Lorenzo",10],[11635,"ZA-ARG2","Atl. Rafaela","CA Estudiantes",10],[11345,"YE-BEL1","Oostende","Gent",9],[11700,"ZA-BRA2","Vila Nova","Londrina",10],[11930,"ZA-BRA2","Bahia","Ituano",7],[11930,"ZA-BRA2","Brusque","Ponte Preta",10],[11930,"ZA-CHI1","Coquimbo","Cobresal",10],[11940,"ZA-COL1","Atl. Bucaramanga","U. Magdalena",10],[11900,"ZA-ECU1","Mushuc Runa","Orense",7],[11345,"R-ESC2","Dundee FC","Arbroath",11],[11400,"ESP1","Osasuna","Sevilla",6],[11400,"ESP2","Levante","Huesca",7],[11400,"FRA1","Nantes","Lille",6],[11400,"R-ING2","Watford","Burnley",7],[11345,"ITA2","Parma","Bari",7],[12100,"ZA-MEX1","Necaxa","Monterrey",8],[12105,"ZA-MEX1","Tijuana","Puebla",7],[11300,"YE-HOL1","Excelsior","Vitesse",9],[11300,"YE-HOL2","Almere","Oss",7],[11300,"YE-HOL2","Eindhoven","Willem II",8],[11300,"YE-HOL2","Graafschap","Venlo",10],[11300,"YE-HOL2","Helmond","Jong AZ",10],[11300,"YE-HOL2","Roda","Jong Ajax",10],[11300,"YE-HOL2","Telstar","Zwolle",8],[11100,"YE-POLE","Legnica","Zaglebie",8],[11330,"YE-POLE","Widzew Lodz","Legia",6],[11415,"YE-POR1","Famalicao","SC Braga",8],[11200,"YE-POR2","Tondela","Benfica B",7],[11330,"YE-RUM1","FC Arges","U Craiova 1948",7],[11130,"YE-RUS1","F. Voronezh","Ural",10],[11300,"YE-TUR1","Trabzonspor","Hatayspor",7],[11330,"ZA-URU1","Boston River","River Plate",7],[11700,"ZA-URU1","Plaza Colonia","Cerro Largo",10],[11600,"*ZA-VEN1","Portuguesa","Lara",11],[11815,"*ZA-VEN1","Metropolitanos","Estudiantes M.",11]
]
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

