let PARTIDOS_CON_CUOTA = [
    [10900, 'Morecambe', 'Burton Albion', 'Burton Albion', 1.90],
    [10900, 'Bristol Rovers', 'Bradford City', 'Bristol Rovers', 1.85],
    [10900, 'Forest Green Rovers', 'Scunthorpe United', 'Forest Green Rovers', 1.38],
    [10900, 'Stevenage', 'Oldham', 'Stevenage', 1.90],
    [10900, 'Tranmere', 'Carlisle', 'Tranmere', 1.76],
    [10900, 'Barrow FC', 'Port Vale', 'Port Vale', 2.15],
    [10900, 'Harrogate Town', 'Colchester', 'Colchester', 2.15],
    [10900, 'Hartlepool', 'Salford City', 'Salford City', 2.05],
    [10900, 'Mansfield Town', 'Northampton', 'Northampton', 2.50],
    [10900, 'Newport', 'Exeter City', 'Exeter City', 2.10],
    [10900, 'Rochdale', 'Swindon Town', 'Swindon Town', 1.95],
    [10900, 'Walsall', 'Leyton Orient', 'Leyton Orient', 2.35],
    [10915, 'Zulte Waregem', 'St Truiden', 'St Truiden', 1.83],
    [10915, 'Asteras Tripolis', 'Atromitos', 'Asteras Tripolis', 2.05],
    [10930, 'Groningen', 'Ajax Amsterdam', 'Ajax Amsterdam', 1.38],
    [10930, 'B-SAD', 'Portimonense SC', 'Portimonense SC', 2.15],
    [10900, 'SK Dynamo Ceske Budejovice', 'Fastav Zlin', 'SK Dynamo Ceske Budejovice', 1.80],
    [10900, 'Slovan Liberec', 'FK Teplice', 'Slovan Liberec', 1.95],
    [10900, 'FC Slovacko', 'Sigma Olomouc', 'FC Slovacko', 1.93],
    [10930, 'CS Voluntari', 'Farul Constanta', 'CS Voluntari', 2.75],
    [10900, 'Barnsley', 'Reading', 'Reading', 2.25],
    [10900, 'Cardiff City', 'Swansea', 'Swansea', 2.45],
    [10900, 'Coventry', 'Blackburn Rovers', 'Blackburn Rovers', 2.40],
    [10900, 'Peterborough United', 'Middlesbrough', 'Middlesbrough', 1.70],
    [10900, 'QPR', 'Fulham', 'Fulham', 1.61],
    [10900, 'Stoke City', 'Sheffield United', 'Sheffield United', 2.10],
    [10900, 'Aldershot Town', 'Eastleigh FC', 1.50],
    [10900, 'Barnet', 'Yeovil Town', 1.48],
    [10900, 'Chesterfield', 'Grimsby Town', 1.50],
    [10900, 'Southend United', 'Notts County', 1.53],
    [10900, 'Halifax Town', 'Wealdstone FC', 1.38],
    [10900, 'Charlton Athletic', 'Lincoln City', 'Charlton Athletic', 1.85],
    [10900, 'Ipswich Town', 'Cambridge United', 'Ipswich Town', 1.57],
    [10900, 'MK Dons', 'Shrewsbury', 'MK Dons', 1.95],
    [10900, 'Plymouth Argyle', 'Oxford United', 'Plymouth Argyle', 1.83],
    [10900, 'Sheffield Wednesday', 'AFC Wimbledon', 'Sheffield Wednesday', 1.55],
    [10900, 'Sunderland', 'Gillingham', 'Sunderland', 1.53],
    [10900, 'Wycombe Wanderers', 'Doncaster Rovers', 'Wycombe Wanderers', 1.42],
    [10900, 'Accrington', 'Cheltenham Town', 'Cheltenham Town', 2.10],
    [10900, 'Crewe Alexandra', 'Fleetwood Town', 'Fleetwood Town', 2.05],
    [10915, 'Levante', 'Villarreal', 'Villarreal', 1.70],
    [10900, 'Real Sociedad B', 'Alcorcon', 'Real Sociedad B', 1.85],
    [10900, 'Real Valladolid', 'CD Lugo', 'Real Valladolid', 1.45],
    [10915, 'Benevento Calcio', 'SC Pisa', 'Benevento Calcio', 2.00],
    [10900, 'Hibernian', 'Dundee United', 'Hibernian', 1.90],
    [10900, 'Motherwell', 'St Mirren', 'Motherwell', 2.10],
    [10900, 'Dundee', 'Aberdeen', 'Aberdeen', 1.95],
    [10900, 'Ross County', 'Hearts', 'Hearts', 1.83],
    [10900, 'St Johnstone', 'Livingston', 'Livingston', 2.50],
    [10900, 'Partick Thistle', 'Arbroath', 1.57],
    [10900, 'Brighton', 'Norwich City', 'Brighton', 1.66],
    [10900, 'Chelsea', 'Brentford', 'Chelsea', 1.61],
    [10900, 'Burnley', 'Manchester City', 'Manchester City', 1.38],
    [10900, 'Leeds United', 'Southampton', 'Southampton', 1.90],
    [10900, 'Wolverhampton Wanderers', 'Aston Villa', 'Aston Villa', 2.25],
    [10900, 'Bournemouth', 'Bristol City', 'Bournemouth', 1.53],
    [10900, 'Derby County', 'Preston', 'Derby County', 2.35],
    [10900, 'Luton Town', 'Millwall', 'Luton Town', 2.15]
]

