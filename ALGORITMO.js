let PARTIDOS_CON_CUOTA = [
  [10230, 'FC Seoul', 'Seongnam Ilhwa', 'FC Seoul', 1.90],
  [10400, 'Pohang Steelers', 'Incheon United', 'Pohang Steelers', 2.05],
  [10500, 'Gimcheon Sangmu', 'Ulsan Hyundai Horang-I', 'Ulsan Hyundai Horang-I', 1.80],
  [12300, 'Sanfrecce Hiroshima', 'Kyoto Sanga', 'Sanfrecce Hiroshima', 1.65],
  [10000, 'Cerezo Osaka', 'Gamba Osaka', 'Cerezo Osaka', 1.70],
  [10100, 'FC Tokyo', 'Kashiwa Reysol', 'FC Tokyo', 2.05],
  [10000, 'Shimizu S-Pulse', 'Nagoya Grampus', 'Nagoya Grampus', 2.15],
  [10100, 'Shonan Bellmare', 'Vissel Kobe', 'Vissel Kobe', 2.15],
  [10300, 'Sagan Tosu', 'Kawasaki Frontale', 'Kawasaki Frontale', 1.95],
  [10300, 'Urawa Red Diamonds', 'Kashima Antlers', 'Kashima Antlers', 2.05],
  [10500, 'Avispa Fukuoka', 'Yokohama F Marinos', 'Yokohama F Marinos', 1.85]
]

let PARTIDOS_SIN_CUOTA = [
  [10000,"S-JAP1","Hiroshima","Kyoto",7],[10000,"S-JAP1","C-Osaka","G-Osaka",7],[10000,"S-JAP1","Shimizu","Nagoya",8],[10100,"S-JAP1","Shonan","Vissel Kobe",8],[10100,"S-JAP1","Tokyo","Kashiwa",7],[10230,"S-COR1","Seoul","Seongnam",7],[10300,"S-JAP1","Sagan Tosu","Kawasaki",8],[10300,"S-JAP1","Urawa","Kashima",2],[10400,"S-COR1","Pohang","Incheon",7],[10500,"S-COR1","Gimcheon Sangmu","Ulsan Hyundai",8],[10500,"S-JAP1","Avispa Fukuoka","Yokohama M.",8]
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

