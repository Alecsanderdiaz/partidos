let PARTIDOS_SIN_CUOTA = [
  [11101,"*ALEC","Chemnitzer","Union Berlín",12],[11101,"*ALEC","Cottbus","Werder Bremen",12],[11101,"*ALEC","Ingolstadt","Darmstadt",12],[11346,"*ALEC","Magdeburgo","Eintracht Frankfurt",12],[10900,"*AMI","Jong AZ (Ned)","Genk Sub-23 (Bel)",12],[11200,"*AMI","Real Zaragoza (Esp)","Al Nasr Riyadh (Sau)",12],[11400,"*ZA-BOL1","Santa Cruz","Aurora",12],[11615,"*ZA-BOL1","Palmaflor","Nacional Potosí",12],[11830,"*ZA-BOL1","Independiente Petrolero","Oriente Petrolero",12],[11400,"R-ING2","Watford","Sheffield Utd",5],[11200,"YE-POLE","Korona","Slask",8],[11230,"YE-RUM1","FC Hermannstadt","Botosani",7],[11700,"ZA-ARG1","Defensa y Justicia","Arsenal Sarandí",5],[11700,"ZA-ARG1","Rosario Central","Central Córdoba",5],[11930,"ZA-ARG1","Colón","Independiente",7],[11300,"ZA-ARG2","Almagro","Temperley",7],[11300,"ZA-ARG2","Guillermo Brown","Santamarina",7],[11300,"ZA-ARG2","Nueva Chicago","Flandria",7],[11300,"ZA-ARG2","Tristán Suárez","San Telmo",7],[11400,"ZA-ARG2","CA Mitre","Dep. Riestra",7],[11700,"ZA-ARG2","Alvarado","Deportivo Morón",9],[11735,"ZA-ARG2","Ferro Carril Oeste","Belgrano",8],[11900,"ZA-ARG2","San Martín Tuc.","Chaco For Ever",7],[11940,"ZA-ARG2","Instituto","All Boys",10],[11800,"ZA-BRA1","Santos","Fluminense",9],[11800,"ZA-COL1","Atl. Bucaramanga","Tolima",8],[12005,"ZA-COL1","Atl. Nacional","Dep. Pasto",1],[11500,"ZA-COL2","Fortaleza","Bogotá",7],[11600,"ZA-COL2","Quindío","Valledupar",5],[11900,"ZA-ECU1","Nueve de Octubre","Orense",7],[11345,"ZA-FRA2","Sochaux","Paris FC",10],[11300,"ZA-PER1","Sport Boys","César Vallejo",9],[11300,"ZA-URU1","Liverpool M.","Defensor Sp.",7],[11800,"ZA-URU1","Peñarol","Fénix",1]
]

let PARTIDOS_CON_CUOTA = [
  [11800, 'Atletico Bucaramanga', 'Tolima', 'Tolima', 2.10],
  [11500, 'Fortaleza FC', 'Bogota FC', 'Fortaleza FC', 1.70],
  [11600, 'Deportes Quindio', 'Valledupar', 'Deportes Quindio', 1.80],
  [11900, 'Club Nueve de Octubre', 'Orense SC', 'Club Nueve de Octubre', 2.05],
  [11345, 'Sochaux', 'Paris FC', 'Paris FC', 2.45],
  [11300, 'Sport Boys Association', 'Universidad Cesar Vallejo', 'Sport Boys Association', 2.30],
  [11300, 'Liverpool Montevideo', 'Defensor Sporting', 'Liverpool Montevideo', 2.00],
  [11800, 'Penarol Montevideo', 'Atletico Fenix Montevideo', 'Penarol Montevideo', 1.85],
  [11400, 'Watford', 'Sheffield United', 'Watford', 2.10],
  [11230, 'AFC Hermanstadt', 'FC Botosani', 'AFC Hermanstadt', 2.30],
  [11200, 'Korona Kielce', 'Slask Wroclaw', 'Slask Wroclaw', 1.85],
  [11700, 'Defensa Y Justicia', 'Arsenal de Sarandi', 'Defensa Y Justicia', 1.95],
  [11700, 'Rosario Central', 'Central Cordoba', 'Rosario Central', 1.93],
  [11930, 'Colon de Santa Fe', 'CA Independiente', 'Colon de Santa Fe', 2.10],
  [11300, 'Club Almagro', 'Temperley', 'Club Almagro', 2.20],
  [11300, 'Guillermo Brown', 'Santamarina Tandil', 'Guillermo Brown', 1.90],
  [11300, 'Nueva Chicago', 'CSD Flandria', 'Nueva Chicago', 2.15],
  [11300, 'Tristan Suarez', 'CA San Telmo', 'Tristan Suarez', 1.93],
  [11400, 'Mitre Santiago Del Estero', 'Deportivo Riestra', 'Mitre Santiago Del Estero', 2.20],
  [11700, 'Club Atletico Alvarado', 'Deportivo Moron', 'Club Atletico Alvarado', 2.75],
  [11900, 'San Martin de Tucuman', 'Chaco For Ever', 'San Martin de Tucuman', 2.05],
  [11735, 'Ferro Carril Oeste', 'CA Belgrano', 'CA Belgrano', 2.62],
  [11940, 'Instituto AC Cordoba', 'CA All Boys', 'CA All Boys', 3.10],
  [11800, 'Santos SP', 'Fluminense RJ', 'Santos SP', 2.35],
  [12005, 'Atlético Nacional', 'Deportivo Pasto', 'Atlético Nacional', 1.85]
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

