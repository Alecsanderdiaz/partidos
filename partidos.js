let PARTIDOS = [
    [10300, "*AMI", "Navalcarnero (Esp)", "Guadalajara (Esp)", 12, 1.01, null, null],
    [10300, "*AMI", "Pozuelo (Esp)", "Leganés B (Esp)", 12, 1.01, null, null],
    [10330, "*AMI", "Tarazona (Esp)", "Numancia B (Esp)", 12, 1.01, null, null],
    [10400, "*AMI", "Athletic Club (Esp)", "Alavés (Esp)", 12, 1.01, null, null],
    [10400, "S-JAP1", "Kashima", "Hiroshima", 9, 2, null, null],
    [10430, "*AMI", "Gimnástica Segoviana (Esp)", "Numancia (Esp)", 12, 1.01, null, null],
    [10430, "*AMI", "Leioa (Esp)", "Gernika (Esp)", 12, 1.01, null, null],
    [10430, "*AMI", "Marino de Luanco (Esp)", "Sporting de Gijón (Esp)", 12, 1.01, null, null],
    [10430, "S-CHI1", "Dalian Pro", "Shanghai Port", 8, 1.5, null, null],
    [10430, "S-JAP1", "Kyoto", "Kashiwa", 9, 2.25, null, null],
    [10500, "*AMI", "Laredo (Esp)", "Sestao River (Esp)", 12, 1.01, null, null],
    [10500, "*AMI", "Las Palmas (Esp)", "Tamaraceite (Esp)", 12, 1.01, null, null],
    [10500, "S-COR1", "Pohang", "Gangwon", 7, 1.7, null, null],
    [10500, "S-JAP1", "C-Osaka", "Vissel Kobe", 10, 2.2, null, null],
    [10500, "S-JAP1", "Nagoya", "Urawa", 8, 2.2, null, null],
    [10500, "YE-POR2", "Farense", "Torreense", 7, 1.85, null, null],
    [10530, "S-COR1", "Suwon FC", "Suwon", 7, 2.05, null, null],
    [10600, "ALE2", "Hamburgo", "Heidenheim", 7, 1.55, null, null],
    [10600, "ALE2", "Paderborn", "Hannover", 7, 1.7, null, null],
    [10600, "ALE2", "Regensburg", "Núremberg", 8, 1.9, null, null],
    [10630, "R-ING1", "Fulham", "Liverpool", 2, 1.4, null, null],
    [10630, "R-ING2", "Norwich", "Wigan", 10, 2.87, null, null],
    [10630, "S-CHI1", "Guangzhou City", "Wuhan Three Towns", 8, 1.25, null, null],
    [10700, "*AMI", "Alavés B (Esp)", "UD Logroñés (Esp)", 12, 1.01, null, null],
    [10700, "*AMI", "Bedfont Sports (Eng)", "Sholing (Eng)", 12, 1.01, null, null],
    [10700, "*AMI", "Merthyr Town (Wal)", "Gresley (Eng)", 12, 1.01, null, null],
    [10700, "*AMI", "Northwood (Eng)", "Berkhamsted (Eng)", 12, 1.01, null, null],
    [10700, "*AMI", "Pelister (Mkd)", "Teteks (Mkd)", 12, 1.01, null, null],
    [10700, "*AMI", "Seelow (Ger)", "1.FC Frankfurt (Ger)", 12, 1.01, null, null],
    [10700, "*AMI", "St. Neots (Eng)", "Kempston (Eng)", 12, 1.01, null, null],
    [10700, "*AMI", "Ware (Eng)", "Potters Bar (Eng)", 12, 1.01, null, null],
    [10700, "ALE3", "1860 Múnich", "VfB Oldenburg", 7, 1.61, null, null],
    [10700, "ALE3", "Meppen", "Zwickau", 7, 2.05, null, null],
    [10700, "ALE3", "Viktoria Köln", "Wehen", 7, 1.95, null, null],
    [10700, "ALE3", "Elversberg", "Saarbrücken", 10, 2.1, null, null],
    [10700, "ALE3", "Hallescher", "Dynamo Dresden", 8, 1.8, null, null],
    [10700, "ALE3", "SpVgg Bayreuth", "Friburgo II", 10, 2.05, null, null],
    [10700, "S-CHI1", "Tianjin Jinmen Tiger", "Shandong Taishan", 9, 3, null, null],
    [10700, "YE-RUS1", "Ural", "Spartak Moscú", 8, 1.7, null, null],
    [10730, "*AMI", "Wimborne (Eng)", "Basingstoke (Eng)", 12, 1.01, null, null],
    [10730, "*YE-BIE1", "Slutsk", "Isloch", 11, 1.42, null, null],
    [10800, "*AMI", "Glenavon (Nir)", "Annagh (Nir)", 12, 1.01, null, null],
    [10800, "*AMI", "H&W Welders (Nir)", "Portadown (Nir)", 12, 1.01, null, null],
    [10800, "FRA2", "Saint-Étienne", "Nimes", 5, 1.66, null, null],
    [10800, "YE-POL1", "Lechia", "Korona", 7, 1.6, null, null],
    [10800, "YE-POR2", "Nacional", "Tondela", 10, 2.2, null, null],
    [10800, "YE-POR2", "Oliveirense", "Mafra", 8, 2.1, null, null],
    [10815, "*ZA-URU2", "Progreso", "Juventud", 12, 1.01, null, null],
    [10830, "ALE1", "Borussia Mgladbach", "Hoffenheim", 7, 1.61, null, null],
    [10830, "ALE1", "Union Berlín", "Hertha BSC", 7, 1.8, null, null],
    [10830, "ALE1", "Wolfsburgo", "Werder Bremen", 7, 1.72, null, null],
    [10830, "ALE1", "Augsburgo", "Friburgo", 8, 1.9, null, null],
    [10830, "ALE1", "Bochum", "Mainz", 8, 1.95, null, null],
    [10900, "*AMI", "Ballymena (Nir)", "Cliftonville (Nir)", 12, 1.01, null, null],
    [10900, "*AMI", "Bangor FC (Nir)", "Larne (Nir)", 12, 1.01, null, null],
    [10900, "*AMI", "Coleraine (Nir)", "Ards (Nir)", 12, 1.01, null, null],
    [10900, "*AMI", "Glentoran (Nir)", "Loughgall (Nir)", 12, 1.01, null, null],
    [10900, "*AMI", "Grays (Eng)", "Harlow (Eng)", 12, 1.01, null, null],
    [10900, "*AMI", "Maldon & Tiptree (Eng)", "Aveley (Eng)", 12, 1.01, null, null],
    [10900, "*AMI", "Newry City (Nir)", "Dundela (Nir)", 12, 1.01, null, null],
    [10900, "*AMI", "Pontefract (Eng)", "Ashton Utd (Eng)", 12, 1.01, null, null],
    [10900, "*AMI", "Pro Sesto (Ita)", "Alcione Milano (Ita)", 12, 1.01, null, null],
    [10900, "*AMI", "Ramsgate (Eng)", "Hastings (Eng)", 12, 1.01, null, null],
    [10900, "*AMI", "Stalybridge (Eng)", "Mossley (Eng)", 12, 1.01, null, null],
    [10900, "*AMI", "Warrenpoint (Nir)", "C. Rangers (Nir)", 12, 1.01, null, null],
    [10900, "*AMI", "Warrington Rylands (Eng)", "Shildon (Eng)", 12, 1.01, null, null],
    [10900, "*R-ESC2", "Arbroath", "Inverness", 11, 1.57, null, null],
    [10900, "*R-ESC2", "Morton", "Cove Rangers", 11, 1.5, null, null],
    [10900, "*R-ESC2", "Partick Thistle", "Hamilton", 11, 1.45, null, null],
    [10900, "*R-ESC2", "Raith", "Dundee FC", 11, 1.5, null, null],
    [10900, "*R-INGN", "Southend", "Boreham Wood", 11, 1.5, null, null],
    [10900, "*R-INGN", "Aldershot", "Solihull Moors", 12, 1.01, null, null],
    [10900, "*R-INGN", "Altrincham", "Maidstone", 12, 1.01, null, null],
    [10900, "*R-INGN", "Barnet", "Halifax", 12, 1.01, null, null],
    [10900, "*R-INGN", "Dagenham & Red.", "Gateshead", 12, 1.01, null, null],
    [10900, "*R-INGN", "Dorking", "Chesterfield", 12, 1.01, null, null],
    [10900, "*R-INGN", "Notts County", "Maidenhead", 12, 1.01, null, null],
    [10900, "*R-INGN", "Torquay", "Oldham", 12, 1.01, null, null],
    [10900, "*R-INGN", "Wealdstone", "Bromley", 12, 1.01, null, null],
    [10900, "*R-INGN", "Wrexham", "Eastleigh", 12, 1.01, null, null],
    [10900, "*R-INGN", "York", "Woking", 12, 1.01, null, null],
    [10900, "*YE-BELC", "RF", "Aywaille", 12, 1.01, null, null],
    [10900, "R-ESC1", "Aberdeen", "St. Mirren", 7, 1.85, null, null],
    [10900, "R-ESC1", "Motherwell", "St. Johnstone", 7, 2.1, null, null],
    [10900, "R-ESC1", "Rangers", "Kilmarnock", 1, 1.35, null, null],
    [10900, "R-ESC1", "Ross County", "Celtic", 2, 1.33, null, null],
    [10900, "R-ING1", "Leeds Utd", "Wolves", 3, 2, null, null],
    [10900, "R-ING1", "Newcastle", "Nottingham Forest", 3, 1.75, null, null],
    [10900, "R-ING1", "Tottenham", "Southampton", 1, 1.48, null, null],
    [10900, "R-ING1", "Bournemouth", "Aston Villa", 4, 1.93, null, null],
    [10900, "R-ING2", "Sheffield Utd", "Millwall", 7, 1.9, null, null],
    [10900, "R-ING2", "Stoke", "Blackpool", 7, 1.95, null, null],
    [10900, "R-ING2", "Swansea", "Blackburn", 7, 2.1, null, null],
    [10900, "R-ING2", "Bristol City", "Sunderland", 6, 2.25, null, null],
    [10900, "R-ING2", "Burnley", "Luton", 10, 2.75, null, null],
    [10900, "R-ING2", "Preston", "Hull", 10, 2.65, null, null],
    [10900, "R-ING2", "QPR", "Middlesbrough", 8, 2.1, null, null],
    [10900, "R-ING2", "Reading", "Cardiff", 10, 2.35, null, null],
    [10900, "R-INGO", "Barnsley", "Cheltenham", 7, 1.75, null, null],
    [10900, "R-INGO", "Bolton", "Wycombe", 7, 2, null, null],
    [10900, "R-INGO", "Burton", "Bristol Rovers", 9, 2.05, null, null],
    [10900, "R-INGO", "Forest Green", "Ipswich", 9, 2.35, null, null],
    [10900, "R-INGO", "MK Dons", "Sheffield Wed", 9, 2.25, null, null],
    [10900, "R-INGO", "Portsmouth", "Lincoln", 7, 1.66, null, null],
    [10900, "R-INGO", "Charlton", "Derby", 8, 2.05, null, null],
    [10900, "R-INGO", "Exeter", "Port Vale", 10, 2.25, null, null],
    [10900, "R-INGO", "Fleetwood", "Plymouth", 8, 1.9, null, null],
    [10900, "R-INGO", "Oxford Utd", "Cambridge Utd", 10, 2.45, null, null],
    [10900, "R-INGO", "Peterborough", "Morecambe", 10, 2.85, null, null],
    [10900, "R-INGO", "Shrewsbury", "Accrington", 10, 2.2, null, null],
    [10900, "R-INGT", "Barrow", "Bradford City", 9, 2.25, null, null],
    [10900, "R-INGT", "Doncaster", "Sutton", 9, 2.1, null, null],
    [10900, "R-INGT", "Grimsby", "Northampton", 9, 2.2, null, null],
    [10900, "R-INGT", "Mansfield", "Tranmere", 7, 1.76, null, null],
    [10900, "R-INGT", "Stevenage", "Stockport", 9, 2.2, null, null],
    [10900, "R-INGT", "Colchester", "Carlisle", 10, 2.25, null, null],
    [10900, "R-INGT", "Crawley", "Leyton Orient", 8, 2, null, null],
    [10900, "R-INGT", "Crewe", "Harrogate", 10, 2.25, null, null],
    [10900, "R-INGT", "Gillingham FC", "Rochdale", 10, 2.2, null, null],
    [10900, "R-INGT", "Hartlepool", "Wimbledon", 10, 2.15, null, null],
    [10900, "R-INGT", "Newport", "Walsall", 10, 2.4, null, null],
    [10900, "R-INGT", "Swindon", "Salford", 10, 2.15, null, null],
    [10900, "YE-BEL1", "Genk", "Eupen", 7, 1.36, null, null],
    [10900, "YE-REP1", "Liberec", "Teplice", 7, 1.76, null, null],
    [10900, "YE-REP1", "Plzen", "Pardubice", 7, 1.42, null, null],
    [10900, "YE-REP1", "Sigma Olomouc", "Brno", 7, 1.76, null, null],
    [10930, "*YE-BIE1", "Zhodino", "Neman Grodno", 11, 1.5, null, null],
    [10930, "YE-HOL1", "Sittard", "Ajax", 2, 1.3, null, null],
    [10930, "YE-POR1", "Rio Ave", "Vizela", 7, 2.05, null, null],
    [10930, "YE-POR2", "Trofense", "BSAD", 7, 2, null, null],
    [10930, "YE-RUS1", "CSKA Moscú", "F. Voronezh", 5, 1.48, null, null],
    [11000, "FRA1", "Estrasburgo", "Mónaco", 6, 2.15, null, null],
    [11030, "*AMI", "Nancy (Fra)", "ASM Belfort (Fra)", 12, 1.01, null, null],
    [11030, "*AMI", "Pistoiese (Ita)", "San Donato (Ita)", 12, 1.01, null, null],
    [11030, "YE-POL1", "Jagiellonia", "Radomiak Radom", 7, 1.85, null, null],
    [11030, "ZA-URU1", "River Plate", "Plaza Colonia", 7, 1.95, null, null],
    [11045, "*ITAC", "Pisa", "Brescia", 11, 1.45, null, null],
    [11100, "*AMI", "Aglianese Calcio (Ita)", "Pontedera (Ita)", 12, 1.01, null, null],
    [11100, "*AMI", "Deinze (Bel)", "RAAL La Louviere (Bel)", 12, 1.01, null, null],
    [11100, "*AMI", "Lecco (Ita)", "Pro Vercelli (Ita)", 12, 1.01, null, null],
    [11100, "*AMI", "Lugo (Esp)", "Racing Ferrol (Esp)", 12, 1.01, null, null],
    [11100, "*AMI", "Macon (Fra)", "Villefranche (Fra)", 12, 1.01, null, null],
    [11100, "*AMI", "Tenerife (Esp)", "Cartagena (Esp)", 12, 1.01, null, null],
    [11100, "*ITAC", "Spezia", "Como", 11, 2.75, null, null],
    [11100, "*YE-BELC", "RF", "Hombourg", 12, 1.01, null, null],
    [11100, "YE-RUM1", "Mioveni", "FCSB", 8, 1.72, null, null],
    [11100, "YE-SUI1", "Servette", "Winterthur", 7, 1.6, null, null],
    [11100, "ZA-ARG1", "Arsenal Sarandí", "Atl. Tucumán", 6, 2.4, null, null],
    [11100, "ZA-PER1", "San Martín", "Alianza Atl.", 8, 1.9, null, null],
    [11110, "ZA-ARG2", "San Telmo", "San Martín Tuc.", 6, 2.05, null, null],
    [11115, "YE-BEL1", "Charleroi", "Oostende", 7, 1.57, null, null],
    [11115, "YE-BEL1", "Kortrijk", "St. Truiden", 9, 2.2, null, null],
    [11115, "YE-TUR1", "Sivasspor", "Gaziantep", 10, 2.15, null, null],
    [11120, "*R-INGN", "Scunthorpe", "Yeovil", 11, 1.45, null, null],
    [11130, "*AMI", "Gudja (Mlt)", "Pieta Hotspurs (Mlt)", 12, 1.01, null, null],
    [11130, "*AMI", "Lamia (Gre)", "Levadiakos (Gre)", 12, 1.01, null, null],
    [11130, "*YE-BIE1", "Dnepr Mogilev", "Belshina", 12, 1.01, null, null],
    [11130, "ALE1", "Borussia Dortmund", "Bayer Leverkusen", 5, 1.6, null, null],
    [11130, "R-ING1", "Everton", "Chelsea", 2, 1.72, null, null],
    [11130, "ZA-CHI1", "OHiggins", "Curicó Unido", 7, 2.25, null, null],
    [11145, "YE-HOL1", "Cambuur", "Excelsior", 7, 1.65, null, null],
    [11200, "*AMI", "Dender (Bel)", "Ninove (Bel)", 12, 1.01, null, null],
    [11200, "*AMI", "Dessel (Bel)", "Beerschot VA (Bel)", 12, 1.01, null, null],
    [11200, "*AMI", "L.R. Vicenza (Ita)", "AC Milan (Ita)", 2, 1.3, null, null],
    [11200, "*AMI", "Lierse K. (Bel)", "Patro Eisden (Bel)", 12, 1.01, null, null],
    [11200, "*AMI", "Lommel SK (Bel)", "Gent (Bel)", 12, 1.01, null, null],
    [11200, "*AMI", "Racing (Esp)", "Real Oviedo (Esp)", 12, 1.01, null, null],
    [11200, "*YE-BELC", "RF", "Wevelgem", 12, 1.01, null, null],
    [11200, "FRA2", "Amiens", "Annecy", 5, 2.05, null, null],
    [11200, "FRA2", "Niort", "Bastia", 7, 2.2, null, null],
    [11200, "FRA2", "Paris FC", "Quevilly Rouen", 5, 1.8, null, null],
    [11200, "FRA2", "Valenciennes", "Le Havre", 7, 2.1, null, null],
    [11200, "FRA2", "Grenoble", "Sochaux", 8, 2.1, null, null],
    [11200, "FRA2", "Laval", "EA Guingamp", 6, 2.15, null, null],
    [11200, "FRA2", "Pau FC", "Dijon", 10, 2.1, null, null],
    [11200, "FRA2", "Rodez", "Girondins", 10, 2.3, null, null],
    [11200, "YE-POR1", "Estoril", "Famalicao", 10, 2.2, null, null],
    [11200, "YE-POR2", "Benfica B", "Academico Viseu", 7, 1.9, null, null],
    [11200, "YE-REP1", "Bohemians", "Ostrava", 7, 2.05, null, null],
    [11200, "YE-RUS1", "Akhmat Grozny", "Zenit", 4, 1.55, null, null],
    [11200, "YE-RUS1", "Krasnodar", "Lokomotiv Moscú", 10, 1.9, null, null],
    [11230, "*AMI", "Alfaro (Esp)", "SD Logroñés (Esp)", 12, 1.01, null, null],
    [11230, "*AMI", "Alzira (Esp)", "UCAM Murcia (Esp)", 12, 1.01, null, null],
    [11230, "*YE-BELC", "RF", "Beringen", 12, 1.01, null, null],
    [11230, "*YE-BELC", "RF", "Londerzeel", 12, 1.01, null, null],
    [11230, "*YE-BELC", "RF", "Rumbeke", 12, 1.01, null, null],
    [11300, "*AMI", "El Ejido (Esp)", "Almería B (Esp)", 12, 1.01, null, null],
    [11300, "*AMI", "Málaga (Esp)", "Granada (Esp)", 12, 1.01, null, null],
    [11300, "*AMI", "Real Valladolid (Esp)", "Lazio (Ita)", 12, 1.01, null, null],
    [11300, "*YE-BELC", "RF", "KRC Mechelen", 12, 1.01, null, null],
    [11300, "*YE-BELC", "RF", "Namur", 12, 1.01, null, null],
    [11300, "*YE-BELC", "RF", "Zwarte Leeuw", 12, 1.01, null, null],
    [11300, "YE-HOL1", "PSV", "FC Emmen", 1],
    [11300, "YE-POL1", "Slask", "Widzew Lodz", 7],
    [11300, "ZA-ARG1", "Barracas Central", "Racing Club", 6],
    [11300, "ZA-ARG2", "Gimnasia Mendoza", "Tristán Suárez", 5],
    [11300, "ZA-URU1", "Cerro Largo", "Wanderers", 10],
    [11315, "ZA-PER1", "AD Cantolao", "Sporting Cristal", 6],
    [11330, "*AMI", "Inter (Ita)", "Villarreal (Esp)", 1],
    [11330, "*AMI", "Nápoles (Ita)", "Espanyol (Esp)", 1],
    [11330, "*AMI", "Xerez CD (Esp)", "Recreativo de Huelva (Esp)", 12, 1.01, null, null],
    [11330, "ALE2", "Rostock", "Arminia Bielefeld", 7],
    [11330, "YE-SUI1", "Grasshoppers", "St. Gallen", 9],
    [11330, "ZA-ARG2", "Dep. Riestra", "Sacachispas", 7],
    [11330, "ZA-ARG2", "Villa Dálmine", "Ferro Carril Oeste", 8],
    [11345, "YE-BEL1", "KV Mechelen", "Royale Union SG", 8],
    [11345, "YE-RUM1", "Rapid Bucarest", "FC Arges", 7],
    [11345, "YE-TUR1", "Beşiktaş", "Kayserispor", 5],
    [11400, "*AMI", "Real Betis (Esp)", "Fiorentina (Ita)", 1],
    [11400, "*AMI", "Sevilla (Esp)", "Cádiz (Esp)", 1],
    [11400, "*AMI", "Girona (Esp)", "Bolívar (Bol)", 12, 1.01, null, null],
    [11400, "*AMI", "Linares (Esp)", "Córdoba (Esp)", 12, 1.01, null, null],
    [11400, "*AMI", "Valencia (Esp)", "Atalanta (Ita)", 2],
    [11400, "*ITAC", "Empoli", "Spal", 12, 1.01, null, null],
    [11400, "*ZA-BOL1", "Independiente Petrolero", "J. Wilstermann", 12, 1.01, null, null],
    [11400, "FRA1", "Clermont", "PSG", 2],
    [11400, "YE-HOL1", "Waalwijk", "Utrecht", 8],
    [11400, "ZA-CHI1", "Cobresal", "La Serena", 7],
    [11400, "ZA-COL1", "Envigado", "U. Magdalena", 10],
    [11400, "ZA-EST1", "Atlanta Utd", "Seattle Sounders", 10],
    [11415, "*ITAC", "Torino", "Palermo", 12, 1.01, null, null],
    [11430, "YE-POR1", "Oporto", "Marítimo", 1],
    [11430, "ZA-BRA1", "Botafogo", "Ceará", 7],
    [11430, "ZA-BRA1", "Juventude", "América-MG", 10],
    [11430, "ZA-BRA2", "Bahia", "CSA", 7],
    [11440, "ZA-ARG2", "CA Estudiantes", "Guillermo Brown", 7],
    [11500, "ZA-ECU1", "Orense", "Ind. del Valle", 6],
    [11530, "ZA-PER1", "Binacional", "Ayacucho", 7],
    [11600, "*ZA-VEN1", "Mineros", "Metropolitanos", 12, 1.01, null, null],
    [11600, "ZA-ARG1", "Unión Santa Fe", "Vélez Sarsfield", 7],
    [11600, "ZA-ARG1", "Talleres", "Argentinos Jrs.", 6],
    [11600, "ZA-PAR1", "12 de Octubre", "Libertad", 6],
    [11605, "ZA-ARG2", "Temperley", "Nueva Chicago", 7],
    [11605, "ZA-COL1", "Tolima", "Jaguares de Córdoba", 5],
    [11615, "*ZA-BOL1", "Guabirá", "Royal Pari", 12, 1.01, null, null],
    [11630, "ZA-CHI1", "Everton", "U. Católica", 10],
    [11700, "ZA-BRA1", "Atlético-GO", "Bragantino", 6],
    [11700, "ZA-BRA1", "Avaí", "Corinthians", 2],
    [11700, "ZA-BRA2", "Cruzeiro", "Tombense", 1],
    [11700, "ZA-BRA2", "Novorizontino", "Londrina", 10],
    [11730, "ZA-ECU1", "Guayaquil City", "Macará", 7],
    [11730, "ZA-URU1", "Cerrito", "Boston River", 8],
    [11800, "*ZA-EST2", "Indy Eleven", "Pittsburgh", 12, 1.01, null, null],
    [11800, "ZA-EST1", "Charlotte", "Chicago Fire", 10],
    [11800, "ZA-PER1", "Sport Huancayo", "ADT Tarma", 10],
    [11810, "ZA-COL1", "Alianza Petrolera", "Atl. Nacional", 4],
    [11815, "*ZA-VEN1", "Caracas", "Hermanos Colmenarez", 11],
    [11815, "ZA-PAR1", "Cerro Porteño", "Nacional Asunción", 1],
    [11830, "*ZA-BOL1", "Blooming", "Tomayapo", 12, 1.01, null, null],
    [11830, "*ZA-EST2", "Loudoun", "LA Galaxy 2", 12, 1.01, null, null],
    [11830, "*ZA-EST2", "Tampa Bay", "Detroit", 12, 1.01, null, null],
    [11830, "ZA-BRA1", "Sao Paulo", "Flamengo", 6],
    [11830, "ZA-EST1", "Orlando City", "New England Revolution", 7],
    [11830, "ZA-EST1", "CF Montreal", "Inter Miami", 10],
    [11830, "ZA-EST1", "Cincinnati", "Philadelphia Union", 8],
    [11830, "ZA-EST1", "Columbus Crew", "New York City", 10],
    [11830, "ZA-EST1", "DC United", "New York Red Bulls", 8],
    [11900, "*ZA-EST2", "Birmingham", "Atlanta United 2", 12, 1.01, null, null],
    [11900, "*ZA-EST2", "Louisville City", "Charleston", 12, 1.01, null, null],
    [11900, "ZA-ARG1", "Boca Jrs.", "Platense", 3],
    [11900, "ZA-EST1", "Nashville SC", "Toronto FC", 10],
    [11905, "ZA-MEX1", "Monterrey", "León", 7],
    [11930, "*ZA-EST2", "Memphis", "Hartford Athletic", 12, 1.01, null, null],
    [11930, "ZA-EST1", "Sporting Kansas City", "Los Angeles Galaxy", 8],
    [12000, "*ZA-EST2", "New Mexico", "Miami FC", 12, 1.01, null, null],
    [12000, "ZA-ECU1", "Delfín", "Emelec", 8],
    [12000, "ZA-EST1", "Austin FC", "San Jose Earthquakes", 7],
    [12000, "ZA-EST1", "Colorado Rapids", "Minnesota United", 10],
    [12015, "ZA-COL1", "Millonarios", "Deportivo Cali", 3],
    [12100, "*ZA-EST2", "Monterey Bay", "El Paso", 12, 1.01, null, null],
    [12100, "*ZA-EST2", "Orange County SC", "Colorado Springs", 12, 1.01, null, null],
    [12100, "*ZA-EST2", "San Diego Loyal", "San Antonio", 12, 1.01, null, null],
    [12100, "ZA-EST1", "Real Salt Lake", "Los Angeles FC", 8],
    [12105, "ZA-MEX1", "Santos Laguna", "Cruz Azul", 10],
    [12130, "*ZA-EST2", "Phoenix Rising", "Las Vegas Lights", 12, 1.01, null, null],
    [12130, "ZA-EST1", "Portland Timbers", "FC Dallas", 7],
    [12200, "*ZA-EST2", "Sacramento Republic", "Rio Grande", 12]
]


