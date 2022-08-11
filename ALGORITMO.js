let PARTIDOS_CON_CUOTA = [
  [11400, 'West Bromwich', 'Sheffield United', 'West Bromwich', 2.10],
  [11330, 'Lech Poznan', 'Vikingur Reykjavik', 'Lech Poznan', 1.38],
  [11330, 'Rapid Vienna', 'Neftchi Baku', 'Rapid Vienna', 1.48],
  [11400, 'AZ Alkmaar', 'Dundee United', 'AZ Alkmaar', 1.42],
  [11400, 'Gil Vicente', 'Riga FC', 'Gil Vicente', 1.57],
  [11400, 'Young Boys', 'Kuopio PS', 'Young Boys', 1.38],
  [11345, 'Saint Patrick FC', 'CSKA Sofia', 'CSKA Sofia', 2.10],
  [11400, 'Kisvarda', 'Molde', 'Molde', 1.80],
  [11400, 'Partizan Belgrade', 'AEK Larnaca', 'Partizan Belgrade', 1.65],
  [11330, 'Slovan Bratislava', 'Olympiacos', 'Olympiacos', 2.05],
  [11330, 'Deportivo Maldonado', 'Cerrito CS', 'Deportivo Maldonado', 1.95],
  [11230, 'Antwerp', 'Lillestrom', 'Antwerp', 1.60],
  [11230, 'FCSB', 'DAC Dunajska Streda', 'FCSB', 1.76],
  [11230, 'Panathinaikos', 'Slavia Prague', 'Panathinaikos', 2.45],
  [11230, 'CS U Craiova', 'Zorya Lugansk', 'CS U Craiova', 2.10],
  [11245, 'Istanbul Basaksehir FK', 'Breidablik', 'Istanbul Basaksehir FK', 1.38],
  [11300, 'Anderlecht', 'Paide Linnameeskond', 'Anderlecht', 1.25],
  [11300, 'Aris Thessaloniki', 'Maccabi Tel Aviv', 'Aris Thessaloniki', 2.05],
  [11300, 'Hibernians FC Paola', 'Rigas Futbola Skola', 'Hibernians FC Paola', 2.45],
  [11300, 'Levski Sofia', 'Hamrun Spartans', 'Levski Sofia', 1.40],
  [11300, 'Ki Klaksvik', 'KF Ballkani', 'KF Ballkani', 2.30],
  [11300, 'FK Skendija 79', 'AIK Stockholm', 'AIK Stockholm', 2.10],
  [11300, 'Sligo Rovers', 'Viking', 'Viking', 1.70],
  [11300, 'Dudelange', 'Malmo FF', 'Malmo FF', 1.65],
  [11200, 'FC Basel', 'Brondby IF', 'FC Basel', 1.72],
  [11200, 'CFR Cluj', 'Shakhter Soligorsk', 'CFR Cluj', 1.85],
  [11200, 'Konyaspor', 'FC Vaduz', 'Konyaspor', 1.40],
  [11200, 'Twente', 'Cukaricki', 'Twente', 1.42],
  [11200, 'Djurgardens IF', 'Sepsi OSK', 'Sepsi OSK', 2.70],
  [11200, 'Hapoel Beer Sheva', 'FC Lugano', 'FC Lugano', 2.65],
  [11200, 'FC Petrocub', 'MOL Fehervar FC', 'MOL Fehervar FC', 1.80],
  [11200, 'FC Zurich', 'Linfield FC', 'FC Zurich', 1.38],
  [11200, 'FC Slovacko', 'Fenerbahce', 'Fenerbahce', 2.05]
]

let PARTIDOS_SIN_CUOTA = [
  [11400,"R-INGE","West Brom","Sheffield Utd",5],[11200,"U-CONF","Basilea (Sui)","Brondby (Den)",5],[11200,"U-CONF","CFR Cluj (Rou)","Shakhter Soligorsk (Blr)",5],[11200,"U-CONF","Djurgarden (Swe)","Sepsi Sf. Gheorghe (Rou)",10],[11200,"U-CONF","H. Beer Sheva (Isr)","Lugano (Sui)",10],[11200,"U-CONF","Konyaspor (Tur)","Vaduz (Lie)",5],[11200,"U-CONF","Petrocub (Mda)","MOL Fehervar (Hun)",8],[11200,"U-CONF","Twente (Ned)","Cukaricki (Srb)",5],[11230,"U-CONF","Antwerp (Bel)","Lilleström (Nor)",5],[11230,"U-CONF","FCSB (Rou)","Dun. Streda (Svk)",5],[11230,"U-CONF","Panathinaikos (Gre)","Slavia Praga (Cze)",9],[11230,"U-CONF","Univ. Craiova (Rou)","Zorya (Ukr)",5],[11245,"U-CONF","Başakşehir (Tur)","Breidablik (Ice)",5],[11300,"U-CONF","Anderlecht (Bel)","Paide (Est)",5],[11300,"U-CONF","Aris (Gre)","M. Tel Aviv (Isr)",7],[11300,"U-CONF","Hibernians (Mlt)","RFS (Lat)",9],[11300,"U-CONF","Klaksvik (Fai)","FC Ballkani (Kos)",10],[11300,"U-CONF","Levski (Bul)","Hamrun (Mlt)",7],[11300,"U-CONF","Shkëndija (Mkd)","AIK (Swe)",8],[11300,"U-CONF","Sligo Rovers (Irl)","Viking (Nor)",8],[11330,"U-CONF","Lech (Pol)","Vikingur Reykjavik (Ice)",5],[11330,"U-CONF","Rapid Viena (Aut)","Neftci Baku (Aze)",7],[11345,"U-CONF","St. Patricks (Irl)","CSKA Sofia (Bul)",8],[11400,"U-CONF","AZ Alkmaar (Ned)","Dundee Utd (Sco)",5],[11400,"U-CONF","Gil Vicente (Por)","Riga FC (Lat)",5],[11400,"U-CONF","Kisvarda (Hun)","Molde (Nor)",8],[11400,"U-CONF","Young Boys (Sui)","KuPS (Fin)",5],[11200,"U-EURO","Slovacko (Cze)","Fenerbahçe (Tur)",8],[11200,"U-EURO","Zúrich (Sui)","Linfield (Nir)",7],[11300,"U-EURO","Dudelange (Lux)","Malmö (Swe)",8],[11330,"U-EURO","Slovan Bratislava (Svk)","Olympiacos (Gre)",6],[11400,"U-EURO","Partizan (Srb)","AEK Larnaca (Cyp)",5],[11330,"ZA-URU1","Maldonado","Cerrito",7]
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

