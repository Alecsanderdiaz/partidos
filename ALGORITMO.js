let PARTIDOS_CON_CUOTA = [
  [11300, 'Boluspor', 'Genclerbirligi', '0.5', 1.45],
  [11345, 'Partick Thistle', 'Inverness CT', '0.5', 1.48],
  [11330, 'Borussia Monchengladbach', 'Hertha Berlin', 'Borussia Monchengladbach', 1.50],
  [11300, 'Espanyol', 'Rayo Vallecano', 'Espanyol', 2.25],
  [11300, 'CF Villarreal B', 'SD Eibar', 'CF Villarreal B', 2.20],
  [11400, 'Lyon', 'Troyes', 'Lyon', 1.40],
  [11345, 'Bari', 'Palermo', 'Palermo', 2.25],
  [11400, 'Norwich City', 'Millwall', 'Norwich City', 1.95],
  [11345, 'AS Eupen', 'RFC Seraing United', 'AS Eupen', 1.61],
  [11330, 'Volos NPS', 'Asteras Tripolis', 'Volos NPS', 2.20],
  [11300, 'NAC Breda', 'FC Oss', 'NAC Breda', 1.57],
  [11300, 'FC Den Bosch', 'Roda JC', 'FC Den Bosch', 2.20],
  [11300, 'MVV Maastricht', 'ADO Den Haag', 'MVV Maastricht', 1.93],
  [11300, 'Willem II Tilburg', 'SC Telstar', 'Willem II Tilburg', 1.38],
  [11300, 'FC Dordrecht', 'Utrecht (R)', 'Utrecht (R)', 1.83],
  [11300, 'Helmond Sport', 'FC Eindhoven', 'FC Eindhoven', 1.70],
  [11330, 'Legia Warsaw', 'Gornik Zabrze', 'Legia Warsaw', 1.60],
  [11415, 'Estoril', 'Rio Ave', 'Estoril', 2.05],
  [11300, 'FC U Craiova 1948', 'Petrolul Ploiesti', 'FC U Craiova 1948', 2.05],
  [11300, 'Ümraniyespor', 'Galatasaray', 'Galatasaray', 1.70],
  [11330, 'Estudiantes de Buenos Aires', 'Santamarina Tandil', 'Estudiantes de Buenos Aires', 2.05],
  [11300, 'Danubio', 'Torque', 'Torque', 2.62],
  [11100, 'Jagiellonia Bialystok', 'Miedz Legnica', 'Jagiellonia Bialystok', 1.66],
  [11100, 'Krylia Sovetov Samara', 'Fakel Voronezh', 'Krylia Sovetov Samara', 1.65],
  [11200, 'CD Tondela', 'Sporting Covilha', 'CD Tondela', 1.76],
  [11130, 'Hamburger SV', 'SV Darmstadt 98', 'Hamburger SV', 1.65],
  [11130, '1. FC Magdeburg', 'Hannover 96', 'Hannover 96', 1.70],
  [11200, 'TSV 1860 München', 'Hallescher FC', 'TSV 1860 München', 1.55],
  [11000, 'CS Mioveni', 'FC Arges Pitesti', 'FC Arges Pitesti', 2,3]
]

