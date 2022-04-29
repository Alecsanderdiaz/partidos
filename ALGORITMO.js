let PARTIDOS_CON_CUOTA = [
  [11230, 'Fenerbahce', 'Gaziantep BB', 'Fenerbahce', 1.36],
  [11230, 'Giresunspor', 'Adana Demirspor', 'Adana Demirspor', 1.95],
  [11300, 'Audax Italiano', 'Universidad de Chile', 'Universidad de Chile', 2.45],
  [11345, 'Arbroath', 'Greenock Morton', '0.5', 1.48],
  [11345, 'Ayr United', 'Partick Thistle', '0.5', 1.42],
  [11345, 'Inverness CT', 'Hamilton Academical', '0.5', 1.45],
  [11345, 'QPR', 'Sheffield United', 'Sheffield United', 1.75],
  [11400, 'La Equidad (W)', 'Llaneros (W)', '0.5', 1.40],
  [11330, 'Union Berlin', 'Greuther Furth', 'Union Berlin', 1.45],
  [11400, 'Sevilla', 'CF Cadiz', 'Sevilla', 1.76],
  [11400, 'Strasbourg', 'Paris S.G.', 'Paris S.G.', 1.72],
  [11345, 'Genk', 'Mechelen', 'Genk', 1.45],
  [11300, 'Utrecht', 'NEC Nijmegen', 'Utrecht', 1.60],
  [11300, 'NAC Breda', 'FC Oss', 'NAC Breda', 1.50],
  [11300, 'De Graafschap', 'PSV (R)', 'De Graafschap', 1.44],
  [11300, 'AZ Alkmaar (R)', 'Helmond Sport', 'AZ Alkmaar (R)', 1.61],
  [11300, 'SC Telstar', 'Utrecht (R)', 'SC Telstar', 1.70],
  [11300, 'ADO Den Haag', 'Almere City FC', 'ADO Den Haag', 1.80],
  [11300, 'FC Den Bosch', 'Roda JC', 'Roda JC', 1.48],
  [11300, 'FC Dordrecht', 'Volendam', 'Volendam', 1.40],
  [11300, 'FC Eindhoven', 'FC Emmen', 'FC Emmen', 1.80],
  [11300, 'MVV Maastricht', 'Ajax (R)', 'Ajax (R)', 1.33],
  [11300, 'VVV Venlo', 'SBV Excelsior', 'SBV Excelsior', 1.60],
  [11330, 'Gornik Zabrze', 'Radomiak Radom', 'Gornik Zabrze', 1.90],
  [11415, 'FC Famalicao', 'Estoril', 'FC Famalicao', 1.76],
  [11230, 'Chindia', 'Rapid Bucharest', 'Rapid Bucharest', 2.55],
  [11200, 'Eintracht Braunschweig', '1. FC Magdeburg', 'Eintracht Braunschweig', 1.75],
  [11200, 'Viktoria Berlin', '1.FC Saarbrücken', 'Viktoria Berlin', 2.20],
  [11200, 'Academica Viseu', 'FC Porto B', 'Academica Viseu', 2.15],
  [11130, 'Hannover 96', 'Karlsruher SC', 'Hannover 96', 1.70],
  [11130, 'Werder Bremen', 'Holstein Kiel', 'Werder Bremen', 1.30],
  [11130, '1. FC Heidenheim', 'Fortuna Dusseldorf', 'Fortuna Dusseldorf', 1.95],
  [11130, 'SV Sandhausen', 'Schalke 04', 'Schalke 04', 1.50],
  [11130, 'FC St. Pauli', 'Nurnberg', 'Nurnberg', 1.85],
  [11100, 'Millonarios (W)', 'Independiente Medellin (W)', '0.5', 1.45],
  [11100, 'Warta Poznan', 'GKS Piast Gliwice', 'GKS Piast Gliwice', 2.35],
]

