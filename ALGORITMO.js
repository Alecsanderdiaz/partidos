let PARTIDOS_CON_CUOTA = [
  [12100, 'Alianza Lima', 'Colo Colo', 'Colo Colo', 1.66],
  [12100, 'Cimarrones de Sonora', 'Club Celaya', 'Club Celaya', 2.65],
  [11930, 'Universidad Catolica Quito', 'Santos SP', 'Santos SP', 2.75],
  [11930, 'Brusque FC', 'Chapecoense SC', 'Chapecoense SC', 2.4],
  [11930, 'Banfield', 'Union La Calera', 'Banfield', 1.83],
  [12000, 'Colorado Springs', 'Rio Grande Valley FC', '0.5', 1.42],
  [11900, 'Libertad (Ecu)', 'Independiente Juniors', '0.5', 1.50],
  [11930, 'Ayacucho FC', 'Jorge Wilstermann', 'Ayacucho FC', 1.95],
  [11830, 'Zamora FC', 'Portuguesa FC', '0.5', 1.48],
  [11900, 'Bragantino SP', 'Velez Sarsfield', 'Bragantino SP', 1.80],
  [11715, 'CD Everton Vina Del Mar', 'Sao Paulo SP', 'Sao Paulo SP', 2.1],
  [11715, 'Union Santa Fe', 'Oriente Petrolero', 'Union Santa Fe', 1.35],
  [11715, 'Guairena FC', 'Internacional RS', 'Internacional RS', 1.90],
  [11700, 'Union Magdalena', 'La Equidad', 'La Equidad', 2.2],
  [11615, 'Deportivo Lara', 'Hermanos Colmenarez', '0.5', 1.50],
  [11700, 'Fortaleza CE', 'River Plate', 'River Plate', 1.93],
  [11500, 'Cortulua (W)', 'La Equidad (W)', '0.5', 1.40],
  [11500, 'Independiente Medellin (W)', 'Junior de Barranquilla (W)', '0.5', 1.42],
  [11500, 'CDA Santo Domingo', 'CD Olmedo', '0.5', 1.50],
  [11400, 'Glasgow Rangers', 'RB Leipzig', 'RB Leipzig', 1.85],
  [11400, 'Eintracht Frankfurt', 'West Ham United', 'Eintracht Frankfurt', 1.95],
  [11400, 'Marseille', 'Feyenoord Rotterdam', 'Marseille', 1.66],
  [11400, 'Roma', 'Leicester City', 'Roma', 1.85],
  [11345, 'Wycombe Wanderers', 'MK Dons', 'MK Dons', 2.3]
]

let PARTIDOS_SIN_CUOTA = [
  [11930,"ZA-BRA2","Brusque","Chapecoense",10],[11700,"ZA-COL1","U. Magdalena","La Equidad",8],[11500,"*ZM-COLF","Cortuluá F","La Equidad F",11],[11500,"*ZM-COLF","Ind. Medellín F","Junior F",11],[12000,"*ZM-COLF","Deportivo Cali F","Orsomarso F",12],[11500,"*ZA-ECU2","Santo Domingo","Olmedo",11],[11900,"*ZA-ECU2","Libertad","Ind. Juniors",11],[12000,"*ZA-EST2","Colorado Springs","Rio Grande",11],[11400,"U-EURO","Eintracht Frankfurt","West Ham",9],[11400,"U-EURO","Rangers","RB Leipzig",8],[11400,"U-CONF","Marsella","Feyenoord",7],[11400,"U-CONF","Roma","Leicester",7],[11345,"ZR-INGO","Wycombe","MK Dons",10],[12100,"ZA-MEX2","Cimarrones de Sonora","Celaya",10],[11700,"ZA-LIBE","Fortaleza (Bra)","River Plate (Arg)",8],[11900,"ZA-LIBE","Bragantino (Bra)","Vélez Sarsfield (Arg)",7],[12100,"ZA-LIBE","Alianza Lima (Per)","Colo Colo (Chi)",8],[11715,"ZA-SUDA","Everton (Chi)","Sao Paulo (Bra)",8],[11715,"ZA-SUDA","Guairena FC (Par)","Internacional (Bra)",8],[11715,"ZA-SUDA","Unión Santa Fe (Arg)","Oriente Petrolero (Bol)",7],[11930,"ZA-SUDA","Ayacucho (Per)","J. Wilstermann (Bol)",7],[11930,"ZA-SUDA","Banfield (Arg)","U. La Calera (Chi)",7],[11930,"ZA-SUDA","U. Católica (Ecu)","Santos (Bra)",10],[11615,"*ZA-VEN1","Lara","Hermanos Colmenarez",11],[11830,"*ZA-VEN1","Zamora","Portuguesa",11]
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

