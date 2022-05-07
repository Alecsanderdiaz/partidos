let PARTIDOS_CON_CUOTA = [
  [10630, 'Torquay United', 'Chesterfield', '0.5', 1.40],
  [10700, 'FC Dnepr Mogilev', 'Torpedo Zhodino', '0.5', 1.38],
  [10630, 'Jahn Regensburg', '1. FC Heidenheim', 'Jahn Regensburg', 1.80],
  [10630, 'FC Ingolstadt 04', 'Hansa Rostock', 'FC Ingolstadt 04', 1.95],
  [10700, 'TSV Havelse', 'VfL Osnabruck', 'VfL Osnabruck', 1.45],
  [10700, 'SV Wehen Wiesbaden', 'SV Waldhof Mannheim', 'SV Waldhof Mannheim', 1.80],
  [10700, '1.FC Saarbrücken', 'FSV Zwickau', 'FSV Zwickau', 2.15],
  [10700, 'RCD Mallorca', 'Granada', 'Granada', 2.62],
  [10630, 'Derby County', 'Cardiff City', 'Derby County', 1.85],
  [10630, 'Huddersfield', 'Bristol City', 'Huddersfield', 1.75],
  [10630, 'Stoke City', 'Coventry', 'Stoke City', 1.85],
  [10630, 'Swansea', 'QPR', 'Swansea', 1.72],
  [10630, 'Birmingham City', 'Blackburn Rovers', 'Birmingham City', 1.93],
  [10630, 'Hull City', 'Nottingham Forest', 'Hull City', 2.50],
  [10630, 'Peterborough United', 'Blackpool', 'Blackpool', 1.72],
  [10500, 'CD Mafra', 'Leixoes SC', 'CD Mafra', 2.00],
  [10500, 'FC Penafiel', 'FC Porto B', 'FC Penafiel', 2.00],
  [10700, 'FC Uta Arad', 'CS Mioveni', 'CS Mioveni', 2.90],
  [10200, 'Consadole Sapporo', 'Kyoto Sanga', 'Consadole Sapporo', 1.76],
  [10300, 'Avispa Fukuoka', 'Shonan Bellmare', 'Avispa Fukuoka', 2.15],
  [10630, 'Hamburger SV', 'Hannover 96', 'Hamburger SV', 1.35],
  [10700, 'MSV Duisburg', 'SC Freiburg II', 'MSV Duisburg', 1.75],
  [10700, '1. FC Magdeburg', 'TSV 1860 München', 'TSV 1860 München', 2.00],
  [10700, 'SV Meppen', 'Eintracht Braunschweig', 'Eintracht Braunschweig', 1.50],
  [10600, 'Celtic', 'Hearts', 'Celtic', 1.35],
  [10630, 'Luton Town', 'Reading', 'Luton Town', 1.57],
  [10630, 'Sheffield United', 'Fulham', 'Sheffield United', 1.80],
  [10630, 'Bournemouth', 'Millwall', 'Bournemouth', 1.76],
  [10630, 'West Bromwich', 'Barnsley', 'West Bromwich', 1.48],
  [10630, 'Preston', 'Middlesbrough', 'Middlesbrough', 1.66],
  [10600, 'FC Ural', 'Spartak Moscow', 'Spartak Moscow', 1.85],
  [10100, 'Yokohama F Marinos', 'Nagoya Grampus', 'Yokohama F Marinos', 1.75],
  [10000, 'Sanfrecce Hiroshima', 'Kashima Antlers', 'Kashima Antlers', 2.15],
  [10000, 'Shimizu S-Pulse', 'Kawasaki Frontale', 'Kawasaki Frontale', 1.66]
]

let PARTIDOS_SIN_CUOTA = [
  [10000,"ZS-JAP1","Hiroshima","Kashima",4],[10000,"ZS-JAP1","Shimizu","Kawasaki",6],[10100,"ZS-JAP1","Yokohama M.","Nagoya",5],[10200,"ZS-JAP1","Sapporo","Kyoto",7],[10300,"ZS-JAP1","Avispa Fukuoka","Shonan",7],[10500,"*YE-BIE1","Arsenal Dzyarzhynsk","Isloch",12],[10500,"YE-POR2","Mafra","Leixoes",7],[10500,"YE-POR2","Penafiel","Oporto B",7],[10600,"R-ESC1","Celtic","Hearts",1],[10600,"YE-RUS1","Ural","Spartak Moscú",6],[10630,"*R-INGN","Torquay","Chesterfield",11],[10630,"ALE2","Hamburgo","Hannover",3],[10630,"ALE2","Ingolstadt","Rostock",9],[10630,"ALE2","Regensburg","Heidenheim",7],[10630,"R-ING2","Birmingham","Blackburn",9],[10630,"R-ING2","Bournemouth","Millwall",5],[10630,"R-ING2","Derby","Cardiff",7],[10630,"R-ING2","Huddersfield","Bristol City",7],[10630,"R-ING2","Hull","Nottingham Forest",9],[10630,"R-ING2","Luton","Reading",3],[10630,"R-ING2","Peterborough","Blackpool",8],[10630,"R-ING2","Preston","Middlesbrough",2],[10630,"R-ING2","Sheffield Utd","Fulham",3],[10630,"R-ING2","Stoke","Coventry",7],[10630,"R-ING2","Swansea","QPR",7],[10630,"R-ING2","West Brom","Barnsley",5],[10700,"*YE-BIE1","Dnepr Mogilev","Zhodino",11],[10700,"ALE3","Duisburgo","Friburgo II",5],[10700,"ALE3","Havelse","Osnabruck",8],[10700,"ALE3","Magdeburgo","1860 Múnich",6],[10700,"ALE3","Meppen","Braunschweig",6],[10700,"ALE3","Saarbrücken","Zwickau",10],[10700,"ALE3","Wehen","Mannheim",8],[10700,"ESP1","Mallorca","Granada",10],[10700,"YE-RUM1","UTA Arad","Mioveni",10]
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

