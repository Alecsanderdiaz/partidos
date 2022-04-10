let PARTIDOS = [
[10830,"ALE1","Bochum","Bayer Leverkusen",8],
[11030,"ALE1","Eintracht Frankfurt","Friburgo",7],
[11230,"ALE1","RB Leipzig","Hoffenheim",7],
[10630,"ALE2","Kiel","Hamburgo",8],
[10630,"ALE2","Paderborn","Karlsruher",10],
[10630,"ALE2","Sandhausen","Dynamo Dresden",7],
[10600,"ALE3","Friburgo II","1860 Múnich",8],
[10700,"ALE3","Havelse","Zwickau",8],
[11200,"ZA-ARG1","Estudiantes L.P.","Central Córdoba",5],
[11200,"ZA-ARG1","Patronato","Banfield",10],
[11430,"ZA-ARG1","Platense","Racing Club",6],
[11700,"ZA-ARG1","River Plate","Argentinos Jrs.",5],
[11930,"ZA-ARG1","Huracán","Barracas Central",7],
[10900,"ZA-ARG2","Brown Adrogué","Deportivo Maipu",7],
[11240,"ZA-ARG2","Instituto","Sacachispas",7],
[11330,"ZA-ARG2","Guillermo Brown","Almagro",7],
[11330,"ZA-ARG2","San Telmo","Gimnasia Jujuy",10],
[11330,"ZA-ARG2","Tristán Suárez","Ferro Carril Oeste",10],
[11440,"ZA-ARG2","Chacarita","Nueva Chicago",7],
[11600,"ZA-ARG2","Chaco For Ever","Flandria",7],
[11130,"YE-BEL1","Charleroi","Waregem",7],
[11130,"YE-BEL1","Club Brujas","KV Mechelen",7],
[11130,"YE-BEL1","Gent","Leuven",7],
[11130,"YE-BEL1","Kortrijk","Anderlecht",8],
[11130,"YE-BEL1","Royale Union SG","Beerschot VA",7],
[11130,"YE-BEL1","Seraing","Genk",8],
[11130,"YE-BEL1","St. Truiden","St. Lieja",7],
[10730,"YE-BIE1*","Neman Grodno","Dinamo Brest",11],
[10930,"YE-BIE1*","Dnepr Mogilev","BATE",12],
[11130,"YE-BIE1*","Isloch","Shakhter Soligorsk",12],
[11400,"ZA-BOL1*","U. Sucre","Guabirá",12],
[11615,"ZA-BOL1*","Tomayapo","Blooming",12],
[10900,"ZA-BRA1","Coritiba","Goiás",7],
[11400,"ZA-BRA1","Atlético-MG","Internacional",10],
[11400,"ZA-BRA1","Botafogo","Corinthians",8],
[11600,"ZA-BRA1","Fortaleza","Cuiabá",7],
[11700,"ZA-BRA1","Avaí","América-MG",9],
[11700,"ZA-BRA1","Sao Paulo","Athletico-PR",7],
[10900,"ZA-BRA2","Londrina","Náutico",7],
[11130,"ZA-CHI1","Cobresal","Audax",10],
[11400,"ZA-CHI1","Palestino","Ñublense",7],
[11630,"ZA-CHI1","U. Española","Colo Colo",8],
[11900,"ZA-CHI1","U. La Calera","Curicó Unido",7],
[11500,"ZA-COL1","Envigado","Ind. Santa Fe",6],
[11730,"ZA-COL1","Atl. Nacional","América de Cali",5],
[11935,"ZA-COL1","Alianza Petrolera","Ind. Medellín",6],
[11500,"ZA-COL2","Llaneros","Real Santander",7],
[11500,"ZA-COL2","Orsomarso","Atletico F.C.",10],
[11500,"ZA-COL2","Valledupar","Fortaleza",8],
[11000,"ZM-COLF*","Tolima F","Deportivo Pereira F",12],
[11100,"ZM-COLF*","Bucaramanga F","Real Santander F",12],
[10000,"ZS-COR1","Gangwon","Pohang",8],
[10100,"ZS-COR1","Suwon FC","Gimcheon Sangmu",8],
[10230,"ZS-COR1","Incheon","Jeju",9],
[10500,"ZS-COR1","Seoul","Suwon",7],
[11300,"ZA-ECU1","Ind. del Valle","Guayaquil City",7],
[11530,"ZA-ECU1","Dep. Cuenca","Emelec",8],
[11800,"ZA-ECU1","Barcelona SC","Orense",7],
[10600,"R-ESC1","St. Mirren","Rangers",8],
[10700,"ESP1","Osasuna","Alavés",7],
[10915,"ESP1","Espanyol","Celta de Vigo",10],
[11130,"ESP1","Elche","Real Sociedad",4],
[11400,"ESP1","Levante","Barcelona",2],
[10700,"ESP2","Fuenlabrada","Huesca",8],
[10900,"ESP2","Real Zaragoza","Girona",7],
[11115,"ESP2","Mirandés","Burgos CF",7],
[11115,"ESP2","Real Oviedo","Leganés",10],
[11115,"ESP2","UD Ibiza","Eibar",6],
[11230,"ZA-EST1","Charlotte","Atlanta Utd",8],
[11830,"ZA-EST1","Austin FC","Minnesota United",10],
[11500,"ZA-EST2*","Loudoun","Louisville City",12],
[11600,"ZA-EST2*","Birmingham","Hartford Athletic",12],
[10600,"FRA1","Girondins","Metz",10],
[10800,"FRA1","Angers","Lille",8],
[10800,"FRA1","Brest","Nantes",10],
[10800,"FRA1","Mónaco","Troyes",7],
[11005,"FRA1","Lens","Niza",6],
[11200,"FRA1","Estrasburgo","Lyon",6],
[11400,"FRA1","Marsella","Montpellier",5],
[11100,"YE-GRE1","Giannina","Panathinaikos",6],
[11130,"YE-GRE1","AEK","Aris",5],
[10800,"R-ING1","Brentford","West Ham",10],
[10800,"R-ING1","Leicester","Crystal Palace",5],
[10800,"R-ING1","Norwich","Burnley",7],
[11030,"R-ING1","Manchester City","Liverpool",6],
[10900,"R-ING2","Fulham","Coventry",7],
[10530,"ITA1","Genoa","Lazio",6],
[10800,"ITA1","Nápoles","Fiorentina",5],
[10800,"ITA1","Sassuolo","Atalanta",6],
[10800,"ITA1","Venezia","Udinese",6],
[11100,"ITA1","Roma","Salernitana",5],
[11345,"ITA1","Torino","AC Milan",4],
[10730,"ITA2","Benevento","L.R. Vicenza",5],
[10830,"ITA2","Ascoli","Reggina",7],
[10830,"ITA2","Cosenza","Monza",6],
[10830,"ITA2","Crotone","Ternana",7],
[11100,"ITA2","Perugia","Pisa",5],
[10000,"ZS-JAP1","Hiroshima","Avispa Fukuoka",7],
[10000,"ZS-JAP1","Tokyo","Urawa",7],
[10000,"ZS-JAP1","Vissel Kobe","C-Osaka",7],
[10100,"ZS-JAP1","Kashima","Yokohama M.",5],
[10100,"ZS-JAP1","Nagoya","Sapporo",7],
[10100,"ZS-JAP1","Shonan","Iwata",10],
[10200,"ZS-JAP1","Kyoto","Sagan Tosu",8],
[11900,"ZA-MEX1","Querétaro","Tigres UANL",8],
[11000,"ZA-MEX2","Raya2","Dorados",6],
[11600,"ZA-MEX2","Tapatio","Leones Negros",7],
[10515,"YE-HOL1","Heerenveen","Groningen",10],
[10730,"YE-HOL1","PSV","Waalwijk",3],
[10730,"YE-HOL1","Vitesse","Cambuur",7],
[10945,"YE-HOL1","Heracles","Feyenoord",6],
[11300,"YE-HOL1","Zwolle","AZ Alkmaar",6],
[11700,"ZA-PAR1","Libertad","Sol de América",5],
[11915,"ZA-PAR1","Tacuary","Guairena FC",7],
[11315,"ZA-PER1","Alianza Lima","UTC",7],
[11500,"ZA-PER1","ADT Tarma","Sport Boys",10],
[11530,"ZA-PER1","Ayacucho","Universitario",8],
[11800,"ZA-PER1","San Martín","Melgar",8],
[10530,"YE-POL1","Warta","Cracovia",10],
[10800,"YE-POL1","Wisla","Gornik Z.",7],
[11030,"YE-POL1","Rakow","Slask",7],
[10930,"YE-POR1","Portimonense","Famalicao",9],
[10930,"YE-POR1","Santa Clara","Estoril",10],
[11200,"YE-POR1","V. Guimaraes","Oporto",2],
[11430,"YE-POR1","Vizela","SC Braga",4],
[10500,"YE-POR2","Covilha","Académica",7],
[10800,"YE-POR2","Nacional","Rio Ave",8],
[10930,"YE-POR2","Oporto B","Feirense",10],
[11100,"YE-POR2","Trofense","Leixoes",8],
[10900,"YE-REP1","Jablonec","Zlin",7],
[10900,"YE-REP1","Mlada Boleslav","Ceske Budejovice",7],
[10900,"YE-REP1","Ostrava","Hradec Kralove",10],
[11200,"YE-REP1","Slavia Praga","Pardubice",7],
[10930,"YE-RUM1","Botosani","Sepsi Sf. Gheorghe",9],
[11230,"YE-RUM1","Univ. Craiova","CFR Cluj",8],
[10400,"YE-RUS1","Ural","Kr. Sovetov",9],
[10600,"YE-RUS1","Ufa","Sochi",8],
[10830,"YE-RUS1","Spartak Moscú","Arsenal Tula",5],
[11130,"YE-RUS1","Rostov","Lokomotiv Moscú",6],
[10715,"YE-SUI1","Servette","Zúrich",8],
[10930,"YE-SUI1","Lugano","Sion",7],
[10930,"YE-SUI1","St. Gallen","Basilea",7],
[10715,"YE-SU2I*","Vaduz","Schaffhausen",12],
[10530,"YE-TUR1","Yeni Malatyaspor","Giresunspor",8],
[10800,"YE-TUR1","Adana Demirspor","Altay",7],
[10800,"YE-TUR1","Sivasspor","Başakşehir",8],
[11230,"YE-TUR1","Fenerbahçe","Galatasaray",5],
[10530,"YE-TUR2","Manisa FK","Samsunspor",12],
[10800,"YE-TUR2","Denizlispor","Tuzlaspor",11],
[10800,"YE-TUR2","Menemenspor","Istanbulspor",12],
[11230,"YE-TUR2","Bursaspor","Kocaelispor",12],
[11145,"ZA-URU1","Fénix","Cerrito",7],
[11400,"ZA-URU1","River Plate","Albion",7],
[11630,"ZA-URU1","Boston River","Nacional",8],
[10815,"ZA-URU2","Progreso","Atenas",12],
[11400,"ZA-VEN1","Universidad Central","Hermanos Colmenarez",12],
[11715,"ZA-VEN1","Estudiantes M.","Metropolitanos",11]
]