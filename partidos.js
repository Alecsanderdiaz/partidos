let PARTIDOS = [
[10830,"ALE1","Stuttgart","RB Leipzig",2],[11030,"ALE1","Colonia","Schalke",10],[10630,"ALE2","Braunschweig","Darmstadt",8],[10630,"ALE2","Kaiserslautern","St. Pauli",7],[10630,"ALE2","Magdeburgo","Kiel",7],[10600,"ALE3","Borussia Dortmund II","Ingolstadt",9],[10700,"ALE3","Aue","Osnabruck",7],[10800,"ALE3","Verl","Mannheim",8],[11100,"ZA-ARG1","Aldosivi","Huracán",8],[11300,"ZA-ARG1","San Lorenzo","Estudiantes L.P.",7],[11530,"ZA-ARG1","Independiente","River Plate",2],[11800,"ZA-ARG1","Newells","Colón",7],[11300,"ZA-ARG2","Deportivo Madryn","Alvarado",7],[11300,"ZA-ARG2","Flandria","Deportivo Maipu",8],[11315,"ZA-ARG2","All Boys","Agropecuario",7],[11400,"ZA-ARG2","Santamarina","Atl. Rafaela",9],[11430,"ZA-ARG2","Chaco For Ever","Def. de Belgrano",10],[11800,"ZA-ARG2","Belgrano","CA Mitre",7],[10630,"YE-BEL1","St. Lieja","Círculo Brujas",9],[10900,"YE-BEL1","Gent","Westerlo",7],[11130,"YE-BEL1","Anderlecht","Seraing",5],[11400,"YE-BEL1","Antwerp","Leuven",7],[10800,"*YE-BIE1","Gomel","Arsenal Dzyarzhynsk",12],[11000,"*YE-BIE1","BATE","Slavia Mozyr",12],[11000,"*YE-BIE1","Dinamo Minsk","FC Minsk",12],[11400,"*ZA-BOL1","Nacional Potosí","Bolívar",12],[11615,"*ZA-BOL1","The Strongest","Universitario de Vinto",12],[11830,"*ZA-BOL1","Aurora","U. Sucre",12],[11400,"ZA-BRA1","Fluminense","Cuiabá",1],[11400,"ZA-BRA1","Palmeiras","Goiás",1],[11600,"ZA-BRA1","Fortaleza","Internacional",6],[11700,"ZA-BRA1","Atlético-MG","Athletico-PR",10],[11300,"*ZA-BRAS","Athletico-PR Sub-20","Atlético-GO Sub-20",12],[11300,"*ZA-BRAS","Botafogo Sub-20","Atlético-MG Sub-20",12],[11300,"*ZA-BRAS","Ceara Sub-20","Cruzeiro Sub-20",12],[11300,"*ZA-BRAS","Chapecoense Sub-20","Corinthians Sub-20",12],[11300,"*ZA-BRAS","Fortaleza Sub-20","Flamengo Sub-20",12],[11300,"*ZA-BRAS","Gremio Sub-20","Santos Sub-20",12],[11300,"*ZA-BRAS","Internacional Sub-20","Fluminense Sub-20",12],[11300,"*ZA-BRAS","Palmeiras Sub-20","América-MG Sub-20",12],[11300,"*ZA-BRAS","Sao Paulo Sub-20","Bahia Sub-20",12],[11300,"*ZA-BRAS","Vasco Sub-20","RB Bragantino Sub-20",12],[11215,"ZA-CHI1","Palestino","Audax",7],[11445,"ZA-CHI1","U. Española","U. De Chile",10],[11715,"ZA-CHI1","Colo Colo","Antofagasta",1],[11945,"ZA-CHI1","Ñublense","Coquimbo",7],[10630,"S-CHI1","Henan Songshan Longmen","Beijing Guoan",7],[10630,"S-CHI1","Meizhou Hakka","Wuhan FC",10],[10700,"S-CHI1","Cangzhou","Guangzhou FC",10],[11400,"ZA-COL1","Dep. Pasto","Atl. Bucaramanga",10],[11810,"ZA-COL1","Junior","Once Caldas",1],[12015,"ZA-COL1","Pereira","Ind. Santa Fe",8],[11500,"ZA-COL2","Orsomarso","Atl. Huila",2],[11530,"ZA-COL2","Fortaleza","Real Cartagena",7],[10500,"S-COR1","Jeonbuk","Ulsan Hyundai",9],[10530,"S-COR1","Daegu","Incheon",10],[11400,"ZA-ECU1","Aucas","LDU Quito",6],[11630,"ZA-ECU1","U. Católica","Dep. Cuenca",5],[11900,"ZA-ECU1","Barcelona SC","Mushuc Runa",5],[10600,"R-ESC1","Hibernian","Hearts",8],[10900,"R-ESC1","Dundee Utd","Livingston",10],[10600,"FRA1","Toulouse","Niza",8],[10800,"FRA1","Angers","Nantes",8],[10800,"FRA1","Lens","Brest",10],[10800,"FRA1","Lille","Auxerre",5],[10800,"FRA1","Montpellier","Troyes",7],[11005,"FRA1","Stade Rennais","Lorient",7],[11345,"FRA1","Marsella","Reims",1],[10800,"R-ING1","Leicester","Brentford",1],[10800,"R-ING1","Manchester Utd","Brighton",1],[11030,"R-ING1","West Ham","Manchester City",2],[11045,"*ITAC","Venezia","Ascoli",11],[11100,"*ITAC","Verona","Bari",12],[11400,"*ITAC","Salernitana","Parma",11],[11415,"*ITAC","Monza","Frosinone",11],[10400,"S-JAP1","Tokyo","Shimizu",7],[10500,"S-JAP1","Kawasaki","Yokohama M.",10],[10500,"S-JAP1","Sagan Tosu","Iwata",7],[10500,"S-JAP1","Shonan","Sapporo",7],[11200,"ZA-MEX1","Toluca","Tijuana",7],[11600,"ZA-MEX1","Atlético de San Luis","Necaxa",10],[11805,"ZA-MEX1","Pachuca","Tigres UANL",6],[12005,"ZA-MEX1","Club América","Juárez",5],[12100,"ZA-MEX2","Leones Negros","Venados",7],[10700,"AMI","Folkestone (Eng)","Ashford U. (Eng)",12],[11000,"AMI","Belasica (Mkd)","Sloga Vinica (Mkd)",12],[11030,"AMI","Makedonija GP (Mkd)","Lok. Skopje (Mkd)",12],[11030,"AMI","Siena (Ita)","Gubbio (Ita)",12],[11030,"AMI","Voska Sport (Mkd)","Egnatia (Alb)",12],[11045,"AMI","OFI Creta (Gre)","Asteras T. (Gre)",12],[11100,"AMI","Juventus (Ita)","Atlético de Madrid (Esp)",1],[11200,"AMI","Ionikos (Gre)","Atromitos (Gre)",12],[11200,"AMI","La Nucía (Esp)","Elche (Esp)",12],[11200,"AMI","Real Murcia (Esp)","Mar Menor (Esp)",12],[11300,"AMI","Albacete (Esp)","Getafe (Esp)",12],[11300,"AMI","Barcelona (Esp)","Pumas UNAM (Mex)",1],[11300,"AMI","Volos (Gre)","Giannina (Gre)",12],[11330,"AMI","Calamonte (Esp)","Montijo (Por)",12],[11330,"AMI","Mosta FC (Mlt)","Santa Lucia (Mlt)",12],[11345,"AMI","Roma (Ita)","Shakhtar (Ukr)",1],[11400,"AMI","UD Ibiza (Esp)","Mallorca (Esp)",12],[10515,"YE-HOL1","Groningen","FC Volendam",7],[10730,"YE-HOL1","Nijmegen","Twente",8],[10730,"YE-HOL1","Vitesse","Feyenoord",4],[10945,"YE-HOL1","AZ Alkmaar","G.A. Eagles",7],[10515,"YE-HOL2","Zwolle","Graafschap",7],[11500,"ZA-PAR1","Sol de América","Guaraní",8],[11730,"ZA-PAR1","Olimpia","Ameliano",5],[11100,"ZA-PER1","César Vallejo","Grau",7],[11300,"ZA-PER1","Dep. Municipal","Sport Boys",10],[11530,"ZA-PER1","Cienciano","Universitario",7],[10800,"YE-POLE","Warta","Pogon Szczecin",9],[11030,"YE-POLE","Zaglebie","Lech",9],[11300,"YE-POLE","Gornik Z.","Rakow",8],[10930,"YE-POR1","Santa Clara","Casa Pia",7],[11200,"YE-POR1","SC Braga","Sporting CP",8],[11430,"YE-POR1","Chaves","V. Guimaraes",8],[11430,"YE-POR1","Portimonense","Boavista",7],[10500,"YE-POR2","Feirense","Estrela",7],[10930,"YE-POR2","Moreirense","Vilafranquense",7],[11200,"YE-POR2","Oporto B","Covilha",7],[10900,"YE-REP1","Ceske Budejovice","Sparta Praga",8],[10900,"YE-REP1","Mlada Boleslav","Jablonec",7],[10900,"YE-REP1","Slovacko","Hradec Kralove",10],[11200,"YE-REP1","Slavia Praga","Zlin",7],[10800,"YE-RUM1","Sepsi Sf. Gheorghe","UTA Arad",7],[11030,"YE-RUM1","Chindia Targoviste","CFR Cluj",8],[11330,"YE-RUM1","U Craiova 1948","Univ. Craiova",9],[10700,"YE-RUS1","Torpedo Moscow","Khimki",8],[10930,"YE-RUS1","Kr. Sovetov","Dinamo Moscú",8],[11200,"YE-RUS1","Rostov","Orenburg",7],[11200,"YE-RUS1","Sochi","Nizhny Novgorod",7],[10715,"YE-SUI1","Zúrich","Sion",7],[10930,"YE-SUI1","Basilea","Young Boys",8],[10930,"YE-SUI1","Lugano","Lucerna",7],[10715,"*YE-SUI2","Vaduz","Bellinzona",12],[10930,"*YE-SUI2","Lausanne","Lausanne Ouchy",12],[11115,"YE-TUR1","Giresunspor","Adana Demirspor",9],[11115,"YE-TUR1","Karagumruk","Alanyaspor",8],[11345,"YE-TUR1","Antalyaspor","Galatasaray",6],[10815,"ZA-URU1","Fénix","Montevideo City",10],[11300,"ZA-URU1","Danubio","Maldonado",7],[11630,"ZA-URU1","Defensor Sp.","Peñarol",6],[10800,"*ZA-URU2","La Luz","Villa Española",12],[11030,"*ZA-URU2","Rampla Juniors","Racing Montevideo",12],[11830,"*ZA-URU2","Sud América","Uruguay Montevideo",12],[11600,"*ZA-VEN1","Universidad Central","Zulia",11],[11830,"*ZA-VEN1","Estudiantes M.","Portuguesa",11]
]