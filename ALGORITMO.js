let PARTIDOS_CON_CUOTA = [
  [11330, 'Queens Park', 'Airdrieonians', '0.5', 1.48],
  [11900, 'Independiente Juniors', 'CDA Santo Domingo', '0.5', 1.48],
  [11615, 'Aragua FC', 'UCV FC', '0.5', 1.55],
  [11830, 'Deportivo Lara', 'Zamora FC', '0.5', 1.50],
  [11200, 'Real Sociedad', 'CF Cadiz', 'Real Sociedad', 1.76],
  [11430, 'Real Madrid', 'Levante', 'Real Madrid', 1.40],
  [11300, 'Rayo Vallecano', 'Villarreal', 'Villarreal', 1.80],
  [11330, 'Vicenza', 'Cosenza', 'Cosenza', 2.62],
  [11345, 'Tottenham', 'Arsenal', 'Tottenham', 1.90],
  [11330, 'Anderlecht', 'Antwerp', 'Anderlecht', 1.60],
  [11330, 'FC Basel', 'Grasshoppers', 'FC Basel', 1.48],
  [11330, 'FC Zurich', 'Lausanne Sports', 'FC Zurich', 1.40],
  [11510, 'CA Barracas Central', 'Club Atletico Acassuso', 'CA Barracas Central', 1.76],
  [11810, 'Patronato Parana', 'Deportivo Moron', 'Patronato Parana', 2.10],
  [11730, 'Cruzeiro MG', 'Remo PA', 'Cruzeiro MG', 1.61],
  [11730, 'Sao Paulo SP', 'Juventude RS', 'Sao Paulo SP', 1.80],
  [11930, 'Botafogo RJ', 'Ceilandia Esporte Clube DF', 'Botafogo RJ', 1.38],
  [11930, 'Santos SP', 'Coritiba PR', 'Santos SP', 1.90],
  [11700, 'EC Vitoria', 'Fortaleza CE', 'Fortaleza CE', 1.95],
  [12000, 'Fortaleza FC', 'Deportivo Cali', 'Deportivo Cali', 1.90],
  [12105, 'Chivas Guadalajara', 'Atlas de Guadalajara', 'Chivas Guadalajara', 2.90],
  [11900, 'Cruz Azul', 'Tigres UANL', 'Tigres UANL', 2.55],
]

let PARTIDOS_SIN_CUOTA = [
  [11510,"ZA-ARGC","Barracas Central","Acassuso",5],[11810,"ZA-ARGC","Patronato","Deportivo Morón",5],[11330,"YE-BEL1","Anderlecht","Antwerp",3],[11400,"*ZA-BOL1","Aurora","Santa Cruz",12],[11900,"*ZA-BOL1","Blooming","Independiente Petrolero",12],[11900,"*ZA-BOL1","Bolívar","Tomayapo",12],[11700,"ZA-BRAC","Vitória","Fortaleza",8],[11730,"ZA-BRAC","Cruzeiro","Remo",3],[11730,"ZA-BRAC","Sao Paulo","Juventude",3],[11930,"ZA-BRAC","Botafogo","Ceilandia",5],[11930,"ZA-BRAC","Santos","Coritiba",1],[12000,"ZA-COLC","Fortaleza","Deportivo Cali",8],[11900,"*ZA-ECU2","Ind. Juniors","Santo Domingo",11],[11330,"*R-ESC2","Queens Park","Airdrieonians",11],[11200,"ESP1","Real Sociedad","Cádiz",5],[11300,"ESP1","Rayo Vallecano","Villarreal",4],[11430,"ESP1","Real Madrid","Levante",5],[11345,"R-ING1","Tottenham","Arsenal",5],[11330,"ITA2","L.R. Vicenza","Cosenza",10],[11900,"ZA-MEX1","Cruz Azul","Tigres UANL",4],[12105,"ZA-MEX1","Guadalajara","Atlas",5],[11330,"YE-SUI1","Basilea","Grasshoppers",5],[11330,"YE-SUI1","Zúrich","Lausanne",5],[11615,"*ZA-VEN1","Aragua","Universidad Central",11],[11830,"*ZA-VEN1","Lara","Zamora",11]
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

