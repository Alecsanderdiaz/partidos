let PARTIDOS = [
  [10500,"*CLUBES","Pathum United (Tha)","Kawasaki (Jpn)",12,1],
[10700,"*CLUBES","Buriram (Tha)","Sapporo (Jpn)",12,1],
[11000,"*ESPC","Manacor","Andorra",11,1.4],
[11100,"*ESPC","At. Saguntino","Amorebieta",11,1.48],
[11100,"*ESPC","Guijuelo","Deportivo de La Coruña",11,1.45],
[11100,"*ESPC","Navalcarnero","UD Logroñés",11,1.45],
[11200,"*ESPC","Arenas Club","Lugo",11,1.42],
[11200,"*ESPC","Beasain","Sporting de Gijón",11,1.4],
[11200,"*ESPC","Gernika","Leganés",11,1.38],
[11200,"*ESPC","Guadalajara","Ponferradina",11,1.42],
[11200,"*ESPC","Racing Rioja","Nàstic",11,1.48],
[11200,"*ESPC","Sestao River","Racing Ferrol",11,1.42],
[11400,"*ESPC","Cacereño","Córdoba",11,1.42],
[11400,"*ESPC","CD Coria","Fuenlabrada",11,1.45],
[11400,"*ESPC","Palencia CA","UD Ibiza",11,1.4],
[11000,"*ESPC","Barbadás","Real Valladolid",12,1],
[11000,"*ESPC","uentes","Osasuna",12,1],
[11100,"*ESPC","Olot","Levante",12,1],
[11200,"*ESPC","Huétor Tájar","Albacete",12,1],
[11200,"*ESPC","Utrera","AD Ceuta",12,1],
[11230,"*ESPC","lcora","Elche",12,1],
[11230,"*ESPC","Autol","Mallorca",12,1],
[11500,"*ESPC","Rincón","Espanyol",12,1],
[11500,"*ESPC","Santa Amalia","Villarreal",12,1],
[11600,"*ESPC","Almazán","Atlético de Madrid",12,1],
[10800,"*PAISES","Japón Sub-18","Bélgica Sub-18",12,1],
[10900,"*PAISES","Catar Sub-23","Siria Sub-23",12,1],
[11230,"*PAISES","Ecuador","Irak",12,1],
[11300,"*PAISES","Arabia Saudí Sub-23","Omán Sub-23",12,1],
[11000,"*R-ESC2","Arbroath","Cove Rangers",11,1.4],
[11000,"*R-ESC2","Morton","Partick Thistle",11,1.42],
[11000,"*R-ESC2","Dundee FC","Raith",12,1],
[11230,"*R-ESC2","Queens Park","Inverness",12,1],
[11000,"*R-INGN","Aldershot","Maidenhead",11,1.4],
[11000,"*R-INGN","Yeovil","Gateshead",11,1],
[11000,"*R-INGN","Boreham Wood","Woking",12,1],
[11000,"*R-INGN","Bromley","Halifax",12,1],
[11000,"*R-INGN","Eastleigh","Notts County",12,1],
[11000,"*R-INGN","Oldham","Barnet",12,1],
[11000,"*R-INGN","Scunthorpe","Maidstone",12,1],
[11000,"*R-INGN","Solihull Moors","Dagenham & Red.",12,1],
[11000,"*R-INGN","Southend","Dorking",12,1],
[11000,"*R-INGN","Torquay","Chesterfield",12,1],
[11000,"*R-INGN","Wealdstone","Wrexham",12,1],
[11220,"*R-INGN","Altrincham","York",12,1],
[10600,"*YE-BIE1","Dinamo Brest","Slutsk",11,1.4],
[10600,"*YE-BIE1","Energetik-BGU","Dinamo Minsk",11,1],
[10600,"*YE-BIE1","Isloch","Zhodino",11,1.44],
[10600,"*YE-BIE1","Arsenal Dzyarzhynsk","BATE",12,1],
[10600,"*YE-BIE1","FC Minsk","Gomel",12,1],
[10600,"*YE-BIE1","Neman Grodno","Vitebsk",12,1],
[10600,"*YE-BIE1","Shakhter Soligorsk","Belshina",12,1],
[10600,"*YE-BIE1","Slavia Mozyr","Dnepr Mogilev",12,1],
[10530,"*YE-TUR2","Pendikspor","Bodrumspor",11,1.44],
[10800,"*YE-TUR2","Erzurumspor","Adanaspor",11,1.42],
[11100,"*YE-TUR2","Boluspor","Yeni Malatyaspor",11,1.45],
[10900,"*ZA-BRAC","Palmeiras Sub-20","Flamengo Sub-20",12,1],
[12000,"*ZA-PER1","Alianza Lima","Melgar",11,1.44],
[10930,"ALE1","Augsburgo","Bochum",7,1.85],
[10930,"ALE1","Bayer Leverkusen","Stuttgart",5,1.6],
[10930,"ALE1","Hertha BSC","Colonia",10,2.05],
[10930,"ALE1","Hoffenheim","Wolfsburgo",10,2.1],
[10930,"ALE1","Werder Bremen","RB Leipzig",6,1.66],
[11230,"ALE1","Schalke","Bayern Múnich",2,1.25],
[10700,"ALE2","Hamburgo","Sandhausen",5,1.45],
[10700,"ALE2","Heidenheim","Regensburg",7,1.61],
[11430,"ALE2","Braunschweig","Rostock",7,1.95],
[10700,"ALE2","Karlsruher","St. Pauli",10,1.9],
[10800,"ALE3","Dynamo Dresden","Zwickau",7,1.75],
[10800,"ALE3","Verl","Wehen",9,2.1],
[10800,"ALE3","Duisburgo","Ingolstadt",8,2.05],
[10800,"ALE3","Elversberg","Friburgo II",10,2.55],
[10800,"ALE3","Hallescher","Saarbrücken",8,1.8],
[10800,"ALE3","Meppen","Osnabruck",8,1.85],
[11100,"FRA1","Lens","Clermont",5,1.55],
[11500,"FRA1","Stade Rennais","Toulouse",7,1.57],
[10900,"FRA2","Saint-Étienne","Rodez",5,1.65],
[11300,"FRA2","Amiens","Quevilly Rouen",7,1.85],
[11300,"FRA2","Girondins","Pau FC",5,1.66],
[11300,"FRA2","Grenoble","Dijon",7,2.25],
[11300,"FRA2","Niort","Nimes",7,2.15],
[11300,"FRA2","SM Caen","Annecy",7,1.85],
[11300,"FRA2","Sochaux","Bastia",7,1.85],
[11300,"FRA2","EA Guingamp","Le Havre",8,2.15],
[11300,"FRA2","Laval","Valenciennes",10,2.4],
[11300,"FRA2","Paris FC","Metz",10,2.25],
[10900,"ITA1","Nápoles","Udinese",1,1.53],
[11200,"ITA1","Sampdoria","Lecce",7,2.37],
[11445,"ITA1","Bolonia","Sassuolo",7,1.95],
[10800,"ITA2","Bari","Sudtirol",7,1.8],
[10800,"ITA2","Cagliari","Pisa",7,1.9],
[10800,"ITA2","Parma","Cittadella",7,1.9],
[10800,"ITA2","Cosenza","Palermo",8,1.95],
[10800,"ITA2","Modena","Perugia",10,2.25],
[10800,"ITA2","Spal","Benevento",10,2.15],
[10800,"ITA2","Venezia","Reggina",10,2.05],
[11015,"ITA2","Ternana","Brescia",10,1.8],
[11000,"R-ESC1","Celtic","Ross County",5,1.2],
[11000,"R-ESC1","Hearts","Livingston",7,1.8],
[11000,"R-ESC1","St. Johnstone","Motherwell",7,2.15],
[11300,"R-ESC1","Aberdeen","Dundee Utd",7,1.7],
[10730,"R-ESC1","St. Mirren","Rangers",6,1.48],
[11000,"R-ESC1","Kilmarnock","Hibernian",8,2],
[10730,"R-ING1","Manchester City","Brentford",1,1.28],
[11000,"R-ING1","Liverpool","Southampton",1,1.36],
[11000,"R-ING1","Nottingham Forest","Crystal Palace",9,2.4],
[11000,"R-ING1","Tottenham","Leeds Utd",1,1.61],
[11230,"R-ING1","Newcastle","Chelsea",5,1.95],
[11000,"R-ING1","Bournemouth","Everton",8,2.2],
[11000,"R-ING1","West Ham","Leicester",10,2.25],
[11445,"R-ING1","Wolves","Arsenal",2,1.61],
[11000,"R-ING2","Hull","Reading",7,2.15],
[11000,"R-ING2","Luton","Rotherham",7,1.76],
[11000,"R-ING2","Norwich","Middlesbrough",7,1.95],
[11000,"R-ING2","West Brom","Stoke",7,1.9],
[11000,"R-ING2","Wigan","Blackpool",7,2.05],
[11000,"R-ING2","Bristol City","Watford",2,2.05],
[11000,"R-ING2","Cardiff","Sheffield Utd",8,2.05],
[11000,"R-ING2","Coventry","QPR",10,2.3],
[11000,"R-ING2","Huddersfield","Swansea",6,2.1],
[11000,"R-ING2","Preston","Millwall",10,2.55],
[11000,"R-INGO","Bristol Rovers","Fleetwood",7,1.8],
[11000,"R-INGO","Ipswich","Cheltenham",7,1.44],
[11000,"R-INGO","Oxford Utd","Port Vale",7,1.93],
[11000,"R-INGO","Accrington","Sheffield Wed",8,1.57],
[11000,"R-INGO","Burton","Charlton",8,1.9],
[11000,"R-INGO","Cambridge Utd","Bolton",8,1.8],
[11000,"R-INGO","Exeter","Peterborough",8,1.85],
[11000,"R-INGO","Forest Green","Wycombe",8,1.72],
[11000,"R-INGO","Lincoln","Plymouth",8,1.83],
[11000,"R-INGO","MK Dons","Derby",8,1.83],
[11000,"R-INGO","Morecambe","Portsmouth",8,1.65],
[11000,"R-INGO","Shrewsbury","Barnsley",8,2.05],
[11000,"R-INGT","Carlisle","Walsall",7,2.05],
[11000,"R-INGT","Crewe","Colchester",7,1.95],
[11000,"R-INGT","Grimsby","Doncaster",7,1.8],
[11000,"R-INGT","Stevenage","Hartlepool",5,1.6],
[11000,"R-INGT","Swindon","Tranmere",7,1.9],
[11000,"R-INGT","Crawley","Barrow",8,1.9],
[11000,"R-INGT","Gillingham FC","Northampton",8,2.2],
[11000,"R-INGT","Harrogate","Leyton Orient",8,1.83],
[11000,"R-INGT","Newport","Stockport",8,2],
[11000,"R-INGT","Rochdale","Mansfield",8,1.9],
[11000,"R-INGT","Salford","Wimbledon",10,2.4],
[11000,"R-INGT","Sutton","Bradford City",8,2.05],
[10430,"S-CHI1","Shandong Taishan","Hebei",7,1],
[10600,"S-CHI1","Changchun Yatai","Tianjin Jinmen Tiger",7,2.05],
[10630,"S-CHI1","Chengdu Rongcheng","Shanghai Shenhua",10,2.55],
[10630,"S-CHI1","Guangzhou City","Meizhou Hakka",8,2.05],
[12305,"S-JAP1","Kyoto","Kumamoto",7,1.85],
[11000,"YE-BEL1","Westerlo","Oostende",7,1.6],
[11215,"YE-BEL1","St. Truiden","Círculo Brujas",7,2],
[11215,"YE-BEL1","Waregem","Eupen",7,1.8],
[11445,"YE-BEL1","Charleroi","KV Mechelen",10,1.95],
[11500,"YE-HOL1","PSV","AZ Alkmaar",5,1.48],
[11030,"YE-HOL1","FC Volendam","Utrecht",8,1.6],
[11245,"YE-HOL1","FC Emmen","Ajax",2,1.38],
[11400,"YE-HOL2","Roda","Helmond",7,1.5],
[10900,"YE-POLE","Gornik Z.","Legnica",7,1.65],
[10630,"YE-POLE","Korona","Widzew Lodz",8,1.9],
[11130,"YE-POLE","Jagiellonia","Lech Poznan",8,1.72],
[11400,"YE-POLE","Zaglebie","Rakow",6,1.57],
[11300,"YE-POR1","Arouca","Rio Ave",7,2.1],
[11530,"YE-POR1","Boavista","Oporto",2,1.5],
[10600,"YE-POR2","Estrela","Oliveirense",7,1.9],
[10900,"YE-POR2","Farense","Feirense",7,2],
[11300,"YE-POR2","Benfica B","Penafiel",10,2.15],
[11300,"YE-POR2","Nacional","Oporto B",8,2.1],
[11200,"YE-REP1","Sparta Praga","Ceske Budejovice",7,1.4],
[10900,"YE-REP1","Jablonec","Mlada Boleslav",10,2.2],
[10900,"YE-REP1","Ostrava","Bohemians",10,2.1],
[10900,"YE-REP1","Teplice","Liberec",8,2.1],
[11030,"YE-RUM1","Chindia Targoviste","Farul Constanta",9,2.8],
[11330,"YE-RUM1","Rapid Bucarest","Univ. Craiova",10,2.4],
[10400,"YE-RUS1","Ural","F. Voronezh",7,1.66],
[10600,"YE-RUS1","Kr. Sovetov","Rostov",7,1.8],
[10830,"YE-RUS1","Torpedo Moscow","Zenit",2,1.3],
[11130,"YE-RUS1","Lokomotiv Moscú","Spartak Moscú",8,1.65],
[11200,"YE-SUI1","Sion","St. Gallen",9,1.8],
[11430,"YE-SUI1","Grasshoppers","Basilea",6,1.7],
[10900,"YE-TUR1","Fenerbahçe","Giresunspor",1,1.4],
[10630,"YE-TUR1","Sivasspor","Umraniyespor",10,2.25],
[11200,"YE-TUR1","Başakşehir","Galatasaray",2,1.9],
[11810,"ZA-ARG2","CA Estudiantes","Instituto",9,2.8],
[11400,"ZA-BRA1","Flamengo","Avaí",7,1.36],
[11900,"ZA-COL1","Aguilas Doradas","Ind. Medellín",10,2.65],
[11800,"ZA-MEX2","Celaya","Atlante",6,2.65],
[11700,"ZA-PAR1","Olimpia","Nacional Asunción",5,1.7],
[11700,"ZA-PAR1","Guairena FC","Cerro Porteño",2,1.76],
[11700,"ZA-PAR1","Tacuary","Libertad",6,1.85],
]
