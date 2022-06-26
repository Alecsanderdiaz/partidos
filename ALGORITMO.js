let PARTIDOS_CON_CUOTA = [
  [11630, 'Coquimbo', 'Melipilla', '0.5', 1.42],
  [11600, 'Racing Club', 'CA Aldosivi', 'Racing Club', 1.53],
  [11830, 'Argentinos Juniors', 'Arsenal de Sarandi', 'Argentinos Juniors', 1.90],
  [11830, 'San Martin de Tucuman', 'Guillermo Brown', 'San Martin de Tucuman', 2.30],
  [11600, 'Tristan Suarez', 'Atletico Rafaela', 'Atletico Rafaela', 2.40],
  [11600, 'Goias GO', 'Cuiaba MT', 'Goias GO', 2.20],
  [11600, 'Sao Paulo SP', 'Juventude RS', 'Sao Paulo SP', 1.76],
  [11600, 'Ceara CE', 'Atletico GO', 'Atletico GO', 2.55],
  [11900, 'Tolima', 'Atlético Nacional', 'Atlético Nacional', 2.65],
  [11908, 'Vancouver Whitecaps FC', 'New England Revolution', 'Vancouver Whitecaps FC', 2.10],
  [21830, 'FC Cincinnati', 'New York City', 'New York City', 1.76],
  [11700, 'CD Tepatitlan de Morelos', 'Dorados', 'Dorados', 2.40],
  [11905, 'Venados FC', 'Correcaminos', 'Correcaminos', 2.25],
  [11930, 'Atlas de Guadalajara', 'Cruz Azul', 'Cruz Azul', 2.45],
  [11745, 'Nacional Asuncion', 'Guarani Asuncion', 'Nacional Asuncion', 2.30],
  [11800, 'Alianza Lima', 'Ayacucho FC', 'Alianza Lima', 1.57],
  [11600, 'Penarol Montevideo', 'Liverpool Montevideo', 'Penarol Montevideo', 2.00],
  [11000, 'Dinamo Brest', 'Dinamo Minsk', '0.5', 1.40],
  [11200, 'FK Arsenal Dzerzhinsk', 'Slavia Mozyr', '0.5', 1.45],
  [11030, 'Racing Club Montevideo', 'Villa Espanola', '0.5', 1.42],
  [11300, 'CA Atenas De San Carlos', 'CA Cerro', '0.5', 1.48],
  [11300, 'Rampla Juniors', 'Miramar Misiones', '0.5', 1.42],
  [11330, 'Platense', 'Sarmiento', 'Platense', 2.10],
  [11100, 'San Lorenzo', 'CA Tigre', 'CA Tigre', 2.15],
  [11300, 'Club Almagro', 'Deportivo Riestra', 'Club Almagro', 2.10],
  [11400, 'Agropecuario Argentino', 'Santamarina Tandil', 'Agropecuario Argentino', 1.80],
  [11400, 'Estudiantes Rio Cuarto', 'Villa Dalmine', 'Estudiantes Rio Cuarto', 2.20],
  [11430, 'Independiente Rivadavia', 'CA San Telmo', 'Independiente Rivadavia', 1.70],
  [11300, 'Deportivo Madryn', 'Almirante Brown', 'Almirante Brown', 2.87],
  [11330, 'CD Maipu', 'CA All Boys', 'CA All Boys', 2.85],
  [11400, 'Mitre Santiago Del Estero', 'San Martin de San Juan', 'San Martin de San Juan', 2.40],
  [11400, 'Avai SC', 'Palmeiras SP', 'Palmeiras SP', 1.72],
  [10900, 'Tombense MG', 'Nautico PE', 'Tombense MG', 2.05],
  [11408, 'Los Angeles FC', 'New York Red Bulls', 'Los Angeles FC', 1.75],
  [11530, 'Olimpia Asuncion', '12 de Octubre', 'Olimpia Asuncion', 1.70],
  [11315, 'Universidad Cesar Vallejo', 'EM Deportivo Binacional', 'Universidad Cesar Vallejo', 1.83],
  [11100, 'Academia Cantolao', 'Asociacion Deportiva Tarma', 'Asociacion Deportiva Tarma', 2.30],
  [11300, 'FC Carlos Stein', 'Club Sportivo Cienciano', 'Club Sportivo Cienciano', 1.93],
  [11530, 'Sport Huancayo', 'Universitario de Deportes', 'Universitario de Deportes', 3.00],
  [11300, 'Plaza Colonia', 'Cerrito CS', 'Plaza Colonia', 2.05],
  [10800, 'Atletico River Plate (Uru)', 'CA Boston River', 'Atletico River Plate (Uru)', 2.15],
]

