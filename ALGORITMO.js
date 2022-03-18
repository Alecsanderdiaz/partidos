let PARTIDOS_CON_CUOTA = [
  [11715, 'CA Tigre', 'Platense', 'CA Tigre', 1.93],
  [11930, 'CA Barracas Central', 'Sarmiento', 'Sarmiento', 2.15],
  [11705, 'Atletico Rafaela', 'Temperley', 'Atletico Rafaela', 2.30],
  [11910, 'Instituto AC Cordoba', 'Quilmes AC', 'Instituto AC Cordoba', 2.25],
  [11800, 'Agropecuario Argentino', 'CD Maipu', 'CD Maipu', 2.90],
  [11800, 'Tristan Suarez', 'Nueva Chicago', 'Nueva Chicago', 2.70],
  [12000, 'Millonarios', 'Once Caldas', 'Millonarios', 1.93],
  [11730, 'Union Magdalena', 'Cortulua', 'Cortulua', 2.50],
  [11900, 'Independiente Del Valle', 'Orense SC', 'Independiente Del Valle', 1.48],
  [11815, 'Aragua FC', 'Estudiantes de Merida', '0.5', 1.48],
  [11400, 'De Graafschap', 'MVV Maastricht', 'MVV Maastricht', 2.90],
  [11400, 'Helmond Sport', 'NAC Breda', 'NAC Breda', 1.60],
  [11400, 'Ajax (R)', 'FC Eindhoven', 'FC Eindhoven', 1.70],
  [11400, 'PSV (R)', 'Roda JC', 'Roda JC', 1.70],
  [11400, 'Utrecht (R)', 'AZ Alkmaar (R)', 'AZ Alkmaar (R)', 1.90],
  [11400, 'FC Oss', 'SBV Excelsior', 'SBV Excelsior', 1.55],
  [11200, 'Zaglebie Lubin', 'Warta Poznan', 'Zaglebie Lubin', 2.20],
  [11430, 'Pogon Szczecin', 'Wisla Krakow', 'Pogon Szczecin', 1.60],
  [11515, 'FC Vizela', 'FC Famalicao', 'FC Famalicao', 2.15],
  [11300, 'Academica Viseu', 'Rio Ave', 'Rio Ave', 1.76],
  [11415, 'FC Vaduz', 'FC Thun', 'FC Vaduz', 1.72],
  [11330, 'Neuchatel Xamax FC', 'FC Winterthur', 'FC Winterthur', 1.72],
  [11200, 'Karagumruk', 'Kayserispor', 'Karagumruk', 1.76],
  [11200, 'Caykur Rizespor', 'Trabzonspor', 'Trabzonspor', 1.75],
  [11400, 'CA Aldosivi', 'Patronato Parana', 'CA Aldosivi', 2.40],
  [11305, 'Brown de Adrogue', 'Estudiantes Rio Cuarto', 'Brown de Adrogue', 2.40],
  [11400, 'CA San Telmo', 'Deportivo Riestra', 'CA San Telmo', 2.20],
  [11530, 'San Martin de San Juan', 'Villa Dalmine', 'San Martin de San Juan', 2.30],
  [11430, 'VfL Bochum', 'Borussia Monchengladbach', 'Borussia Monchengladbach', 1.85],
  [11230, 'FC St. Pauli', '1. FC Heidenheim', 'FC St. Pauli', 1.65],
  [11230, 'FC Erzgebirge Aue', 'Karlsruher SC', 'Karlsruher SC', 1.85],
  [11300, 'Wurzburger Kickers', 'FC Viktoria Köln', 'FC Viktoria Köln', 1.93],
  [11500, 'Athletic Bilbao', 'Getafe', 'Athletic Bilbao', 1.93],
  [11500, 'SD Huesca', 'Burgos CF', 'SD Huesca', 1.70],
  [11500, 'Saint Etienne', 'Troyes', 'Saint Etienne', 1.90],
  [11245, 'Sassuolo', 'Spezia', 'Sassuolo', 1.61],
  [11500, 'Génova', 'Torino', 'Torino', 2.25],
  [11445, 'Dunfermline', 'Greenock Morton', '0.5', 1.48],
  [11500, 'Wolverhampton Wanderers', 'Leeds United', 'Wolverhampton Wanderers', 1.95],
  [11445, 'Newport', 'Hartlepool', 'Newport', 1.75],
  [11330, 'CS Voluntari', 'CS U Craiova', 'CS U Craiova', 1.93],
  [11445, 'St. Gilloise', 'KV Oostende', 'St. Gilloise', 1.44],
  [11400, 'Heerenveen', 'Heracles Almelo', 'Heracles Almelo', 2.30],
  [11400, 'Almere City FC', 'FC Den Bosch', 'Almere City FC', 1.42],
  [11400, 'ADO Den Haag', 'Volendam', 'ADO Den Haag', 1.66],
  [11400, 'SC Telstar', 'FC Dordrecht', 'SC Telstar', 1.50],
]

