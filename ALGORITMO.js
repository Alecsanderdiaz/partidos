let PARTIDOS_CON_CUOTA = [
  [11230, 'Athletic Bilbao', 'Osasuna', 'Athletic Bilbao', 1.61],
  [11230, 'Real Betis', 'Granada', 'Real Betis', 1.55],
  [11230, 'Villarreal', 'Real Sociedad', 'Villarreal', 2.00],
  [11230, 'Celta de Vigo', 'Elche', 'Celta de Vigo', 1.53],
  [11230, 'CF Cadiz', 'Real Madrid', 'Real Madrid', 1.93],
  [11230, 'Getafe', 'Barcelona', 'Barcelona', 1.95],
  [11230, 'Atlético Madrid', 'Sevilla', 'Sevilla', 2.90],
  [11400, 'CD Tenerife', 'Malaga', 'Malaga', 2.87],
  [11100, 'AC Milán', 'Atalanta', 'AC Milán', 1.70],
  [11345, 'Cagliari', 'Inter', 'Inter', 1.45],
  [11030, 'Everton', 'Brentford', 'Everton', 1.83],
  [11130, 'Anderlecht', 'St. Gilloise', 'Anderlecht', 1.95],
  [11200, 'FC Famalicao', 'Sporting Braga', 'Sporting Braga', 1.85],
  [11000, 'Viktoria Plzen', 'Banik Ostrava', 'Viktoria Plzen', 1.40],
  [11100, 'Krasnodar', 'CSKA Moscow', 'CSKA Moscow', 1.70],
  [11100, 'Fenerbahce', 'Karagumruk', 'Fenerbahce', 1.48]
]

