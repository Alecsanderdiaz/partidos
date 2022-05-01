let PARTIDOS_CON_CUOTA = [
  [11600, 'Tombense MG', 'Vasco Da Gama RJ', 'Vasco Da Gama RJ', 2.20],
  [11600, 'Altos', 'Flamengo RJ', 'Flamengo RJ', 1.33],
  [11600, 'Atletico San Luis', 'Santos Laguna', 'Santos Laguna', 2.30],
  [11600, 'Leones Negros', 'Atlante', 'Atlante', 2.15],
  [11600, 'Sol de America', 'Guarani Asuncion', 'Guarani Asuncion', 2.00],
  [11605, 'Patriotas Boyaca', 'Millonarios', 'Millonarios', 2.10],
  [11630, 'Cumbaya FC', 'Deportivo Cuenca', 'Deportivo Cuenca', 2.45],
  [11715, 'Portuguesa FC', 'Metropolitano SC', '0.5', 1.48],
  [11700, 'Internacional RS', 'Avai SC', 'Internacional RS', 1.72],
  [12015, 'CD Junior', 'Envigado FC', 'CD Junior', 1.72],
  [11900, 'Independiente Del Valle', 'LDU Quito', 'Independiente Del Valle', 1.80],
  [12125, 'Los Angeles FC', 'Minnesota United FC', 'Minnesota United FC', 2.65],
  [12000, 'Leon', 'Toluca', 'Leon', 1.61],
  [11805, 'Club Celaya', 'Cancun FC', 'Club Celaya', 1.90],
  [11800, 'Sport Huancayo', 'Universidad Cesar Vallejo', 'Sport Huancayo', 1.95],
  [11815, 'Olimpia Asuncion', 'Guairena FC', 'Olimpia Asuncion', 1.76],
  [11400, 'Barcelona', 'RCD Mallorca', 'Barcelona', 1.42],
  [11345, 'Marseille', 'Lyon', 'Marseille', 1.85],
  [11345, 'Roma', 'Bologna', 'Roma', 1.55],
  [11300, 'PAOK Thessaloniki', 'AEK Athens', 'AEK Athens', 2.55],
  [11300, 'RKC Waalwijk', 'Groningen', 'Groningen', 2.10],
  [11430, 'Sporting Lisbon', 'Gil Vicente', 'Sporting Lisbon', 1.53],
  [11330, 'CFR Cluj', 'Farul Constanta', 'CFR Cluj', 1.72],
  [11230, 'Galatasaray', 'Sivasspor', 'Galatasaray', 1.75],
  [11230, 'Goztepe', 'Caykur Rizespor', 'Caykur Rizespor', 2.15],
  [11400, 'Corinthians SP', 'Fortaleza CE', 'Corinthians SP', 1.90],
  [11400, 'Coritiba PR', 'Fluminense RJ', 'Fluminense RJ', 2.55],
  [11400, 'Once Caldas', 'Deportivo Cali', 'Once Caldas', 2.05],
  [11400, 'Orense SC', 'Universidad Catolica Quito', 'Universidad Catolica Quito', 2.15],
  [11508, 'Nashville SC', 'Philadelphia Union', 'Philadelphia Union', 2.55],
  [11315, 'Carlos Mannucci', 'Asociacion Deportiva Tarma', 'Carlos Mannucci', 2.00],
  [11100, 'Alianza Atletico', 'Ayacucho FC', 'Alianza Atletico', 1.85],
  [11300, 'Atlético Grau', 'Universitario de Deportes', 'Universitario de Deportes', 1.90],
  [11000, 'UCV FC', 'Mineros de Guayana', '0.5', 1.50],
  [11130, 'Rayo Vallecano', 'Real Sociedad', 'Real Sociedad', 2.15],
  [11115, 'SD Ponferradina', 'Cartagena', 'SD Ponferradina', 1.90],
  [11115, 'CD Lugo', 'CD Tenerife', 'CD Tenerife', 2.15],
  [11005, 'Burdeos', 'Nice', 'Nice', 1.76],
  [11100, 'Udinese', 'Inter', 'Inter', 1.53],
  [11130, 'Anderlecht', 'Club Brugge', 'Club Brugge', 1.90],
  [11100, 'Panathinaikos', 'Aris Thessaloniki', 'Panathinaikos', 2.20],
  [10945, 'Fortuna Sittard', 'Feyenoord Rotterdam', 'Feyenoord Rotterdam', 1.48],
  [11030, 'Cracovia Krakow', 'Wisla Krakow', 'Cracovia Krakow', 1.95],
  [11200, 'Moreirense', 'Boavista', 'Boavista', 2.45],
  [11200, 'Slavia Prague', 'Viktoria Plzen', 'Viktoria Plzen', 3.00],
  [11100, 'FC U Craiova 1948', 'FC Uta Arad', 'FC U Craiova 1948', 2.30],
  [11100, 'FC Akhmat Grozny', 'CSKA Moscow', 'CSKA Moscow', 1.90],
  [10930, 'FC Luzern', 'Lausanne Sports', 'FC Luzern', 1.55],
  [11208, 'New York City', 'San Jose Earthquakes', 'New York City', 1.40],
  [11200, 'Pumas Unam', 'Pachuca', 'Pumas Unam', 2.10],
  [11100, 'Alianza Atletico', 'Ayacucho FC', 'Alianza Atletico', 1.85],
  [11030, 'West Ham United', 'Arsenal', 'Arsenal', 1.72],
  [10800, 'Adanaspor', 'Boluspor', '0.5', 1.44],
  [10800, 'Denizlispor', 'Genclerbirligi', '0.5', 1.45],
  [10915, 'Granada', 'Celta de Vigo', 'Granada', 2.25],
  [10900, 'Sporting Gijon', 'UD Ibiza Eivissa', 'Sporting Gijon', 1.90],
  [10900, 'Alcorcon', 'Girona', 'Girona', 1.75],
  [10800, 'AC Milán', 'Fiorentina', 'AC Milán', 1.65],
  [10800, 'Empoli', 'Torino', 'Torino', 1.95],
  [10900, 'Olympiacos', 'Pas Giannina', 'Olympiacos', 1.60],
  [10800, 'Termalica Bruk-Bet Nieciecza', 'Wisla Plock', 'Wisla Plock', 2.15],
  [10930, 'Vitoria Guimaraes', 'CD Santa Clara', 'Vitoria Guimaraes', 1.90],
  [10800, 'Rio Ave', 'Casa Pia Atletico', 'Rio Ave', 2.20],
  [10900, 'Bohemians 1905', 'FK Pardubice', 'Bohemians 1905', 1.80],
  [10900, 'FK Baumit Jablonec', 'MFK Karvina', 'FK Baumit Jablonec', 1.61],
  [10900, 'Fastav Zlin', 'FK Teplice', 'FK Teplice', 2.45],
  [10830, 'FK Khimki', 'FC Ufa', 'FK Khimki', 2.10],
  [10930, 'FC Basel', 'FC Zurich', 'FC Basel', 1.66],
  [10800, 'Alanyaspor', 'Yeni Malatyaspor st	2ª Mitad - más/Menos de Alanyaspor', 1.22],
  [10800, 'Kayserispor', 'Besiktas st	2ª Mitad - más/Menos de Besiktas', 1.48],
  [10900, 'Botafogo RJ', 'Juventude RS', 'Botafogo RJ', 1.95],
  [10900, 'Criciuma SC', 'Novorizontino SP', 'Criciuma SC', 2.05],
  [10700, 'Elche', 'Osasuna', 'Osasuna', 2.30],
  [10700, 'SD Amorebieta', 'Fuenlabrada', 'SD Amorebieta', 1.85],
  [10800, 'Brest', 'Clermont Foot', 'Brest', 1.95],
  [10800, 'Lorient', 'Stade Reims', 'Lorient', 2.10],
  [10800, 'AS Monaco', 'Angers SCO', 'AS Monaco', 1.50],
  [10600, 'Troyes', 'Lille', 'Lille', 2.00],
  [10800, 'Montpellier', 'FC Metz', 'FC Metz', 2.50],
  [10530, 'Juventus', 'Venezia', 'Juventus', 1.38],
  [10630, 'Antwerp', 'St. Gilloise', 'St. Gilloise', 1.76],
  [10515, 'Heerenveen', 'Cambuur Leeuwarden', 'Heerenveen', 1.65],
  [10730, 'GO Ahead Eagles', 'Vitesse', 'GO Ahead Eagles', 2.10],
  [10730, 'PSV Eindhoven', 'Willem II Tilburg', 'PSV Eindhoven', 1.30],
  [10500, 'Vilafranquense', 'Benfica B', 'Vilafranquense', 2.10],
  [10645, 'Feirense', 'CD Trofense', 'Feirense', 2.10],
  [10600, 'Spartak Moscow', 'Krylia Sovetov Samara', 'Spartak Moscow', 1.76],
  [10715, 'FC Sion', 'Young Boys', 'Young Boys', 1.53],
  [10600, 'Celtic', 'Glasgow Rangers', 'Celtic', 1.70],
  [10800, 'Tottenham', 'Leicester City', 'Tottenham', 1.48],
  [10800, 'Everton', 'Chelsea', 'Chelsea', 1.76]
]