// let PARTIDOS = [
// [10900,"R-ING1","Newcastle","Nottingham Forest",3,1.75,null,1.75],[10900,"R-INGO","Barnsley","Cheltenham",7,1.75,null,3.06],[10900,"R-INGT","Mansfield","Tranmere",7,1.76,null,5.38],[10900,"YE-REP1","Liberec","Teplice",7,1.76,null,9.46],[10900,"YE-REP1","Sigma Olomouc","Brno",7,1.76,null,16.64],[10700,"ALE3","Hallescher","Dynamo Dresden",8,1.8,null,29.95],[10830,"ALE1","Union Berlín","Hertha BSC",7,1.8,null,53.91],[11200,"FRA2","Paris FC","Quevilly Rouen",5,1.8,null,97.03],[10500,"YE-POR2","Farense","Torreense",7,1.85,null,179.5],[10900,"R-ESC1","Aberdeen","St. Mirren",7,1.85,null,332.07],[11030,"YE-POL1","Jagiellonia","Radomiak Radom",7,1.85,null,614.32],[10600,"ALE2","Regensburg","Núremberg",8,1.9,null,1167.2],[10830,"ALE1","Augsburgo","Friburgo",8,1.9,null,2217.67],[10900,"R-ING2","Sheffield Utd","Millwall",7,1.9,null,4213.57],[10900,"R-INGO","Fleetwood","Plymouth",8,1.9,null,8005.78],[11100,"ZA-PER1","San Martín","Alianza Atl.",8,1.9,null,15210.98],[11200,"YE-POR2","Benfica B","Academico Viseu",7,1.9,null,28900.86],[11200,"YE-RUS1","Krasnodar","Lokomotiv Moscú",10,1.9,null,54911.63],[10900,"R-ING1","Bournemouth","Aston Villa",4,1.93,null,105979.44],[10700,"ALE3","Viktoria Köln","Wehen",7,1.95,null,206659.9],[10830,"ALE1","Bochum","Mainz",8,1.95,null,402986.8],[10900,"R-ING2","Stoke","Blackpool",7,1.95,null,785824.26],[11030,"ZA-URU1","River Plate","Plaza Colonia",7,1.95,null,1532357.3],[10400,"S-JAP1","Kashima","Hiroshima",9,2,null,3064714.6],[10900,"R-ING1","Leeds Utd","Wolves",3,2,null,6129429.2],[10900,"R-INGO","Bolton","Wycombe",7,2,null,12258858.4],[10900,"R-INGT","Crawley","Leyton Orient",8,2,null,24517716.8],[10930,"YE-POR2","Trofense","BSAD",7,2,null,49035433.6],[10530,"S-COR1","Suwon FC","Suwon",7,2.05,null,100522638.88],[10700,"ALE3","Meppen","Zwickau",7,2.05,null,206071409.7],[10700,"ALE3","SpVgg Bayreuth","Friburgo II",10,2.05,null,422446389.88],[10900,"R-INGO","Burton","Bristol Rovers",9,2.05,null,866015099.25],[10900,"R-INGO","Charlton","Derby",8,2.05,null,1775330953.46],[10930,"YE-POR1","Rio Ave","Vizela",7,2.05,null,3639428454.59],[11110,"ZA-ARG2","San Telmo","San Martín Tuc.",6,2.05,null,7460828331.9],[11200,"FRA2","Amiens","Annecy",5,2.05,null,15294698080.39],[11200,"YE-REP1","Bohemians","Ostrava",7,2.05,null,31354131064.79],[10700,"ALE3","Elversberg","Saarbrücken",10,2.1,null,65843675236.05],[10800,"YE-POR2","Oliveirense","Mafra",8,2.1,null,138271717995.7],[10900,"R-ESC1","Motherwell","St. Johnstone",7,2.1,null,290370607790.97],[10900,"R-ING2","Swansea","Blackburn",7,2.1,null,609778276361.03],[10900,"R-ING2","QPR","Middlesbrough",8,2.1,null,1280534380358.16],[10900,"R-INGT","Doncaster","Sutton",9,2.1,null,2689122198752.13],[11200,"FRA2","Valenciennes","Le Havre",7,2.1,null,5647156617379.47],[11200,"FRA2","Grenoble","Sochaux",8,2.1,null,11859028896496.88],[11200,"FRA2","Pau FC","Dijon",10,2.1,null,24903960682643.45],[10900,"R-INGT","Hartlepool","Wimbledon",10,2.15,null,53543515467683.41],[10900,"R-INGT","Swindon","Salford",10,2.15,null,115118558255519.31],[11000,"FRA1","Estrasburgo","Mónaco",6,2.15,null,247504900249366.47],[11115,"YE-TUR1","Sivasspor","Gaziantep",10,2.15,null,532135535536137.8],[11200,"FRA2","Laval","EA Guingamp",6,2.15,null,1144091401402696.2],[10500,"S-JAP1","C-Osaka","Vissel Kobe",10,2.2,null,2517001083085932],[10500,"S-JAP1","Nagoya","Urawa",8,2.2,null,5537402382789051],[10800,"YE-POR2","Nacional","Tondela",10,2.2,null,12182285242135912],[10900,"R-INGO","Shrewsbury","Accrington",10,2.2,null,26801027532699010],[10900,"R-INGT","Grimsby","Northampton",9,2.2,null,58962260571937820],[10900,"R-INGT","Stevenage","Stockport",9,2.2,null,129716973258263230],[10900,"R-INGT","Gillingham FC","Rochdale",10,2.2,null,285377341168179100],[11115,"YE-BEL1","Kortrijk","St. Truiden",9,2.2,null,627830150569994100],[11200,"FRA2","Niort","Bastia",7,2.2,null,1381226331253987000],[11200,"YE-POR1","Estoril","Famalicao",10,2.2,null,3038697928758771700],[10430,"S-JAP1","Kyoto","Kashiwa",9,2.25,null,6837070339707236000],[10900,"R-ING2","Bristol City","Sunderland",6,2.25,null,15383408264341283000],[10900,"R-INGO","MK Dons","Sheffield Wed",9,2.25,null,34612668594767890000],[10900,"R-INGO","Exeter","Port Vale",10,2.25,null,77878504338227760000],[10900,"R-INGT","Barrow","Bradford City",9,2.25,null,175226634761012450000],[10900,"R-INGT","Colchester","Carlisle",10,2.25,null,394259928212278000000],[10900,"R-INGT","Crewe","Harrogate",10,2.25,null,887084838477625600000],[11130,"ZA-CHI1","OHiggins","Curicó Unido",7,2.25,null,1.9959408865746574e+21],[11200,"FRA2","Rodez","Girondins",10,2.3,null,4.590664039121712e+21],[10900,"R-ING2","Reading","Cardiff",10,2.35,null,1.0788060491936023e+22],[10900,"R-INGO","Forest Green","Ipswich",9,2.35,null,2.5351942156049657e+22],[10900,"R-INGT","Newport","Walsall",10,2.4,null,6.084466117451917e+22],[11100,"ZA-ARG1","Arsenal Sarandí","Atl. Tucumán",6,2.4,null,1.46027186818846e+23],[10900,"R-INGO","Oxford Utd","Cambridge Utd",10,2.45,null,3.5776660770617273e+23],[10900,"R-ING2","Preston","Hull",10,2.65,null,9.480815104213577e+23],[10900,"R-ING2","Burnley","Luton",10,2.75,null,2.607224153658734e+24],[11100,"*ITAC","Spezia","Como",11,2.75,null,7.169866422561519e+24],[10900,"R-INGO","Peterborough","Morecambe",10,2.85,null,2.0434119304300328e+25],[10630,"R-ING2","Norwich","Wigan",10,2.87,null,5.8645922403341945e+25],[10700,"S-CHI1","Tianjin Jinmen Tiger","Shandong Taishan",9,3,null,1.7593776721002583e+26]
// ]