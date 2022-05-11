let PARTIDOS_CON_CUOTA = [
  [11900, 'Imbabura SC', 'Guayaquil SC', '0.5', 1.38],
  [11715, 'Estudiantes de La Plata', 'Argentinos Juniors', 'Estudiantes de La Plata', 2.05],
  [11930, 'River Plate', 'CA Tigre', 'River Plate', 1.60],
  [11830, 'Bragantino SP', 'Atletico MG', 'Atletico MG', 2.10],
  [11730, 'Flamengo RJ', 'Altos', 'Flamengo RJ', 1.20],
  [11930, 'Corinthians SP', 'Portuguesa RJ', 'Corinthians SP', 1.35],
  [11700, 'Ceara CE', 'Tombense MG', 'Ceara CE', 1.65],
  [11700, 'Juazeirense BA', 'Palmeiras SP', 'Palmeiras SP', 1.42],
  [11930, 'Vila Nova FC', 'Fluminense RJ', 'Fluminense RJ', 2.25],
  [12000, 'Cuiaba MT', 'Atletico GO', 'Atletico GO', 2.60],
  [11700, 'Atletico Bucaramanga', 'La Equidad', 'Atletico Bucaramanga', 1.66],
  [11800, 'Jaguares De Córdoba', 'Millonarios', 'Millonarios', 2.15],
  [11800, 'Once Caldas', 'Atlético Nacional', 'Atlético Nacional', 2.20],
  [11900, 'Deportivo Pereira', 'Tolima', 'Tolima', 2.05],
  [12010, 'Independiente Santa Fe', 'CD Junior', 'CD Junior', 2.15],
  [12000, 'Barcelona SC', 'Club Sport Emelec', 'Barcelona SC', 2.05],
  [11700, 'Club Nueve de Octubre', 'Guayaquil City FC', 'Guayaquil City FC', 2.20],
  [11900, 'Minnesota United FC', 'Colorado Rapids', 'Minnesota United FC', 1.85],
  [11800, 'New England Revolution', 'FC Cincinnati', 'FC Cincinnati', 2.55],
  [11800, 'New York City', 'Rochester New York FC', 'Rochester New York FC', 4.75],
  [11900, 'Nashville SC', 'Atlanta United', 'Atlanta United', 2.55],
  [11900, 'Union Omaha SC', 'Northern Colorado Hailstorm FC', 'Northern Colorado Hailstorm FC', 2.40],
  [11900, 'Atletico San Luis', 'Pachuca', 'Pachuca', 2.05],
  [11700, 'Olimpia Asuncion', 'Sol de America', 'Olimpia Asuncion', 1.70],
  [11915, 'Cerro Porteño', 'Guairena FC', 'Cerro Porteño', 1.85],
]