let PARTIDOS_SIN_CUOTA = [
  [10630,"YE-BEL1","Antwerp","Royale Union SG",8],[11130,"YE-BEL1","Anderlecht","Club Brujas",10],[10800,"*YE-BIE1","Isloch","FC Minsk",12],[11230,"*YE-BIE1","Dinamo Brest","Arsenal Dzyarzhynsk",12],[11400,"*ZA-BOL1","Always Ready","Bolívar",12],[11400,"*ZA-BOL1","Universitario de Vinto","Blooming",12],[11900,"*ZA-BOL1","Oriente Petrolero","Palmaflor",12],[10900,"ZA-BRA1","Botafogo","Juventude",5],[11400,"ZA-BRA1","Corinthians","Fortaleza",5],[11400,"ZA-BRA1","Coritiba","Fluminense",6],[11700,"ZA-BRA1","Internacional","Avaí",5],[10900,"ZA-BRA2","Criciúma","Novorizontino",7],[11600,"ZA-BRA2","Tombense","Vasco",6],[11600,"ZA-BRAC","AE Altos","Flamengo",4],[11400,"ZA-COL1","Once Caldas","Deportivo Cali",7],[11605,"ZA-COL1","Patriotas","Millonarios",6],[12015,"ZA-COL1","Junior","Envigado",5],[11500,"*ZM-COLF","Tolima F","Real Santander F",12],[11400,"ZA-ECU1","Orense","U. Católica",6],[11630,"ZA-ECU1","Cumbaya","Dep. Cuenca",10],[11900,"ZA-ECU1","Ind. del Valle","LDU Quito",7],[10600,"ZR-ESC1","Celtic","Rangers",3],[10700,"ESP1","Elche","Osasuna",10],[10915,"ESP1","Granada","Celta de Vigo",9],[11130,"ESP1","Rayo Vallecano","Real Sociedad",4],[11400,"ESP1","Barcelona","Mallorca",3],[10700,"ESP2","Amorebieta","Fuenlabrada",7],[10900,"ESP2","Alcorcón","Girona",6],[10900,"ESP2","Sporting de Gijón","UD Ibiza",7],[11115,"ESP2","Lugo","Tenerife",8],[11115,"ESP2","Ponferradina","Cartagena",7],[11200,"ZA-EST1","New York City","San Jose Earthquakes",7],[11500,"ZA-EST1","Nashville SC","Philadelphia Union",10],[12100,"ZA-EST1","Los Angeles FC","Minnesota United",10],[11900,"*ZA-EST2","LA Galaxy 2","Phoenix Rising",12],[10600,"FRA1","Troyes","Lille",8],[10800,"FRA1","Brest","Clermont",7],[10800,"FRA1","Lorient","Reims",7],[10800,"FRA1","Mónaco","Angers",5],[10800,"FRA1","Montpellier","Metz",10],[11005,"FRA1","Girondins","Niza",8],[11345,"FRA1","Marsella","Lyon",7],[10900,"YE-GRE1","Olympiacos","Giannina",7],[11100,"YE-GRE1","Panathinaikos","Aris",7],[11300,"YE-GRE1","PAOK","AEK",10],[10800,"ZR-ING1","Everton","Chelsea",2],[10800,"ZR-ING1","Tottenham","Leicester",5],[11030,"ZR-ING1","West Ham","Arsenal",4],[10530,"ITA1","Juventus","Venezia",1],[10800,"ITA1","AC Milan","Fiorentina",1],[10800,"ITA1","Empoli","Torino",8],[11100,"ITA1","Udinese","Inter",2],[11345,"ITA1","Roma","Bolonia",1],[11200,"ZA-MEX1","Pumas UNAM","Pachuca",9],[11600,"ZA-MEX1","Atlético de San Luis","Santos Laguna",10],[12000,"ZA-MEX1","León","Toluca",7],[11600,"ZA-MEX2","Leones Negros","Atlante",6],[11805,"ZA-MEX2","Celaya","Cancun",7],[10515,"YE-HOL1","Heerenveen","Cambuur",7],[10730,"YE-HOL1","G.A. Eagles","Vitesse",7],[10730,"YE-HOL1","PSV","Willem II",1],[10945,"YE-HOL1","Sittard","Feyenoord",6],[11300,"YE-HOL1","Waalwijk","Groningen",8],[11600,"ZA-PAR1","Sol de América","Guaraní",8],[11815,"ZA-PAR1","Olimpia","Guairena FC",7],[11100,"ZA-PER1","Alianza Atl.","Ayacucho",7],[11300,"ZA-PER1","Grau","Universitario",8],[11315,"ZA-PER1","Carlos Mannucci","ADT Tarma",7],[11530,"ZA-PER1","Alianza Lima","Carlos Stein",7],[11800,"ZA-PER1","Sport Huancayo","César Vallejo",7],[10800,"YE-POL1","Termalica B-B.","Plock",10],[11030,"YE-POL1","Cracovia","Wisla",7],[10930,"YE-POR1","V. Guimaraes","Santa Clara",7],[11200,"YE-POR1","Moreirense","Boavista",10],[11430,"YE-POR1","Sporting CP","Gil Vicente",5],[10500,"YE-POR2","Vilafranquense","Benfica B",9],[10645,"YE-POR2","Feirense","Trofense",7],[10800,"YE-POR2","Rio Ave","Casa Pia",7],[10900,"YE-REP1","Bohemians","Pardubice",7],[10900,"YE-REP1","Jablonec","Karvina",7],[10900,"YE-REP1","Zlin","Teplice",10],[11200,"YE-REP1","Slavia Praga","Plzen",10],[11100,"YE-RUM1","U Craiova 1948","UTA Arad",7],[11330,"YE-RUM1","CFR Cluj","Farul Constanta",7],[10600,"YE-RUS1","Spartak Moscú","Kr. Sovetov",7],[10830,"YE-RUS1","Khimki","Ufa",7],[11100,"YE-RUS1","Akhmat Grozny","CSKA Moscú",6],[10715,"YE-SUI1","Sion","Young Boys",8],[10930,"YE-SUI1","Basilea","Zúrich",7],[10930,"YE-SUI1","Lucerna","Lausanne",7],[10800,"YE-TUR1","Alanyaspor","Yeni Malatyaspor",7],[10800,"YE-TUR1","Kayserispor","Beşiktaş",6],[11230,"YE-TUR1","Galatasaray","Sivasspor",5],[11230,"YE-TUR1","Göztepe","Rizespor",10],[10800,"*YE-TUR2","Adanaspor","Boluspor",11],[10800,"*YE-TUR2","Ankaragucu","Samsunspor",12],[10800,"*YE-TUR2","Bandirmaspor","Keciorengucu",12],[10800,"*YE-TUR2","Denizlispor","Genclerbirligi",11],[10800,"*YE-TUR2","Erzurum BB","Kocaelispor",12],[10800,"*YE-TUR2","Eyupspor","Istanbulspor",12],[10800,"*YE-TUR2","Manisa FK","Bursaspor",12],[10800,"*YE-TUR2","Menemenspor","Tuzlaspor",12],[10800,"*YE-TUR2","Umraniyespor","Balikesirspor",12],[11000,"*ZA-VEN1","Universidad Central","Mineros",11],[11715,"*ZA-VEN1","Portuguesa","Metropolitanos",11]
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

