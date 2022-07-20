let PARTIDOS_CON_CUOTA = [
  [11930, 'Manchester City', 'America', 'Manchester City', 1.25],
  [11900, 'Minnesota United FC', 'Everton', 'Everton', 1.70],
  [11930, 'Huracan', 'Godoy Cruz', 'Huracan', 2.15],
  [11930, 'Atletico Lanus', 'Velez Sarsfield', 'Velez Sarsfield', 2.15],
  [11930, 'Corinthians SP', 'Coritiba PR', 'Corinthians SP', 1.80],
  [11930, 'Santos SP', 'Botafogo RJ', 'Santos SP', 1.90],
  [11930, 'Novorizontino SP', 'Operario PR', 'Operario PR', 3.20],
  [11905, 'Club Celaya', 'CD Tapatio', 'CD Tapatio', 2.55],
  [11900, 'Independiente Juniors', 'Libertad (Ecu)', '0.5', 1.48],
  [11830, 'Charlotte FC', 'Chelsea', 'Chelsea', 1.35],
  [11830, 'DC United', 'Bayern Munich', 'Bayern Munich', 1.25],
  [11830, 'Orlando City SC', 'Arsenal', 'Arsenal', 1.30],
  [11830, 'Flamengo RJ', 'Juventude RS', 'Flamengo RJ', 1.50],
  [11830, 'Internacional RS', 'Sao Paulo SP', 'Internacional RS', 2.00],
  [11815, 'Club Tacuary', 'Cerro Porteño', 'Cerro Porteño', 1.85],
  [11700, 'Estudiantes de La Plata', 'CA Barracas Central', 'Estudiantes de La Plata', 1.65],
  [11700, 'Defensa Y Justicia', 'CA Independiente', 'CA Independiente', 2.37],
  [11700, 'Bragantino SP', 'Fortaleza CE', 'Bragantino SP', 1.85],
  [11730, 'Atletico PR', 'Atletico GO', 'Atletico PR', 2.00],
  [11700, 'Goias GO', 'Fluminense RJ', 'Fluminense RJ', 1.90],
  [11700, 'Chapecoense SC', 'Guarani SP', 'Chapecoense SC', 2.10],
  [11700, 'Ponte Preta SP', 'Nautico PE', 'Ponte Preta SP', 1.95],
  [11700, 'Csa AL', 'Cruzeiro MG', 'Cruzeiro MG', 2.45],
  [11700, 'Alacranes De Durango', 'Venados FC', 'Venados FC', 2.40],
  [11700, 'Penarol Montevideo', 'Rentistas', 'Penarol Montevideo', 1.80],
]

let PARTIDOS_SIN_CUOTA = [
  [11900,"*ZA-ECU2","Ind. Juniors","Libertad",11],[11900,"*ZA-ECUC","Mushuc Runa","Cumbaya",12],[11800,"*ZA-EST2","Louisville City","Phoenix Rising",12],[11830,"AMI","Charlotte (Usa)","Chelsea (Eng)",2],[11830,"AMI","DC United (Usa)","Bayern Múnich (Ger)",2],[11830,"AMI","Orlando City (Usa)","Arsenal (Eng)",2],[11900,"AMI","Minnesota United (Usa)","Everton (Eng)",2],[11930,"AMI","Manchester City (Eng)","Club América (Mex)",1],[12130,"AMI","San Jose Earthquakes (Usa)","Celta de Vigo (Esp)",2],[11900,"FEM","Colombia F","Chile F",12],[11900,"FEM","Ecuador F","Paraguay F",12],[11700,"ZA-ARG1","Defensa y Justicia","Independiente",10],[11700,"ZA-ARG1","Estudiantes L.P.","Barracas Central",7],[11930,"ZA-ARG1","Huracán","Godoy Cruz",7],[11930,"ZA-ARG1","Lanús","Vélez Sarsfield",8],[11700,"ZA-BRA1","Bragantino","Fortaleza",5],[11700,"ZA-BRA1","Goiás","Fluminense",6],[11730,"ZA-BRA1","Athletico-PR","Atlético-GO",5],[11830,"ZA-BRA1","Flamengo","Juventude",5],[11830,"ZA-BRA1","Internacional","Sao Paulo",7],[11930,"ZA-BRA1","Corinthians","Coritiba",5],[11930,"ZA-BRA1","Santos","Botafogo",5],[11700,"ZA-BRA2","Chapecoense","Guaraní",7],[11700,"ZA-BRA2","CSA","Cruzeiro",4],[11700,"ZA-BRA2","Ponte Preta","Náutico",7],[11930,"ZA-BRA2","Novorizontino","Operario",10],[12105,"ZA-MEX1","Guadalajara","León",7],[11700,"ZA-MEX2","Alacranes","Venados",10],[11905,"ZA-MEX2","Celaya","Tapatio",10],[12105,"ZA-MEX2","Raya2","Atlante",8],[11815,"ZA-PAR1","Tacuary","Cerro Porteño",6],[11700,"ZA-URU1","Peñarol","Rentistas",5]
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

