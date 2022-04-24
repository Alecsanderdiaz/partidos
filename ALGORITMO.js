let PARTIDOS_CON_CUOTA = [
  [11400, 'Barcelona', 'Rayo Vallecano', 'Barcelona', 1.44],
  [11130, 'Real Zaragoza', 'Burgos CF', 'Real Zaragoza', 1.90],
  [11130, 'CD Lugo', 'CD Leganes', 'CD Leganes', 2.50],
  [11130, 'St. Gilloise', 'Anderlecht', 'Anderlecht', 2.15],
  [11130, 'CSKA Moscow', 'Dinamo Moscow', 'CSKA Moscow', 1.83],
  [11230, 'Altay Izmir', 'Galatasaray', 'Galatasaray', 1.65],
  [11430, 'Racing Club', 'Newells Old Boys', 'Racing Club', 1.85],
  [11400, 'Santos SP', 'America Mineiro MG', 'Santos SP', 2.15],
  [11400, 'Nautico PE', 'Operario PR', 'Operario PR', 2.40],
  [11130, 'Universidad Catolica', 'Colo Colo', 'Colo Colo', 2.00],
  [11400, 'Deportivo Cali', 'Rionegro Aguilas', 'Deportivo Cali', 2.05],
  [11100, 'Envigado FC', 'Deportivo Pereira', 'Envigado FC', 2.20],
  [11200, 'Universidad Catolica Quito', 'Tecnico Universitario', 'Universidad Catolica Quito', 1.70],
  [11430, 'LDU Quito', 'Mushuc Runa', 'LDU Quito', 1.53],
  [11200, 'Inter Miami CF', 'Atlanta United', 'Inter Miami CF', 2.10],
  [11345, 'Stade Reims', 'Marseille', 'Marseille', 1.90],
  [11345, 'Lazio', 'AC Milán', 'AC Milán', 1.95]
]

let PARTIDOS_SIN_CUOTA = [
  [11400,"ZA-BRA","Santos","América-MG",1],
  [11400,"ESP","Barcelona","Rayo Vallecano",1],
  [11430,"ZA-ARG","Racing Club","Newells",1],
  [11430,"ZA-ECU","LDU Quito","Mushuc Runa",1],
  [11700,"ZA-ARG","River Plate","Atl. Tucumán",1],
  [11700,"ZA-ECU","Emelec","Aucas",1],
  [11700,"ZA-MEX","Cruz Azul","Atlético de San Luis",1],
  [11810,"ZA-COL","Millonarios","Ind. Santa Fe",1],
  [11900,"ZA-MEX","Santos Laguna","León",1],
  [11345,"ZA-FRA","Reims","Marsella",2],
  [11345,"ZA-ITA","Lazio","AC Milan",2],
  [11500,"ZA-COL2","Valledupar","Atl. Huila",2],
  [11605,"ZA-COL1","Jaguares de Córdoba","América de Cali",2],
  [11630,"ZA-BRA","Atlético-GO","Botafogo",2],
  [11630,"ZA-PAR","Ameliano","Cerro Porteño",2],
  [11930,"ZA-ECU","Macará","Barcelona SC",2],
  [12015,"ZA-COL1","Alianza Petrolera","Tolima",2],
  [11100,"ZA-COL1","Envigado","Pereira",7],
  [11130,"ESP2","Real Zaragoza","Burgos CF",7],
  [11130,"YE-RUS","CSKA Moscú","Dinamo Moscú",7],
  [11200,"ZA-ECU","U. Católica","Técnico U.",7],
  [11200,"ZA-EST","Inter Miami","Atlanta Utd",7],
  [11930,"ZA-ARG","Defensa y Justicia","Platense",7],
  [11130,"YE-BEL","Royale Union SG","Anderlecht",8],
  [11130,"ZA-CHI","U. Católica","Colo Colo",8],
  [11130,"ESP2","Lugo","Leganés",8],
  [11400,"ZA-COL","Deportivo Cali","Aguilas Doradas",9],
  [11200,"ZA-MEX","Toluca","Atlas",10],
  [11230,"YE-TUR1","Altay","Galatasaray",10],
  [11400,"ZA-BRA2","Náutico","Operario",10],
  [11430,"ZA-VEN1","Mineros","Zulia",11]
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

