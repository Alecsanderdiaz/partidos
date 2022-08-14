let PARTIDOS_CON_CUOTA = [
  [11600, 'Hermanos Colmenarez', 'UCV FC', '0.5', 1.44],
  [11815, 'Deportivo Tachira', 'Carabobo FC', '0.5', 1.45],
  [11600, 'Argentinos Juniors', 'Union Santa Fe', 'Argentinos Juniors', 2.10],
  [11600, 'Estudiantes de La Plata', 'Talleres de Cordoba', 'Estudiantes de La Plata', 2.15],
  [11830, 'Racing Club', 'Boca Juniors', 'Boca Juniors', 2.45],
  [11540, 'San Martin de Tucuman', 'Gimnasia Y Esgrima Mendoza', 'San Martin de Tucuman', 2.30],
  [11700, 'Internacional RS', 'Fluminense RJ', 'Internacional RS', 2.20],
  [11600, 'America Mineiro MG', 'Santos SP', 'Santos SP', 2.50],
  [11630, 'Colo Colo', 'Palestino', 'Colo Colo', 1.60],
  [11900, 'Nublense', 'Union Espanola', 'Union Espanola', 2.37],
  [11600, 'Jaguares De Córdoba', 'Deportivo Pereira', 'Deportivo Pereira', 2.60],
  [11805, 'Rionegro Aguilas', 'Millonarios', 'Millonarios', 2.25],
  [11500, 'Valledupar', 'Tigres FC', 'Tigres FC', 2.62],
  [11800, 'LDU Quito', 'Club Sport Emelec', 'LDU Quito', 1.93],
  [11530, 'Tecnico Universitario', 'Guayaquil City FC', 'Guayaquil City FC', 2.87],
  [12108, 'Seattle Sounders', 'Real Salt Lake', 'Seattle Sounders', 1.72],
  [12025, 'Nashville SC', 'Minnesota United FC', 'Minnesota United FC', 2.40],
  [11700, 'Cruz Azul', 'Toluca', 'Cruz Azul', 1.95],
  [11905, 'Tigres UANL', 'Santos Laguna', 'Tigres UANL', 1.65],
  [11730, 'Guarani Asuncion', 'Nacional Asuncion', 'Nacional Asuncion', 2.37],
  [11530, 'Sport Huancayo', 'UTC Cajamarca', 'Sport Huancayo', 1.70],
  [11500, 'Almeria', 'Real Madrid', 'Real Madrid', 1.50],
  [11500, 'Burgos CF', 'Malaga', 'Malaga', 2.45],
  [11345, 'Brest', 'Marseille', 'Marseille', 1.72],
  [11345, 'Spezia', 'Empoli', 'Spezia', 2.00],
  [11345, 'Salernitana', 'Roma', 'Roma', 1.61],
  [11345, 'Ascoli', 'Ternana', 'Ascoli', 1.83],
  [11345, 'Benevento Calcio', 'Cosenza', 'Benevento Calcio', 1.57],
  [11345, 'Brescia', 'FC Sudtirol', 'Brescia', 1.61],
  [11345, 'Spal', 'Reggina', 'Spal', 1.72],
  [11345, 'Modena FC', 'Frosinone', 'Frosinone', 2.05],
  [11345, 'Venezia', 'Génova', 'Génova', 2.05],
  [11400, 'Zulte Waregem', 'Genk', 'Genk', 1.50],
  [11430, 'Vitoria Guimaraes', 'Estoril', 'Vitoria Guimaraes', 1.95],
  [11330, 'FCSB', 'Chindia', 'FCSB', 1.76],
  [11345, 'Alanyaspor', 'Besiktas', 'Besiktas', 1.80],
  [11330, 'Velez Sarsfield', 'Gimnasia LP', 'Velez Sarsfield', 2.10],
  [11430, 'Mitre Santiago Del Estero', 'Villa Dalmine', 'Mitre Santiago Del Estero', 2.10],
  [11400, 'Club Atletico Alvarado', 'Estudiantes Rio Cuarto', 'Estudiantes Rio Cuarto', 2.35],
  [11400, 'Ceara CE', 'Fortaleza CE', 'Ceara CE', 2.35],
  [11400, 'Flamengo RJ', 'Atletico PR', 'Flamengo RJ', 1.55],
  [11400, 'Sao Paulo SP', 'Bragantino SP', 'Bragantino SP', 2.40],
  [11400, 'Deportes La Serena', 'Huachipato', 'Deportes La Serena', 2.05],
  [11500, 'Atletico de Cali', 'Orsomarso', 'Atletico de Cali', 2.05],
  [11430, 'Olimpia Asuncion', 'Cerro Porteño', 'Cerro Porteño', 2.10],
  [11330, 'Liverpool Montevideo', 'Nacional Montevideo', 'Nacional Montevideo', 1.93],
  [11230, 'Valencia', 'Girona', 'Valencia', 1.85],
  [11230, 'UD Ibiza Eivissa', 'Granada', 'Granada', 2.00],
  [11130, 'Fiorentina', 'Cremonese', 'Fiorentina', 1.50],
  [11130, 'Lazio', 'Bologna', 'Lazio', 1.60],
  [11030, 'Chelsea', 'Tottenham', 'Tottenham', 2.25],
  [11130, 'OH Leuven', 'Club Brugge', 'Club Brugge', 1.50],
  [11030, 'Rakow Czestochowa', 'Jagiellonia Bialystok', 'Rakow Czestochowa', 1.53],
  [11300, 'Lech Poznan', 'Slask Wroclaw', 'Lech Poznan', 1.57],
  [11200, 'FC Vizela', 'FC Porto', 'FC Porto', 1.45],
  [11200, 'AC Sparta Praha', 'Sigma Olomouc', 'AC Sparta Praha', 1.50],
  [11030, 'CFR Cluj', 'FC Botosani', 'CFR Cluj', 1.76],
  [11200, 'Spartak Moscow', 'FC Sochi - 04', 'Spartak Moscow', 1.70],
  [11115, 'Gaziantep BB', 'Ankaragucu', 'Gaziantep BB', 1.76],
  [11115, 'Ümraniyespor', 'Antalyaspor', 'Ümraniyespor', 2.05],
  [11245, 'Chacarita Juniors', 'San Martin de San Juan', 'Chacarita Juniors', 2.50],
  [11300, 'Club Almagro', 'Deportivo Madryn', 'Club Almagro', 2.20],
  [11300, 'Brown de Adrogue', 'Chaco For Ever', 'Brown de Adrogue', 2.65],
  [11300, 'Defensores de Belgrano', 'CA San Telmo', 'Defensores de Belgrano', 1.95],
  [11300, 'Guillermo Brown', 'Club Atletico Atlanta', 'Guillermo Brown', 2.20],
  [11100, 'Tristan Suarez', 'CA All Boys', 'CA All Boys', 2.40],
  [11300, 'Cumbaya FC', 'Macara', 'Macara', 2.20],
  [11300, 'Atlético Grau', 'Deportivo Municipal', 'Atlético Grau', 1.95],
  [11315, 'Sport Boys Association', 'Club Sportivo Cienciano', 'Sport Boys Association', 2.25],
  [11100, 'Alianza Atletico', 'Universidad Cesar Vallejo', 'Universidad Cesar Vallejo', 2.25],
  [11030, 'Torque', 'Defensor Sporting', 'Torque', 2.10],
  [10815, 'Racing Club Montevideo', 'Progreso', '0.5', 1.42],
  [10830, 'Mainz 05', 'Union Berlin', 'Mainz 05', 1.95],
  [11030, 'Bayern Munich', 'Wolfsburg', 'Bayern Munich', 1.22],
  [11030, 'CF Cadiz', 'Real Sociedad', 'Real Sociedad', 2.10],
  [11030, 'Racing Santander', 'CF Villarreal B', 'CF Villarreal B', 2.45],
  [11005, 'Nice', 'Strasbourg', 'Nice', 2.00],
  [10900, 'Hearts', 'Dundee United', 'Hearts', 1.61],
  [10800, 'Middlesbrough', 'Sheffield United', 'Middlesbrough', 2.15],
  [10900, 'Blackburn Rovers', 'West Bromwich', 'West Bromwich', 2.20],
  [10900, 'AS Eupen', 'Antwerp', 'Antwerp', 1.65],
  [10945, 'Sparta Rotterdam', 'AZ Alkmaar', 'AZ Alkmaar', 1.85],
  [10800, 'Radomiak Radom', 'Lechia Gdansk', 'Radomiak Radom', 1.85],
  [10930, 'Boavista', 'CD Santa Clara', 'Boavista', 2.25],
  [10930, 'Vilafranquense', 'Oliveirense', 'Vilafranquense', 1.95],
  [10930, 'B-SAD', 'FC Porto B', 'FC Porto B', 2.25],
  [10900, 'SK Dynamo Ceske Budejovice', 'FC Slovacko', 'SK Dynamo Ceske Budejovice', 2.25],
  [10900, 'FK Baumit Jablonec', 'Slavia Prague', 'Slavia Prague', 1.72],
  [10900, 'FK Pardubice', 'Slovan Liberec', 'Slovan Liberec', 2.15],
  [10800, 'CS U Craiova', 'CS Mioveni', 'CS U Craiova', 1.60],
  [10930, 'FC Olimpiyets Nizhny Novgorod', 'Rostov', 'Rostov', 1.80],
  [10930, 'FK Gazovik Orenburg', 'Torpedo Moscow', 'FK Gazovik Orenburg', 1.80],
  [10930, 'FC Basel', 'FC Lugano', 'FC Basel', 1.57],
  [10930, 'Young Boys', 'Servette FC', 'Young Boys', 1.45],
  [10900, 'Coritiba PR', 'Atletico MG', 'Atletico MG', 1.90],
  [10900, 'Novorizontino SP', 'Criciuma SC', 'Criciuma SC', 2.62],
  [10630, 'Fortuna Dusseldorf', 'Greuther Furth', 'Fortuna Dusseldorf', 1.72],
  [10630, 'Hannover 96', 'Jahn Regensburg', 'Hannover 96', 1.75],
  [10630, 'FC St. Pauli', '1. FC Magdeburg', 'FC St. Pauli', 1.61],
  [10600, 'SV Meppen', 'SV Waldhof Mannheim', 'SV Waldhof Mannheim', 1.85],
  [10700, 'FC Erzgebirge Aue', 'SV Wehen Wiesbaden', 'SV Wehen Wiesbaden', 2.15],
  [10800, 'Stade Reims', 'Clermont Foot', 'Stade Reims', 2.00],
  [10800, 'Ajaccio', 'RC Lens', 'RC Lens', 2.10],
  [10800, 'Troyes', 'Toulouse', 'Toulouse', 2.15],
  [10800, 'AJ Auxerre', 'Angers SCO', 'Angers SCO', 2.37],
  [10600, 'Kilmarnock', 'Celtic', 'Celtic', 1.33],
  [10800, 'Nottingham Forest', 'West Ham United', 'West Ham United', 1.80],
  [10530, 'Suwon Samsung Bluewings', 'Seongnam Ilhwa', 'Suwon Samsung Bluewings', 1.95],
  [10500, 'Jeju United', 'Pohang Steelers', 'Pohang Steelers', 1.95],
  [10400, 'Kashima Antlers', 'Avispa Fukuoka', 'Kashima Antlers', 1.80],
  [10430, 'Kashiwa Reysol', 'Sanfrecce Hiroshima', 'Kashiwa Reysol', 2.35],
  [10500, 'Sagan Tosu', 'Nagoya Grampus', 'Sagan Tosu', 2.30],
  [10500, 'Gamba Osaka', 'Shimizu S-Pulse', 'Shimizu S-Pulse', 1.83],
  [10630, 'St Truiden', 'Anderlecht', 'Anderlecht', 1.80],
  [10730, 'Ajax Amsterdam', 'Groningen', 'Ajax Amsterdam', 1.25],
  [10730, 'Twente', 'Fortuna Sittard', 'Twente', 1.57],
  [10515, 'Volendam', 'NEC Nijmegen', 'NEC Nijmegen', 1.90],
  [10515, 'ADO Den Haag', 'FC Den Bosch', 'ADO Den Haag', 1.48],
  [10500, 'Academica Viseu', 'Moreirense', 'Moreirense', 2.05],
  [10700, 'FK Khimki', 'FC Akhmat Grozny', 'FC Akhmat Grozny', 2.00],
  [10715, 'FC Winterthur', 'FC Zurich', 'FC Zurich', 1.75],
]