let PARTIDOS_SIN_CUOTA = [
  [10800,"*YE-BIE1","FC Minsk","Belshina",12],[11000,"*YE-BIE1","Dinamo Brest","Dinamo Minsk",11],[11200,"*YE-BIE1","Arsenal Dzyarzhynsk","Slavia Mozyr",11],[10800,"*ZA-BRAS","Atlético-GO Sub-20","Corinthians Sub-20",12],[11300,"*ZA-BRAS","Bahia Sub-20","América-MG Sub-20",12],[11400,"*ZA-BRAS","Santos Sub-20","RB Bragantino Sub-20",12],[11130,"*ZA-CHIC","Antofagasta","Limache",12],[11400,"*ZA-CHIC","Palestino","Cobreloa",12],[11400,"*ZA-CHIC","S. Wanderers","Curicó Unido",12],[11600,"*ZA-CHIC","U. La Calera","S. Morning",12],[11630,"*ZA-CHIC","Coquimbo","Melipilla",11],[11630,"*ZA-CHIC","Huachipato","D. Puerto Montt",12],[11030,"*ZA-URU2","Racing Montevideo","Villa Española",12],[11300,"*ZA-URU2","Atenas","Cerro CA",12],[11300,"*ZA-URU2","Rampla Juniors","Miramar",12],[10230,"S-CHI1","Wuhan Three Towns","Hebei",10],[10430,"S-CHI1","Shanghai Shenhua","Guangzhou FC",10],[10630,"S-CHI1","Chengdu Rongcheng","Shenzhen",8],[10400,"S-COR1","Ulsan Hyundai","Seongnam",7],[10500,"S-COR1","Pohang","Gimcheon Sangmu",7],[10530,"S-COR1","Gangwon","Jeju",8],[10000,"S-JAP1","Sapporo","G-Osaka",10],[10400,"S-JAP1","C-Osaka","Shimizu",7],[10400,"S-JAP1","Nagoya","Kashima",8],[10400,"S-JAP1","Vissel Kobe","Urawa",9],[10430,"S-JAP1","Kyoto","Shonan",9],[10500,"S-JAP1","Sagan Tosu","Tokyo",7],[11100,"ZA-ARG1","San Lorenzo","Tigre",8],[11330,"ZA-ARG1","Platense","Sarmiento",7],[11600,"ZA-ARG1","Racing Club","Aldosivi",7],[11830,"ZA-ARG1","Argentinos Jrs.","Arsenal Sarandí",7],[11300,"ZA-ARG2","Almagro","Dep. Riestra",7],[11300,"ZA-ARG2","Deportivo Madryn","Alte. Brown",10],[11330,"ZA-ARG2","Deportivo Maipu","All Boys",10],[11400,"ZA-ARG2","Agropecuario","Santamarina",7],[11400,"ZA-ARG2","CA Mitre","San Martín S.J.",10],[11400,"ZA-ARG2","Estudiantes Rio Cuarto","Villa Dálmine",7],[11430,"ZA-ARG2","Ind. Rivadavia","San Telmo",7],[11600,"ZA-ARG2","Tristán Suárez","Atl. Rafaela",10],[11830,"ZA-ARG2","San Martín Tuc.","Guillermo Brown",7],[11400,"ZA-BRA1","Avaí","Palmeiras",8],[11400,"ZA-BRA1","Botafogo","Fluminense",9],[11600,"ZA-BRA1","Ceará","Atlético-GO",10],[11600,"ZA-BRA1","Goiás","Cuiabá",7],[11600,"ZA-BRA1","Sao Paulo","Juventude",7],[10900,"ZA-BRA2","Tombense","Náutico",7],[11900,"ZA-COL1","Tolima","Atl. Nacional",10],[11400,"ZA-EST1","Los Angeles FC","New York Red Bulls",7],[11700,"ZA-EST1","Philadelphia Union","New York City",10],[11900,"ZA-EST1","Vancouver Whitecaps","New England Revolution",9],[11700,"ZA-MEX2","Tepatitlán","Dorados",10],[11905,"ZA-MEX2","Venados","Correcaminos U.A.T.",10],[12105,"ZA-MEX2","Pumas Tabasco","Cancun",7],[11930,"ZA-MEXS","Atlas","Cruz Azul",10],[11530,"ZA-PAR1","Olimpia","12 de Octubre",1],[11745,"ZA-PAR1","Nacional Asunción","Guaraní",9],[11100,"ZA-PER1","AD Cantolao","ADT Tarma",10],[11300,"ZA-PER1","Carlos Stein","Cienciano",8],[11315,"ZA-PER1","César Vallejo","Binacional",7],[11530,"ZA-PER1","Sport Huancayo","Universitario",10],[11800,"ZA-PER1","Alianza Lima","Ayacucho",7],[10800,"ZA-URU1","River Plate","Boston River",7],[11300,"ZA-URU1","Plaza Colonia","Cerrito",7],[11600,"ZA-URU1","Peñarol","Liverpool M.",7]
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

