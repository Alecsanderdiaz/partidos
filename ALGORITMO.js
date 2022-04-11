let PARTIDOS_CON_CUOTA = [
  [11200, 'VfL Osnabruck', 'SC Verl', 'VfL Osnabruck', 1.53],
  [11400, 'Rayo Vallecano', 'Valencia', 'Valencia', 2.40],
  [11400, 'Almeria', 'SD Ponferradina', 'Almeria', 1.50],
  [11345, 'Paris FC', 'Dijon', 'Paris FC', 1.90],
  [11345, 'Bologna', 'Sampdoria', 'Sampdoria', 2.40],
  [11330, 'Brescia', 'Parma', 'Parma', 2.35],
  [11345, 'Huddersfield', 'Luton Town', 'Huddersfield', 2.15],
  [11100, 'Radomiak Radom', 'Jagiellonia Bialystok', 'Radomiak Radom', 1.76],
  [11300, 'FCSB', 'CS Voluntari', 'FCSB', 1.66],
  [11000, 'Gaz Metan Medias', 'CS Mioveni', 'CS Mioveni', 1.33],
  [11230, 'Antalyaspor', 'Hatayspor', 'Antalyaspor', 1.75],
  [11700, 'Huracan', 'CA Barracas Central', 'Huracan', 1.76],
  [11930, 'Atletico Lanus', 'CA Aldosivi', 'CA Aldosivi', 2.65],
  [11910, 'San Martin de Tucuman', 'Independiente Rivadavia', 'San Martin de Tucuman', 2.00],
  [11505, 'Defensores de Belgrano', 'Quilmes AC', 'Quilmes AC', 2.30],
  [11710, 'CA Guemes', 'CA Belgrano', 'CA Belgrano', 2.10],
  [11830, 'Santamarina Tandil', 'Estudiantes Rio Cuarto', 'Estudiantes Rio Cuarto', 2.62],
  [11800, 'Juventude RS', 'Bragantino SP', 'Bragantino SP', 2.40],
  [11730, 'Jaguares De Córdoba', 'Once Caldas', 'Once Caldas', 2.30],
  [11940, 'Deportivo Pasto', 'Deportivo Pereira', 'Deportivo Pereira', 2.65],
  [11500, 'Boca Juniors de Cali', 'Barranquilla', 'Boca Juniors de Cali', 1.93],
  [11900, 'Aucas', 'Macara', 'Macara', 2.65],
  [11915, 'Torque', 'Rentistas', 'Torque', 1.70],
  [11700, 'Montevideo Wanderers', 'Deportivo Maldonado', 'Deportivo Maldonado', 2.45],
]

let PARTIDOS_SIN_CUOTA = [
  [11200,"ALE3","Osnabruck","Verl",7],[11700,"ZA-ARG1","Huracán","Barracas Central",7],[11930,"ZA-ARG1","Lanús","Aldosivi",10],[11505,"ZA-ARG2","Def. de Belgrano","Quilmes",8],[11710,"ZA-ARG2","Club A. Guemes","Belgrano",6],[11830,"ZA-ARG2","Santamarina","Estudiantes Rio Cuarto",8],[11910,"ZA-ARG2","San Martín Tuc.","Ind. Rivadavia",7],[10930,"*YE-BIE1","Belshina","Gomel",11],[11730,"*ZA-BOL1","Aurora","The Strongest",12],[11800,"ZA-BRA1","Juventude","Bragantino",6],[11730,"ZA-COL1","Jaguares de Córdoba","Once Caldas",6],[11940,"ZA-COL1","Dep. Pasto","Pereira",6],[11500,"ZA-COL2","Boca Juniors","Barranquilla",7],[11900,"ZA-ECU1","Aucas","Macará",10],[11400,"ESP1","Rayo Vallecano","Valencia",6],[11400,"ESP2","Almería","Ponferradina",5],[11345,"FRA2","Paris FC","Dijon",5],[11345,"R-ING2","Huddersfield","Luton",7],[11345,"ITA1","Bolonia","Sampdoria",10],[11330,"ITA2","Brescia","Parma",6],[12100,"ZA-MEX1","Pachuca","Tijuana",5],[11100,"YE-POL1","Radomiak Radom","Jagiellonia",7],[11000,"YE-RUM1","Gaz Metan","Mioveni",8],[11300,"YE-RUM1","FCSB","FC Voluntari",7],[11230,"YE-TUR1","Antalyaspor","Hatayspor",7],[11230,"*YE-TUR2","Eyupspor","Altinordu",12],[11700,"ZA-URU1","Wanderers","Maldonado",10],[11915,"ZA-URU1","Montevideo City","Rentistas",7]
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

