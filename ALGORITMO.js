let PARTIDOS_CON_CUOTA = [
  [10900, 'Carlisle', 'Crawley Town', 'Carlisle', 2.05],
  [10900, 'Harrogate Town', 'Swindon Town', 'Harrogate Town', 2.00],
  [10900, 'Northampton', 'Colchester', 'Northampton', 1.76],
  [10900, 'Rochdale', 'Crewe Alexandra', 'Rochdale', 1.95],
  [10900, 'Stockport County', 'Barrow FC', 'Stockport County', 1.61],
  [10900, 'Sutton United', 'Newport', 'Sutton United', 2.00],
  [10900, 'Tranmere', 'Stevenage', 'Tranmere', 1.95],
  [10900, 'Walsall', 'Hartlepool', 'Walsall', 2.00],
  [10900, 'AFC Wimbledon', 'Gillingham', 'AFC Wimbledon', 2.10],
  [10900, 'Bradford City', 'Doncaster Rovers', 'Doncaster Rovers', 2.30],
  [10900, 'Leyton Orient', 'Grimsby Town', 'Grimsby Town', 2.35],
  [10900, 'Salford City', 'Mansfield Town', 'Mansfield Town', 2.15],
  [10900, 'Blackburn Rovers', 'QPR', 'Blackburn Rovers', 1.85],
  [10900, 'Blackpool', 'Reading', 'Blackpool', 1.90],
  [10900, 'Wigan', 'Preston', 'Wigan', 2.25],
  [10900, 'Cardiff City', 'Norwich City', 'Norwich City', 2.05],
  [10900, 'Hull City', 'Bristol City', 'Bristol City', 2.30],
  [10900, 'Luton Town', 'Birmingham City', 'Birmingham City', 2.75],
  [10900, 'Millwall', 'Stoke City', 'Stoke City', 2.50],
  [10900, 'Rotherham', 'Swansea', 'Swansea', 2.25],
  [10900, 'Accrington', 'Charlton Athletic', 'Accrington', 2.00],
  [10900, 'Derby County', 'Oxford United', 'Derby County', 1.85],
  [10900, 'Port Vale', 'Fleetwood Town', 'Port Vale', 1.90],
  [10900, 'Wycombe Wanderers', 'Burton Albion', 'Wycombe Wanderers', 1.65],
  [10900, 'Bristol Rovers', 'Forest Green Rovers', 'Forest Green Rovers', 2.10],
  [10900, 'Cambridge United', 'MK Dons', 'MK Dons', 1.85],
  [10900, 'Cheltenham Town', 'Peterborough United', 'Peterborough United', 1.76],
  [10900, 'Ipswich Town', 'Bolton Wanderers', 'Bolton Wanderers', 2.62],
  [10900, 'Lincoln City', 'Exeter City', 'Exeter City', 2.05],
  [10900, 'Morecambe', 'Shrewsbury', 'Shrewsbury', 2.05],
  [10900, 'Plymouth Argyle', 'Barnsley', 'Barnsley', 2.15],
  [10900, 'Sheffield Wednesday', 'Portsmouth', 'Portsmouth', 2.45],
  [10831, 'Jahn Regensburg', 'Cologne', 1.25],
  [10800, 'Dijon', 'Saint Etienne', 'Saint Etienne', 1.85],
  [10900, 'Hearts', 'Ross County', 'Hearts', 1.57],
  [10900, 'Kilmarnock', 'Dundee United', 'Kilmarnock', 2.05],
  [10900, 'St Johnstone', 'Hibernian', 'Hibernian', 2.20],
  [10900, 'Ayr United', 'Arbroath', 1.50],
  [10900, 'Cove', 'Raith Rovers', 1.50],
  [10900, 'Dundee', 'Partick Thistle', 1.48],
  [10900, 'Hamilton Academical', 'Greenock Morton', 1.55],
  [10900, 'Inverness CT', 'Queens Park', 1.48],
  [10900, 'Bournemouth', 'Real Sociedad', 'Bournemouth', 2.15],
  [10900, 'Newcastle', 'Athletic Bilbao', 'Newcastle', 2.00],
  [10900, 'Brentford', 'Real Betis', 'Real Betis', 1.90],
  [10900, 'Southampton', 'Villarreal', 'Villarreal', 1.95],
  [10900, 'Groningen', 'Osasuna', 'Osasuna', 1.76],
  [10900, 'Cercle Brugge', 'Anderlecht', 'Anderlecht', 1.85],
  [10900, 'Banik Ostrava', 'Sigma Olomouc', 'Banik Ostrava', 1.85],
  [10900, 'FC Zbrojovka Brno', 'FC Slovacko', 'FC Slovacko', 1.85],
  [10900, 'Fastav Zlin', 'FK Mlada Boleslav', 'FK Mlada Boleslav', 1.95],
  [10930, 'Zenit St Petersburg', 'Lokomotiv Moscow', 'Zenit St Petersburg', 1.36],
  [10900, 'Brusque FC', 'Cruzeiro MG', 'Cruzeiro MG', 2.20],
  [10815, 'Rentistas', 'Albion FC', 'Albion FC', 2.40],
]