let PARTIDOS_SIN_CUOTA = [
[11200,"YE-POL1","Zaglebie","Warta",7],[11200,"YE-TUR1","Karagumruk","Kayserispor",7],[11200,"YE-TUR1","Rizespor","Trabzonspor",6],[11230,"ALE2","St. Pauli","Heidenheim",7],[11230,"ALE2","Aue","Karlsruher",8],[11245,"ITA1","Sassuolo","Spezia",7],[11300,"ALE3","Würzburger Kickers","Viktoria Köln",8],[11300,"YE-POR2","Academico Viseu","Rio Ave",8],[11305,"ZA-ARG2","Brown Adrogué","Estudiantes Rio Cuarto",7],[11330,"Y-RUM1","FC Voluntari","Univ. Craiova",8],[11330,"YE-SUI2","Xamax","Winterthur",8],[11400,"ZA-ARG1","Aldosivi","Patronato",9],[11400,"ZA-ARG2","San Telmo","Dep. Riestra",7],[11400,"YE-HOL1","Heerenveen","Heracles",10],[11400,"YE-HOL2","Almere","Den Bosch",7],[11400,"YE-HOL2","Den Haag","FC Volendam",7],[11400,"YE-HOL2","Telstar","Dordrecht",7],[11400,"YE-HOL2","Graafschap","Maastricht",10],[11400,"YE-HOL2","Helmond","Breda",8],[11400,"YE-HOL2","Jong Ajax","Eindhoven",10],[11400,"YE-HOL2","Jong PSV","Roda",8],[11400,"YE-HOL2","Jong Utrecht","Jong AZ",10],[11400,"YE-HOL2","Oss","Excelsior",8],[11415,"YE-SUI2","Vaduz","Thun",7],[11430,"ALE1","Bochum","Borussia Mgladbach",8],[11430,"YE-POL1","Pogon Szczecin","Wisla",7],[11445,"YE-BEL1","Royale Union SG","Oostende",5],[11445,"R-ESC2*","Dunfermline","Morton",11],[11445,"R-INGT","Newport","Hartlepool",7],[11500,"ESP1","Athletic Club","Getafe",5],[11500,"ESP2","Huesca","Burgos CF",5],[11500,"FRA1","Saint-Étienne","Troyes",5],[11500,"R-ING1","Wolves","Leeds Utd",5],[11500,"ITA1","Genoa","Torino",8],[11515,"YE-POR1","Vizela","Famalicao",8],[11530,"ZA-ARG2","San Martín S.J.","Villa Dálmine",7],[11600,"ZA-VEN1","Dep. Táchira","Puerto Cabello",12],[11710,"ZA-ARG2","Atl. Rafaela","Temperley",7],[11715,"ZA-ARG1","Tigre","Platense",7],[11730,"ZA-COL1","U. Magdalena","Cortuluá",10],[11800,"ZA-ARG2","Agropecuario","Deportivo Maipu",10],[11800,"ZA-ARG2","Tristán Suárez","Nueva Chicago",10],[11815,"ZA-VEN1","Aragua","Estudiantes M.",11],[11900,"ZA-ECU1","Ind. del Valle","Orense",5],[11910,"ZA-ARG2","Instituto","Quilmes",7],[11930,"ZA-ARG1","Barracas Central","Sarmiento",8],[12000,"ZA-COL1","Millonarios","Once Caldas",3],[12200,"ZA-MEX1","Puebla","Santos Laguna",10]
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