let PARTIDOS_SIN_CUOTA = [
  [20900,"R-ESC1","Hibernian","Dundee Utd",7],
  [20900,"R-ESC1","Motherwell","St. Mirren",7],
  [20900,"R-ESC1","Dundee FC","Aberdeen",8],
  [20900,"R-ESC1","Ross County","Hearts",8],
  [20900,"R-ESC1","St. Johnstone","Livingston",10],
  [20900,"R-ESC2*","Partick Thistle","Arbroath",11],
  [20900,"ESP2","R. Sociedad B","Alcorcón",7],
  [20900,"ESP2","Real Valladolid","Lugo",5],
  [20900,"R-ING1","Brighton","Norwich",7],
  [20900,"R-ING1","Chelsea","Brentford",1],
  [20900,"R-ING1","Burnley","Manchester City",2],
  [20900,"R-ING1","Leeds Utd","Southampton",10],
  [20900,"R-ING1","Wolves","Aston Villa",8],
  [20900,"R-ING2","Bournemouth","Bristol City",5],
  [20900,"R-ING2","Derby","Preston",7],
  [20900,"R-ING2","Luton","Millwall",7],
  [20900,"R-ING2","Barnsley","Reading",10],
  [20900,"R-ING2","Cardiff","Swansea",10],
  [20900,"R-ING2","Coventry","Blackburn",10],
  [20900,"R-ING2","Peterborough","Middlesbrough",8],
  [20900,"R-ING2","QPR","Fulham",6],
  [20900,"R-ING2","Stoke","Sheffield Utd",8],
  [20900,"R-INGO","Charlton","Lincoln",7],
  [20900,"R-INGO","Ipswich","Cambridge Utd",7],
  [20900,"R-INGO","MK Dons","Shrewsbury",7],
  [20900,"R-INGO","Plymouth","Oxford Utd",7],
  [20900,"R-INGO","Sheffield Wed","Wimbledon",7],
  [20900,"R-INGO","Sunderland","Gillingham FC",5],
  [20900,"R-INGO","Wycombe","Doncaster",7],
  [20900,"R-INGO","Accrington","Cheltenham",10],
  [20900,"R-INGO","Crewe","Fleetwood",10],
  [20900,"R-INGO","Morecambe","Burton",8],
  [20900,"R-INGT","Bristol Rovers","Bradford City",7],
  [20900,"R-INGT","Forest Green","Scunthorpe",5],
  [20900,"R-INGT","Stevenage","Oldham",7],
  [20900,"R-INGT","Tranmere","Carlisle",7],
  [20900,"R-INGT","Barrow","Port Vale",8],
  [20900,"R-INGT","Harrogate","Colchester",10],
  [20900,"R-INGT","Hartlepool","Salford",8],
  [20900,"R-INGT","Mansfield","Northampton",10],
  [20900,"R-INGT","Newport","Exeter",10],
  [20900,"R-INGT","Rochdale","Swindon",10],
  [20900,"R-INGT","Walsall","Leyton Orient",10],
  [20900,"R-INGN*","Aldershot","Eastleigh",11],
  [20900,"R-INGN*","Barnet","Yeovil",11],
  [20900,"R-INGN*","Chesterfield","Grimsby",11],
  [20900,"R-INGN*","Southend","Notts County",11],
  [20900,"R-INGN*","Dover","Kings Lynn",12],
  [20900,"R-INGN*","Halifax","Wealdstone",12],
  [20900,"R-INGN*","Solihull Moors","Maidenhead",12],
  [20900,"YE-REP1","Ceske Budejovice","Zlin",7],
  [20900,"YE-REP1","Liberec","Teplice",7],
  [20900,"YE-REP1","Slovacko","Sigma Olomouc",7],
  [20915,"YE-BEL1","Waregem","St. Truiden",8],
  [20915,"YE-BIE1*","Belshina","BATE",8],
  [20915,"ESP1","Levante","Villarreal",6],
  [20915,"YE-GRE1","Asteras T.","Atromitos",7],
  [20915,"ITA2","Benevento","Pisa",7],
  [20930,"YE-HOL1","Groningen","Ajax",2],
  [20930,"YE-POR1","Belenenses","Portimonense",8],
  [20930,"YE-RUM1","FC Voluntari","Farul Constanta",9],
]
















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

const { writeFile } = require('fs');

writeFile('partidos.txt', 'let PARTIDOS = ' + JSON.stringify(PARTIDOS_SIN_CUOTA), 'utf8', () => {
  console.log({
    PARTIDOS_SIN_CUOTA_C: PARTIDOS_SIN_CUOTA.length,
    PARTIDOS_CON_CUOTA_C: PARTIDOS_CON_CUOTA.length,
    // PARTIDOS_SIN_CUOTA: JSON.stringify(PARTIDOS_SIN_CUOTA),
  });
});

