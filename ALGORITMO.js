let PARTIDOS_CON_CUOTA = [
  [12105, 'Cimarrones de Sonora', 'CD Tepatitlan de Morelos', 'CD Tepatitlan de Morelos', 2.45],
  [12100, 'Cruz Azul', 'Pumas Unam', 'Cruz Azul', 1.95],
  [11345, 'Portsmouth', 'Rotherham', 'Portsmouth', 2.35],
  [11345, 'Burton Albion', 'Wigan', 'Wigan', 1.65],
  [11400, 'Bayern Munich', 'Villarreal', 'Bayern Munich', 1.33],
  [11400, 'Real Madrid', 'Chelsea', 'Real Madrid', 1.95],
  [11700, 'Vila Nova FC', 'Novorizontino SP', 'Vila Nova FC', 1.90],
  [11730, 'Deportes Quindio', 'Real Cartagena', 'Real Cartagena', 3.00],
  [11715, 'Boca Juniors', 'Always Ready', 'Boca Juniors', 1.30],
  [11715, 'Universidad Catolica', 'Sporting Cristal', 'Universidad Catolica', 1.61],
  [11715, 'Cerro Porteño', 'Colon de Santa Fe', 'Colon de Santa Fe', 2.20],
  [11700, 'Coyotes FC', 'Tampico Madero', 'Coyotes FC', 2.05],
  [11715, 'Deportivo La Guaira', 'Ceara CE', 'Ceara CE', 1.85],
  [11715, 'Oriente Petrolero', 'Union Santa Fe', 'Union Santa Fe', 2.10],
  [11500, 'Atletico Huila (W)', 'Junior de Barranquilla (W)', '0.5', 1.40],
  [11930, 'Cruzeiro MG', 'Brusque FC', 'Cruzeiro MG', 1.65],
  [11940, 'Atletico Bucaramanga', 'Cortulua', 'Atletico Bucaramanga', 1.85],
  [11930, 'Flamengo RJ', 'Talleres de Cordoba', 'Flamengo RJ', 1.42],
  [11930, 'Palmeiras SP', 'Club Independiente Petrolero', 'Palmeiras SP', 1.22],
  [11930, 'Penarol Montevideo', 'Olimpia Asuncion', 'Penarol Montevideo', 1.85],
  [11905, 'Correcaminos', 'Oaxaca st	2ª Mitad - más/Menos de Oaxaca', 2.00],
  [11930, 'CA Independiente', 'Club General Caballero Jlm', 'CA Independiente', 1.60],
  [11930, 'LDU Quito', 'Antofagasta', 'LDU Quito', 1.45],
  [11930, 'Defensa Y Justicia', 'Atletico GO', 'Atletico GO', 2.70]
]

let PARTIDOS_SIN_CUOTA = [
  [11700, "ZA-BRA2", "Vila Nova", "Novorizontino", 5],
  [11930, "ZA-BRA2", "Cruzeiro", "Brusque", 5],
  [11940, "ZA-COL1", "Atl. Bucaramanga", "Cortuluá", 5],
  [11730, "ZA-COL2", "Quindío", "Real Cartagena", 6],
  [11500, "ZM-COLF", "Atl. Huila F", "Junior F", 11],
  [11400, "U-CHAMP", "Bayern Múnich", "Villarreal", 1],
  [11400, "U-CHAMP", "Real Madrid", "Chelsea", 1],
  [11345, "R-INGO", "Burton", "Wigan", 4],
  [11345, "R-INGO", "Portsmouth", "Rotherham", 9],
  [11700, "ZA-MEX2", "Tlaxcala", "Tampico Madero", 7],
  [11905, "ZA-MEX2", "Correcaminos U.A.T.", "Alebrijes Oaxaca", 10],
  [12105, "ZA-MEX2", "Cimarrones de Sonora", "Tepatitlán", 10],
  [12100, "ZA-CONC", "Cruz Azul (Mex)", "Pumas UNAM (Mex)", 7],
  [11715, "ZA-LIBE", "Boca Jrs. (Arg)", "Always Ready (Bol)", 1],
  [11715, "ZA-LIBE", "Cerro Porteño (Par)", "Colón (Arg)", 10],
  [11715, "ZA-LIBE", "U. Católica (Chi)", "Sporting Cristal (Per)", 7],
  [11930, "ZA-LIBE", "Flamengo (Bra)", "Talleres (Arg)", 7],
  [11930, "ZA-LIBE", "Palmeiras (Bra)", "Independiente Petrolero (Bol)", 1],
  [11930, "ZA-LIBE", "Peñarol (Uru)", "Olimpia (Par)", 7],
  [11715, "ZA-SUDA", "La Guaira (Ven)", "Ceará (Bra)", 8],
  [11715, "ZA-SUDA", "Oriente Petrolero (Bol)", "Unión Santa Fe (Arg)", 8],
  [11930, "ZA-SUDA", "Defensa y Justicia (Arg)", "Atlético-GO (Bra)", 10],
  [11930, "ZA-SUDA", "Independiente (Arg)", "General Caballero JLM (Par)", 1],
  [11930, "ZA-SUDA", "LDU Quito (Ecu)", "Antofagasta (Chi)", 7]
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

