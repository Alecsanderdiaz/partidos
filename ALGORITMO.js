let PARTIDOS_CON_CUOTA = [
  [11400, 'Club Atletico Atlanta', 'CSD Flandria', 'Club Atletico Atlanta', 2.45],
  [11710, 'Instituto AC Cordoba', 'Ferro Carril Oeste', 'Instituto AC Cordoba', 2.37],
  [11800, 'Atletico Rafaela', 'Deportivo Madryn', 'Atletico Rafaela', 2.35],
  [11910, 'San Martin de Tucuman', 'CD Maipu', 'San Martin de Tucuman', 1.90],
  [11300, 'Brown de Adrogue', 'Club Almagro', 'Club Almagro', 2.55],
  [11305, 'Tristan Suarez', 'Quilmes AC', 'Quilmes AC', 2.25],
  [11400, 'Estudiantes de Buenos Aires', 'Temperley', 'Temperley', 2.75],
  [11505, 'Defensores de Belgrano', 'Nueva Chicago', 'Nueva Chicago', 2.80],
  [11800, 'Agropecuario Argentino', 'Independiente Rivadavia', 'Independiente Rivadavia', 2.60],
  [11830, 'Santamarina Tandil', 'Deportivo Moron', 'Deportivo Moron', 2.55],
  [11935, 'Atlético Nacional', 'Independiente Santa Fe', 'Atlético Nacional', 1.90],
  [11730, 'Deportivo Pasto', 'La Equidad', 'La Equidad', 2.60],
  [11400, 'Orsomarso', 'Real Cartagena', 'Real Cartagena', 2.05],
  [11400, 'Las Palmas', 'CD Leganes', 'CD Leganes', 2.45],
]

let PARTIDOS_SIN_CUOTA = [
  [1300, "ZA-ARG2", "Brown Adrogué", "Almagro", 10],
  [1305, "ZA-ARG2", "Tristán Suárez", "Quilmes", 8],
  [1400, "ZA-ARG2", "CA Estudiantes", "Temperley", 10],
  [1500, "ZA-ARG2", "Atlanta", "Flandria", 7],
  [1505, "ZA-ARG2", "Def. de Belgrano", "Nueva Chicago", 10],
  [1710, "ZA-ARG2", "Instituto", "Ferro Carril Oeste", 7],
  [1800, "ZA-ARG2", "Agropecuario", "Ind. Rivadavia", 10],
  [1800, "ZA-ARG2", "Atl. Rafaela", "Deportivo Madryn", 7],
  [1830, "ZA-ARG2", "Santamarina", "Deportivo Morón", 8],
  [1910, "ZA-ARG2", "San Martín Tuc.", "Deportivo Maipu", 7],
  [1730, "ZA-COL1", "Dep. Pasto", "La Equidad", 10],
  [1935, "ZA-COL1", "Atl. Nacional", "Ind. Santa Fe", 1],
  [1400, "ZA-COL2", "Orsomarso", "Real Cartagena", 6],
  [1400, "ESP2", "Las Palmas", "Leganés", 10]
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

