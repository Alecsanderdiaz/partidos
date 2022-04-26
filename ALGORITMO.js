let PARTIDOS_CON_CUOTA = [
  [11900, 'Imbabura SC', 'America De Quito', '0.5', 1.50],
  [11930, 'Cruzeiro MG', 'Londrina PR', 'Cruzeiro MG', 1.70],
  [11830, 'Vila Nova FC', 'Tombense MG', 'Vila Nova FC', 1.95],
  [11930, 'Bahia BA', 'Sampaio Correa MA', 'Bahia BA', 1.70],
  [11830, 'Brusque FC', 'Csa AL', 'Csa AL', 2.25],
  [11900, 'Union Espanola', 'Cobresal', 'Union Espanola', 1.85],
  [11940, 'Deportivo Pasto', 'Patriotas Boyaca', 'Deportivo Pasto', 2.10],
  [11930, 'Corinthians SP', 'Boca Juniors', 'Corinthians SP', 1.95],
  [11930, 'Talleres de Cordoba', 'Sporting Cristal', 'Talleres de Cordoba', 1.55],
  [11930, 'Independiente Del Valle', 'Atletico MG', 'Atletico MG', 2.05],
  [11900, 'Mineros de Zacatecas', 'Atletico Morelia', 'Mineros de Zacatecas', 1.90],
  [11930, 'Fluminense RJ', 'Union Santa Fe', 'Fluminense RJ', 1.85],
  [11930, 'CD Everton Vina Del Mar', 'Ayacucho FC', 'CD Everton Vina Del Mar', 1.55],
  [11930, 'Independiente Medellin', 'Internacional RS', 'Internacional RS', 2.05],
  [11700, 'Sport Recife PE', 'Ituano SP', 'Sport Recife PE', 2.00],
  [11700, 'Novorizontino SP', 'Chapecoense SC', 'Chapecoense SC', 2.50],
  [11715, 'Club Independiente Petrolero', 'Deportivo Tachira', 'Club Independiente Petrolero', 1.55],
  [11715, 'Velez Sarsfield', 'Nacional Montevideo', 'Velez Sarsfield', 1.75],
  [11715, 'Estudiantes de La Plata', 'Bragantino SP', 'Bragantino SP', 2.15],
  [11715, 'Libertad Asuncion', 'Atletico PR', 'Atletico PR', 2.45],
  [11715, 'Club General Caballero Jlm', 'Ceara CE', 'Ceara CE', 1.75],
  [11715, 'Deportivo La Guaira', 'CA Independiente', 'CA Independiente', 1.80],
  [11345, 'Southend United', 'Boreham Wood', '0.5', 1.55],
  [11400, 'Manchester City', 'Real Madrid', 'Real Madrid', 2.65],
  [11345, 'Swansea', 'Bournemouth', 'Bournemouth', 1.76],
  [11345, 'Barnsley', 'Blackpool', 'Blackpool', 2.00],
  [11345, 'Fulham', 'Nottingham Forest', 'Nottingham Forest', 2.35],
  [11345, 'Sunderland', 'Rotherham', 'Sunderland', 1.95],
  [11345, 'Fleetwood Town', 'Sheffield Wednesday', 'Sheffield Wednesday', 1.75],
  [11345, 'Portsmouth', 'Wigan', 'Wigan', 1.95],
  [11345, 'Exeter City', 'Barrow FC', 'Exeter City', 1.60],
  [11345, 'Mansfield Town', 'Stevenage', 'Mansfield Town', 1.66],
  [11345, 'Sutton United', 'Crawley Town', 'Sutton United', 1.72],
  [11345, 'Swindon Town', 'Forest Green Rovers', 'Forest Green Rovers', 2.15]
]

let PARTIDOS_SIN_CUOTA = [
  [11700,"ZA-BRA2","Novorizontino","Chapecoense",6],[11700,"ZA-BRA2","Sport Recife","Ituano",5],[11830,"ZA-BRA2","Brusque","CSA",6],[11830,"ZA-BRA2","Vila Nova","Tombense",7],[11930,"ZA-BRA2","Bahia","Sampaio Correa",7],[11930,"ZA-BRA2","Cruzeiro","Londrina",3],[11900,"ZA-CHI1","U. Española","Cobresal",7],[11940,"ZA-COL1","Dep. Pasto","Patriotas",7],[11900,"*ZA-ECU2","Imbabura","América de Quito",11],[11400,"U-CHAM","Manchester City","Real Madrid",2],[11345,"ZR-ING2","Barnsley","Blackpool",8],[11345,"ZR-ING2","Fulham","Nottingham Forest",10],[11345,"ZR-ING2","Swansea","Bournemouth",6],[11345,"ZR-INGO","Fleetwood","Sheffield Wed",8],[11345,"ZR-INGO","Portsmouth","Wigan",8],[11345,"ZR-INGO","Sunderland","Rotherham",7],[11345,"ZR-INGT","Exeter","Barrow",5],[11345,"ZR-INGT","Mansfield","Stevenage",7],[11345,"ZR-INGT","Sutton","Crawley",7],[11345,"ZR-INGT","Swindon","Forest Green",10],[11345,"*ZR-INGN","Bromley","Aldershot",12],[11345,"*ZR-INGN","Dover","Notts County",12],[11345,"*ZR-INGN","Southend","Boreham Wood",11],[11345,"*ZR-INGN","Weymouth","Wrexham",12],[11900,"ZA-MEX2","Mineros","Atl. Morelia",7],[12105,"ZA-MEX2","Cimarrones de Sonora","Alebrijes Oaxaca",7],[11715,"ZA-LIBE","Estudiantes L.P. (Arg)","Bragantino (Bra)",10],[11715,"ZA-LIBE","Independiente Petrolero (Bol)","Dep. Táchira (Ven)",7],[11715,"ZA-LIBE","Libertad (Par)","Athletico-PR (Bra)",10],[11715,"ZA-LIBE","Vélez Sarsfield (Arg)","Nacional (Uru)",7],[11930,"ZA-LIBE","Corinthians (Bra)","Boca Jrs. (Arg)",7],[11930,"ZA-LIBE","Ind. del Valle (Ecu)","Atlético-MG (Bra)",8],[11930,"ZA-LIBE","Talleres (Arg)","Sporting Cristal (Per)",7],[11715,"ZA-SUDA","General Caballero JLM (Par)","Ceará (Bra)",8],[11715,"ZA-SUDA","La Guaira (Ven)","Independiente (Arg)",8],[11930,"ZA-SUDA","Everton (Chi)","Ayacucho (Per)",7],[11930,"ZA-SUDA","Fluminense (Bra)","Unión Santa Fe (Arg)",5],[11930,"ZA-SUDA","Ind. Medellín (Col)","Internacional (Bra)",8]
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

