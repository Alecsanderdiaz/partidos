let PARTIDOS_SIN_CUOTA = [
  [10900,"R-ING1","Chelsea","Wolves",1],[10915,"ESP1","Athletic Club","Valencia",3],[10900,"R-INGT","Bristol Rovers","Scunthorpe",5],[10900,"R-INGT","Exeter","Port Vale",5],[10930,"YE-POR2","Casa Pia","Vilafranquense",5],[10900,"R-ESC1","Livingston","St. Johnstone",7],[10900,"R-ESC1","St. Mirren","Dundee FC",7],[10900,"R-ESC1","Ross County","Motherwell",7],[10900,"R-ING1","Brentford","Southampton",7],[10900,"R-ING1","Crystal Palace","Watford",7],[10900,"R-INGT","Mansfield","Forest Green",7],[10900,"R-INGT","Newport","Rochdale",7],[10900,"YE-REP1","Pardubice","Karvina",7],[10930,"YE-POR1","Estoril","Moreirense",7],[10930,"YE-POR2","Nacional","Academico Viseu",7],[10930,"YE-RUM1","Farul Constanta","FC Voluntari",7],[10900,"R-ING1","Burnley","Aston Villa",8],[10900,"R-INGT","Barrow","Northampton",8],[10900,"R-INGT","Harrogate","Sutton",8],[10900,"R-INGT","Oldham","Crawley",8],[10900,"R-INGT","Walsall","Swindon",8],[10900,"YE-REP1","Teplice","Jablonec",8],[10900,"R-ESC1","Hibernian","Aberdeen",9],[10900,"ESP2","Fuenlabrada","R. Sociedad B",10],[10900,"ESP2","Huesca","Sporting de Gijón",10],[10900,"R-INGT","Bradford City","Carlisle",10],[10900,"R-INGT","Hartlepool","Colchester",10],[10900,"R-INGT","Leyton Orient","Tranmere",10],[10900,"R-INGT","Stevenage","Salford",10],[10900,"YE-REP1","Zlin","Bohemians",10],[10900,"*R-ESC2","Dunfermline","Queens Park",11],[10900,"*R-INGN","Yeovil","Boreham Wood",11],[10900,"*YE-BIE1","Belshina","Slutsk",11]
]

let PARTIDOS_CON_CUOTA = [
  [10900, 'Fuenlabrada', 'Real Sociedad B', 'Real Sociedad B', 1.95],
  [10900, 'SD Huesca', 'Sporting Gijon', 'Sporting Gijon', 2.30],
  [10900, 'Ross County', 'Motherwell', 'Ross County', 2.00],
  [10900, 'Livingston', 'St Johnstone', 'Livingston', 2.15],
  [10900, 'St Mirren', 'Dundee', 'St Mirren', 1.95],
  [10900, 'Hibernian', 'Aberdeen', 'Hibernian', 2.45],
  [10900, 'Brentford', 'Southampton', 'Brentford', 1.85],
  [10900, 'Crystal Palace', 'Watford', 'Crystal Palace', 1.75],
  [10900, 'Burnley', 'Aston Villa', 'Aston Villa', 2.20],
  [10900, 'Mansfield Town', 'Forest Green Rovers', 'Mansfield Town', 1.75],
  [10900, 'Newport', 'Rochdale', 'Newport', 1.61],
  [10900, 'Barrow FC', 'Northampton', 'Northampton', 1.61],
  [10900, 'Harrogate Town', 'Sutton United', 'Sutton United', 1.61],
  [10900, 'Oldham', 'Crawley Town', 'Crawley Town', 1.75],
  [10900, 'Walsall', 'Swindon Town', 'Swindon Town', 1.61],
  [10900, 'Bradford City', 'Carlisle', 'Carlisle', 2.15],
  [10900, 'Hartlepool', 'Colchester', 'Colchester', 2.05],
  [10900, 'Leyton Orient', 'Tranmere', 'Tranmere', 2.05],
  [10900, 'Stevenage', 'Salford City', 'Salford City', 1.90],
  [10930, 'Estoril', 'Moreirense', 'Estoril', 2.15],
  [10930, 'Nacional Madeira', 'Academica Viseu', 'Nacional Madeira', 1.83],
  [10900, 'FK Pardubice', 'MFK Karvina', 'FK Pardubice', 1.53],
  [10900, 'FK Teplice', 'FK Baumit Jablonec', 'FK Baumit Jablonec', 2.10],
  [10900, 'Fastav Zlin', 'Bohemians 1905', 'Bohemians 1905', 2.25],
  [10930, 'Farul Constanta', 'CS Voluntari', 'Farul Constanta', 1.95],
  [10900, 'Bristol Rovers', 'Scunthorpe United', 'Bristol Rovers', 1.20],
  [10900, 'Exeter City', 'Port Vale', 'Exeter City', 1.95],
  [10930, 'Casa Pia Atletico', 'Vilafranquense', 'Casa Pia Atletico', 1.57],
  [10900, 'Dunfermline', 'Queens Park', '0.5', 1.44],
  [10900, 'Yeovil Town', 'Boreham Wood', '0.5', 1.48],
  [10900, 'Belshina Bobruisk', 'Slutsksakhar Slutsk', '0.5', 1.44],
  [10900, 'Chelsea', 'Wolverhampton Wanderers', 'Chelsea', 1.57],
  [10915, 'Athletic Bilbao', 'Valencia', 'Athletic Bilbao', 1.61]
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

