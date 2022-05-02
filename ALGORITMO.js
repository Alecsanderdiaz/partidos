let PARTIDOS_CON_CUOTA = [
  [11700, 'Godoy Cruz', 'Central Cordoba', 'Godoy Cruz', 1.75],
  [11700, 'Union Santa Fe', 'Defensa Y Justicia', 'Defensa Y Justicia', 2.00],
  [11930, 'Huracan', 'Rosario Central', 'Rosario Central', 2.55],
  [11930, 'Platense', 'Argentinos Juniors', 'Argentinos Juniors', 1.93],
  [11710, 'Nueva Chicago', 'Santamarina Tandil', 'Nueva Chicago', 2.15],
  [11910, 'Temperley', 'Gimnasia Y Esgrima Mendoza', 'Temperley', 2.65],
  [11800, 'Sao Paulo SP', 'Santos SP', 'Santos SP', 3.40],
  [11700, 'Rionegro Aguilas', 'Deportivo Pasto', 'Rionegro Aguilas', 2.00],
  [11930, 'América de Cali', 'Alianza Petrolera', 'América de Cali', 1.95],
  [11100, 'Dinamo Minsk', 'Bate Borisov', '0.5', 1.57],
  [11330, 'Bayer Leverkusen', 'Eintracht Frankfurt', 'Bayer Leverkusen', 1.42],
  [11330, 'Borussia Monchengladbach', 'RB Leipzig', 'RB Leipzig', 1.57],
  [11200, 'SV Waldhof Mannheim', 'MSV Duisburg', 'SV Waldhof Mannheim', 1.61],
  [11400, 'Getafe', 'Real Betis', 'Real Betis', 2.20],
  [11400, 'Real Valladolid', 'Real Sociedad B', 'Real Valladolid', 1.40],
  [11130, 'CD Leganes', 'SD Huesca', 'SD Huesca', 2.40],
  [11345, 'Rodez Aveyron', 'Toulouse', 'Toulouse', 1.75],
  [11130, 'Asteras Tripolis', 'Lamia', 'Asteras Tripolis', 2.15],
  [11130, 'Ionikos Nikea', 'Apollon Smyrnis', 'Ionikos Nikea', 2.62],
  [11345, 'Atalanta', 'Salernitana', 'Atalanta', 1.42],
  [11415, 'Pacos Ferreira', 'CD Tondela', 'Pacos Ferreira', 2.20],
  [11230, 'FCSB', 'FC Arges Pitesti', 'FCSB', 1.44],
  [11100, 'Arsenal Tula', 'FC Olimpiyets Nizhny Novgorod', 'Arsenal Tula', 2.10],
  [11400, 'CD Maipu', 'Atletico Rafaela', 'CD Maipu', 2.00],
  [11400, 'Mitre Santiago Del Estero', 'Defensores de Belgrano', 'Mitre Santiago Del Estero', 2.10],
  [11505, 'Quilmes AC', 'Guillermo Brown', 'Quilmes AC', 2.05],
  [11305, 'Sacachispas FC', 'San Martin de Tucuman', 'San Martin de Tucuman', 2.10],
  [11530, 'UTC Cajamarca', 'Deportivo San Martin', 'UTC Cajamarca', 1.61],
  [11315, 'Academia Cantolao', 'Sport Boys Association', 'Sport Boys Association', 1.95],
  [11400, 'Manchester United', 'Brentford', 'Manchester United', 1.65],
  [11115, 'Fulham', 'Luton Town', 'Fulham', 1.53]
]

let PARTIDOS_SIN_CUOTA = [
  [11100,"*YE-BIE1","Dinamo Minsk","BATE",11],[11100,"YE-RUS1","Arsenal Tula","Nizhny Novgorod",7],[11115,"ZR-ING2","Fulham","Luton",5],[11130,"ESP2","Leganés","Huesca",10],[11130,"GRE1","Asteras T.","Lamia",7],[11130,"GRE1","Ionikos","Smyrnis",9],[11200,"ALE3","Mannheim","Duisburgo",7],[11230,"YE-RUM1","FCSB","FC Arges",7],[11305,"ZA-ARG2","Sacachispas","San Martín Tuc.",8],[11315,"ZA-PER1","AD Cantolao","Sport Boys",8],[11330,"ALE1","Bayer Leverkusen","Eintracht Frankfurt",3],[11330,"ALE1","Borussia Mgladbach","RB Leipzig",6],[11345,"FRA2","Rodez","Toulouse",6],[11345,"ITA1","Atalanta","Salernitana",5],[11400,"ZA-ARG2","Deportivo Maipu","Atl. Rafaela",7],[11400,"ESP1","Getafe","Real Betis",2],[11400,"ESP2","Real Valladolid","R. Sociedad B",5],[11400,"ZR-ING1","Manchester Utd","Brentford",5],[11415,"YE-POR1","P. Ferreira","Tondela",7],[11430,"ZA-ARG2","CA Mitre","Def. de Belgrano",7],[11500,"ZM-COLF","America de Cali F","Cortuluá F",12],[11505,"ZA-ARG2","Quilmes","Guillermo Brown",7],[11530,"ZA-PER1","UTC","San Martín",7],[11700,"ZA-ARG1","Godoy Cruz","Central Córdoba",7],[11700,"ZA-ARG1","Unión Santa Fe","Defensa y Justicia",8],[11700,"ZA-COL1","Aguilas Doradas","Dep. Pasto",7],[11710,"ZA-ARG2","Nueva Chicago","Santamarina",7],[11800,"ZA-BRA1","Sao Paulo","Santos",10],[11900,"ZA-PER1","Sport Huancayo","Alianza Lima",6],[11910,"ZA-ARG2","Temperley","Gimnasia Mendoza",9],[11930,"ZA-ARG1","Huracán","Rosario Central",10],[11930,"ZA-ARG1","Platense","Argentinos Jrs.",8],[11930,"ZA-COL1","América de Cali","Alianza Petrolera",5]
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

