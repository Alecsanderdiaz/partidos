let PARTIDOS_CON_CUOTA = [
  [12100, 'Club Sport Emelec', 'LDU Quito', 'LDU Quito', 2.20],
  [12100, 'Atletico San Luis', 'Mazatlan FC', 'Atletico San Luis', 1.95],
  [11400, 'Girona', 'Malaga', 'Girona', 1.70],
  [11345, 'Ayr United', 'Hamilton Academical', '0.5', 1.45],
  [11345, 'Hull City', 'Huddersfield', 'Huddersfield', 2.25],
  [11415, 'Sporting Braga', 'Benfica', 'Benfica', 1.85],
  [11930, 'Banfield', 'Argentinos Juniors', 'Banfield', 2.35],
  [11430, 'Gimnasia LP', 'Talleres de Cordoba', 'Talleres de Cordoba', 2.40],
  [11700, 'Central Cordoba', 'Huracan', 'Huracan', 2.50],
  [11700, 'Patronato Parana', 'Union Santa Fe', 'Union Santa Fe', 2.25],
  [11900, 'Estudiantes Rio Cuarto', 'Atletico Rafaela', 'Estudiantes Rio Cuarto', 2.35],
  [11910, 'CA Belgrano', 'CA All Boys', 'CA Belgrano', 1.85],
  [11830, 'OHiggins', 'Coquimbo', 'OHiggins', 1.95],
  [11530, 'Deportes La Serena', 'CD Everton Vina Del Mar', 'CD Everton Vina Del Mar', 2.15],
  [11730, 'Real Cartagena', 'Llaneros FC', 'Real Cartagena', 1.90],
  [11900, 'Universidad Catolica Quito', 'Barcelona SC', 'Barcelona SC', 2.15],
  [11915, 'Resistencia', 'Olimpia Asuncion', 'Olimpia Asuncion', 1.70],
  [11530, 'Ayacucho FC', 'UTC Cajamarca', 'UTC Cajamarca', 2.35],
  [11900, 'Leones Negros', 'Tampico Madero', 'Tampico Madero', 2.55],
  [11700, 'Cerro Porteño', '12 de Octubre', 'Cerro Porteño', 1.55],
  [11800, 'Rentistas', 'Penarol Montevideo', 'Penarol Montevideo', 1.65],
  [11400, 'Metropolitano SC', 'Carabobo FC', '0.5', 1.57],
  [11615, 'Zamora FC', 'Mineros de Guayana', '0.5', 1.45],
  [11830, 'Deportivo La Guaira', 'Estudiantes de Merida', '0.5', 1.45],
  [11930, 'CA Barracas Central', 'CA Independiente', 'CA Independiente', 1.85],
  [11930, 'Gimnasia Jujuy', 'Chaco For Ever', 'Chaco For Ever', 2.55],
  [11940, 'La Equidad', 'Deportivo Cali', 'Deportivo Cali', 2.55],
  [11330, 'Union Berlin', 'Cologne', 'Cologne', 2.20],
  [11130, 'FC Ingolstadt 04', 'FC Erzgebirge Aue', 'FC Ingolstadt 04', 1.85],
  [11130, 'Dynamo Dresden', 'Schalke 04', 'Schalke 04', 1.65],
  [11200, 'SV Meppen', 'SV Wehen Wiesbaden', 'SV Wehen Wiesbaden', 1.76],
  [11300, 'Volendam', 'FC Oss', 'Volendam', 1.45],
  [11300, 'AZ Alkmaar (R)', 'PSV (R)', 'AZ Alkmaar (R)', 1.95],
  [11300, 'Roda JC', 'Utrecht (R)', 'Roda JC', 1.33],
  [11300, 'Almere City FC', 'SBV Excelsior', 'SBV Excelsior', 1.76],
  [11300, 'FC Dordrecht', 'FC Eindhoven', 'FC Eindhoven', 1.55],
  [11300, 'De Graafschap', 'FC Emmen', 'FC Emmen', 2.10],
  [11300, 'Helmond Sport', 'MVV Maastricht', 'MVV Maastricht', 1.95],
  [11300, 'SC Telstar', 'FC Den Bosch', 'FC Den Bosch', 2.15],
  [11300, 'VVV Venlo', 'ADO Den Haag', 'ADO Den Haag', 1.80],
  [11300, 'NAC Breda', 'Ajax (R)', 'NAC Breda', 1.61],
  [11100, 'Stal Mielec', 'Cracovia Krakow', 'Cracovia Krakow', 2.05],
  [11200, 'Leixoes SC', 'FC Penafiel', 'Leixoes SC', 2.00],
  [10930, 'FC U Craiova 1948', 'CS Mioveni', 'FC U Craiova 1948', 2.15],
  [11230, 'Chindia', 'Dinamo Bucuresti', 'Chindia', 2.15],
  [11100, 'Rubin Kazan', 'FK Khimki', 'Rubin Kazan', 2.15],
  [11200, 'Tuzlaspor', 'Ümraniyespor', '0.5', 1.44],
  [11315, 'Sporting Cristal', 'Deportivo San Martin', 'Sporting Cristal', 1.44],
  [10500, 'Avispa Fukuoka', 'Sagan Tosu', 'Avispa Fukuoka', 2.30],
  [11345, 'Greenock Morton', 'Kilmarnock', '0.5', 1.45],
  [11345, 'Beerschot', 'Club Brugge', 'Club Brugge', 1.40],
  [11330, 'Slask Wroclaw', 'Lech Poznan', 'Lech Poznan', 1.66],
]

