let PARTIDOS_CON_CUOTA = [
  [11300, 'UD Logrones', 'Cultural Deportiva Leonesa B', '0.5', 1.42],
  [11430, 'CF Cordoba', 'Merida AD', '0.5', 1.38],
  [11500, 'CDA Santo Domingo', 'Independiente Juniors', '0.5', 1.45],
  [11345, 'Club Atletico Colegiales', 'Resistencia', '0.5', 1.42],
  [11345, 'Blackburn Rovers', 'Hartlepool', 'Blackburn Rovers', 1.40],
  [11345, 'Coventry', 'Bristol City', 'Coventry', 1.85],
  [11345, 'Middlesbrough', 'Barnsley', 'Middlesbrough', 1.57],
  [11345, 'Plymouth Argyle', 'Peterborough United', 'Plymouth Argyle', 1.80],
  [11345, 'Port Vale', 'Rotherham', 'Port Vale', 2.30],
  [11345, 'Sheffield Wednesday', 'Sunderland', 'Sunderland', 2.20],
  [11400, 'Real Madrid', 'Eintracht Frankfurt', 'Real Madrid', 1.48],
  [11300, 'Deportivo Madryn', 'Deportivo Moron', 'Deportivo Moron', 2.87],
  [11200, 'Real Murcia', 'Alcorcon', '0.5', 1.40],
  [11200, 'Dynamo Dresden', 'SC Verl', 'Dynamo Dresden', 1.66],
  [11200, 'SV Waldhof Mannheim', 'FC Erzgebirge Aue', 'SV Waldhof Mannheim', 1.80],
  [11200, '1.FC Saarbrücken', 'Borussia Dortmund II', '1.FC Saarbrücken', 1.72],
  [11200, 'SV Wehen Wiesbaden', 'SpVgg Bayreuth', 'SV Wehen Wiesbaden', 1.65],
  [11200, 'VfL Osnabruck', 'FC Ingolstadt 04', 'FC Ingolstadt 04', 2.20],
  [11200, 'FC Luzern', 'Grasshoppers', 'Grasshoppers', 2.05],
  [11100, 'Vitoria Guimaraes', 'HNK Hajduk Split', 'Vitoria Guimaraes', 1.95],
]

let PARTIDOS_SIN_CUOTA = [
  [11100,"U-CONF","V. Guimaraes (Por)","Hajduk Split (Cro)",7],[11200,"ALE3","Dynamo Dresden","Verl",7],[11200,"ALE3","Mannheim","Aue",7],[11200,"ALE3","Saarbrücken","Borussia Dortmund II",7],[11200,"ALE3","Wehen","SpVgg Bayreuth",7],[11200,"ALE3","Osnabruck","Ingolstadt",10],[11200,"YE-SUI1","Lucerna","Grasshoppers",10],[11200,"*AMI","Real Murcia (Esp)","Alcorcón (Esp)",11],[11300,"ZA-ARG2","Deportivo Madryn","Deportivo Morón",10],[11300,"*AMI","UD Logroñés (Esp)","Cultural Leonesa (Esp)",11],[11345,"R-INGE","Blackburn","Hartlepool",7],[11345,"R-INGE","Coventry","Bristol City",7],[11345,"R-INGE","Middlesbrough","Barnsley",7],[11345,"R-INGE","Plymouth","Peterborough",7],[11345,"R-INGE","Port Vale","Rotherham",9],[11345,"R-INGE","Sheffield Wed","Sunderland",10],[11345,"*ZA-PARC","Colegiales","Resistencia",11],[11400,"U-SUPE","Real Madrid","Eintracht Frankfurt",1],[11430,"*AMI","Córdoba (Esp)","Mérida AD (Esp)",11],[11500,"*ZA-ECU2","Santo Domingo","Ind. Juniors",11]
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

