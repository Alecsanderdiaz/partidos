let PARTIDOS_CON_CUOTA = [
  [11600, 'Zulia FC', 'Carabobo FC', '0.5', 1.48],
  [11600, 'CA Tigre', 'Estudiantes de La Plata', 'CA Tigre Total', 2.05],
  [11510, 'CA Belgrano', 'CD Maipu', 'CA Belgrano Total', 2.15],
  [11400, 'Atletico Rafaela', 'Brown de Adrogue', 'Brown de Adrogue Total', 2.60],
  [11400, 'Chaco For Ever', 'Instituto AC Cordoba', 'Instituto AC Cordoba Total', 2.95],
  [11540, 'Almirante Brown', 'Club Almagro', 'Club Almagro Total', 2.40],
  [11600, 'Atletico GO', 'Fortaleza CE', 'Atletico GO Total', 2.05],
  [11400, 'Sao Paulo SP', 'Fluminense RJ', 'Fluminense RJ Total', 2.65],
  [11600, 'Botafogo RJ', 'Atletico MG', 'Atletico MG Total', 1.85],
  [11400, 'Nautico PE', 'Chapecoense SC', 'Chapecoense SC Total', 2.35],
  [11400, 'Universidad de Chile', 'Nublense', 'Universidad de Chile Total', 2.70],
  [11605, 'Independiente Santa Fe', 'Cortulua', 'Independiente Santa Fe Total', 1.72],
  [11500, 'Deportes Quindio', 'CD Real Santander', 'Deportes Quindio Total', 1.65],
  [11500, 'Valledupar', 'Boyaca Chico FC', 'Boyaca Chico FC Total', 2.25],
  [11400, 'Mushuc Runa', 'Club Nueve de Octubre', 'Mushuc Runa Total', 2.55],
  [11608, 'New York Red Bulls', 'New York City', 'New York Red Bulls Total', 1.85],
  [11408, 'Atlanta United', 'Orlando City SC', 'Orlando City SC Total', 2.20],
  [11500, 'Club General Caballero JLM', 'Nacional Asuncion', 'Nacional Asuncion Total', 2.00],
  [11530, 'FBC Melgar', 'Sporting Cristal', 'Sporting Cristal Total', 2.87],
  [11030, 'Pogon Szczecin', 'Widzew Lodz', 'Pogon Szczecin Total', 1.55],
  [11330, 'FCSB', 'Universitatea Cluj', 'FCSB Total', 1.50],
  [11030, 'Farul Constanta', 'FC U Craiova 1948', 'FC U Craiova 1948 Total', 2.55],
  [11200, 'Dinamo Moscow', 'Rostov', 'Dinamo Moscow Total', 1.70],
  [11200, 'Krasnodar', 'Fakel Voronezh', 'Krasnodar Total', 1.65],
  [11100, 'Godoy Cruz', 'Atletico Lanus', 'Godoy Cruz Total', 1.76],
  [11100, 'Union Santa Fe', 'Huracan', 'Huracan Total', 2.45],
  [11330, 'Banfield', 'San Lorenzo', 'San Lorenzo Total', 3.00],
  [11300, 'CA San Telmo', 'Sacachispas FC', 'CA San Telmo Total', 2.10],
  [11330, 'Gimnasia Jujuy', 'Club Atletico Alvarado', 'Gimnasia Jujuy Total', 2.10],
  [11305, 'Guillermo Brown', 'Chacarita Juniors', 'Chacarita Juniors Total', 2.85],
  [11400, 'Cruzeiro MG', 'Novorizontino SP', 'Cruzeiro MG Total', 1.75],
  [11130, 'Deportes La Serena', 'Antofagasta', 'Deportes La Serena Total', 2.05],
  [11400, 'Envigado FC', 'Alianza Petrolera', 'Envigado FC Total', 2.35],
  [11100, 'Academia Cantolao', 'EM Deportivo Binacional', 'EM Deportivo Binacional Total', 2.00],
  [11300, 'FC Carlos Stein', 'Ayacucho FC', 'Ayacucho FC Total', 2.05],
  [11400, 'Cerro Largo FC', 'Nacional Montevideo', 'Nacional Montevideo Total', 1.95]
]

