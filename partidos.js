// let PARTIDOS = [
  // [11230,"*ESPC","migo","uentes",12],[11230,"*ESPC","Ceuta 6 de Junio","lcora",12],[11300,"*ESPC","Autol","Dinamo San Juan",12],[11300,"*ESPC","CD Algar","Melilla CD",12],[11300,"*ESPC","Santa Amalia","niv. Julio Suarez",12],[11300,"*ESPC","Velarde","uregano",12],[11330,"*ESPC","Barbadás","Atlético de Lugones",12],[11330,"*ESPC","Cazalegas","Los Yébenes",12],[11330,"*ESPC","Mollerussa","Cardassar",12],[11330,"*ESPC","ontilla","Rincón",12],[11500,"*FEMLIBE","Ferroviaria F","Boca Jrs. F",12],[11500,"*FEMLIBE","Nanas F","Defensor Sp. F",12],[11715,"*FEMLIBE","Corinthians F","Olimpia F",12],[11715,"*FEMLIBE","Deportivo Cali F","Always Ready F",12],[11030,"*PAISES","Países Bajos Sub-17","Hungría Sub-17",12],[11345,"*R-ESC2","Arbroath","Raith",11],[11215,"*R-ESCC","Motherwell","Celtic",12],[11345,"*R-ESCC","Aberdeen","Partick Thistle",12],[11415,"*R-ESCC","Rangers","Dundee FC",12],[11000,"*YE-BIE1","Dinamo Brest","Gomel",11],[11000,"*YE-GREC","Asteras T.","Atromitos",11],[11145,"*YE-HOLC","Dordrecht","Groningen",9],[11300,"*YE-HOLC","ADO 20 Heemskerk","FC Emmen",9],[11300,"*YE-HOLC","De Treffers","Waalwijk",8],[11300,"*YE-HOLC","Excelsior","Maastricht",10],[11300,"*YE-HOLC","G.A. Eagles","Helmond",7],[11300,"*YE-HOLC","Kozakken Boys","Vitesse",8],[11300,"*YE-HOLC","Rijnvogels","Cambuur",9],[11300,"*YE-HOLC","Spakenburg","TEC",10],[11300,"*YE-HOLC","USV Hercules","Breda",9],[11400,"*YE-HOLC","Nijmegen","Sittard",10],[11030,"*YE-POLC","R. Rzeszow","Cracovia",11],[11100,"*YE-POLC","Motor Lublin","Zaglebie",12],[11100,"*YE-POLC","Sandecja","Warta",11],[11215,"*YE-POLC","Wisla","Puszcza",11],[11330,"*YE-POLC","Lech Poznan","Slask",11],[11000,"*YE-RUSC","F. Voronezh","Spartak Moscú",12],[11000,"*YE-RUSC","Nizhny Novgorod","Krasnodar",11],[11230,"*YE-RUSC","CSKA Moscú","Torpedo Moscow",12],[11230,"*YE-SUI2","Aarau","Bellinzona",12],[11230,"*YE-SUI2","Lausanne Ouchy","Vaduz",12],[10900,"*YE-TURC","Samsunspor","Musspor",12],[11100,"*YE-TURC","Hatayspor","Duzcespor",12],[11300,"*YE-TURC","Galatasaray","Kastamonuspor",12],[10900,"*YE-UCR","Shakhtar","Kolos Kovalivka",12],[11400,"*ZA-BOL1","Always Ready","Royal Pari",12],[11615,"*ZA-BOL1","The Strongest","Santa Cruz",12],[11800,"*ZA-BOL1","Nacional Potosí","U. Sucre",12],[11930,"*ZA-BOL1","Guabirá","Bolívar",12],[11500,"*ZA-BRA20C","Cruzeiro Sub-20","Ceara Sub-20",12],[11500,"*ZA-ECU1","Manta","Chacaritas",11],[11500,"*ZA-ECU1","Santo Domingo","América de Quito",11],[11900,"*ZA-ECU1","Buhos ULVR","Olmedo",11],[11900,"*ZA-MEX2","Venados","Tepatitlán",7],[11500,"*ZA-PARC","Atl. Tembetary","Ameliano",11],[11730,"*ZA-PARC","Guaraní","Nacional Asunción",11],[11245,"*ZA-PER1","San Martín","César Vallejo",12],[11500,"*ZA-PER1","Carlos Stein","Dep. Municipal",12],[11500,"*ZA-PER1","Sport Huancayo","Ayacucho",12],[11715,"*ZA-PER1","Melgar","Sport Boys",12],[11700,"*ZA-VEN1","Carabobo","Metropolitanos",12],[11700,"*ZA-VEN1","Monagas","Zamora",12],[11100,"ALEC","Friburgo","St. Pauli",7],[11100,"ALEC","Hannover","Borussia Dortmund",4],[11100,"ALEC","Paderborn","Werder Bremen",8],[11100,"ALEC","Sandhausen","Karlsruher",8],[11345,"ALEC","Augsburgo","Bayern Múnich",2],[11345,"ALEC","Regensburg","Fortuna Düsseldorf",8],[11345,"ALEC","Stuttgart","Arminia Bielefeld",7],[11345,"ALEC","Union Berlín","Heidenheim",7],[11200,"ESP1","Cádiz","Real Betis",2],[11200,"ESP1","Real Valladolid","Celta de Vigo",8],[11300,"ESP1","Real Sociedad","Mallorca",5],[11400,"ESP1","Elche","Real Madrid",2],[11100,"ITAC","Parma","Bari",5],[11400,"ITAC","Udinese","Monza",7],[11330,"R-ING1","Bournemouth","Southampton",9],[11330,"R-ING1","Brentford","Chelsea",6],[11330,"R-ING1","Liverpool","West Ham",3],[11330,"R-ING1","Newcastle","Everton",5],[11415,"R-ING1","Manchester Utd","Tottenham",10],[11345,"R-ING2","Birmingham","Burnley",9],[11345,"R-ING2","Blackpool","Hull",7],[11345,"R-ING2","Coventry","Sheffield Utd",8],[11345,"R-ING2","QPR","Cardiff",7],[11345,"R-ING2","Wigan","Middlesbrough",8],[11400,"R-ING2","Millwall","Watford",6],[11130,"YE-BEL1","Royale Union SG","Gent",7],[11345,"YE-BEL1","Club Brujas","St. Truiden",5],[11345,"YE-BEL1","KV Mechelen","St. Lieja",10],[10930,"YE-POR2","Academico Viseu","Leixoes",7],[10930,"YE-POR2","Oporto B","Penafiel",7],[11200,"YE-POR2","Nacional","Vilafranquense",9],[11430,"YE-POR2","Tondela","Oliveirense",7],[11330,"YE-SUI1","Lucerna","St. Gallen",7],[11330,"YE-SUI1","Lugano","Young Boys",8],[11930,"ZA-ARG1","Talleres","Unión Santa Fe",7],[11945,"ZA-BRAC","Flamengo","Corinthians",5],[11700,"ZA-CHI1","U. Española","U. Católica",8],[11800,"ZA-COL1","Millonarios","Pereira",3],[12005,"ZA-COL1","Ind. Medellín","Atl. Bucaramanga",5],[12106,"ZA-MEX1","Toluca","Club América",6]