let PARTIDOS_SIN_CUOTA = [
  [11330,"ALE1","Union Berlín","Colonia",10],
  [11130,"ALE2","Dynamo Dresden","Schalke",8],
  [11130,"ALE2","Ingolstadt","Aue",7],
  [11200,"ALE3","Meppen","Wehen",8],
  [11430,"ZA-ARG1","Gimnasia L.P.","Talleres",10],
  [11700,"ZA-ARG1","Central Córdoba","Huracán",10],
  [11700,"ZA-ARG1","Patronato","Unión Santa Fe",8],
  [11930,"ZA-ARG1","Banfield","Argentinos Jrs.",7],
  [11930,"ZA-ARG1","Barracas Central","Independiente",8],
  [11900,"ZA-ARG2","Estudiantes Rio Cuarto","Atl. Rafaela",7],
  [11910,"ZA-ARG2","Belgrano","All Boys",7],
  [11930,"ZA-ARG2","Gimnasia Jujuy","Chaco For Ever",10],
  [11345,"YE-BEL1","Beerschot VA","Club Brujas",6],
  [11700,"ZA-BOL1*","Nacional Potosí","Aurora",12],
  [11930,"ZA-BOL1*","Blooming","Always Ready",12],
  [11530,"ZA-CHI1","La Serena","Everton",8],
  [11830,"ZA-CHI1","OHiggins","Coquimbo",7],
  [11940,"ZA-COL1","La Equidad","Deportivo Cali",4],
  [11730,"ZA-COL2","Real Cartagena","Llaneros",5],
  [11900,"ZA-ECU1","U. Católica","Barcelona SC",10],
  [12100,"ZA-ECU1","Emelec","LDU Quito",10],
  [11345,"R-ESC2*","Ayr","Hamilton",10],
  [11345,"R-ESC2*","Morton","Kilmarnock",11],
  [11400,"ESP1","Girona","Málaga",7],
  [11800,"ZA-EST2","Charleston","Las Vegas Lights",12],
  [11345,"R-ING2","Hull","Huddersfield",8],
  [10500,"ZS-JAP1","Avispa Fukuoka","Sagan Tosu",7],
  [12100,"ZA-MEX1","Atlético de San Luis","Mazatlán",7],
  [11900,"ZA-MEX2","Leones Negros","Tampico Madero",10],
  [11300,"YE-HOL2","Almere","Excelsior",10],
  [11300,"YE-HOL2","Breda","Jong Ajax",7],
  [11300,"YE-HOL2","Dordrecht","Eindhoven",8],
  [11300,"YE-HOL2","FC Volendam","Oss",7],
  [11300,"YE-HOL2","Graafschap","FC Emmen",10],
  [11300,"YE-HOL2","Helmond","Maastricht",10],
  [11300,"YE-HOL2","Jong AZ","Jong PSV",9],
  [11300,"YE-HOL2","Roda","Jong Utrecht",7],
  [11300,"YE-HOL2","Telstar","Den Bosch",10],
  [11300,"YE-HOL2","Venlo","Den Haag",8],
  [11700,"ZA-PAR1","Cerro Porteño","12 de Octubre",5],
  [11915,"ZA-PAR1","Resistencia","Olimpia",6],
  [11315,"ZA-PER1","Sporting Cristal","San Martín",5],
  [11530,"ZA-PER1","Ayacucho","UTC",10],
  [11900,"ZA-PER1","Sport Huancayo","Alianza Lima",10],
  [11100,"YE-POL1","Stal Mielec","Cracovia",8],
  [11330,"YE-POL1","Slask","Lech",8],
  [11415,"YE-POR1","SC Braga","Benfica",8],
  [11200,"YE-POR2","Leixoes","Penafiel",7],
  [10930,"YE-RUM1","U Craiova 1948","Mioveni",7],
  [11230,"YE-RUM1","Chindia Targoviste","Dinamo Bucarest",7],
  [11100,"YE-RUS1","Rubin Kazan","Khimki",5],
  [11230,"YE-SUI2","Schaffhausen","Xamax",7],
  [11230,"YE-SUI2","Yverdon","Vaduz",10],
  [11315,"YE-SUI2","Wil","Aarau",8],
  [11200,"YE-TUR2*","Tuzlaspor","Umraniyespor",11],
  [11800,"ZA-URU1","Rentistas","Peñarol",6],
  [11400,"ZA-VEN1","Metropolitanos","Carabobo",11],
  [11615,"ZA-VEN1","Zamora","Mineros",11],
  [11830,"ZA-VEN1","La Guaira","Estudiantes M.",11]
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