let PARTIDOS_SIN_CUOTA = [
  [11315,"ZA-PER1","Alianza Lima","Sport Boys",5],[11730,"ZA-PAR1","Cerro Porteño","12 de Octubre",5],[11900,"ZA-MEX1","Tigres UANL","Tijuana",5],[11400,"ZA-URU1","Cerro Largo","Nacional",6],[11830,"ZA-ARG1","Vélez Sarsfield","River Plate",6],[11030,"YE-POL1","Pogon Szczecin","Widzew Lodz",7],[11100,"ZA-ARG1","Godoy Cruz","Lanús",7],[11130,"ZA-CHI1","La Serena","Antofagasta",7],[11200,"YE-RUS1","Dinamo Moscú","Rostov",7],[11200,"YE-RUS1","Krasnodar","F. Voronezh",7],[11300,"ZA-ARG2","San Telmo","Sacachispas",7],[11330,"ZA-ARG2","Gimnasia Jujuy","Alvarado",7],[11330,"YE-RUM1","FCSB","U. Cluj",7],[11400,"ZA-BRA2","Cruzeiro","Novorizontino",7],[11400,"ZA-COL1","Envigado","Alianza Petrolera",7],[11500,"ZA-COL2","Quindío","Real Santander",7],[11510,"ZA-ARG2","Belgrano","Deportivo Maipu",7],[11600,"ZA-ARG1","Tigre","Estudiantes L.P.",7],[11600,"ZA-BRA1","Atlético-GO","Fortaleza",7],[11600,"ZA-EST1","New York Red Bulls","New York City",7],[11605,"ZA-COL1","Ind. Santa Fe","Cortuluá",7],[11630,"ZA-URU1","Defensor Sp.","Danubio",7],[11830,"ZA-EST1","Columbus Crew","Cincinnati",7],[11900,"ZA-CHI1","Huachipato","OHiggins",7],[12030,"ZA-EST1","Real Salt Lake","Sporting Kansas City",7],[12030,"ZA-EST1","San Jose Earthquakes","Houston Dynamo",7],[12130,"ZA-EST1","Portland Timbers","Vancouver Whitecaps",7],[11100,"ZA-PER1","AD Cantolao","Binacional",8],[11300,"ZA-PER1","Carlos Stein","Ayacucho",8],[11500,"ZA-COL2","Valledupar","Boyacá Chicó",8],[11500,"ZA-PAR1","General Caballero JLM","Nacional Asunción",8],[11540,"ZA-ARG2","Alte. Brown","Almagro",8],[11600,"ZA-BRA1","Botafogo","Atlético-MG",8],[11630,"ZA-CHI1","Curicó Unido","U. Católica",8],[11630,"ZA-ECU1","Guayaquil City","U. Católica",8],[11700,"ZA-MEX1","Atlético de San Luis","Monterrey",8],[11400,"ZA-CHI1","U. De Chile","Ñublense",9],[11400,"ZA-ECU1","Mushuc Runa","Nueve de Octubre",9],[11030,"YE-RUM1","Farul Constanta","U Craiova 1948",10],[11100,"ZA-ARG1","Unión Santa Fe","Huracán",10],[11200,"ZA-MEX1","Pumas UNAM","Necaxa",10],[11305,"ZA-ARG2","Guillermo Brown","Chacarita",10],[11330,"ZA-ARG1","Banfield","San Lorenzo",10],[11400,"ZA-ARG2","Atl. Rafaela","Brown Adrogué",10],[11400,"ZA-ARG2","Chaco For Ever","Instituto",10],[11400,"ZA-BRA1","Sao Paulo","Fluminense",10],[11400,"ZA-BRA2","Náutico","Chapecoense",10],[11400,"ZA-EST1","Atlanta Utd","Orlando City",10],[11530,"ZA-PER1","Melgar","Sporting Cristal",10],[11700,"ZA-BRA1","América-MG","Bragantino",10],[11900,"ZA-ECU1","Emelec","Ind. del Valle",10],[11930,"ZA-EST1","Nashville SC","Los Angeles FC",10],[11600,"*ZA-VEN1","Zulia","Carabobo",11],[11830,"*ZA-VEN1","Portuguesa","Zamora",11]
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

