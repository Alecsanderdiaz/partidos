let PARTIDOS = [
  [11000,"*PAISES","Marruecos Sub-17","Francia Sub-17",12,1,null,1],[11000,"*CLUB","Arka (Pol)","Elblag (Pol)",12,1,null,1],[11000,"*CLUB","Baerum Sportsklubb (Nor)","Stabaek (Nor)",12,1,null,1],[11000,"*CLUB","Salzburgo (Aut)","Karlsruher (Ger)",12,1,null,1],[11030,"ZA-ARGS","Boca Jrs.","Racing Club",5,2.55,null,2.54],[11100,"I-AFRI","Angola","Mauritania",7,2.55,null,6.47],[11100,"*CLUB","Norrby (Swe)","Häcken (Swe)",12,1,null,6.47],[11130,"*CLUB","Fleetwood (Eng)","Sligo Rovers (Irl)",12,1,null,6.47],[11130,"*CLUB","Flora (Est)","Levadia (Est)",12,1,null,6.47],[11130,"*CLUB","Hammarby (Swe)","Sandviken (Swe)",12,1,null,6.47],[11130,"*CLUB","Slavia Praga B (Cze)","Prepere (Cze)",12,1,null,6.47],[11130,"*CLUB","Weiz (Aut)","SV Wildon (Aut)",12,1,null,6.47],[11200,"*CLUB","Admira (Aut)","Wiener Viktoria (Aut)",12,1,null,6.47],[11200,"*CLUB","Deutschlandsberger (Aut)","Kapfenberg (Aut)",12,1,null,6.47],[11200,"*CLUB","First Wien (Aut)","Kremser (Aut)",12,1,null,6.47],[11200,"*CLUB","Fortuna Düsseldorf (Ger)","BSV Rehden (Ger)",12,1,null,6.47],[11200,"*CLUB","Galway (Irl)","St. Patricks (Irl)",12,1,null,6.47],[11200,"*CLUB","Göteborg (Swe)","Degerfors (Swe)",12,1,null,6.47],[11200,"*CLUB","Hodonin (Cze)","Kromeriz (Cze)",12,1,null,6.47],[11200,"*CLUB","Instituto (Arg)","Colón (Arg)",12,1,null,6.47],[11200,"*CLUB","Lafnitz (Aut)","ASV Siegendorf (Aut)",12,1,null,6.47],[11200,"*CLUB","SV Oberwart (Aut)","Drassburg (Aut)",12,1,null,6.47],[11200,"YE-TUR1","Adana Demirspor","Giresunspor",7,1.53,null,9.89],[11200,"*YE-TUR2","Sakaryaspor","Altinordu",11,1.38,null,13.64],[11230,"FRA2","Sochaux","SM Caen",7,2.05,null,27.96],[11230,"*CLUB","Wiener (Aut)","Gloggnitz (Aut)",12,1,null,27.96],[11300,"ALE3","Viktoria Köln","Saarbrücken",7,1.93,null,53.96],[11300,"*CLUB","Duren (Ger)","Siegen (Ger)",12,1,null,53.96],[11300,"*CLUB","Heeslinger (Ger)","Norderstedt (Ger)",12,1,null,53.96],[11300,"*CLUB","Legia (Pol)","Magdeburgo (Ger)",12,1,null,53.96],[11300,"*CLUB","Leobendorf (Aut)","St. Polten (Am) (Aut)",12,1,null,53.96],[11300,"*CLUB","Marchfeld (Aut)","Horn (Aut)",12,1,null,53.96],[11300,"*CLUB","Tammeka (Est)","Kuressaare (Est)",12,1,null,53.96],[11300,"YE-RUM1","Rapid Bucarest","Sepsi Sf. Gheorghe",9,2.37,null,127.88],[11315,"*CLUB","Xamax (Sui)","Bulle (Sui)",12,1,null,127.88],[11330,"YE-GRE1","Panetolikos","Giannina",10,2.6,null,332.48],[11330,"*CLUB","Dudelange (Lux)","Jeunesse Canach (Lux)",12,1,null,332.48],[11330,"*CLUB","Jeunesse Esch (Lux)","Schifflange (Lux)",12,1,null,332.48],[11330,"*CLUB","Parnu JK Vaprus (Est)","Tallinna Kalev (Est)",12,1,null,332.48],[11400,"I-AFRI","Congo","Níger",7,2.65,null,881.07],[11400,"*CLUB","Syra Mensdorf (Lux)","US Feulen (Lux)",12,1,null,881.07],[11400,"YE-HOL1","Excelsior","FC Volendam",7,1.8,null,1585.92],[11400,"YE-HOL2","Almere","Graafschap",7,1.8,null,2854.65],[11400,"YE-HOL2","Zwolle","Venlo",5,1.42,null,4053.6],[11400,"YE-HOL2","Den Bosch","Jong PSV",8,1.75,null,7093.8],[11400,"YE-HOL2","Maastricht","Heracles",8,1,null,7093.8],[11400,"YE-HOL2","Oss","Breda",8,1.93,null,13691.03],[11400,"YE-HOL2","Willem II","Eindhoven",6,1,null,13691.03],[11400,"YE-POR1","Arouca","Portimonense",7,2.15,null,29435.71],[11430,"ALE1","RB Leipzig","Bayern Múnich",2,1.6,null,47097.13],[11430,"ITA2","Palermo","Bari",9,2.2,null,103613.68],[11445,"YE-BEL1","Eupen","Genk",8,1.48,null,153348.24],[11445,"R-ING2","Sheffield Utd","Hull",7,1.7,null,260692],[11445,"*CLUB","Dundalk (Irl)","Finn Harps (Irl)",11,1.22,null,318044.24],[11500,"ESP1","Mallorca","Celta de Vigo",10,2.8,null,890523.87],[11500,"ESP2","Las Palmas","Mirandés",5,1.7,null,1513890.57],[11500,"R-ING2","Burnley","West Brom",10,2.45,null,3709031.89],[11510,"FRAC","Marsella","Stade Rennais",3,1.76,null,6527896.12],[11600,"ZA-CHI1","Magallanes","OHiggins",10,2.3,null,15014161.07],[11600,"*CLUB","Olimpia (Par)","Guaraní (Par)",12,1,null,15014161.07],[11615,"YE-POR1","Sporting CP","Vizela",1,1.45,null,21770533.55],[11700,"I-S20","Bolivia Sub-20","Venezuela Sub-20",8,1.72,null,37445317.7],[11800,"ZA-MEX2","Correcaminos U.A.T.","Tapatio",10,2.25,null,84251964.82],[11830,"ZA-CHI1","U. Española","Ñublense",9,2.1,null,176929126.12],[11930,"*CLUB","Peñarol (Uru)","Unión Santa Fe (Arg)",7,2.25,null,398090533.77],[11930,"I-S20","Ecuador Sub-20","Chile Sub-20",10,2.15,null,855894647.6],[12200,"ZA-MEX1","Mazatlán","Santos Laguna",8,1.9,null,1626199830.44],[12210,"ZA-MEX1","Tijuana","Tigres UANL",6,1.9,null,3089779677.83]
]
