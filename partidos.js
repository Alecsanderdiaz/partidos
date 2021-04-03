let PARTIDOS = [
[10900,"ALB1","Teuta","Laci"],
[10900,"ALB1","Vllaznia","Partizani"],
[10830,"ALE1","Augsburgo","Hoffenheim",9],
[10830,"ALE1","Bayer Leverkusen","Schalke",10],
[10830,"ALE1","Borussia Dortmund","Eintracht Frankfurt",1],
[10830,"ALE1","Mainz","Arminia Bielefeld",10],
[10830,"ALE1","Wolfsburgo","Colonia",10],
[11130,"ALE1","RB Leipzig","Bayern Múnich",2],
[11330,"ALE1","Borussia Mgladbach","Friburgo",5],
[10600,"ALE2","Bochum","Kiel",10],
[10600,"ALE2","Heidenheim","Fürth",9],
[10600,"ALE2","Karlsruher","Osnabruck",10],
[10700,"ALE3","Bayern Múnich II","Lubeck",10],
[10700,"ALE3","Kaiserslautern","Hallescher",10],
[10700,"ALE3","Magdeburgo","Ingolstadt",9],
[10700,"ALE3","Mannheim","Zwickau",10],
[10700,"ALE3","Uerdingen","1860 Múnich",9],
[10700,"ALE3","Verl","Duisburgo",10],
[10700,"ALE3","Wehen","Saarbrücken",10],
[11200,"ARGC","Talleres","Independiente",6],
[11415,"ARGC","Gimnasia L.P.","Lanús",6],
[11415,"ARGC","Sarmiento","Atl. Tucumán",6],
[11630,"ARGC","Boca Jrs.","Defensa y Justicia",1],
[11900,"ARGC","Arsenal Sarandí","River Plate",2],
[11330,"ARG2","Barracas Central","Almagro"],
[11330,"ARG2","CA Estudiantes","Dep. Riestra",10],
[11400,"ARG2","Atl. Rafaela","Def. de Belgrano",10],
[11430,"ARG2","Tigre","Estudiantes Rio Cuarto",10],
[11530,"ARG2","Agropecuario","Deportivo Maipu",10],
[11700,"ARG2","CA Mitre","Belgrano",9],
[10305,"AUSALEAGUE","Brisbane Roar","WS Wanderers",10],
[10030,"AUSNPLNORTHERN","Lake Macquarie","Maitland",9],
[10030,"AUSNPLNORTHERN","Valentine","Weston Workers",9],
[10300,"AUSNPLNSW","Druitt Town Rangers","Sydney Olympic",9],
[10200,"AUSNPLWESTERN","Balcatta","Cockburn City",10],
[10200,"AUSNPLWESTERN","Gwelup Croatia SC","Rockingham City",10],
[10915,"BEL1","Oostende","Waasland-Beveren",10],
[11130,"BEL1","St. Truiden","KV Mechelen",9],
[11345,"BEL1","Kortrijk","Club Brujas",6],
[10600,"BIE1","BATE","Gomel",5],
[10800,"BIE1","Sputnik","FC Minsk",9],
[11000,"BIE1","Shakhter Soligorsk","Isloch",10],
[11200,"BIE1","Zhodino","Vitebsk",10],
[11400,"BOL1","Santa Cruz","Always Ready",9],
[11615,"BOL1","Bolívar","Blooming",10],
[11905,"BRACARIOCA","Vasco","Bangu",5],
[11400,"BRACATARIN","Prospera Criciuma","Gremio Juventus",10],
[11700,"BRACATARIN","Joinville","Chapecoense",6],
[12015,"BRAGAUCHO","Gremio","Internacional"],
[10730,"BRAPARAENS","Independente","Bragantino"],
[10800,"BRAPARAENS","Tuna Luso","Paragominas",10],
[11400,"BRAPARANAE","Operario","Coritiba"],
[11400,"BRACOPA","Fortaleza","Bahia",10],
[11400,"BRACOPA","Sport Recife","Ceará",6],
[11615,"BRACOPA","ABC","Sampaio Correa",10],
[11615,"BRACOPA","CSA","Julho Esporte",10],
[10900,"CHI1","Melipilla","Ñublense",9],
[11600,"CHI1","U. De Chile","Huachipato",5],
[11830,"CHI1","Cobresal","Colo Colo",6],
[11805,"COL1","Atl. Nacional","Envigado",1],
[12010,"COL1","Millonarios","Tolima",1],
[11400,"COL2","Quindío","Atletico F.C.",1],
[11500,"COL2","Orsomarso","Cortuluá",2],
[11500,"COL2","Real San Andrés","Fortaleza",9],
[11600,"COL2","U. Magdalena","Barranquilla",1],
[10000,"COR1","Suwon","Jeonbuk",9],
[10230,"COR1","Seongnam","Ulsan Hyundai",9],
[10500,"COR1","Seoul","Gangwon",10],
[11215,"ECU1","Delfín","Dep. Cuenca",10],
[11430,"ECU1","LDU Quito","Mushuc Runa",1],
[11700,"ECU1","Barcelona SC","Ind. del Valle",6],
[10900,"ESCCUP","Arbroath","Alloa",10],
[10900,"ESCCUP","Dunfermline","Hearts",9],
[10615,"ESCCUP","Dumbarton","Aberdeen",9],
[10900,"ESCCUP","Ayr","Clyde",10],
[10900,"ESCCUP","Brora Rangers","Stranraer",10],
[10900,"ESCCUP","Dundee FC","St. Johnstone",9],
[10900,"ESCCUP","Dundee Utd","Partick Thistle",10],
[10900,"ESCCUP","East Fife","Morton",9],
[10900,"ESCCUP","Forfar","Edinburgh City",10],
[10900,"ESCCUP","Formartine Utd","Motherwell",9],
[10900,"ESCCUP","Fraserburgh","Montrose",9],
[10900,"ESCCUP","Hamilton","St. Mirren",9],
[10900,"ESCCUP","Livingston","Raith",10],
[10900,"ESCCUP","Stenhousemuir","Kilmarnock",9],
[11330,"ESCCUP","Celtic","Falkirk",1],
[10700,"ESP1","Granada","Villarreal",2],
[10915,"ESP1","Real Madrid","Eibar",1],
[11130,"ESP1","Osasuna","Getafe",10],
[10700,"ESP2","Logroñés","Tenerife",9],
[10900,"ESP2","Girona","Ponferradina",1],
[11115,"ESP2","Castellón","Real Oviedo",9],
[11430,"ESPC","Athletic Club","Real Sociedad",1],
[10600,"FRA1","Mónaco","Metz",1],
[11000,"FRA1","PSG","Lille",1],
[11400,"FRA1","Lens","Lyon",2],
[10800,"FRA2","Toulouse","Nancy",10],
[11300,"FRA2","AC Ajaccio","Valenciennes",10],
[11300,"FRA2","Clermont","Niort",10],
[11300,"FRA2","Grenoble","Chateauroux",10],
[11300,"FRA2","Rodez","Chambly",10],
[11300,"FRA2","SM Caen","Pau FC",9],
[11300,"FRA2","Sochaux","Paris FC",10],
[11300,"FRA2","Troyes","EA Guingamp",10],
[10700,"GRE1","Atromitos","Smyrnis",10],
[10915,"GRE1","OFI Creta","Giannina",10],
[11130,"GRE1","AEL Larissa","Panetolikos",10],
[11130,"GRE1","Lamia","Volos",10],
[10630,"ING1","Chelsea","West Brom",1],
[10900,"ING1","Leeds Utd","Sheffield Utd",6],
[11130,"ING1","Leicester","Manchester City",5],
[11400,"ING1","Arsenal","Liverpool",1],
[10630,"ING2","Huddersfield","Brentford",9],
[10700,"INGT","Southend","Carlisle",9],
[10530,"ITA1","AC Milan","Sampdoria",1],
[10800,"ITA1","Atalanta","Udinese",1],
[10800,"ITA1","Benevento","Parma",6],
[10800,"ITA1","Cagliari","Verona",10],
[10800,"ITA1","Genoa","Fiorentina",6],
[10800,"ITA1","Lazio","Spezia",1],
[10800,"ITA1","Nápoles","Crotone",1],
[10800,"ITA1","Sassuolo","Roma",2],
[11100,"ITA1","Torino","Juventus",2],
[11345,"ITA1","Bolonia","Inter",2],
[10000,"JAP1","Avispa Fukuoka","Sapporo",9],
[10000,"JAP1","Hiroshima","G-Osaka",10],
[10000,"JAP1","Nagoya","Tokyo",10],
[10000,"JAP1","Vegalta Sendai","Vissel Kobe",9],
[10100,"JAP1","Urawa","Kashima",9],
[10300,"JAP1","Yokohama FC","Kashiwa",9],
[10500,"JAP1","Kawasaki","Oita",10],
[11800,"MEX1","Atlas","Tijuana",10],
[12000,"MEX1","Club América","Necaxa",1],
[12206,"MEX1","Monterrey","Atlético de San Luis",1],
[10600,"AMISC","Kongsvinger (Nor)","Hodd (Nor)"],
[10600,"AMISC","Lahti (Fin)","Ilves (Fin)"],
[10630,"AMISC","Lok. Sofia (Bul)","Montana (Bul)"],
[10700,"AMISC","Häcken (Swe)","Varbergs (Swe)"],
[10700,"AMISC","Helsingborg (Swe)","Östers (Swe)"],
[10700,"AMISC","Örebro (Swe)","Akropolis (Swe)"],
[10700,"AMISC","Västerås SK (Swe)","Sirius (Swe)"],
[10800,"AMISC","Levski (Bul)","Slivnishki Geroy (Bul)"],
[10900,"AMISC","KTP (Fin)","PeKa (Fin)"],
[11100,"AMISC","Chicago Fire (Usa)","Orlando City (Usa)"],
[11230,"AMISC","Tampa Bay (Usa)","New York Red Bulls (Usa)"],
[11300,"AMISC","Los Angeles FC (Usa)","New England Revolution (Usa)"],
[11300,"AMISC","Loudoun (Usa)","Philadelphia Union 2 (Usa)"],
[11400,"AMISC","Houston Dynamo (Usa)","Austin FC (Usa)"],
[11400,"AMISC","Sporting Kansas City (Usa)","Los Angeles Galaxy (Usa)"],
[11500,"AMISC","Chattanooga (Usa)","Louisville City (Usa)"],
[11500,"AMISC","Cincinnati (Usa)","Minnesota United (Usa)"],
[11500,"AMISC","San Diego Loyal (Usa)","New Mexico (Usa)"],
[11600,"AMISC","Charlotte Independ. (Usa)","Tormenta (Usa)"],
[12000,"AMISC","Colorado Rapids (Usa)","Real Salt Lake (Usa)"],
[11145,"HOL1","Venlo","Groningen",9],
[11300,"HOL1","Twente","Vitesse",9],
[11300,"HOL1","Willem II","AZ Alkmaar",9],
[11400,"HOL1","Sparta Rotterdam","Zwolle",10],
[11715,"PAR1","Guairena FC","Sp. Luqueño",10],
[11930,"PAR1","Libertad","Olimpia",5],
[10530,"POL1","Plock","Piast",9],
[11030,"POL1","Legia","Pogon Szczecin",5],
[11300,"POL1","Cracovia","Lech",6],
[11200,"POR1","Rio Ave","Gil Vicente",10],
[11430,"POR1","Oporto","Santa Clara",1],
[10500,"POR2","Vizela","Estoril",6],
[10900,"POR2","Oporto B","Arouca",10],
[10700,"REP1","Sigma Olomouc","Pardubice",10],
[10900,"REP1","Liberec","Ostrava",10],
[10900,"REP1","Opava","Slovacko",9],
[11130,"REP1","Sparta Praga","Teplice",10],
[10700,"RUM1","FC Hermannstadt","FC Arges",10],
[10600,"RUS1","R. Volgograd","Lokomotiv Moscú",9],
[10830,"RUS1","Krasnodar","Akhmat Grozny",10],
[10830,"RUS1","Rubin Kazan","Sochi",10],
[11100,"RUS1","Dinamo Moscú","Ufa",10],
[11115,"SUI1","Lausanne","Lucerna",10],
[11330,"SUI1","St. Gallen","Zúrich",10],
[10900,"SUI2","Aarau","Schaffhausen",10],
[11115,"SUI2","Grasshoppers","Xamax",10],
[11115,"SUI2","Kriens","Lausanne Ouchy",9],
[11115,"SUI2","Thun","Wil",10],
[11115,"SUI2","Winterthur","Chiasso",10],
[10530,"TUR1","Kayserispor","Göztepe",10],
[10800,"TUR1","Rizespor","Karagumruk",9],
[10800,"TUR1","Sivasspor","Trabzonspor",9],
[11100,"TUR1","Hatayspor","Galatasaray",6],
[10530,"TUR2","Tuzlaspor","Samsunspor",9],
[10800,"TUR2","Ankaraspor","Akhisarspor",10],
[10800,"TUR2","Giresunspor","Istanbulspor",10],
[11100,"TUR2","Adana Demirspor","Keciorengucu",10],
[10600,"UCR1","Mariupol","Inhulets",10],
[10900,"UCR1","Rukh Lviv","Zorya",9],
[11130,"UCR1","Desna","Olimpik Donetsk",10]
]
