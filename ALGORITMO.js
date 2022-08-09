let PARTIDOS_CON_CUOTA = [
  [11345, 'Charlton Athletic', 'QPR', 'QPR', 1.95],
  [11345, 'Cheltenham Town', 'Exeter City', 'Exeter City', 1.93],
  [11345, 'Crawley Town', 'Bristol Rovers', 'Bristol Rovers', 1.85],
  [11345, 'Fleetwood Town', 'Wigan', 'Wigan', 1.85],
  [11345, 'Grimsby Town', 'Crewe Alexandra', 'Crewe Alexandra', 2.25],
  [11345, 'Forest Green Rovers', 'Leyton Orient', 'Leyton Orient', 2.40],
  [11345, 'Morecambe', 'Stoke City', 'Stoke City', 1.72],
  [11345, 'Northampton', 'Wycombe Wanderers', 'Wycombe Wanderers', 2.15],
  [11345, 'Norwich City', 'Birmingham City', 'Birmingham City', 3.10],
  [11345, 'Oxford United', 'Swansea', 'Swansea', 1.95],
  [11300, 'NK Dinamo Zagreb', 'Ludogorets', 'NK Dinamo Zagreb', 1.72],
  [11300, 'Ferencvarosi TC', 'Qarabag FK', 'Ferencvarosi TC', 1.90],
  [11330, 'PSV Eindhoven', 'AS Monaco', 'PSV Eindhoven', 1.66],
  [11345, 'Glasgow Rangers', 'St. Gilloise', 'Glasgow Rangers', 1.72],
  [11245, 'Midtjylland', 'Benfica', 'Benfica', 1.60],
  [11330, 'Sturm Graz', 'Dynamo Kiev', 'Dynamo Kiev', 2.15],
  [11300, 'B36 Torshavn', 'Viborg FF', 'Viborg FF', 1.50],
  [11400, 'KF Shkupi Skopje', 'Shamrock Rovers', 'Shamrock Rovers', 2.15],
  [11345, 'Accrington', 'Tranmere', 'Accrington', 1.72],
  [11345, 'Bolton Wanderers', 'Salford City', 'Bolton Wanderers', 1.76],
  [11345, 'Cardiff City', 'Portsmouth', 'Cardiff City', 2.00],
  [11345, 'Doncaster Rovers', 'Lincoln City', 'Doncaster Rovers', 2.10],
  [11345, 'Harrogate Town', 'Stockport County', 'Harrogate Town', 2.15],
  [11345, 'Huddersfield', 'Preston', 'Huddersfield', 2.40],
  [11345, 'Ipswich Town', 'Colchester', 'Ipswich Town', 1.53],
  [11345, 'Luton Town', 'Newport', 'Luton Town', 1.61],
  [11345, 'MK Dons', 'Sutton United', 'MK Dons', 1.76],
  [11345, 'Mansfield Town', 'Derby County', 'Mansfield Town', 2.30],
  [11345, 'Rochdale', 'Burton Albion', 'Rochdale', 2.00],
  [11345, 'Walsall', 'Swindon Town', 'Walsall', 1.95],
  [11400, 'Reading', 'Stevenage', 'Reading', 1.90],
  [11345, 'AFC Wimbledon', 'Gillingham', 'AFC Wimbledon', 2.10],
  [11330, 'Shrewsbury', 'Carlisle', 'Carlisle', 2.87],
  [11345, 'Blackpool', 'Barrow FC', 'Barrow FC', 2.75],
  [11345, 'Bradford City', 'Hull City', 'Hull City', 2.00],
]
let PARTIDOS_SIN_CUOTA = [
  [11245,"U-CHAMP","Midtjylland (Den)","Benfica (Por)",2],[11300,"U-CHAMP","Dinamo Zagreb (Cro)","Ludogorets (Bul)",3],[11300,"U-CHAMP","Ferencvaros (Hun)","Qarabag (Aze)",7],[11300,"U-CONF","B36 Torshavn (Fai)","Viborg (Den)",8],[11330,"R-INGE","Shrewsbury","Carlisle",10],[11330,"U-CHAMP","PSV (Ned)","Mónaco (Fra)",7],[11330,"U-CHAMP","Sturm Graz (Aut)","Dinamo Kiev (Ukr)",6],[11345,"R-INGE","Accrington","Tranmere",7],[11345,"R-INGE","Blackpool","Barrow",10],[11345,"R-INGE","Bolton","Salford",5],[11345,"R-INGE","Bradford City","Hull",8],[11345,"R-INGE","Cardiff","Portsmouth",7],[11345,"R-INGE","Charlton","QPR",8],[11345,"R-INGE","Cheltenham","Exeter",8],[11345,"R-INGE","Crawley","Bristol Rovers",8],[11345,"R-INGE","Doncaster","Lincoln",9],[11345,"R-INGE","Fleetwood","Wigan",8],[11345,"R-INGE","Forest Green","Leyton Orient",10],[11345,"R-INGE","Grimsby","Crewe",10],[11345,"R-INGE","Harrogate","Stockport",9],[11345,"R-INGE","Huddersfield","Preston",9],[11345,"R-INGE","Ipswich","Colchester",7],[11345,"R-INGE","Luton","Newport",7],[11345,"R-INGE","Mansfield","Derby",9],[11345,"R-INGE","MK Dons","Sutton",7],[11345,"R-INGE","Morecambe","Stoke",6],[11345,"R-INGE","Northampton","Wycombe",8],[11345,"R-INGE","Norwich","Birmingham",10],[11345,"R-INGE","Oxford Utd","Swansea",6],[11345,"R-INGE","Rochdale","Burton",7],[11345,"R-INGE","Walsall","Swindon",7],[11345,"R-INGE","Wimbledon","Gillingham FC",7],[11345,"U-CHAMP","Rangers (Sco)","Royale Union SG (Bel)",1],[11400,"R-INGE","Reading","Stevenage",7],[11400,"U-EURO","Shkupi (Mkd)","Shamrock Rovers (Irl)",10],[11410,"ZA-ARGC","Gimnasia L.P.","Patronato",7]
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