let PARTIDOS_SIN_CUOTA = [
  [10900,"AMI","Bournemouth (Eng)","Real Sociedad (Esp)",1],[10900,"AMI","Newcastle (Eng)","Athletic Club (Esp)",1],[10930,"YE-RUS1","Zenit","Lokomotiv Moscú",1],[10900,"AMI","Brentford (Eng)","Real Betis (Esp)",4],[10900,"AMI","Groningen (Ned)","Osasuna (Esp)",4],[10900,"AMI","Southampton (Eng)","Villarreal (Esp)",4],[10900,"R-ING2","Wigan","Preston",5],[10900,"R-INGO","Derby","Oxford Utd",5],[10800,"FRA2","Dijon","Saint-Étienne",6],[10900,"YE-BEL1","Círculo Brujas","Anderlecht",6],[10900,"ZA-BRA2","Brusque","Cruzeiro",6],[10900,"R-ESC1","Hearts","Ross County",7],[10900,"R-ESC1","Kilmarnock","Dundee Utd",7],[10900,"R-ING2","Blackburn","QPR",7],[10900,"R-ING2","Blackpool","Reading",7],[10900,"R-INGO","Port Vale","Fleetwood",7],[10900,"R-INGO","Wycombe","Burton",7],[10900,"R-INGT","Carlisle","Crawley",7],[10900,"R-INGT","Northampton","Colchester",7],[10900,"R-INGT","Rochdale","Crewe",7],[10900,"R-INGT","Stockport","Barrow",7],[10900,"R-INGT","Sutton","Newport",7],[10900,"R-INGT","Tranmere","Stevenage",7],[10900,"R-INGT","Walsall","Hartlepool",7],[10900,"R-INGT","Wimbledon","Gillingham FC",7],[10900,"YE-REP1","Ostrava","Sigma Olomouc",7],[10900,"R-ESC1","St. Johnstone","Hibernian",8],[10900,"R-ING2","Cardiff","Norwich",8],[10900,"R-ING2","Hull","Bristol City",8],[10900,"R-INGO","Cambridge Utd","MK Dons",8],[10900,"R-INGO","Cheltenham","Peterborough",8],[10900,"R-INGO","Morecambe","Shrewsbury",8],[10900,"YE-REP1","Brno","Slovacko",8],[10900,"YE-REP1","Zlin","Mlada Boleslav",8],[10900,"R-INGO","Accrington","Charlton",9],[10900,"R-INGT","Harrogate","Swindon",9],[10900,"R-ING2","Luton","Birmingham",10],[10900,"R-ING2","Millwall","Stoke",10],[10900,"R-ING2","Rotherham","Swansea",10],[10900,"R-INGO","Bristol Rovers","Forest Green",10],[10900,"R-INGO","Ipswich","Bolton",10],[10900,"R-INGO","Lincoln","Exeter",10],[10900,"R-INGO","Plymouth","Barnsley",10],[10900,"R-INGO","Sheffield Wed","Portsmouth",10],[10900,"R-INGT","Bradford City","Doncaster",10],[10900,"R-INGT","Leyton Orient","Grimsby",10],[10900,"R-INGT","Salford","Mansfield",10],[10815,"ZA-URU1","Rentistas","Albion",10],[10831,"ALEC","Regensburg","Colonia",11],[10900,"R-ESC2","Ayr","Arbroath",11],[10900,"R-ESC2","Cove Rangers","Raith",11],[10900,"R-ESC2","Dundee FC","Partick Thistle",11],[10900,"R-ESC2","Hamilton","Morton",11],[10900,"R-ESC2","Inverness","Queens Park",11]
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