let PARTIDOS_SIN_CUOTA = [
  [10020,"S-COR1","Suwon FC","Jeju",8,1.95,null,1.95],[10230,"S-COR1","Jeonbuk","Gangwon",7,1.72,null,3.35],[10500,"S-COR1","Seoul","Pohang",7,2.1,null,7.03],[10500,"YE-POR2","Rio Ave","Chaves",7,1.95,null,13.7],[10500,"YE-POR2","Leixoes","Casa Pia",2,1.75,null,23.97],[10530,"ITA1","Bolonia","Sassuolo",10,1.76,null,42.18],[10530,"YE-POL1","Stal Mielec","Slask",9,2.05,null,86.46],[10600,"*YE-BIE1","Isloch","Slavia Mozyr",11,1.4,null,121.04],[10600,"R-ESC1","Hibernian","St. Johnstone",7,1.95,null,236.02],[10600,"R-ESC1","Livingston","Dundee FC",7,1.8,null,424.83],[10600,"R-ESC1","Aberdeen","St. Mirren",10,2.75,null,1168.28],[10600,"R-ING1","Tottenham","Burnley",1,1.48,null,1729.05],[10600,"R-INGT","Swindon","Port Vale",7,2,null,3458.1],[10600,"YE-RUS1","Ural","Rubin Kazan",6,2.3,null,7953.62],[10630,"YE-BEL1","Antwerp","Club Brujas",2,1.6,null,12725.79],[10700,"ESP2","Alcorcón","Las Palmas",6,1.65,null,20997.55],[10710,"*R-ESC2","Airdrieonians","Queens Park",11,1.45,null,30446.44],[10730,"YE-HOL1","AZ Alkmaar","Waalwijk",7,1.33,null,40493.76],[10730,"YE-HOL1","Feyenoord","Twente",7,1.45,null,58715.95],[10730,"YE-HOL1","Groningen","Cambuur",7,1.57,null,92184.04],[10730,"YE-HOL1","Heerenveen","G.A. Eagles",7,1.72,null,158556.54],[10730,"YE-HOL1","Nijmegen","Sittard",7,1.8,null,285401.77],[10730,"YE-HOL1","Heracles","Sparta Rotterdam",10,2.37,null,676402.19],[10730,"YE-HOL1","Vitesse","Ajax",2,1.4,null,946963.06],[10730,"YE-HOL1","Willem II","Utrecht",10,2,null,1893926.12],[10730,"YE-HOL1","Zwolle","PSV",2,1.42,null,2689375.09],[10800,"*YE-BIE1","Slutsk","Dnepr Mogilev",11,1.4,null,3765125.12],[10800,"R-ING1","Aston Villa","Crystal Palace",7,1.93,null,7266691.48],[10800,"R-ING1","Leeds Utd","Brighton",7,2.05,null,14896717.53],[10800,"R-ING1","Wolves","Norwich",7,1.6,null,23834748.04],[10800,"R-ING1","Watford","Leicester",6,1.75,null,41710809.07],[10800,"R-ING1","West Ham","Manchester City",2,1.45,null,60480673.15],[10800,"ITA1","Nápoles","Genoa",1,1.7,null,102817144.35],[10800,"YE-POL1","Gornik Z.","Leczna",7,1.5,null,154225716.52],[10800,"YE-tur1","Trabzonspor","Altay",3,1.44,null,222085031.78],[10800,"YE-tur1","Göztepe","Beşiktaş",2,1.45,null,322023296.08],[10830,"ALE2","Hannover","Ingolstadt",7,1.5,null,483034944.12],[10830,"ALE2","Heidenheim","Karlsruher",7,1.55,null,748704163.38],[10830,"ALE2","Werder Bremen","Regensburg",1,1.25,null,935880204.22],[10830,"ALE2","Darmstadt","Paderborn",10,2.05,null,1918554418.65],[10830,"ALE2","Dynamo Dresden","Aue",10,2.1,null,4028964279.16],[10830,"ALE2","Núremberg","Schalke",2,1.57,null,6325473918.28],[10830,"ALE2","Rostock","Hamburgo",2,1.4,null,8855663485.59],[10830,"ALE2","Sandhausen","Kiel",10,1.75,null,15497411099.78],[10830,"ALE2","St. Pauli","Fortuna Düsseldorf",8,1.72,null,26655547091.62],[10830,"YE-RUS1","Spartak Moscú","Zenit",2,1.6,null,42648875346.59],[10900,"YE-BEL1","Genk","Gent",7],[10900,"ESP2","Mirandés","UD Ibiza",10],[10900,"ESP2","Sporting de Gijón","Girona",8],[10900,"*R-INGN","Aldershot","Wealdstone",12],[10900,"*R-INGN","Altrincham","Yeovil",12],[10900,"*R-INGN","Barnet","Bromley",12],[10900,"*R-INGN","Boreham Wood","Solihull Moors",12],[10900,"*R-INGN","Chesterfield","Woking",12],[10900,"*R-INGN","Dagenham & Red.","Wrexham",12],[10900,"*R-INGN","Dover","Weymouth",12],[10900,"*R-INGN","Eastleigh","Grimsby",12],[10900,"*R-INGN","Maidenhead","Notts County",12],[10900,"*R-INGN","Southend","Torquay",12],[10900,"*R-INGN","Stockport","Halifax",12],[10900,"YE-POR2","Feirense","Nacional",10],[10900,"ZA-URU1","Cerro Largo","Maldonado",8],[10930,"YE-POR2","Estrela","Covilha",9],[10930,"YE-POR2","Varzim","Mafra",10],[11000,"*YE-BIE1","Neman Grodno","Arsenal Dzyarzhynsk",11],[11000,"YE-REP1","Plzen","Ostrava",1],[11000,"YE-REP1","Slavia Praga","Sparta Praga",7],[11000,"YE-REP1","Slovacko","Hradec Kralove",7],[11030,"R-ING1","Everton","Brentford",7],[11030,"YE-POL1","Radomiak Radom","Wisla",9],[11100,"*ZM-COLF","Deportivo Pereira F","Ind. Medellín F",11],[11100,"ITA1","AC Milan","Atalanta",1],[11100,"ZA-PER1","Carlos Stein","Grau",10],[11100,"YE-POR2","Leiria","Alverca",7],[11100,"YE-RUS1","Krasnodar","CSKA Moscú",2],[11100,"YE-tur1","Alanyaspor","Gaziantep",7],[11100,"YE-tur1","Fenerbahçe","Karagumruk",1],[11100,"YE-tur1","Konyaspor","Hatayspor",7],[11100,"YE-tur1","Giresunspor","Başakşehir",2],[11100,"YE-tur1","Kasimpasa","Antalyaspor",10],[11115,"ZA-URU1","Fénix","Danubio",7],[11130,"YE-BEL1","Anderlecht","Royale Union SG",7],[11130,"YE-GRE1","Asteras T.","Smyrnis",7],[11130,"YE-GRE1","Ionikos","Panetolikos",7],[11130,"YE-GRE1","Lamia","Atromitos",10],[11200,"YE-POR1","Famalicao","SC Braga",4],[11230,"ESP1","Athletic Club","Osasuna",1],[11230,"ESP1","Celta de Vigo","Elche",7],[11230,"ESP1","Real Betis","Granada",5],[11230,"ESP1","Villarreal","Real Sociedad",5],[11230,"ESP1","Atlético de Madrid","Sevilla",6],[11230,"ESP1","Cádiz","Real Madrid",2],[11230,"ESP1","Getafe","Barcelona",2],[11230,"ESP1","Levante","Alavés",10],[11230,"ESP1","Mallorca","Rayo Vallecano",10],[11230,"ZA-EST1","Atlanta Utd","New England Revolution",7],[11230,"*ZA-URU2","Miramar","Atenas",12],[11300,"ZA-ARG2","Instituto","Def. de Belgrano",7],[11300,"ZA-ECU1","Técnico U.","Ind. del Valle",2],[11300,"*ZA-URU2","Villa Española","La Luz",12],[11315,"ZA-PER1","Alianza Atl.","Sport Boys",7],[11330,"ZA-ARG2","Temperley","Club A. Guemes",7],[11330,"ZA-ARG2","Flandria","Dep. Riestra",10],[11330,"YE-RUM1","CFR Cluj","Univ. Craiova",7],[11330,"ZA-URU1","Albion","Cerrito",7],[11345,"ZA-CHI1","Cobresal","OHiggins",10],[11345,"ITA1","Cagliari","Inter",2],[11400,"ZA-ARG1","Tigre","Argentinos Jrs.",5],[11400,"*ZA-BOL1","Always Ready","Blooming",12],[11400,"*ZA-BOL1","Aurora","Nacional Potosí",12],[11400,"*ZA-BOL1","Independiente Petrolero","Universitario de Vinto",12],[11400,"*ZA-BOL1","Royal Pari","Bolívar",12],[11400,"*ZA-BOL1","Tomayapo","J. Wilstermann",12],[11400,"ZA-BRA1","Sao Paulo","Cuiabá",1],[11400,"ZA-BRA2","Vasco","Bahia",3],[11400,"ZA-BRA2","Náutico","Cruzeiro",2],[11400,"ZA-COL1","Patriotas","Deportivo Cali",10],[11400,"ESP2","Tenerife","Málaga",10],[11400,"*ZA-VEN1","La Guaira","Monagas",12],[11430,"ZA-ARG2","Alvarado","Chaco For Ever",9],[11430,"ZA-ARG2","Estudiantes Rio Cuarto","San Telmo",7],[11430,"YE-POR1","V. Guimaraes","Gil Vicente",7],[11500,"ZA-ARG2","Ind. Rivadavia","Atl. Rafaela",7],[11500,"*ZM-COLF","Llaneros F","Santa Fe F",12],[11500,"ZA-EST1","Seattle Sounders","Minnesota United",5],[11510,"ZA-ARG2","CA Mitre","Chacarita",10],[11530,"ZA-BRA1","Coritiba","América-MG",7],[11530,"ZA-ECU1","Orense","Emelec",2],[11530,"ZA-PER1","Carlos Mannucci","Universitario",8],[11600,"ZA-BRA1","Avaí","Juventude",7],[11600,"ZA-BRA1","Botafogo","Fortaleza",7],[11600,"ZA-PAR1","Ameliano","Libertad",2],[11615,"*ZA-VEN1","Zulia","Estudiantes M.",11],[11630,"ZA-CHI1","Huachipato","Ñublense",7],[11700,"ZA-BRA1","Goiás","Santos",6],[11700,"*ZM-COLF","Junior F","America de Cali F",12],[11710,"ZA-ARG2","Gimnasia Jujuy","Belgrano",8],[11715,"*ZA-URU2","Racing Montevideo","Rampla Juniors",12],[11800,"ZA-ECU1","Barcelona SC","Dep. Cuenca",1],[11800,"ZA-MEX1","Atlas","Guadalajara",10],[11800,"ZA-PER1","Sport Huancayo","Cienciano",7],[11815,"ZA-PAR1","Tacuary","Olimpia",2],[11900,"ZA-COL1","América de Cali","U. Magdalena",7],[12000,"*ZA-EST2","Phoenix Rising","Tampa Bay",12],[12005,"ZA-MEX1","Tigres UANL","Cruz Azul",7]
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

