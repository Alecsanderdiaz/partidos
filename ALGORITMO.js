let PARTIDOS_CON_CUOTA = [
  [11500, 'Deportes Tolima (W)', 'Fortaleza FC (W)', '0.5', 1.45],
  [11800, 'Junior de Barranquilla (W)', 'Deportivo Pereira (W)', '0.5', 1.40],
  [11400, 'Leicester City', 'PSV Eindhoven', 'Leicester City', 1.85],
  [11400, 'Marseille', 'PAOK Thessaloniki', 'Marseille', 1.75],
  [11400, 'Bodo Glimt', 'Roma', 'Roma', 1.85],
  [11400, 'Sporting Braga', 'Glasgow Rangers', 'Sporting Braga', 2.00],
  [11400, 'Eintracht Frankfurt', 'Barcelona', 'Eintracht Frankfurt', 2.40],
  [11400, 'West Ham United', 'Lyon', 'Lyon', 2.45],
  [12000, 'Independiente Santa Fe', 'Deportivo Pasto', 'Independiente Santa Fe', 1.80],
  [11500, 'Fortaleza FC', 'Cortulua', 'Fortaleza FC', 2.00],
  [11730, 'Deportes Quindio', 'Once Caldas', 'Once Caldas', 2.10],
  [11930, 'Atletico Bucaramanga', 'Envigado FC', 'Envigado FC', 3.20],
  [11500, 'Chacaritas SC', 'CD Olmedo', '0.5', 1.42],
  [11700, 'Fortaleza CE', 'Colo Colo', 'Colo Colo', 2.50],
  [11900, 'Estudiantes de La Plata', 'Velez Sarsfield', 'Velez Sarsfield', 2.45],
  [12100, 'The Strongest', 'Libertad Asuncion', 'Libertad Asuncion', 2.80],
  [11900, 'Pachuca', 'Tigres UANL', 'Tigres UANL', 2.15],
  [11700, 'Atletico Morelia', 'Venados FC', 'Atletico Morelia', 1.93],
  [12105, 'Raya2', 'CD Tepatitlan de Morelos', 'CD Tepatitlan de Morelos', 2.45],
  [12100, 'Atlas de Guadalajara', 'Necaxa', 'Atlas de Guadalajara', 2.10],
  [11930, 'Barcelona SC', 'Montevideo Wanderers', 'Barcelona SC', 1.76],
  [11930, 'Ayacucho FC', 'Sao Paulo SP', 'Sao Paulo SP', 1.75],
  [11930, 'Guairena FC', 'Independiente Medellin', 'Independiente Medellin', 2.40],
  [11930, 'Metropolitano SC', 'Atletico Lanus', 'Atletico Lanus', 1.76],
  [11715, 'Atletico River Plate (Uru)', 'Racing Club', 'Racing Club', 1.76],
  [11715, 'Cuiaba MT', 'FBC Melgar', 'FBC Melgar', 3.45],
  [11700, 'Zamora FC', 'Aragua FC', '0.5', 1.50],
]

let PARTIDOS_SIN_CUOTA = [
  [11500, "ZA-COLC", "Fortaleza", "Cortuluá", 7],
  [11730, "ZA-COLC", "Quindío", "Once Caldas", 4],
  [11930, "ZA-COLC", "Atl. Bucaramanga", "Envigado", 10],
  [12000, "ZA-COLC", "Ind. Santa Fe", "Dep. Pasto", 3],
  [11300, "ZM-COLF*", "Real Santander F", "Ind. Medellín F", 12],
  [11500, "ZM-COLF*", "Tolima F", "Fortaleza F", 11],
  [11800, "ZM-COLF*", "Junior F", "Deportivo Pereira F", 11],
  [11500, "ZA-ECU2*", "Chacaritas", "Olmedo", 11],
  [11400, "U-EURO", "Eintracht Frankfurt", "Barcelona", 9],
  [11400, "U-EURO", "SC Braga", "Rangers", 5],
  [11400, "U-EURO", "West Ham", "Lyon", 10],
  [11400, "U-CONF", "Bodo/Glimt", "Roma", 4],
  [11400, "U-CONF", "Leicester", "PSV", 3],
  [11400, "U-CONF", "Marsella", "PAOK", 3],
  [11900, "ZA-MEX1", "Pachuca", "Tigres UANL", 6],
  [12100, "ZA-MEX1", "Atlas", "Necaxa", 7],
  [11700, "ZA-MEX2", "Atl. Morelia", "Venados", 7],
  [12105, "ZA-MEX2", "Raya2", "Tepatitlán", 10],
  [11700, "ZA-LIBE", "Fortaleza (Bra)", "Colo Colo (Chi)", 4],
  [11900, "ZA-LIBE", "Estudiantes L.P. (Arg)", "Vélez Sarsfield (Arg)", 6],
  [12100, "ZA-LIBE", "The Strongest (Bol)", "Libertad (Par)", 6],
  [11715, "ZA-SUDA", "Cuiabá (Bra)", "Melgar (Per)", 10],
  [11715, "ZA-SUDA", "River Plate (Uru)", "Racing Club (Arg)", 6],
  [11930, "ZA-SUDA", "Ayacucho (Per)", "Sao Paulo (Bra)", 2],
  [11930, "ZA-SUDA", "Barcelona SC (Ecu)", "Wanderers (Uru)", 1],
  [11930, "ZA-SUDA", "Guairena FC (Par)", "Ind. Medellín (Col)", 2],
  [11930, "ZA-SUDA", "Metropolitanos (Ven)", "Lanús (Arg)", 2],
  [11700, "ZA-VEN1*", "Zamora", "Aragua", 11]
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

