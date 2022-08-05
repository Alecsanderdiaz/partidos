let PARTIDOS_CON_CUOTA = [
  [11830, 'Oriente Petrolero', 'CA Palmaflor Vinto', '0.5', 1.45],
  [11600, 'Monagas SC', 'Academia Puerto Cabello', '0.5', 1.42],
  [11815, 'Zamora FC', 'Deportivo Tachira', '0.5', 1.53],
  [11700, 'Gimnasia LP', 'Godoy Cruz', 'Gimnasia LP', 2.25],
  [11930, 'Banfield', 'Patronato Parana', 'Banfield', 2.00],
  [11930, 'Sarmiento', 'Atletico Lanus', 'Atletico Lanus', 2.35],
  [11810, 'Deportivo Moron', 'Club Almagro', 'Club Almagro', 2.87],
  [11700, 'Operario PR', 'Nautico PE', 'Operario PR', 2.20],
  [11700, 'Vila Nova FC', 'Ituano SP', 'Ituano SP', 2.55],
  [11930, 'Guarani SP', 'Gremio RS', 'Gremio RS', 2.25],
  [11745, 'Independiente Medellin', 'La Equidad', 'Independiente Medellin', 2.05],
  [11900, 'Tecnico Universitario', 'Cumbaya FC', 'Cumbaya FC', 3.30],
  [11700, 'Mineros de Zacatecas', 'Atlante', 'Atlante', 2.15],
  [11815, 'Club General Caballero JLM', 'Club Tacuary', 'Club General Caballero JLM', 2.05],
  [11600, 'Resistencia', 'Guairena FC', 'Guairena FC', 2.10],
  [11800, 'Nacional Montevideo', 'Rentistas', 'Nacional Montevideo', 1.48]
]

let PARTIDOS_SIN_CUOTA = [
  [11600,"*ZA-VEN1","Monagas","Puerto Cabello",11],[11600,"ZA-PAR1","Resistencia","Guairena FC",8],[11700,"ZA-ARG1","Gimnasia L.P.","Godoy Cruz",9],[11700,"ZA-BRA2","Operario","Náutico",7],[11700,"ZA-BRA2","Vila Nova","Ituano",10],[11700,"ZA-MEX2","Mineros","Atlante",8],[11745,"ZA-COL1","Ind. Medellín","La Equidad",5],[11800,"ZA-URU1","Nacional","Rentistas",5],[11810,"ZA-ARG2","Deportivo Morón","Almagro",10],[11815,"*ZA-VEN1","Zamora","Dep. Tá",11],[11815,"ZA-PAR1","General Caballero JLM","Tacuary",7],[11830,"*ZA-BOL1","Oriente Petrolero","Palmaflor",11],[11900,"ZA-ECU1","Técnico U.","Cumbaya",10],[11930,"ZA-ARG1","Banfield","Patronato",7],[11930,"ZA-ARG1","Sarmiento","Lanús",10],[11930,"ZA-BRA2","Guaraní","Gremio",2],[11950,"ZA-COL1","Patriotas","Cortuluá",7],[12105,"ZA-MEX1","Mazatlán","Guadalajara",8],[12130,"ZA-EST1","Vancouver Whitecaps","Houston Dynamo",7]
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

