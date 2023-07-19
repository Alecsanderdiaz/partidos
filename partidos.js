let PARTIDOS = [
  [10200, "AMI", "Crisul Chisineu Cris (Rou)", "CSC Dumbravita (Rou)", 12, 1],
   [10200, "AMI", "Saburtalo Tbilisi (Geo)", "Khobi (Geo)", 12, 1],
   [10300, "AMI", "Balatonfuredi (Hun)", "ESMTK Budapest (Hun)", 12, 1],
   [10300, "AMI", "FC Brasov (Rou)", "Unirea Slobozia (Rou)", 12, 1],
   [10300, "AMI", "MTK Budapest (Hun)", "Vasas (Hun)", 12, 1],
   [10300, "AMI", "Obolon (Ukr)", "Nyva Buzova (Ukr)", 12, 1],
   [10300, "AMI", "Unirea Dej (Rou)", "Viitorul Cluj (Rou)", 12, 1],
   [10330, "AMI", "Teplice B (Cze)", "Slavia Praga B (Cze)", 12, 1],
   [10400, "AMI", "Académica (Por)", "Varzim (Por)", 12, 1.38, null, null, "NaNM (A10k)"],
   [10400, "AMI", "Casa Pia (Por)", "Moreirense (Por)", 12, 1],
   [10400, "AMI", "Damac (Sau)", "Cartagena (Esp)", 12, 1],
   [10400, "AMI", "Dorogi (Hun)", "Vasas II (Hun)", 12, 1],
   [10400, "AMI", "FC Dabas (Hun)", "III. Keruleti TVE (Hun)", 12, 1],
   [10400, "AMI", "Ferencvaros II (Hun)", "Bicskei (Hun)", 12, 1],
   [10400, "AMI", "Las Palmas (Esp)", "Orlando (Rsa)", 12, 1.3, null, null, "NaNM (A10k)"],
   [10400, "AMI", "Lille (Fra)", "Dunkerque (Fra)", 12, 1],
   [10400, "AMI", "Oporto (Por)", "Portimonense (Por)", 12, 1],
   [10400, "AMI", "Santa Clara (Por)", "Feirense (Por)", 12, 1.28, null, null, "NaNM (A10k)"],
   [10430, "AMI", "AVS (Por)", "Felgueiras (Por)", 12, 1],
   [10430, "AMI", "Lusitania FC (Por)", "Leixoes (Por)", 12, 1],
   [10500, "AMI", "Leicester (Eng)", "Leuven (Bel)", 12, 1],
   [10500, "AMI", "Olympiacos (Gre)", "Sabah Baku (Aze)", 12, 1],
   [10500, "AMI", "Yokohama M. (Jpn)", "Celtic (Sco)", 12, 1.28, null, null, "NaNM (A10k)"],
   [10600, "AMI", "Roda (Ned)", "Helmond (Ned)", 12, 1],
   [10700, "AMI", "Arouca (Por)", "SC Braga B (Por)", 12, 1],
   [10700, "AMI", "Belasica (Mkd)", "Dubocica (Srb)", 12, 1],
   [10700, "AMI", "Debrecen (Hun)", "Al Shabab (Sau)", 12, 1],
   [10700, "AMI", "Indjija (Srb)", "Graficar Beograd (Srb)", 12, 1],
   [10700, "AMI", "Kluczbork (Pol)", "Warta Sieradz (Pol)", 12, 1],
   [10700, "AMI", "Marino (Esp)", "Tenerife (Esp)", 12, 1],
   [10700, "AMI", "Metalac (Srb)", "Prijedor (Bih)", 12, 1],
   [10700, "AMI", "Michalovce Sub-19 (Svk)", "Vranov (Svk)", 12, 1],
   [10700, "AMI", "Nassaji Mazandaran (Irn)", "Al Khaleej (Sau)", 12, 1],
   [10700, "AMI", "Netanya (Isr)", "Beveren (Bel)", 12, 1],
   [10700, "AMI", "Paks (Hun)", "Csikszereda M. Ciuc (Rou)", 12, 1],
   [10700, "AMI", "Rodez (Fra)", "Martigues (Fra)", 12, 1],
   [10700, "AMI", "Rostock (Ger)", "BFC Dynamo (Ger)", 12, 1],
   [10700, "AMI", "Sandhausen (Ger)", "Elversberg (Ger)", 12, 1.3, null, null, "NaNM (A10k)"],
   [10800, "AMI", "Deinze (Bel)", "FC Emmen (Ned)", 12, 1],
   [10800, "AMI", "Hannover (Ger)", "Duisburgo (Ger)", 12, 1],
   [10800, "AMI", "Macva (Srb)", "Szeged (Hun)", 12, 1],
   [10800, "AMI", "Manchester Utd (Eng)", "Lyon (Fra)", 12, 1.28, null, null, "NaNM (A10k)"],
   [10830, "AMI", "Abha (Sau)", "Gol Gohar (Irn)", 12, 1],
   [10900, "AMI", "Kairat Almaty (Kaz)", "Pakhtakor (Uzb)", 12, 1],
   [10900, "AMI", "KV Mechelen (Bel)", "Virton (Bel)", 12, 1],
   [10900, "AMI", "Siarka Tarnobrzeg (Pol)", "Ostrowiec (Pol)", 12, 1],
   [10930, "AMI", "Bohemians 1905 B (Cze)", "Zivanice (Cze)", 12, 1],
   [10930, "AMI", "EA Guingamp (Fra)", "Quevilly Rouen (Fra)", 12, 1],
   [10930, "AMI", "Monza (Ita)", "Real Vicenza (Ita)", 12, 1],
   [11000, "U-CHAM", "Valmiera (Lat)", "O. Ljubljana (Slo)", 11, 1.35, null, null, "NaNM (A10k)"],
   [11000, "AMI", "Blonianka Blonie (Pol)", "Swit (Pol)", 12, 1],
   [11000, "AMI", "BVSC-Zuglo (Hun)", "Budaorsi (Hun)", 12, 1],
   [11000, "AMI", "CS Din. Bucuresti (Rou)", "Gloria Buzau (Rou)", 12, 1],
   [11000, "AMI", "Csepel (Hun)", "Elore (Hun)", 12, 1],
   [11000, "AMI", "Gabala (Aze)", "KF Gostivar (Mkd)", 12, 1],
   [11000, "AMI", "Hlubina (Cze)", "Prerov (Cze)", 12, 1],
   [11000, "AMI", "Kaposvar (Hun)", "Paks II (Hun)", 12, 1],
   [11000, "AMI", "Palermo (Ita)", "Virtus Verona (Ita)", 12, 1.3, null, null, "NaNM (A10k)"],
   [11000, "AMI", "Puskas Academy (Hun)", "Al-Fateh (Sau)", 12, 1.25, null, null, "NaNM (A10k)"],
   [11000, "AMI", "Reims (Fra)", "Charleroi (Bel)", 12, 1],
   [11000, "AMI", "Salernitana (Ita)", "Pescara (Ita)", 12, 1],
   [11000, "AMI", "Sampdoria (Ita)", "Rapperswil (Sui)", 12, 1.22, null, null, "NaNM (A10k)"],
   [11000, "AMI", "Sassuolo (Ita)", "Paphos (Cyp)", 12, 1.15, null, null, "NaNM (A10k)"],
   [11000, "AMI", "Stade Rennais (Fra)", "Concarneau (Fra)", 12, 1.28, null, null, "NaNM (A10k)"],
   [11000, "AMI", "Star Starachowice (Pol)", "Bron Radom (Pol)", 12, 1],
   [11015, "AMI", "Vratimov (Cze)", "Frydlant n. O. (Cze)", 12, 1],
   [11030, "AMI", "Aluminij (Slo)", "CSM Resita (Rou)", 12, 1],
   [11030, "AMI", "Bani Yas (Uae)", "VLS Veszprem (Hun)", 12, 1],
   [11030, "AMI", "Bielsko-Biala (Pol)", "Wislanie Jaskowice (Pol)", 12, 1],
   [11030, "AMI", "Blansko (Cze)", "Bzenec (Cze)", 12, 1],
   [11030, "AMI", "Bohumin (Cze)", "Dolni Datyne (Cze)", 12, 1],
   [11030, "AMI", "Budafoki (Hun)", "Grosuplje (Slo)", 12, 1],
   [11030, "AMI", "Ferizaj (Kos)", "Arsimi (Mkd)", 12, 1],
   [11030, "AMI", "Frosinone (Ita)", "erentino (Ita)", 12, 1],
   [11030, "AMI", "Jablonec B (Cze)", "FC Pencin (Cze)", 12, 1],
   [11030, "AMI", "Kisvarda (Hun)", "M. Petach Tikva (Isr)", 12, 1],
   [11030, "AMI", "Kocaelispor (Tur)", "Altay (Tur)", 12, 1],
   [11030, "AMI", "Rabotnicki (Mkd)", "Ashdod (Isr)", 12, 1],
   [11030, "AMI", "Tiszaujvaros (Hun)", "Hidasnemeti VSC (Hun)", 12, 1],
   [11100, "U-CHAM", "Dinamo Tbilisi (Geo)", "Astana (Kaz)", 11, 1.5, null, null, "NaNM (A10k)"],
   [11100, "U-CHAM", "Ferencvaros (Hun)", "Klaksvik (Fai)", 11, 1.28, null, null, "NaNM (A10k)"],
   [11100, "U-CHAM", "Qarabag (Aze)", "Lincoln (Gib)", 11, 1.25, null, null, "NaNM (A10k)"],
   [11100, "AMI", "Aalen (Ger)", "Ulm (Ger)", 12, 1],
   [11100, "AMI", "Al-Hilal (Sau)", "Dinamo Kiev (Ukr)", 12, 1.28, null, null, "NaNM (A10k)"],
   [11100, "AMI", "Angers (Fra)", "Le Mans (Fra)", 12, 1.33, null, null, "NaNM (A10k)"],
   [11100, "AMI", "ASK Klagenfurt (Aut)", "Udinese (Ita)", 12, 1],
   [11100, "AMI", "Bekescsaba (Hun)", "Korosladany MSK (Hun)", 12, 1],
   [11100, "AMI", "Blau Weiss Berlin (Ger)", "CFC Hertha (Ger)", 12, 1],
   [11100, "AMI", "Caslav (Cze)", "Pardubice B (Cze)", 12, 1],
   [11100, "AMI", "FK Kozlovice (Cze)", "SK Hranice (Cze)", 12, 1],
   [11100, "AMI", "Hatvan (Hun)", "Veresegyhaz (Hun)", 12, 1],
   [11100, "AMI", "Karvina B (Cze)", "Vitkovice (Cze)", 12, 1],
   [11100, "AMI", "Kleczew (Pol)", "Unia Swarzedz (Pol)", 12, 1],
   [11100, "AMI", "Kurim (Cze)", "Start Brno (Cze)", 12, 1],
   [11100, "AMI", "Lanzhot (Cze)", "Hodonin (Cze)", 12, 1],
   [11100, "AMI", "Lierse K. (Bel)", "St. Truiden (Bel)", 12, 1.25, null, null, "NaNM (A10k)"],
   [11100, "AMI", "Nottingen (Ger)", "Walldorf (Ger)", 12, 1],
   [11100, "AMI", "Oberhausen (Ger)", "Borussia Dortmund (Ger)", 12, 1],
   [11100, "AMI", "Paris FC (Fra)", "UNFP (Fra)", 12, 1],
   [11100, "AMI", "Pau FC (Fra)", "AC Ajaccio (Fra)", 12, 1],
   [11100, "AMI", "Racing Luxembourg (Lux)", "Troyes (Fra)", 12, 1],
   [11100, "AMI", "Tiszafuredi (Hun)", "DVTK II (Hun)", 12, 1],
   [11100, "AMI", "Turnov (Cze)", "Ceska Lipa (Cze)", 12, 1],
   [11100, "AMI", "Velvary (Cze)", "Kladno (Cze)", 12, 1],
   [11100, "AMI", "Zapy (Cze)", "Meteor Prague (Cze)", 12, 1],
   [11115, "AMI", "Union Berlín (Ger)", "Rapid Viena (Aut)", 12, 1.25, null, null, "NaNM (A10k)"],
   [11130, "AMI", "Amiens (Fra)", "Versailles (Fra)", 12, 1],
   [11130, "AMI", "Asko Kottmannsdorf (Aut)", "A. Klagenfurt (Aut)", 12, 1],
   [11130, "AMI", "AZ Alkmaar (Ned)", "Norwich (Eng)", 12, 1],
   [11130, "AMI", "Braunschweig (Ger)", "H. Tel-Aviv (Isr)", 12, 1.28, null, null, "NaNM (A10k)"],
   [11130, "AMI", "Grenoble (Fra)", "GOAL FC (Fra)", 12, 1],
   [11130, "AMI", "Karlsruher (Ger)", "Liverpool (Eng)", 12, 1.25, null, null, "NaNM (A10k)"],
   [11130, "AMI", "Le Havre (Fra)", "SM Caen (Fra)", 12, 1],
   [11130, "AMI", "Preussen Münster (Ger)", "FC Gutersloh (Ger)", 12, 1],
   [11130, "AMI", "Ravensburg (Ger)", "Eintracht Frankfurt II (Ger)", 12, 1],
   [11130, "AMI", "SC Weiche-08 (Ger)", "Hansa Rostock II (Ger)", 12, 1],
   [11130, "AMI", "Slany (Cze)", "Hostoun (Cze)", 12, 1],
   [11130, "AMI", "TSC (Srb)", "Radnicki S. Mitrovica (Srb)", 12, 1],
   [11200, "AMI", "Amorebieta (Esp)", "Osasuna B (Esp)", 12, 1],
   [11200, "AMI", "Breda (Ned)", "Waalwijk (Ned)", 12, 1.22, null, null, "NaNM (A10k)"],
   [11200, "AMI", "Gent (Bel)", "Waregem (Bel)", 12, 1],
   [11200, "AMI", "Goppinger SV (Ger)", "Dorfmerkingen (Ger)", 12, 1],
   [11200, "AMI", "Hanau (Ger)", "Offenbach (Ger)", 12, 1],
   [11200, "AMI", "Heiligenkreuz (Aut)", "Sturm Graz (Am) (Aut)", 12, 1],
   [11200, "AMI", "Kiraly SE (Hun)", "Csornai (Hun)", 12, 1],
   [11200, "AMI", "Mahlsdorf (Ger)", "TSV Rudow (Ger)", 12, 1],
   [11200, "AMI", "Meerssen (Ned)", "Maastricht (Ned)", 12, 1],
   [11200, "AMI", "Olot (Esp)", "Girona (Esp)", 12, 1],
   [11200, "AMI", "Pforzheim (Ger)", "Stuttgart II (Ger)", 12, 1],
   [11200, "AMI", "Pirmasens (Ger)", "Dudenhofen (Ger)", 12, 1],
   [11200, "AMI", "Real Zaragoza (Esp)", "Real Zaragoza B (Esp)", 12, 1],
   [11200, "AMI", "SV Mettlach (Ger)", "Saarbrücken (Ger)", 12, 1],
   [11200, "AMI", "Toulouse (Fra)", "Andorra (And)", 12, 1.35, null, null, "NaNM (A10k)"],
   [11200, "AMI", "TVD Velbert (Ger)", "Cronenberger (Ger)", 12, 1],
   [11215, "AMI", "Getafe (Esp)", "Leganés (Esp)", 12, 1.38, null, null, "NaNM (A10k)"],
   [11215, "AMI", "Wuppertaler (Ger)", "Hilden (Ger)", 12, 1],
   [11230, "AMI", "First Wien (Am) (Aut)", "Favoritner (Aut)", 12, 1],
   [11230, "AMI", "Jeunesse Esch (Lux)", "Fola (Lux)", 12, 1],
   [11230, "AMI", "Thes Sport (Bel)", "Patro Eisden (Bel)", 12, 1],
   [11300, "U-CHAM", "Hesperange (Lux)", "Slovan Bratislava (Svk)", 11, 1.35, null, null, "NaNM (A10k)"],
   [11300, "U-CHAM", "Ludogorets (Bul)", "FC Ballkani (Kos)", 11, 1.3, null, null, "NaNM (A10k)"],
   [11300, "AMI", "Chesterfield (Eng)", "Derby (Eng)", 12, 1.25, null, null, "NaNM (A10k)"],
   [11300, "AMI", "Forest Green (Eng)", "Everton Sub-21 (Eng)", 12, 1],
   [11300, "AMI", "alicia Mugardos (Esp)", "Racing de Ferrol (Esp)", 12, 1],
   [11300, "AMI", "Preston (Eng)", "Ipswich (Eng)", 12, 1.3, null, null, "NaNM (A10k)"],
   [11300, "AMI", "Purmersteijn (Ned)", "ADO 20 Heemskerk (Ned)", 12, 1],
   [11300, "AMI", "Real Betis (Esp)", "Mónaco (Fra)", 12, 1.3, null, null, "NaNM (A10k)"],
   [11300, "AMI", "Rotherham (Eng)", "Middlesbrough (Eng)", 12, 1.33, null, null, "NaNM (A10k)"],
   [11300, "AMI", "SC Braga (Por)", "Cardiff (Wal)", 12, 1.3, null, null, "NaNM (A10k)"],
   [11300, "AMI", "Vojvodina (Srb)", "Borac Banja Luka (Bih)", 12, 1],
   [11315, "AMI", "Bersenbruck (Ger)", "Lotte (Ger)", 12, 1],
   [11330, "U-CHAM", "Larne (Nir)", "HJK (Fin)", 11, 1.5, null, null, "NaNM (A10k)"],
   [11330, "AMI", "Bradford PA (Eng)", "Bradford City (Eng)", 12, 1.18, null, null, "NaNM (A10k)"],
   [11330, "AMI", "Estoril (Por)", "Sheffield Utd (Eng)", 12, 1.3, null, null, "NaNM (A10k)"],
   [11345, "R-ESCL", "Arbroath", "Cowdenbeath", 11, 1.25, null, null, "NaNM (A10k)"],
   [11345, "R-ESCL", "Edinburgh City", "Kelty Hearts", 11, 1.33, null, null, "NaNM (A10k)"],
   [11345, "AMI", "AFC Totton (Eng)", "Bognor Regis (Eng)", 12, 1],
   [11345, "AMI", "Chelmsford (Eng)", "Leyton Orient (Eng)", 12, 1],
   [11345, "AMI", "Corby (Eng)", "Peterborough Sports (Eng)", 12, 1],
   [11345, "AMI", "Crawley (Eng)", "Crystal Palace (Eng)", 12, 1.2, null, null, "NaNM (A10k)"],
   [11345, "AMI", "Ebbsfleet (Eng)", "Leyton Orient (Eng)", 12, 1],
   [11345, "AMI", "Grimsby Borough (Eng)", "Barton Town (Eng)", 12, 1],
   [11345, "AMI", "Huntly (Sco)", "Ellon United (Sco)", 12, 1],
   [11345, "AMI", "Northampton (Eng)", "Birmingham (Eng)", 12, 1.36, null, null, "NaNM (A10k)"],
   [11345, "AMI", "Salford (Eng)", "West Brom (Eng)", 12, 1],
   [11430, "AMI", "Sporting CP (Por)", "Genk (Bel)", 12, 1.3, null, null, "NaNM (A10k)"],
   [11500, "ZA-ECU2", "Nueve de Octubre", "Ind. Juniors", 11, 1.5, null, null, "NaNM (A10k)"],
   [11500, "ZA-ECU2", "Vargas Torres", "Chacaritas", 11, 1.6, null, null, "NaNM (A10k)"],
   [11500, "CLUB", "Sevilla", "Ind. del Valle", 11, 1.45, null, null, "NaNM (A10k)"],
   [11500, "ZA-PARC", "Independiente FBC", "S. Ameliano", 11],
   [11600, "ZA-ARGC", "Defensa y Justicia", "Centro Español", 11],
   [11700, "ZA-BRA2", "Atlético-GO", "Mirassol", 11, 1.53, null, null, "NaNM (A10k)"],
   [11700, "ZA-BRA2", "Novorizontino", "Londrina", 11, 1.45, null, null, "NaNM (A10k)"],
   [11700, "ZA-SUD", "Botafogo (Bra)", "Patronato (Arg)", 11, 1.33, null, null, "NaNM (A10k)"],
   [11730, "ZA-PARC", "San Lorenzo", "Olimpia", 11, 1.48, null, null, "NaNM (A10k)"],
   [11800, "ZA-EST2", "Detroit", "Louisville City", 11, 1.42, null, null, "NaNM (A10k)"],
   [11900, "ZA-ARGC", "Racing Club", "San Martín Tuc.", 11, 1.45, null, null, "NaNM (A10k)"],
   [11900, "ZA-ECU2", "Macará", "Buhos ULVR", 11, 1.42, null, null, "NaNM (A10k)"],
   [11900, "AMI", "Chelsea (Eng)", "Wrexham (Wal)", 12, 1.16, null, null, "NaNM (A10k)"],
   [11900, "ZA-SUD", "Emelec (Ecu)", "Sporting Cristal (Per)", 11, 1.36, null, null, "NaNM (A10k)"],
   [11900, "ZA-SUD", "San Lorenzo (Arg)", "Ind. Medellín (Col)", 11],
   [11930, "ZA-BRA2", "ABC", "Guaraní", 11, 1.6, null, null, "NaNM (A10k)"],
   [11930, "ZA-BRA2", "Avaí", "Sampaio Correa", 11, 1.6, null, null, "NaNM (A10k)"],
   [11930, "ZA-BRA2", "Ceará", "Vila Nova", 11, 1.55, null, null, "NaNM (A10k)"],
   [11930, "ZA-BRA2", "Sport Recife", "Vitória", 11, 1.5, null, null, "NaNM (A10k)"],
   [11930, "AMI", "MLS All-Stars (Usa)", "Arsenal (Eng)", 12, 1.16, null, null, "NaNM (A10k)"],
   [12000, "ZA-COL1", "Ind. Santa Fe", "Jaguares de Córdoba", 11, 1.38, null, null, "NaNM (A10k)"],
   [12000, "AMI", "New Mexico (Usa)", "Sunderland (Eng)", 12, 1],
   [12100, "AMI", "Atlas (Mex)", "Sporting de Gijón (Esp)", 12, 1],
   [12130, "AMI", "Crystal Palace Sub-21 (Eng)", "Real Monarchs (Usa)", 12, 1],
   [12200, "AMI", "Necaxa (Mex)", "Athletic Club (Esp)", 12, 1.44, null, null, "NaNM (A10k)"]]
