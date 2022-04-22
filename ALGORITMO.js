let PARTIDOS_SIN_CUOTA = [
  [11330,"ALE1","Wolfsburgo","Mainz",7],[11130,"ALE2","Fortuna Düsseldorf","Dynamo Dresden",7],[11130,"ALE2","Karlsruher","Ingolstadt",7],[11200,"ALE3","Wehen","Kaiserslautern",8],[11830,"ZA-ARG1","Colón","Estudiantes L.P.",10],[11910,"ZA-ARG2","San Martín Tuc.","CA Mitre",5],[11200,"*YE-BIE1","BATE","Gomel",12],[11700,"*ZA-BOL1","J. Wilstermann","Universitario de Vinto",12],[11900,"*ZA-BOL1","Bolívar","Independiente Petrolero",12],[11700,"ZA-BRA2","CSA","Bahia",10],[11930,"ZA-BRA2","Chapecoense","Vasco",10],[11900,"ZA-CHI1","Everton","Palestino",7],[12000,"ZA-COL2","Quindío","Atletico F.C.",7],[11500,"*ZM-COLF","Atl. Huila F","Bucaramanga F",11],[11500,"*ZM-COLF","Ind. Medellín F","La Equidad F",12],[11345,"R-ESC2","Kilmarnock","Arbroath",11],[11400,"ESP2","Tenerife","Huesca",7],[11400,"FRA2","Bastia","Paris FC",8],[11400,"FRA2","Dijon","EA Guingamp",10],[11400,"FRA2","Dunkerque","Amiens",10],[11400,"FRA2","Le Havre","Grenoble",7],[11400,"FRA2","Nancy","Quevilly Rouen",10],[11400,"FRA2","Nimes","Rodez",9],[11400,"FRA2","Pau FC","Sochaux",8],[11400,"FRA2","Valenciennes","AC Ajaccio",6],[11345,"R-ING2","Huddersfield","Barnsley",7],[11345,"R-INGT","Newport","Colchester",7],[11900,"ZA-MEX1","Puebla","Necaxa",10],[12100,"ZA-MEX1","Juárez","Mazatlán",10],[11300,"YE-HOL1","Twente","Sparta Rotterdam",7],[11300,"YE-HOL2","Breda","Dordrecht",7],[11300,"YE-HOL2","Den Bosch","FC Volendam",8],[11300,"YE-HOL2","Excelsior","Jong AZ",7],[11300,"YE-HOL2","FC Emmen","Roda",5],[11300,"YE-HOL2","Helmond","Graafschap",8],[11300,"YE-HOL2","Oss","Almere",8],[11300,"YE-HOL2","Telstar","Eindhoven",8],[11315,"ZA-PER1","Dep. Municipal","Melgar",9],[11530,"ZA-PER1","Ayacucho","Grau",10],[11900,"ZA-PER1","Cienciano","Sporting Cristal",10],[11100,"YE-POL1","Radomiak Radom","Cracovia",10],[11330,"YE-POL1","Zaglebie","Gornik Z.",7],[11415,"YE-POR1","Vizela","Arouca",7],[11200,"YE-RUM1","Gaz Metan","Dinamo Bucarest",8],[11230,"*YE-SUI2","Schaffhausen","Wil",12],[11315,"*YE-SUI2","Vaduz","Xamax",12],[11230,"YE-TUR1","Rizespor","Fenerbahçe",2],[11800,"ZA-URU1","Cerro Largo","Nacional",8],[11700,"*ZA-VEN1","Caracas","Dep. Táchira",11],[11915,"*ZA-VEN1","Zamora","Metropolitanos",11]
  ]

  let PARTIDOS_CON_CUOTA = [
    [11100, 'Radomiak Radom', 'Cracovia Krakow', 'Cracovia Krakow', 2.40],
    [11415, 'FC Vizela', 'Arouca', 'FC Vizela', 1.95],
    [11200, 'Gaz Metan Medias', 'Dinamo Bucuresti', 'Dinamo Bucuresti', 1.28],
    [11230, 'Caykur Rizespor', 'Fenerbahce', 'Fenerbahce', 1.55],
    [11315, 'Deportivo Municipal', 'FBC Melgar', 'Deportivo Municipal', 2.40],
    [11330, 'Wolfsburg', 'Mainz 05', 'Wolfsburg', 2.00],
    [11130, 'Fortuna Dusseldorf', 'Dynamo Dresden', 'Fortuna Dusseldorf', 1.65],
    [11130, 'Karlsruher SC', 'FC Ingolstadt 04', 'Karlsruher SC', 1.66],
    [11200, 'SV Wehen Wiesbaden', '1. FC Kaiserslautern', '1. FC Kaiserslautern', 1.72],
    [11400, 'CD Tenerife', 'SD Huesca', 'CD Tenerife', 1.90],
    [11400, 'AC Le Havre', 'Grenoble', 'AC Le Havre', 2.00],
    [11400, 'Nimes', 'Rodez Aveyron', 'Nimes', 2.35],
    [11400, 'Valenciennes', 'Ajaccio', 'Ajaccio', 2.05],
    [11400, 'SC Bastia', 'Paris FC', 'Paris FC', 2.20],
    [11400, 'Pau FC', 'Sochaux', 'Sochaux', 1.72],
    [11400, 'Dijon', 'EA Guingamp', 'EA Guingamp', 2.05],
    [11400, 'Dunkerque', 'SC Amiens', 'SC Amiens', 2.15],
    [11400, 'Nancy', 'Quevilly US', 'Quevilly US', 2.35],
    [11345, 'Kilmarnock', 'Arbroath', '0.5', 1.50],
    [11345, 'Huddersfield', 'Barnsley', 'Huddersfield', 1.70],
    [11345, 'Newport', 'Colchester', 'Newport', 1.65],
    [11300, 'Twente', 'Sparta Rotterdam', 'Twente', 1.72],
    [11300, 'FC Emmen', 'Roda JC', 'FC Emmen', 1.83],
    [11300, 'NAC Breda', 'FC Dordrecht', 'NAC Breda', 1.35],
    [11300, 'SBV Excelsior', 'AZ Alkmaar (R)', 'SBV Excelsior', 1.40],
    [11300, 'FC Den Bosch', 'Volendam', 'Volendam', 1.48],
    [11300, 'Helmond Sport', 'De Graafschap', 'De Graafschap', 1.45],
    [11300, 'FC Oss', 'Almere City FC', 'Almere City FC', 1.61],
    [11300, 'SC Telstar', 'FC Eindhoven', 'FC Eindhoven', 1.66],
    [11330, 'Zaglebie Lubin', 'Gornik Zabrze', 'Zaglebie Lubin', 2.00]
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

