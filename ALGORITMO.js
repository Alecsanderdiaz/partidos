let PARTIDOS_CON_CUOTA= [
  [11400, 'Girona', 'CD Tenerife', 'Girona', 2.10],
  [11345, 'Países Bajos', 'Polonia', 'Países Bajos', 1.48],
  [11345, 'Rumania', 'Finlandia', 'Rumania', 2.35],
  [11345, 'Gales', 'Bélgica', 'Bélgica', 1.80],
  [11345, 'Hungria', 'Alemania', 'Alemania', 1.53],
  [11345, 'Inglaterra', 'Italia', 'Italia', 2.87],
  [11345, 'Montenegro', 'Bosnia & Herzegovina', 'Bosnia & Herzegovina', 2.15],
  [11345, 'Luxemburgo', 'Turquia', 'Turquia', 1.60],
  [11415, 'Portugal Sub 21', 'Greece U21', '1.5', 2.30],
  [11415, 'Islandia Sub 21', 'Chipre Sub 21', '1.5', 2.55],
  [11330, 'Arsenal de Sarandi', 'Banfield', 'Arsenal de Sarandi', 2.50],
  [11330, 'CA Tigre', 'CA Barracas Central', 'CA Tigre', 1.70],
  [11300, 'Instituto AC Cordoba', 'Atletico Rafaela', 'Instituto AC Cordoba', 1.85],
  [11330, 'Quilmes AC', 'Chaco For Ever', 'Quilmes AC', 2.35],
  [11310, 'Tristan Suarez', 'Chacarita Juniors', 'Chacarita Juniors', 2.20],
  [11330, 'CSD Flandria', 'Gimnasia Jujuy', 'Gimnasia Jujuy', 2.35],
  [11430, 'Corinthians SP', 'Juventude RS', 'Corinthians SP', 1.90],
  [11430, 'CRB Maceio AL', 'Vila Nova FC', 'CRB Maceio AL', 2.30],
  [11430, 'Ponte Preta SP', 'Londrina PR', 'Ponte Preta SP', 2.15],
  [11400, 'Charlotte FC', 'New York Red Bulls', 'New York Red Bulls', 1.95],
]

let PARTIDOS_SIN_CUOTA = [
  [11330,"ZA-ARG1","Arsenal Sarandí","Banfield",9],
  [11330,"ZA-ARG1","Tigre","Barracas Central",5],
  [11600,"ZA-ARG1","Sarmiento","Argentinos Jrs.",8],
  [11830,"ZA-ARG1","River Plate","Atl. Tucumán",5],
  [11300,"ZA-ARG2","Instituto","Atl. Rafaela",7],
  [11310,"ZA-ARG2","Tristán Suárez","Chacarita",8],
  [11330,"ZA-ARG2","Flandria","Gimnasia Jujuy",10],
  [11330,"ZA-ARG2","Quilmes","Chaco For Ever",7],
  [11430,"ZA-BRA1","Corinthians","Juventude",1],
  [11700,"ZA-BRA1","Atlético-MG","Santos",10],
  [11700,"ZA-BRA1","Cuiabá","Bragantino",10],
  [11700,"ZA-BRA1","Fluminense","Atlético-GO",7],
  [11900,"ZA-BRA1","Internacional","Flamengo",8],
  [11430,"ZA-BRA2","CRB","Vila Nova",7],
  [11430,"ZA-BRA2","Ponte Preta","Londrina",7],
  [11630,"ZA-BRA2","Operario","Bahia",8],
  [11700,"ZA-COL1","Junior","Atl. Bucaramanga",1],
  [11930,"ZA-COL1","Millonarios","Atl. Nacional",4],
  [11530,"*ZA-ECUC","onita Banana","Dep. Cuenca",11],
  [11400,"ESP2","Girona","Tenerife",5],
  [11400,"ZA-EST1","Charlotte","New York Red Bulls",8],
  [11900,"ZA-EST1","Nashville SC","San Jose Earthquakes",7],
  [11700,"*ZA-EST2","Monterey Bay","San Antonio",11],
  [11800,"*ZA-EST2","Charleston","Pittsburgh",11],
  [11800,"*ZA-EST2","Miami FC","Tampa Bay",11],
  [11830,"*ZA-EST2","Atlanta United 2","Loudoun",11],
  [11830,"*ZA-EST2","Detroit","Sacramento Republic",11],
  [12100,"*ZA-EST2","Oakland Roots","Rio Grande",11],
  [12100,"*ZA-EST2","San Diego Loyal","Hartford Athletic",11],
  [12130,"*ZA-EST2","LA Galaxy 2","Colorado Springs",11],
  [12130,"*ZA-EST2","Las Vegas Lights","Orange County SC",11],
  [12130,"*ZA-EST2","Phoenix Rising","El Paso",11],
  [11345,"NATI","Gales","Bélgica",6],
  [11345,"NATI","Hungría","Alemania",4],
  [11345,"NATI","Inglaterra","Italia",10],
  [11345,"NATI","Países Bajos","Polonia",5],
  [11345,"NATI","Montenegro","Bosnia-Herzegovina",8],
  [11345,"NATI","Rumanía","Finlandia",5],
  [11345,"NATI","Luxemburgo","Turquía",6],
  [11300,"U21","Gibraltar Sub-21","Bulgaria Sub-21",11],
  [11415,"U21","Islandia Sub-21","Chipre Sub-21",11],
  [11415,"U21","Portugal Sub-21","Grecia Sub-21",11],
  [11500,"IAMI","Uruguay","Panamá",3],
  [11830,"IAMI","Ecuador","Cabo Verde",3],
  [12130,"IAMI","Corea del Sur Sub-16","Uruguay Sub-16", 11],
  [12100,"INATI","México","Surinam", 11],
  [11500,"INATI","Guyana","Haití", 11],
  [11830,"INATI","Montserrat","Bermudas", 11],
  [11500,"INATI","Islas Vírgenes Estadounidenses","Bonaire", 11],
  [11700,"INATI","Sint Maarten","Islas Turcas y Caicos", 11],
  [11900,"*ZA-URU2","Sud América","Racing Montevideo",11],
  [11600,"*ZA-VEN1","La Guaira","Portuguesa",11],
  [11815,"*ZA-VEN1","Zamora","Monagas",11]
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

