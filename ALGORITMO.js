let PARTIDOS_CON_CUOTA = [
  [11805, 'Villa Dalmine', 'Club Atletico Atlanta', 'Villa Dalmine', 2.40],
  [11800, 'Deportes Quindio', 'Tigres FC', 'Deportes Quindio', 1.65],
  [11930, 'Universidad Catolica Quito', 'The Strongest', 'Universidad Catolica Quito', 1.66],
  [12000, 'CD Tapatio', 'Correcaminos', 'CD Tapatio', 1.90],
  [11930, 'Montevideo Wanderers', 'Cerro Largo FC', 'Montevideo Wanderers', 2.00],
  [11930, 'Delfin', 'Club Nueve de Octubre', 'Delfin', 2.25],
  [11930, 'Jorge Wilstermann', 'Guabira', 'Jorge Wilstermann', 1.50],
  [11930, 'La Equidad', 'CD Junior', 'CD Junior', 2.60],
  [11815, 'Academia Puerto Cabello', 'Aragua FC', '0.5', 1.48],
  [11430, 'Wolverhampton Wanderers', 'Watford', 'Wolverhampton Wanderers', 1.95],
  [11430, 'Norwich City', 'Chelsea', 'Chelsea', 1.48],
  [11430, 'Southampton', 'Newcastle', 'Newcastle', 2.25],
  [11445, 'Leeds United', 'Aston Villa', 'Aston Villa', 1.95],
  [11245, 'Slavia Prague', 'LASK Linz', 'Slavia Prague', 1.72],
  [11500, 'Marseille', 'FC Basel', 'Marseille', 1.61],
  [11500, 'Leicester City', 'Rennes', 'Leicester City', 1.83],
  [11500, 'PSV Eindhoven', 'FC Copenhagen', 'PSV Eindhoven', 1.61],
  [11245, 'Vitesse', 'Roma', 'Roma', 1.76],
  [11245, 'Partizan Belgrade', 'Feyenoord Rotterdam', 'Feyenoord Rotterdam', 2.05],
  [11245, 'PAOK Thessaloniki', 'KAA Gent', 'KAA Gent', 2.40],
  [11500, 'Bodo Glimt', 'AZ Alkmaar', 'AZ Alkmaar', 1.85],
  [11245, 'Sevilla', 'West Ham United', 'Sevilla', 2.05],
  [11500, 'Barcelona', 'Galatasaray', 'Barcelona', 1.30],
  [11500, 'Atalanta', 'Bayer Leverkusen', 'Atalanta', 1.72],
  [11500, 'Glasgow Rangers', 'Red Star Belgrade', 'Glasgow Rangers', 1.75],
  [11500, 'Sporting Braga', 'AS Monaco', 'Sporting Braga', 2.30],
  [11800, 'Boyaca Chico FC', 'Valledupar', 'Boyaca Chico FC', 1.60],
  [11500, 'Leones FC', 'Real Cartagena', 'Real Cartagena', 2.50],
  [11500, 'Orsomarso', 'Barranquilla', 'Barranquilla', 2.40],
  [11530, 'Cortulua', 'Union Magdalena', 'Union Magdalena', 2.35],
  [11715, 'Nacional Asuncion', 'Guairena FC', 'Nacional Asuncion', 2.00],
  [11715, 'Union Espanola', 'Antofagasta', 'Union Espanola', 1.90],
  [11715, 'Hermanos Colmenarez', 'Deportivo La Guaira', 'Deportivo La Guaira', 2.25],
  [11600, 'Mineros de Guayana', 'Deportivo Lara', '0.5', 1.48],
]

let PARTIDOS_SIN_CUOTA = [
  [11245,"U-EURO","Sevilla","West Ham",5],[11245,"U-CONF","Slavia Praga","LASK",7],[11245,"U-CONF","Vitesse","Roma",6],[11245,"U-CONF","Partizan","Feyenoord",8],[11245,"U-CONF","PAOK","Gent",10],[11430,"R-ING1","Wolves","Watford",7],[11430,"R-ING1","Norwich","Chelsea",2],[11430,"R-ING1","Southampton","Newcastle",10],[11445,"R-ING1","Leeds Utd","Aston Villa",8],[11500,"U-EURO","Barcelona","Galatasaray",1],[11500,"U-CONF","Marsella","Basilea",5],[11500,"U-EURO","Atalanta","Bayer Leverkusen",7],[11500,"U-EURO","Rangers","Estrella Roja",7],[11500,"U-CONF","Leicester","Stade Rennais",7],[11500,"U-CONF","PSV","Copenhague",7],[11500,"U-CONF","Bodo/Glimt","AZ Alkmaar",8],[11500,"U-EURO","SC Braga","Mónaco",9],[11500,"ZA-COL2","Leones","Real Cartagena",10],[11500,"ZA-COL2","Orsomarso","Barranquilla",10],[11530,"ZA-COL2F","Cortuluá","U. Magdalena",10],[11600,"ZA-VEN1","Mineros","Lara",11],[11715,"ZA-SUDA","Nacional Asunción (Par)","Guairena FC (Par)",7],[11715,"ZA-SUDA","U. Española (Chi)","Antofagasta (Chi)",7],[11715,"ZA-SUDA","Hermanos Colmenarez (Ven)","La Guaira (Ven)",8],[11800,"ZA-COL2","Boyacá Chicó","Valledupar",5],[11800,"ZA-COL2","Quindío","Tigres",5],[11805,"ZA-ARG2","Villa Dálmine","Atlanta",7],[11815,"ZA-VEN1","Puerto Cabello","Aragua",11],[11930,"ZA-SUDA","Wanderers (Uru)","Cerro Largo (Uru)",7],[11930,"ZA-SUDA","La Equidad (Col)","Junior (Col)",2],[11930,"ZA-LIBE","U. Católica (Ecu)","The Strongest (Bol)",7],[11930,"ZA-SUDA","Delfín (Ecu)","Nueve de Octubre (Ecu)",7],[11930,"ZA-SUDA","J. Wilstermann (Bol)","Guabirá (Bol)",7],[12000,"ZA-MEX2","Tapatio","Correcaminos U.A.T.",7]
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