let PARTIDOS_SIN_CUOTA = [
  [11330,"ALE1","Borussia Mgladbach","Hertha BSC",1],[11130,"ALE2","Hamburgo","Darmstadt",7],[11130,"ALE2","Magdeburgo","Hannover",8],[11200,"ALE3","1860 Múnich","Hallescher",7],[11330,"ZA-ARG2","CA Estudiantes","Santamarina",7],[11910,"ZA-ARG2","Belgrano","Instituto",7],[11345,"YE-BEL1","Eupen","Seraing",7],[11000,"*YE-BIE1","Zhodino","FC Minsk",12],[11400,"*ZA-BOL1","Universitario de Vinto","Nacional Potosí",12],[11700,"*ZA-BOL1","Tomayapo","Aurora",12],[11915,"*ZA-BOL1","Independiente Petrolero","Santa Cruz",12],[11700,"ZA-BRA2","Ituano","Novorizontino",7],[11930,"ZA-BRA2","Náutico","Vila Nova",10],[11330,"*ZA-BRAS","Athletico-PR Sub-20","Sao Paulo Sub-20",12],[11600,"ZA-COL1","Envigado","Atl. Bucaramanga",10],[11930,"ZA-COL1","Alianza Petrolera","Deportivo Cali",10],[11900,"ZA-ECU1","Gualaceo","Técnico U.",7],[11800,"*ZA-ECUC","Ind. del Valle","El Nacional",11],[11345,"*ZA-ESC2","Partick Thistle","Inverness",11],[11300,"ESP1","Espanyol","Rayo Vallecano",7],[11500,"ESP1","Sevilla","Real Valladolid",1],[11300,"ESP2","Villarreal B","Eibar",9],[11500,"ESP2","Alavés","Mirandés",5],[12100,"ZA-EST1","Los Angeles Galaxy","Seattle Sounders",5],[11400,"FRA1","Lyon","Troyes",3],[11330,"YE-GRE1","Volos","Asteras T.",7],[11400,"R-ING2","Norwich","Millwall",7],[11345,"ITA2","Bari","Palermo",10],[11900,"ZA-MEX1","Necaxa","Guadalajara",7],[11100,"*AMI","Nea Salamis (Cyp)","Ol. Nicosia (Cyp)",12],[11130,"*AMI","La Nucía (Esp)","Mar Menor (Esp)",12],[11200,"*AMI","Palencia CA (Esp)","Fuenlabrada (Esp)",12],[11300,"*AMI","L.R. Vicenza (Ita)","Virtus Verona (Ita)",12],[11300,"*AMI","Sevilla B (Esp)","AD Ceuta (Esp)",12],[11330,"*AMI","Textil Escudo (Esp)","Rayo Cantabria (Esp)",12],[11330,"*AMI","Yeclano (Esp)","Eldense (Esp)",12],[11400,"*AMI","Atl. Victoria (Esp)","Santa Úrsula (Esp)",12],[11400,"*AMI","San Roque de Lepe (Esp)","Cartaya (Esp)",12],[11300,"YE-HOL2","Breda","Oss",7],[11300,"YE-HOL2","Den Bosch","Roda",9],[11300,"YE-HOL2","Dordrecht","Jong Utrecht",8],[11300,"YE-HOL2","Helmond","Eindhoven",8],[11300,"YE-HOL2","Maastricht","Den Haag",9],[11300,"YE-HOL2","Willem II","Telstar",7],[11600,"ZA-PAR1","Resistencia","Ameliano",9],[11815,"ZA-PAR1","Sol de América","Guairena FC",8],[11500,"ZA-PER1","UTC","Ayacucho",10],[11100,"YE-POLE","Jagiellonia","Legnica",7],[11330,"YE-POLE","Legia","Gornik Z.",7],[11415,"YE-POR1","Estoril","Rio Ave",7],[11200,"YE-POR2","Tondela","Covilha",7],[11000,"YE-RUM1","Mioveni","FC Arges",8],[11300,"YE-RUM1","U Craiova 1948","Petrolul",7],[11100,"YE-RUS1","Kr. Sovetov","F. Voronezh",7],[11300,"YE-TUR1","Umraniyespor","Galatasaray",8],[11300,"*YE-TUR2","Boluspor","Genclerbirligi",11],[11300,"ZA-URU1","Danubio","Montevideo City",10],[11800,"ZA-URU1","Cerrito","Cerro Largo",8],[11530,"*ZA-URU2","Cerro CA","Villa Española",11],[11600,"*ZA-VEN1","Monagas","Hermanos Colmenarez",12],[11815,"*ZA-VEN1","Lara","Dep. Táchira",11]
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

