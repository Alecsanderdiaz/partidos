////////////////////////////////////////////////////////////////////////
let PARTIDOS_SIN_CUOTA = [
  [11230,"YE-GRE1","Ionikos","Smyrnis",7],
  [11230,"ITA2","Benevento","Como",5],
  [11230,"ITA2","Brescia","Ascoli",7],
  [11230,"ITA2","Crotone","Cosenza",7],
  [11230,"ITA2","Frosinone","Reggina",7],
  [11230,"ITA2","Lecce","Cittadella",5],
  [11245,"YE-BEL1","Gent","Seraing",7],
  [11246,"XXXXX","XXXXX","XXXXX",7,0,1],
  [11400,"ZA-COLC","Atletico F.C.","Valledupar",7],
  [11430,"R-ING1","Watford","Crystal Palace",7],
  [11430,"R-ING1","Burnley","Tottenham",2],
  [11445,"R-ING1","Liverpool","Leeds Utd",1],
  [11445,"R-ING2","Derby","Millwall",5],
  [11445,"R-ING2","Fulham","Peterborough",5],
  [11445,"R-ING2","Huddersfield","Cardiff",5],
  [11445,"R-ING2","QPR","Blackpool",5],
  [11445,"R-ING2","Sheffield Utd","Blackburn",7],
  [11445,"R-ING2","Stoke","Luton",7],
  [11500,"ZA-COLC","Leones","Tigres",7],
  [11500,"ZA-COLC","Llaneros","Orsomarso",7],
  [11500,"CHAMP","Atlético de Madrid","Manchester Utd",4],
  [11500,"CHAMP","Benfica","Ajax",8],
  [11501,"XXXXX","XXXXX","XXXXX",7,0,1],
  [11600,"ZA-COLC","Barranquilla","Real Santander",7],
  [11700,"ZA-COLC","Fortaleza","Boca Juniors",5],
  [11710,"ZA-ARGC","Lanús","Def. de Cambaceres",5],
  [11715,"ZA-LIBE","América-MG (Bra)","Guaraní (Par)",3],
  [11715,"ZA-LIBE","Bolívar (Bol)","U. Católica (Ecu)",10],
  [11800,"ZA-MEX2","Leones Negros","Venados",7],
  [11800,"ZA-CONC","New York City (Usa)","Santos DG (Cos)",7],
  [11930,"ZA-LIBE","Barcelona SC (Ecu)","Universitario (Per)",7],
  [11930,"ZA-LIBE","Audax (Chi)","Estudiantes L.P. (Arg)",8],
  [11930,"ZA-RECO","Athletico-PR","Palmeiras",6],
  [12000,"ZA-COLS","Tolima","Deportivo Cali",6],
  [12005,"ZA-MEX2","Cancun","Raya2",8],
  [12010,"ZA-ARGC","Ind. Rivadavia","Gimnasia Mendoza",10],
  [12015,"ZA-CONC","Colorado Rapids (Usa)","Comunicaciones (Gtm)",7],
  [12015,"ZA-CONC","Club de Foot Montreal (Can)","Santos Laguna (Mex)",8],
  [12205,"ZA-MEX2","Dorados","Tlaxcala",5],
  [12230,"ZA-CONC","Pumas UNAM (Mex)","Saprissa (Cos)",7]
];

let PARTIDOS_CON_CUOTA = [
  [11710, 'Atletico Lanus', 'Defensores de Cambaceres', 'Atletico Lanus', 1.30],
  [11600, 'Barranquilla', 'CD Real Santander', 'Barranquilla', 1.83],
  [11700, 'Fortaleza FC', 'Boca Juniors de Cali', 'Fortaleza FC', 1.65],
  [11800, 'New York City', 'Santos de Guápiles', 'New York City', 1.48],
  [11715, 'America Mineiro MG', 'Guarani Asuncion', 'America Mineiro MG', 1.70],
  [11715, 'Bolivar', 'Universidad Catolica Quito', 'Universidad Catolica Quito', 2.80],
  [11800, 'Leones Negros', 'Venados FC', 'Leones Negros', 1.93],
  [11500, 'Atlético Madrid', 'Manchester United', 'Manchester United', 2.30],
  [11500, 'Benfica', 'Ajax Amsterdam', 'Ajax Amsterdam', 1.65],
  [11430, 'Watford', 'Crystal Palace', 'Watford', 2.35],
  [11445, 'Liverpool', 'Leeds United', 'Liverpool', 1.28],
  [11430, 'Burnley', 'Tottenham', 'Tottenham', 1.76],
  [11445, 'Sheffield United', 'Blackburn Rovers', 'Sheffield United', 1.85],
  [11445, 'Fulham', 'Peterborough United', 'Fulham', 1.30],
  [11445, 'QPR', 'Blackpool', 'QPR', 1.85],
  [11445, 'Derby County', 'Millwall', 'Derby County', 2.60],
  [11445, 'Stoke City', 'Luton Town', 'Stoke City', 2.05],
  [11445, 'Huddersfield', 'Cardiff City', 'Huddersfield', 2.20],
  [11400, 'Atletico de Cali', 'Valledupar', 'Atletico de Cali', 2.00],
  [11500, 'Leones FC', 'Tigres FC', 'Leones FC', 1.53],
  [11500, 'Llaneros FC', 'Orsomarso', 'Llaneros FC', 2.10],
  [11230, 'Crotone', 'Cosenza', 'Crotone', 1.90],
  [11230, 'Benevento Calcio', 'Como', 'Benevento Calcio', 1.70],
  [11230, 'Frosinone', 'Reggina', 'Frosinone', 1.65],
  [11230, 'Brescia', 'Ascoli', 'Brescia', 1.83],
  [11230, 'Lecce', 'Cittadella', 'Lecce', 1.65],
  [11245, 'KAA Gent', 'RFC Seraing United', 'KAA Gent', 1.38],
  [11230, 'Ionikos Nikea', 'Apollon Smyrnis', 'Ionikos Nikea', 2.05],
  ];
  




















////////////////////////////////////////////////////////////////////////
// let PARTIDOS_SIN_CUOTA = [

// ];

// let PARTIDOS_CON_CUOTA = [

// ]



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
  } else {
    let indice_encontrado_2 = PARTIDOS_CON_CUOTA.findIndex((p) => {
      // console.log({ p });
      return p[2].toLowerCase() === partido[3].toLowerCase();
    });

    if (indice_encontrado_2 >= 0) {
      //   PARTIDOS_CON_CUOTA_Y_GRUPO[indice] = partido;
      PARTIDOS_SIN_CUOTA[indice][5] =
        PARTIDOS_CON_CUOTA[indice_encontrado_2][4];
    }
  }

  indice++;
  //   }
}

console.log({
  PARTIDOS_SIN_CUOTA_C: PARTIDOS_SIN_CUOTA.length,
  PARTIDOS_CON_CUOTA_C: PARTIDOS_CON_CUOTA.length,
  PARTIDOS_SIN_CUOTA: JSON.stringify(PARTIDOS_SIN_CUOTA),
});
