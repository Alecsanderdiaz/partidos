let PARTIDOS_CON_CUOTA = [
  [11600, 'Cerro Porteño', 'Club Tacuary', 'Cerro Porteño', 1.90],
  [11815, 'Resistencia', 'Libertad Asuncion', 'Libertad Asuncion', 1.61],
  [11515, 'Club Sportivo Cienciano', 'Deportivo San Martin', 'Club Sportivo Cienciano', 1.33],
  [11800, 'EM Deportivo Binacional', 'FC Carlos Stein', 'EM Deportivo Binacional', 1.42],
  [11500, 'Imbabura SC', 'Guayaquil City FC', '0.5', 1.42],
  [11800, 'El Nacional', 'Barcelona SC', '0.5', 1.40],
  [11830, 'Indy Eleven', 'Miami FC', '0.5', 1.40],
  [11600, 'Velez Sarsfield', 'Atletico Tucuman', 'Velez Sarsfield', 2.05],
  [11600, 'Godoy Cruz', 'Colon de Santa Fe', 'Colon de Santa Fe', 2.80],
  [11830, 'Gimnasia LP', 'Defensa Y Justicia', 'Defensa Y Justicia', 2.50],
  [11605, 'Estudiantes de Buenos Aires', 'Agropecuario Argentino', 'Estudiantes de Buenos Aires', 2.20],
  [11710, 'CA All Boys', 'Quilmes AC', 'CA All Boys', 2.30],
  [11810, 'Chacarita Juniors', 'Brown de Adrogue', 'Chacarita Juniors', 2.25],
  [11430, 'Fluminense RJ', 'Corinthians SP', 'Fluminense RJ', 1.85],
  [11700, 'Santos SP', 'Flamengo RJ', 'Santos SP', 2.20],
  [11900, 'Palmeiras SP', 'Atletico PR', 'Palmeiras SP', 1.50],
  [11430, 'Juventude RS', 'Atletico MG', 'Atletico MG', 1.93],
  [11700, 'Ceara CE', 'Internacional RS', 'Internacional RS', 2.55],
  [11400, 'Ituano SP', 'Criciuma SC', 'Ituano SP', 2.05],
  [11630, 'Nautico PE', 'Novorizontino SP', 'Nautico PE', 2.25],
  [11830, 'CRB Maceio AL', 'Guarani SP', 'CRB Maceio AL', 2.05],
  [11630, 'Universidad de Chile', 'Union La Calera', 'Universidad de Chile', 2.10],
  [11400, 'Palestino', 'Union Espanola', 'Union Espanola', 2.30],
  [11900, 'Huachipato', 'Curico Unido', 'Curico Unido', 2.20],
  [11838, 'Toronto FC', 'Seattle Sounders', 'Seattle Sounders', 1.90],
  [12108, 'Vancouver Whitecaps FC', 'Los Angeles FC', 'Los Angeles FC', 1.76],
  [11700, 'Chivas Guadalajara', 'FC Juarez', 'Chivas Guadalajara', 1.80],
  [11700, 'Necaxa', 'Toluca', 'Necaxa', 1.85],
]

let PARTIDOS_SIN_CUOTA =[
  [11615,"*ZA-BOL1","Tomayapo","Royal Pari",12],[11830,"*ZA-BOL1","Oriente Petrolero","The Strongest",12],[11400,"*ZA-BRAS","Sao Paulo Sub-20","Botafogo Sub-20",12],[11500,"*ZA-ECUC","Delfín","Gualaceo",11],[11500,"*ZA-ECUC","Imbabura","Guayaquil City",11],[11800,"*ZA-ECUC","El Nacional","Barcelona SC",11],[11830,"*ZA-EST2","Indy Eleven","Miami FC",11],[11830,"*ZA-EST2","Atlanta United 2","El Paso",12],[11830,"*ZA-EST2","Tampa Bay","Memphis",12],[11900,"*ZA-EST2","Louisville City","Birmingham",12],[12000,"*ZA-EST2","San Antonio","Charleston",12],[12100,"*ZA-EST2","Monterey Bay","New Mexico",12],[12130,"*ZA-EST2","Las Vegas Lights","Detroit",12],[12130,"*ZA-EST2","Phoenix Rising","Orange County SC",12],[11815,"*ZA-VEN1","Caracas","Zulia",11],[11600,"*ZA-VEN1","Dep. Táchira","Mineros",12],[11600,"AMI17","República Dominicana Sub-17","Bolivia Sub-17",12],[11900,"AMI17","Colombia Sub-17","Paraguay Sub-17",12],[11600,"ZA-ARG1","Vélez Sarsfield","Atl. Tucumán",7],[11600,"ZA-ARG1","Godoy Cruz","Colón",10],[11830,"ZA-ARG1","Gimnasia L.P.","Defensa y Justicia",10],[11605,"ZA-ARG2","CA Estudiantes","Agropecuario",7],[11710,"ZA-ARG2","All Boys","Quilmes",7],[11810,"ZA-ARG2","Chacarita","Brown Adrogué",7],[11430,"ZA-BRA1","Fluminense","Corinthians",7],[11700,"ZA-BRA1","Santos","Flamengo",7],[11900,"ZA-BRA1","Palmeiras","Athletico-PR",7],[11430,"ZA-BRA1","Juventude","Atlético-MG",8],[11700,"ZA-BRA1","Ceará","Internacional",10],[11400,"ZA-BRA2","Ituano","Criciúma",7],[11630,"ZA-BRA2","Náutico","Novorizontino",7],[11830,"ZA-BRA2","CRB","Guaraní",7],[11630,"ZA-CHI1","U. De Chile","U. La Calera",7],[11400,"ZA-CHI1","Palestino","U. Española",10],[11900,"ZA-CHI1","Huachipato","Curicó Unido",10],[11830,"ZA-EST1","Toronto FC","Seattle Sounders",8],[12100,"ZA-EST1","Vancouver Whitecaps","Los Angeles FC",8],[11700,"ZA-MEX1","Guadalajara","Juárez",7],[11700,"ZA-MEX1","Necaxa","Toluca",7],[11905,"ZA-MEX1","Tigres UANL","Cruz Azul",7],[12105,"ZA-MEX1","Club América","Atlas",7],[11600,"ZA-PAR1","Cerro Porteño","Tacuary",7],[11815,"ZA-PAR1","Resistencia","Libertad",8],[11515,"ZA-PER1","Cienciano","San Martín",7],[11800,"ZA-PER1","Binacional","Carlos Stein",7]
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