// ]

let PARTIDOS = [
  [11330,"*YE-POLC","Lech Poznan","Slask",11,1.4],
  [11330,"R-ING1","Liverpool","West Ham",3,1.48],
  [11330,"R-ING1","Newcastle","Everton",5,1.72],
  [11330,"R-ING1","Bournemouth","Southampton",9,2.2],
  [11330,"R-ING1","Brentford","Chelsea",6,1.76],
  [11330,"YE-SUI1","Lucerna","St. Gallen",7,1.65],
  [11330,"YE-SUI1","Lugano","Young Boys",8,1.7],
  [11345,"*R-ESC2","Arbroath","Raith",11,1.45],
  [11345,"ALEC","Stuttgart","Arminia Bielefeld",7,1.42],
  [11345,"ALEC","Union Berlín","Heidenheim",7,1.66],
  [11345,"ALEC","Augsburgo","Bayern Múnich",2,1.25],
  [11345,"ALEC","Regensburg","Fortuna Düsseldorf",8,1.9],
  [11345,"R-ING2","Blackpool","Hull",7,2],
  [11345,"R-ING2","QPR","Cardiff",7,2.1],
  [11345,"R-ING2","Birmingham","Burnley",9,2.55],
  [11345,"R-ING2","Coventry","Sheffield Utd",8,2.1],
  [11345,"R-ING2","Wigan","Middlesbrough",8,2.3],
  [11345,"YE-BEL1","Club Brujas","St. Truiden",5,1.6],
  [11345,"YE-BEL1","KV Mechelen","St. Lieja",10,1.93],
  [11400,"*YE-HOLC","Nijmegen","Sittard",10,2.3],
  [11400,"ESP1","Elche","Real Madrid",2,1.4],
  [11400,"ITAC","Udinese","Monza",7,1.61],
  [11400,"R-ING2","Millwall","Watford",6,2.25],
  [11415,"R-ING1","Manchester Utd","Tottenham",10,2.1],
  [11430,"YE-POR2","Tondela","Oliveirense",7,1.76],
]