let PARTIDOS_SIN_CUOTA = [
  [11330,"ALE1","Union Berlín","Greuther Fürth",7],[11130,"ALE2","Hannover","Karlsruher",7],[11130,"ALE2","Heidenheim","Fortuna Düsseldorf",8],[11130,"ALE2","Sandhausen","Schalke",6],[11130,"ALE2","St. Pauli","Núremberg",10],[11130,"ALE2","Werder Bremen","Kiel",7],[11200,"ALE3","Braunschweig","Magdeburgo",7],[11200,"ALE3","Viktoria Berlin","Saarbrücken",7],[11700,"ZA-ARG1","Estudiantes L.P.","Aldosivi",7],[11930,"ZA-ARG1","Patronato","Gimnasia L.P.",10],[11810,"ZA-ARG2","Estudiantes Rio Cuarto","San Martín S.J.",10],[11345,"YE-BEL1","Genk","KV Mechelen",7],[11400,"*ZA-BOL1","Guabirá","Nacional Potosí",12],[11700,"ZA-BRA2","Londrina","Vila Nova",7],[11930,"ZA-BRA2","Ituano","Bahia",10],[11300,"ZA-CHI1","Audax","U. De Chile",10],[12000,"ZA-COL1","Pereira","U. Magdalena",5],[11100,"*ZM-COLF","Millonarios F","Ind. Medellín F",11],[11400,"*ZM-COLF","Atl. Nacional F","Santa Fe F",12],[11400,"*ZM-COLF","La Equidad F","Llaneros F",11],[11900,"ZA-ECU1","Gualaceo","Macará",7],[11345,"ZR-ESC2","Arbroath","Morton",11],[11345,"ZR-ESC2","Ayr","Partick Thistle",11],[11345,"ZR-ESC2","Dunfermline","Queen of South",12],[11345,"ZR-ESC2","Inverness","Hamilton",11],[11345,"ZR-ESC2","Raith","Kilmarnock",12],[11400,"ESP1","Sevilla","Cádiz",1],[11500,"ESP2","Las Palmas","Málaga",10],[11400,"FRA1","Estrasburgo","PSG",4],[11345,"ZR-ING2","QPR","Sheffield Utd",8],[11900,"ZA-MEX1","Necaxa","Guadalajara",10],[12105,"ZA-MEX1","Mazatlán","Puebla",10],[11700,"ZA-MEX2","Atl. Morelia","Mineros",10],[11300,"YE-HOL1","Utrecht","Nijmegen",7],[11300,"YE-HOL2","Breda","Oss",7],[11300,"YE-HOL2","Den Bosch","Roda",8],[11300,"YE-HOL2","Den Haag","Almere",9],[11300,"YE-HOL2","Dordrecht","FC Volendam",8],[11300,"YE-HOL2","Eindhoven","FC Emmen",8],[11300,"YE-HOL2","Graafschap","Jong PSV",7],[11300,"YE-HOL2","Jong AZ","Helmond",7],[11300,"YE-HOL2","Maastricht","Jong Ajax",8],[11300,"YE-HOL2","Telstar","Jong Utrecht",7],[11300,"YE-HOL2","Venlo","Excelsior",8],[11700,"ZA-PAR1","Resistencia","Ameliano",7],[11915,"ZA-PAR1","12 de Octubre","Tacuary",7],[11100,"YE-POL1","Warta","Piast",8],[11330,"YE-POL1","Gornik Z.","Radomiak Radom",7],[11415,"YE-POR1","Famalicao","Estoril",7],[11200,"YE-POR2","Academico Viseu","Oporto B",7],[10930,"YE-RUM1","Sepsi Sf. Gheorghe","Gaz Metan",7],[11230,"YE-RUM1","Chindia Targoviste","Rapid Bucarest",8],[11230,"*YE-SUI2","Xamax","Aarau",12],[11315,"*YE-SUI2","Winterthur","Schaffhausen",12],[11230,"YE-TUR1","Fenerbahçe","Gaziantep",5],[11230,"YE-TUR1","Giresunspor","Adana Demirspor",10],[11615,"*ZA-VEN1","Dep. Táchira","La Guaira",11],[11830,"*ZA-VEN1","Puerto Cabello","Estudiantes M.",11]
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