let PARTIDOS_SIN_CUOTA = [
  [11715,"ZA-ARG1","Estudiantes L.P.","Argentinos Jrs.",5],[11930,"ZA-ARG1","River Plate","Tigre",5],[11330,"YE-BEL1","Club Brujas","Royale Union SG",5],[11700,"*ZA-BOL1","J. Wilstermann","Always Ready",12],[11900,"*ZA-BOL1","Nacional Potosí","The Strongest",12],[11900,"*ZA-BOL1","U. Sucre","Oriente Petrolero",12],[11830,"ZA-BRA1","Bragantino","Atlético-MG",6],[11700,"ZA-BRAC","Ceará","Tombense",7],[11700,"ZA-BRAC","Juazeirense","Palmeiras",6],[11730,"ZA-BRAC","Flamengo","AE Altos",5],[11930,"ZA-BRAC","Corinthians","Portuguesa RJ",5],[11930,"ZA-BRAC","Vila Nova","Fluminense",6],[12000,"ZA-BRAC","Cuiabá","Atlético-GO",10],[11400,"ZA-COLC","Tigres","Ind. Medellín",4],[11530,"ZA-COLC","U. Magdalena","América de Cali",4],[11700,"ZA-COLC","Atl. Bucaramanga","La Equidad",5],[11800,"ZA-COLC","Jaguares de Córdoba","Millonarios",6],[11800,"ZA-COLC","Once Caldas","Atl. Nacional",6],[11900,"ZA-COLC","Pereira","Tolima",6],[12010,"ZA-COLC","Ind. Santa Fe","Junior",6],[11700,"ZA-ECU1","Nueve de Octubre","Guayaquil City",10],[12000,"ZA-ECU1","Barcelona SC","Emelec",5],[11430,"*ZA-ECU2","Chacaritas","Libertad",11],[11530,"*ZA-ECU2","América de Quito","Manta",11],[11900,"*ZA-ECU2","Imbabura","Buhos ULVR",11],[11345,"R-ESC1","St. Johnstone","Aberdeen",8],[11345,"R-ESC1","St. Mirren","Livingston",10],[11330,"R-ESC1","Dundee Utd","Celtic",4],[11345,"R-ESC1","Motherwell","Hearts",8],[11345,"R-ESC1","Rangers","Ross County",5],[11200,"ESP1","Alavés","Espanyol",6],[11200,"ESP1","Osasuna","Getafe",10],[11330,"ESP1","Sevilla","Mallorca",1],[11430,"ESP1","Elche","Atlético de Madrid",2],[11730,"ZA-ESTC","Richmond Kickers","Charlotte",8],[11800,"ZA-ESTC","New England Revolution","Cincinnati",10],[11800,"ZA-ESTC","New York City","Rochester New York",10],[11900,"ZA-ESTC","Minnesota United","Colorado Rapids",7],[11900,"ZA-ESTC","Nashville SC","Atlanta Utd",10],[11900,"ZA-ESTC","Union Omaha","Northern Colorado",10],[11930,"ZA-ESTC","Houston Dynamo","San Antonio",10],[12100,"ZA-ESTC","Seattle Sounders","San Jose Earthquakes",5],[12130,"ZA-ESTC","California Utd.","Los Angeles Galaxy",8],[12130,"ZA-ESTC","Sacramento Republic","Phoenix Rising",8],[11200,"FRA1","Niza","Saint-Étienne",10],[11400,"FRA1","Nantes","Stade Rennais",6],[11030,"YE-GRE1","PAOK","Aris",7],[11130,"YE-GRE1","AEK","Giannina",5],[11300,"YE-GRE1","Olympiacos","Panathinaikos",7],[11330,"R-ING1","Leeds Utd","Chelsea",2],[11345,"R-ING1","Leicester","Norwich",1],[11345,"R-ING1","Watford","Everton",4],[11415,"R-ING1","Wolves","Manchester City",2],[11345,"*R-INGN","Stockport","Torquay",12],[11400,"ITAC","Juventus","Inter",9],[11900,"ZA-MEX1","Atlético de San Luis","Pachuca",6],[12105,"ZA-MEX1","Puebla","Club América",6],[12100,"ZA-MEX2","Cimarrones de Sonora","Atl. Morelia",7],[11300,"YE-HOL1","Ajax","Heerenveen",1],[11300,"YE-HOL1","Cambuur","Willem II",8],[11300,"YE-HOL1","G.A. Eagles","Feyenoord",4],[11300,"YE-HOL1","PSV","Nijmegen",5],[11300,"YE-HOL1","Sittard","Vitesse",9],[11300,"YE-HOL1","Sparta Rotterdam","Zwolle",7],[11300,"YE-HOL1","Twente","Groningen",7],[11300,"YE-HOL1","Utrecht","AZ Alkmaar",8],[11300,"YE-HOL1","Waalwijk","Heracles",10],[11700,"ZA-PAR1","Olimpia","Sol de América",5],[11915,"ZA-PAR1","Cerro Porteño","Guairena FC",5],[11915,"ZA-PAR1","Resistencia","Guaraní",9],[11200,"YE-REP1","Hradec Kralove","Plzen",6],[11200,"YE-REP1","Ostrava","Slavia Praga",6],[11200,"YE-REP1","Sparta Praga","Slovacko",7],[11130,"YE-RUSC","Spartak Moscú","Yenisey",5],[11330,"YE-SUI1","Servette","Lugano",10],[11330,"YE-SUI1","Sion","Lucerna",9],[11230,"YE-TURC","Sivasspor","Alanyaspor",10]
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

