let PARTIDOS_CON_CUOTA = [
  [11500, 'Indy Eleven', 'New Mexico United', '0.5', 1.48],
  [11300, 'Institucion Atletica Sud America', 'Villa Espanola', '0.5', 1.40],
  [11615, 'Deportivo La Guaira', 'Zamora FC', '0.5', 1.48],
  [11400, 'Liverpool', 'Real Madrid', 'Real Madrid', 2.10],
  [11310, 'Nueva Chicago', 'Chaco For Ever', 'Nueva Chicago', 2.65],
  [11710, 'Quilmes AC', 'Club Atletico Atlanta', 'Quilmes AC', 2.15],
  [11310, 'Instituto AC Cordoba', 'Chacarita Juniors', 'Chacarita Juniors', 3.00],
  [11330, 'CSD Flandria', 'Villa Dalmine', 'Villa Dalmine', 2.45],
  [11330, 'Sacachispas FC', 'Guillermo Brown', 'Guillermo Brown', 2.55],
  [11600, 'Tristan Suarez', 'Defensores de Belgrano', 'Defensores de Belgrano', 2.45],
  [11700, 'Sao Paulo SP', 'Ceara CE', 'Sao Paulo SP', 1.85],
  [11430, 'Goias GO', 'Bragantino SP', 'Bragantino SP', 2.15],
  [11430, 'Csa AL', 'Novorizontino SP', 'Csa AL', 2.05],
  [11700, 'Sampaio Correa MA', 'Guarani SP', 'Guarani SP', 2.25],
  [11400, 'Deportes La Serena', 'Audax Italiano', 'Audax Italiano', 2.05],
  [11630, 'Cobresal', 'Universidad de Chile', 'Universidad de Chile', 2.75],
  [11530, 'Orense SC', 'Guayaquil City FC', 'Orense SC', 1.72],
  [11300, 'Mushuc Runa', 'Deportivo Cuenca', 'Deportivo Cuenca', 2.20],
  [11708, 'Los Angeles FC', 'San Jose Earthquakes', 'San Jose Earthquakes', 2.40],
  [11300, 'Cerro Largo FC', 'Liverpool Montevideo', 'Liverpool Montevideo', 2.00],
  [11530, 'CA Boston River', 'Torque', 'Torque', 1.95]
]

let PARTIDOS_SIN_CUOTA = [
  [11500,"*ZA-EST2","Indy Eleven","New Mexico",11],[11300,"*ZA-URU2","Sud América","Villa Española",11],[11615,"*ZA-VEN1","La Guaira","Zamora",11],[11400,"U-CHAM","Liverpool","Real Madrid",2],[11310,"ZA-ARG2","Instituto","Chacarita",10],[11310,"ZA-ARG2","Nueva Chicago","Chaco For Ever",9],[11330,"ZA-ARG2","Flandria","Villa Dálmine",10],[11330,"ZA-ARG2","Sacachispas","Guillermo Brown",10],[11600,"ZA-ARG2","Tristán Suárez","Def. de Belgrano",8],[11710,"ZA-ARG2","Quilmes","Atlanta",5],[11430,"ZA-BRA1","Goiás","Bragantino",6],[11700,"ZA-BRA1","Sao Paulo","Ceará",5],[11430,"ZA-BRA2","CSA","Novorizontino",7],[11700,"ZA-BRA2","Sampaio Correa","Guaraní",10],[11400,"ZA-CHI1","La Serena","Audax",8],[11630,"ZA-CHI1","Cobresal","U. De Chile",10],[11300,"ZA-ECU1","Mushuc Runa","Dep. Cuenca",10],[11530,"ZA-ECU1","Orense","Guayaquil City",7],[11700,"ZA-EST1","Los Angeles FC","San Jose Earthquakes",10],[11300,"ZA-URU1","Cerro Largo","Liverpool M.",8],[11530,"ZA-URU1","Boston River","Montevideo City",8]
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