let PARTIDOS_SIN_CUOTA = [
  [10830,"ALE1","Mainz","Union Berlín",7],[11030,"ALE1","Bayern Múnich","Wolfsburgo",1],[10630,"ALE2","Fortuna Düsseldorf","Greuther Fürth",7],[10630,"ALE2","Hannover","Regensburg",7],[10630,"ALE2","St. Pauli","Magdeburgo",7],[10600,"ALE3","Meppen","Mannheim",8],[10700,"ALE3","Aue","Wehen",10],[11330,"ZA-ARG1","Vélez Sarsfield","Gimnasia L.P.",7],[11600,"ZA-ARG1","Argentinos Jrs.","Unión Santa Fe",7],[11600,"ZA-ARG1","Estudiantes L.P.","Talleres",7],[11830,"ZA-ARG1","Racing Club","Boca Jrs.",4],[11100,"ZA-ARG2","Tristán Suárez","All Boys",10],[11245,"ZA-ARG2","Chacarita","San Martín S.J.",9],[11300,"ZA-ARG2","Almagro","Deportivo Madryn",7],[11300,"ZA-ARG2","Brown Adrogué","Chaco For Ever",7],[11300,"ZA-ARG2","Def. de Belgrano","San Telmo",7],[11300,"ZA-ARG2","Guillermo Brown","Atlanta",7],[11400,"ZA-ARG2","Alvarado","Estudiantes Rio Cuarto",8],[11430,"ZA-ARG2","CA Mitre","Villa Dálmine",7],[11540,"ZA-ARG2","San Martín Tuc.","Gimnasia Mendoza",7],[10630,"YE-BEL1","St. Truiden","Anderlecht",4],[10900,"YE-BEL1","Eupen","Antwerp",8],[11130,"YE-BEL1","Leuven","Club Brujas",6],[11400,"YE-BEL1","Waregem","Genk",6],[10930,"*YE-BIE1","BATE","Belshina",12],[11130,"*YE-BIE1","Arsenal Dzyarzhynsk","Dinamo Minsk",12],[11400,"*ZA-BOL","Nacional Potosí","J. Wilstermann",12],[11615,"*ZA-BOL","U. Sucre","Universitario de Vinto",12],[11830,"*ZA-BOL","Oriente Petrolero","Tomayapo",12],[10900,"ZA-BRA1","Coritiba","Atlético-MG",4],[11400,"ZA-BRA1","Ceará","Fortaleza",7],[11400,"ZA-BRA1","Flamengo","Athletico-PR",5],[11400,"ZA-BRA1","Sao Paulo","Bragantino",10],[11600,"ZA-BRA1","América-MG","Santos",6],[11700,"ZA-BRA1","Internacional","Fluminense",7],[10900,"ZA-BRA2","Novorizontino","Criciúma",10],[11400,"*ZA-BRAS","Vasco Sub-20","Palmeiras Sub-20",12],[11400,"ZA-CHI1","La Serena","Huachipato",7],[11630,"ZA-CHI1","Colo Colo","Palestino",1],[11900,"ZA-CHI1","Ñublense","U. Española",10],[11600,"ZA-COL1","Jaguares de Córdoba","Pereira",10],[11805,"ZA-COL1","Aguilas Doradas","Millonarios",6],[12010,"ZA-COL1","Deportivo Cali","Dep. Pasto",5],[11500,"ZA-COL2","Atletico F.C.","Orsomarso",7],[11500,"ZA-COL2","Valledupar","Tigres",10],[10500,"S-COR1","Jeju","Pohang",8],[10530,"S-COR1","Suwon","Seongnam",7],[11300,"ZA-ECU1","Cumbaya","Macará",8],[11530,"ZA-ECU1","Técnico U.","Guayaquil City",10],[11800,"ZA-ECU1","LDU Quito","Emelec",5],[10600,"R-ESC1","Kilmarnock","Celtic",4],[10900,"R-ESC1","Hearts","Dundee Utd",7],[11030,"ESP1","Cádiz","Real Sociedad",4],[11230,"ESP1","Valencia","Girona",5],[11500,"ESP1","Almería","Real Madrid",2],[11030,"ESP2","Racing","Villarreal B",10],[11230,"ESP2","UD Ibiza","Granada",6],[11500,"ESP2","Burgos CF","Málaga",4],[12000,"ZA-EST1","Nashville SC","Minnesota United",10],[12100,"ZA-EST1","Seattle Sounders","Real Salt Lake",7],[11900,"*ZA-EST2","LA Galaxy 2","New Mexico",12],[10800,"FRA1","AC Ajaccio","Lens",8],[10800,"FRA1","Auxerre","Angers",10],[10800,"FRA1","Reims","Clermont",7],[10800,"FRA1","Troyes","Toulouse",8],[11005,"FRA1","Niza","Estrasburgo",5],[11345,"FRA1","Brest","Marsella",6],[10800,"R-ING1","Nottingham Forest","West Ham",8],[11030,"R-ING1","Chelsea","Tottenham",6],[10800,"R-ING2","Middlesbrough","Sheffield Utd",7],[10900,"R-ING2","Blackburn","West Brom",6],[11130,"ITA1","Fiorentina","Cremonese",7],[11130,"ITA1","Lazio","Bolonia",3],[11345,"ITA1","Salernitana","Roma",4],[11345,"ITA1","Spezia","Empoli",7],[11345,"ITA2","Ascoli","Ternana",7],[11345,"ITA2","Benevento","Cosenza",5],[11345,"ITA2","Brescia","Sudtirol",3],[11345,"ITA2","Modena","Frosinone",8],[11345,"ITA2","Spal","Reggina",7],[11345,"ITA2","Venezia","Genoa",8],[10400,"S-JAP1","Kashima","Avispa Fukuoka",7],[10430,"S-JAP1","Kashiwa","Hiroshima",9],[10500,"S-JAP1","G-Osaka","Shimizu",8],[10500,"S-JAP1","Sagan Tosu","Nagoya",9],[11700,"ZA-MEX1","Cruz Azul","Toluca",7],[11905,"ZA-MEX1","Tigres UANL","Santos Laguna",5],[10800,"*AMI","Bonn-Endenich 08 (Ger)","Hennef (Ger)",12],[10900,"*AMI","Gubbio (Ita)","Follonica Gavorrano (Ita)",12],[11000,"*AMI","Trento (Ita)","Levico Terme (Ita)",12],[11115,"*AMI","Mosta FC (Mlt)","Naxxar Lions (Mlt)",12],[11200,"*AMI","Al Wehda (Sau)","Real Murcia (Esp)",12],[11200,"*AMI","Caspe (Esp)","Binéfar (Esp)",12],[11300,"*AMI","Atlético Porcuna (Esp)","Mancha Real (Esp)",12],[11300,"*AMI","San Cristobal CP (Esp)","Prat (Esp)",12],[11300,"*AMI","Unión Estepona (Esp)","Atlético de Madrid B (Esp)",12],[10515,"YE-HOL1","FC Volendam","Nijmegen",8],[10730,"YE-HOL1","Ajax","Groningen",3],[10730,"YE-HOL1","Twente","Sittard",7],[10945,"YE-HOL1","Sparta Rotterdam","AZ Alkmaar",8],[10515,"YE-HOL2","Den Haag","Den Bosch",7],[11430,"ZA-PAR1","Olimpia","Cerro Porteño",6],[11730,"ZA-PAR1","Guaraní","Nacional Asunción",6],[11100,"ZA-PER1","Alianza Atl.","César Vallejo",10],[11300,"ZA-PER1","Grau","Dep. Municipal",7],[11315,"ZA-PER1","Sport Boys","Cienciano",9],[11530,"ZA-PER1","Sport Huancayo","UTC",7],[10800,"YE-POLE","Radomiak Radom","Lechia",7],[11030,"YE-POLE","Rakow","Jagiellonia",7],[11300,"YE-POLE","Lech","Slask",7],[10930,"YE-POR1","Boavista","Santa Clara",7],[11200,"YE-POR1","Vizela","Oporto",4],[11430,"YE-POR1","V. Guimaraes","Estoril",7],[10500,"YE-POR2","Academico Viseu","Moreirense",8],[10930,"YE-POR2","BSAD","Oporto B",10],[10930,"YE-POR2","Vilafranquense","Oliveirense",7],[10900,"YE-REP1","Ceske Budejovice","Slovacko",9],[10900,"YE-REP1","Jablonec","Slavia Praga",8],[10900,"YE-REP1","Pardubice","Liberec",10],[11200,"YE-REP1","Sparta Praga","Sigma Olomouc",7],[10800,"YE-RUM1","Univ. Craiova","Mioveni",7],[11030,"YE-RUM1","CFR Cluj","Botosani",7],[11330,"YE-RUM1","FCSB","Chindia Targoviste",7],[10700,"YE-RUS1","Khimki","Akhmat Grozny",10],[10930,"YE-RUS1","Nizhny Novgorod","Rostov",8],[10930,"YE-RUS1","Orenburg","Torpedo Moscow",7],[11200,"YE-RUS1","Spartak Moscú","Sochi",7],[10715,"YE-SUI1","Winterthur","Zúrich",8],[10930,"YE-SUI1","Basilea","Lugano",7],[10930,"YE-SUI1","Young Boys","Servette",7],[10715,"*YE-SUI2","Vaduz","Thun",12],[11115,"YE-TUR1","Gaziantep","Ankaragucu",7],[11115,"YE-TUR1","Umraniyespor","Antalyaspor",9],[11345,"YE-TUR1","Alanyaspor","Beşiktaş",6],[10900,"*YE-TUR2","Bodrumspor","Yeni Malatyaspor",12],[11200,"*YE-TUR2","Sakaryaspor","Göztepe",12],[11030,"ZA-URU1","Montevideo City","Defensor Sp.",7],[11330,"ZA-URU1","Liverpool M.","Nacional",8],[10815,"*ZA-URU2","Racing Montevideo","Progreso",11],[11615,"*ZA-URU2","Miramar","Cerro CA",12],[11600,"*ZA-VEN1","Hermanos Colmenarez","Universidad Central",11],[11815,"*ZA-VEN1","Dep. Táchira","Carabobo",11]
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

