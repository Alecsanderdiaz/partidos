let PARTIDOS_CON_CUOTA = [
  [11200, 'Vicenza', 'AC Milán', 'AC Milán', 1.30],
  [11200, 'SC Amiens', 'Annecy FC', 'SC Amiens', 2.05],
  [11200, 'Chamois Niort FC', 'SC Bastia', 'Chamois Niort FC', 2.20],
  [11200, 'Paris FC', 'Quevilly US', 'Paris FC', 1.80],
  [11200, 'Valenciennes', 'AC Le Havre', 'Valenciennes', 2.10],
  [11200, 'Grenoble', 'Sochaux', 'Sochaux', 2.10],
  [11200, 'Laval', 'EA Guingamp', 'EA Guingamp', 2.15],
  [11200, 'Pau FC', 'Dijon', 'Dijon', 2.10],
  [11200, 'Rodez Aveyron', 'Burdeos', 'Burdeos', 2.30],
  [11200, 'Estoril', 'FC Famalicao', 'FC Famalicao', 2.20],
  [11200, 'Benfica B', 'Academica Viseu', 'Benfica B', 1.90],
  [11200, 'Bohemians 1905', 'Banik Ostrava', 'Bohemians 1905', 2.05],
  [11200, 'FC Akhmat Grozny', 'Zenit St Petersburg', 'Zenit St Petersburg', 1.55],
  [11200, 'Krasnodar', 'Lokomotiv Moscow', 'Lokomotiv Moscow', 1.90],
  [11115, 'Sivasspor', 'Gaziantep BB', 'Gaziantep BB', 2.15],
  [11100, 'Arsenal de Sarandi', 'Atletico Tucuman', 'Atletico Tucuman', 2.40],
  [11110, 'CA San Telmo', 'San Martin de Tucuman', 'San Martin de Tucuman', 2.05],
  [11130, 'OHiggins', 'Curico Unido', 'OHiggins', 2.25],
  [11100, 'Deportivo San Martin', 'Alianza Atletico', 'Alianza Atletico', 1.90],
  [11030, 'Atletico River Plate (Uru)', 'Plaza Colonia', 'Atletico River Plate (Uru)', 1.95],
  [11045, 'SC Pisa', 'Brescia', '0.5', 1.45],
  [11100, 'Spezia', 'Como', 'Como', 2.75],
  [11120, 'Scunthorpe United', 'Yeovil Town', '0.5', 1.45],
  [10930, 'Torpedo Zhodino', 'Neman Grodno', '0.5', 1.50],
  [11130, 'Borussia Dortmund', 'Bayer Leverkusen', 'Borussia Dortmund', 1.60],
  [11000, 'Strasbourg', 'AS Monaco', 'AS Monaco', 2.15],
  [11130, 'Everton', 'Chelsea', 'Chelsea', 1.72],
  [11115, 'Charleroi', 'KV Oostende', 'Charleroi', 1.57],
  [11115, 'Kortrijk', 'St Truiden', 'Kortrijk', 2.20],
  [11145, 'Cambuur Leeuwarden', 'SBV Excelsior', 'Cambuur Leeuwarden', 1.65],
  [10930, 'Fortuna Sittard', 'Ajax Amsterdam', 'Ajax Amsterdam', 1.30],
  [11030, 'Jagiellonia Bialystok', 'Radomiak Radom', 'Jagiellonia Bialystok', 1.85],
  [10930, 'Rio Ave', 'FC Vizela', 'Rio Ave', 2.05],
  [10930, 'CD Trofense', 'B-SAD', 'CD Trofense', 2.00],
  [11100, 'CS Mioveni', 'FCSB', 'FCSB', 1.72],
  [10930, 'CSKA Moscow', 'Fakel Voronezh', 'CSKA Moscow', 1.48],
  [11100, 'Servette FC', 'FC Winterthur', 'Servette FC', 1.60],
  [10900, 'Gillingham', 'Rochdale', 'Rochdale', 2.20],
  [10900, 'Hartlepool', 'AFC Wimbledon', 'AFC Wimbledon', 2.15],
  [10900, 'Newport', 'Walsall', 'Walsall', 2.40],
  [10900, 'Swindon Town', 'Salford City', 'Salford City', 2.15],
  [10900, 'Genk', 'AS Eupen', 'Genk', 1.36],
  [10900, 'Slovan Liberec', 'FK Teplice', 'Slovan Liberec', 1.76],
  [10900, 'Viktoria Plzen', 'FK Pardubice', 'Viktoria Plzen', 1.42],
  [10900, 'Sigma Olomouc', 'FC Zbrojovka Brno', 'Sigma Olomouc', 1.76],
  [10900, 'Fleetwood Town', 'Plymouth Argyle', 'Plymouth Argyle', 1.90],
  [10900, 'Oxford United', 'Cambridge United', 'Cambridge United', 2.45],
  [10900, 'Peterborough United', 'Morecambe', 'Morecambe', 2.85],
  [10900, 'Shrewsbury', 'Accrington', 'Accrington', 2.20],
  [10900, 'Barrow FC', 'Bradford City', 'Barrow FC', 2.25],
  [10900, 'Doncaster Rovers', 'Sutton United', 'Doncaster Rovers', 2.10],
  [10900, 'Grimsby Town', 'Northampton', 'Grimsby Town', 2.20],
  [10900, 'Mansfield Town', 'Tranmere', 'Mansfield Town', 1.76],
  [10900, 'Stevenage', 'Stockport County', 'Stevenage', 2.20],
  [10900, 'Colchester', 'Carlisle', 'Carlisle', 2.25],
  [10900, 'Crawley Town', 'Leyton Orient', 'Leyton Orient', 2.00],
  [10900, 'Crewe Alexandra', 'Harrogate Town', 'Harrogate Town', 2.25],
  [10900, 'Burnley', 'Luton Town', 'Luton Town', 2.75],
  [10900, 'Preston', 'Hull City', 'Hull City', 2.65],
  [10900, 'QPR', 'Middlesbrough', 'Middlesbrough', 2.10],
  [10900, 'Reading', 'Cardiff City', 'Cardiff City', 2.35],
  [10900, 'Barnsley', 'Cheltenham Town', 'Barnsley', 1.75],
  [10900, 'Bolton Wanderers', 'Wycombe Wanderers', 'Bolton Wanderers', 2.00],
  [10900, 'Burton Albion', 'Bristol Rovers', 'Burton Albion', 2.05],
  [10900, 'Forest Green Rovers', 'Ipswich Town', 'Forest Green Rovers', 2.35],
  [10900, 'MK Dons', 'Sheffield Wednesday', 'MK Dons', 2.25],
  [10900, 'Portsmouth', 'Lincoln City', 'Portsmouth', 1.66],
  [10900, 'Charlton Athletic', 'Derby County', 'Derby County', 2.05],
  [10900, 'Exeter City', 'Port Vale', 'Port Vale', 2.25],
  [10900, 'Partick Thistle', 'Hamilton Academical', '0.5', 1.45],
  [10900, 'Raith Rovers', 'Dundee', '0.5', 1.50],
  [10900, 'Arbroath', 'Inverness CT', '0.5', 1.57],
  [10900, 'Greenock Morton', 'Cove', '0.5', 1.50],
  [10900, 'Southend United', 'Boreham Wood', '0.5', 1.50],
  [10900, 'Aberdeen', 'St Mirren', 'Aberdeen', 1.85],
  [10900, 'Motherwell', 'St Johnstone', 'Motherwell', 2.10],
  [10900, 'Glasgow Rangers', 'Kilmarnock', 'Glasgow Rangers', 1.35],
  [10900, 'Ross County', 'Celtic', 'Celtic', 1.33],
  [10900, 'Leeds United', 'Wolverhampton Wanderers', 'Leeds United', 2.00],
  [10900, 'Newcastle', 'Nottingham Forest', 'Newcastle', 1.75],
  [10900, 'Tottenham', 'Southampton', 'Tottenham', 1.48],
  [10900, 'Bournemouth', 'Aston Villa', 'Aston Villa', 1.93],
  [10900, 'Sheffield United', 'Millwall', 'Sheffield United', 1.90],
  [10900, 'Stoke City', 'Blackpool', 'Stoke City', 1.95],
  [10900, 'Swansea', 'Blackburn Rovers', 'Swansea', 2.10],
  [10900, 'Bristol City', 'Sunderland', 'Sunderland', 2.25],
  [10730, 'Slutsksakhar Slutsk', 'Isloch', '0.5', 1.42],
  [10830, 'Borussia Monchengladbach', 'Hoffenheim', 'Borussia Monchengladbach', 1.61],
  [10830, 'Union Berlin', 'Hertha Berlin', 'Union Berlin', 1.80],
  [10830, 'Wolfsburg', 'Werder Bremen', 'Wolfsburg', 1.72],
  [10830, 'Augsburg', 'Freiburg', 'Freiburg', 1.90],
  [10830, 'VfL Bochum', 'Mainz 05', 'Mainz 05', 1.95],
  [10700, 'TSV 1860 München', 'VfB Oldenburg', 'TSV 1860 München', 1.61],
  [10700, 'SV Meppen', 'FSV Zwickau', 'SV Meppen', 2.05],
  [10700, 'FC Viktoria Köln', 'SV Wehen Wiesbaden', 'FC Viktoria Köln', 1.95],
  [10700, 'SV Elversberg', '1.FC Saarbrücken', '1.FC Saarbrücken', 2.10],
  [10700, 'Hallescher FC', 'Dynamo Dresden', 'Dynamo Dresden', 1.80],
  [10700, 'SpVgg Bayreuth', 'SC Freiburg II', 'SC Freiburg II', 2.05],
  [10800, 'Saint Etienne', 'Nimes', 'Saint Etienne', 1.66],
  [10700, 'Tianjin Jinmen Tiger', 'Shandong Taishan', 'Tianjin Jinmen Tiger', 3.00],
  [10800, 'Lechia Gdansk', 'Korona Kielce', 'Lechia Gdansk', 1.60],
  [10800, 'Nacional Madeira', 'CD Tondela', 'CD Tondela', 2.20],
  [10800, 'Oliveirense', 'CD Mafra', 'CD Mafra', 2.10],
  [10700, 'FC Ural', 'Spartak Moscow', 'Spartak Moscow', 1.70],
  [10600, 'Hamburger SV', '1. FC Heidenheim', 'Hamburger SV', 1.55],
  [10600, 'Paderborn', 'Hannover 96', 'Paderborn', 1.70],
  [10600, 'Jahn Regensburg', 'Nurnberg', 'Nurnberg', 1.90],
  [10630, 'Fulham', 'Liverpool', 'Liverpool', 1.40],
  [10630, 'Norwich City', 'Wigan', 'Wigan', 2.87],
  [10430, 'Dalian Pro', 'Shanghai Port', 'Shanghai Port', 1.50],
  [10630, 'Guangzhou City', 'Wuhan Three Towns', 'Wuhan Three Towns', 1.25],
  [10500, 'Pohang Steelers', 'Gangwon FC', 'Pohang Steelers', 1.70],
  [10530, 'Suwon City FC', 'Suwon Samsung Bluewings', 'Suwon City FC', 2.05],
  [10400, 'Kashima Antlers', 'Sanfrecce Hiroshima', 'Kashima Antlers', 2.00],
  [10430, 'Kyoto Sanga', 'Kashiwa Reysol', 'Kyoto Sanga', 2.25],
  [10500, 'Cerezo Osaka', 'Vissel Kobe', 'Vissel Kobe', 2.20],
  [10500, 'Nagoya Grampus', 'Urawa Red Diamonds', 'Urawa Red Diamonds', 2.20],
  [10500, 'Sporting Farense', 'Torreense', 'Sporting Farense', 1.85],
]

let PARTIDOS_SIN_CUOTA = [[10300,"*AMI","Navalcarnero (Esp)","Guadalajara (Esp)",12],[10300,"*AMI","Pozuelo (Esp)","Leganés B (Esp)",12],[10330,"*AMI","Tarazona (Esp)","Numancia B (Esp)",12],[10400,"*AMI","Athletic Club (Esp)","Alavés (Esp)",12],[10430,"*AMI","Gimnástica Segoviana (Esp)","Numancia (Esp)",12],[10430,"*AMI","Leioa (Esp)","Gernika (Esp)",12],[10430,"*AMI","Marino de Luanco (Esp)","Sporting de Gijón (Esp)",12],[10500,"*AMI","Laredo (Esp)","Sestao River (Esp)",12],[10500,"*AMI","Las Palmas (Esp)","Tamaraceite (Esp)",12],[10700,"*AMI","Alavés B (Esp)","UD Logroñés (Esp)",12],[10700,"*AMI","Bedfont Sports (Eng)","Sholing (Eng)",12],[10700,"*AMI","Merthyr Town (Wal)","Gresley (Eng)",12],[10700,"*AMI","Northwood (Eng)","Berkhamsted (Eng)",12],[10700,"*AMI","Pelister (Mkd)","Teteks (Mkd)",12],[10700,"*AMI","Seelow (Ger)","1.FC Frankfurt (Ger)",12],[10700,"*AMI","St. Neots (Eng)","Kempston (Eng)",12],[10700,"*AMI","Ware (Eng)","Potters Bar (Eng)",12],[10730,"*AMI","Wimborne (Eng)","Basingstoke (Eng)",12],[10800,"*AMI","Glenavon (Nir)","Annagh (Nir)",12],[10800,"*AMI","H&W Welders (Nir)","Portadown (Nir)",12],[10900,"*AMI","Ballymena (Nir)","Cliftonville (Nir)",12],[10900,"*AMI","Bangor FC (Nir)","Larne (Nir)",12],[10900,"*AMI","Coleraine (Nir)","Ards (Nir)",12],[10900,"*AMI","Glentoran (Nir)","Loughgall (Nir)",12],[10900,"*AMI","Grays (Eng)","Harlow (Eng)",12],[10900,"*AMI","Maldon & Tiptree (Eng)","Aveley (Eng)",12],[10900,"*AMI","Newry City (Nir)","Dundela (Nir)",12],[10900,"*AMI","Pontefract (Eng)","Ashton Utd (Eng)",12],[10900,"*AMI","Pro Sesto (Ita)","Alcione Milano (Ita)",12],[10900,"*AMI","Ramsgate (Eng)","Hastings (Eng)",12],[10900,"*AMI","Stalybridge (Eng)","Mossley (Eng)",12],[10900,"*AMI","Warrenpoint (Nir)","C. Rangers (Nir)",12],[10900,"*AMI","Warrington Rylands (Eng)","Shildon (Eng)",12],[11030,"*AMI","Nancy (Fra)","ASM Belfort (Fra)",12],[11030,"*AMI","Pistoiese (Ita)","San Donato (Ita)",12],[11100,"*AMI","Aglianese Calcio (Ita)","Pontedera (Ita)",12],[11100,"*AMI","Deinze (Bel)","RAAL La Louviere (Bel)",12],[11100,"*AMI","Lecco (Ita)","Pro Vercelli (Ita)",12],[11100,"*AMI","Lugo (Esp)","Racing Ferrol (Esp)",12],[11100,"*AMI","Macon (Fra)","Villefranche (Fra)",12],[11100,"*AMI","Tenerife (Esp)","Cartagena (Esp)",12],[11130,"*AMI","Gudja (Mlt)","Pieta Hotspurs (Mlt)",12],[11130,"*AMI","Lamia (Gre)","Levadiakos (Gre)",12],[11200,"*AMI","Dender (Bel)","Ninove (Bel)",12],[11200,"*AMI","Dessel (Bel)","Beerschot VA (Bel)",12],[11200,"*AMI","L.R. Vicenza (Ita)","AC Milan (Ita)",2],[11200,"*AMI","Lierse K. (Bel)","Patro Eisden (Bel)",12],[11200,"*AMI","Lommel SK (Bel)","Gent (Bel)",12],[11200,"*AMI","Racing (Esp)","Real Oviedo (Esp)",12],[11230,"*AMI","Alfaro (Esp)","SD Logroñés (Esp)",12],[11230,"*AMI","Alzira (Esp)","UCAM Murcia (Esp)",12],[11300,"*AMI","El Ejido (Esp)","Almería B (Esp)",12],[11300,"*AMI","Málaga (Esp)","Granada (Esp)",12],[11300,"*AMI","Real Valladolid (Esp)","Lazio (Ita)",12],[11330,"*AMI","Inter (Ita)","Villarreal (Esp)",1],[11330,"*AMI","Nápoles (Ita)","Espanyol (Esp)",1],[11330,"*AMI","Xerez CD (Esp)","Recreativo de Huelva (Esp)",12],[11400,"*AMI","Girona (Esp)","Bolívar (Bol)",12],[11400,"*AMI","Linares (Esp)","Córdoba (Esp)",12],[11400,"*AMI","Real Betis (Esp)","Fiorentina (Ita)",1],[11400,"*AMI","Sevilla (Esp)","Cádiz (Esp)",1],[11400,"*AMI","Valencia (Esp)","Atalanta (Ita)",2],[11045,"*ITAC","Pisa","Brescia",11],[11100,"*ITAC","Spezia","Como",11],[11400,"*ITAC","Empoli","Spal",12],[11415,"*ITAC","Torino","Palermo",12],[10900,"*R-ESC2","Arbroath","Inverness",11],[10900,"*R-ESC2","Morton","Cove Rangers",11],[10900,"*R-ESC2","Partick Thistle","Hamilton",11],[10900,"*R-ESC2","Raith","Dundee FC",11],[10900,"*R-INGN","Aldershot","Solihull Moors",12],[10900,"*R-INGN","Altrincham","Maidstone",12],[10900,"*R-INGN","Barnet","Halifax",12],[10900,"*R-INGN","Dagenham & Red.","Gateshead",12],[10900,"*R-INGN","Dorking","Chesterfield",12],[10900,"*R-INGN","Notts County","Maidenhead",12],[10900,"*R-INGN","Southend","Boreham Wood",11],[10900,"*R-INGN","Torquay","Oldham",12],[10900,"*R-INGN","Wealdstone","Bromley",12],[10900,"*R-INGN","Wrexham","Eastleigh",12],[10900,"*R-INGN","York","Woking",12],[11120,"*R-INGN","Scunthorpe","Yeovil",11],[10900,"*YE-BELC","RF","Aywaille",12],[11100,"*YE-BELC","RF","Hombourg",12],[11200,"*YE-BELC","RF","Wevelgem",12],[11230,"*YE-BELC","RF","Beringen",12],[11230,"*YE-BELC","RF","Londerzeel",12],[11230,"*YE-BELC","RF","Rumbeke",12],[11300,"*YE-BELC","RF","KRC Mechelen",12],[11300,"*YE-BELC","RF","Namur",12],[11300,"*YE-BELC","RF","Zwarte Leeuw",12],[10730,"*YE-BIE1","Slutsk","Isloch",11],[10930,"*YE-BIE1","Zhodino","Neman Grodno",11],[11130,"*YE-BIE1","Dnepr Mogilev","Belshina",12],[11400,"*ZA-BOL1","Independiente Petrolero","J. Wilstermann",12],[11615,"*ZA-BOL1","Guabirá","Royal Pari",12],[11830,"*ZA-BOL1","Blooming","Tomayapo",12],[11800,"*ZA-EST2","Indy Eleven","Pittsburgh",12],[11830,"*ZA-EST2","Loudoun","LA Galaxy 2",12],[11830,"*ZA-EST2","Tampa Bay","Detroit",12],[11900,"*ZA-EST2","Birmingham","Atlanta United 2",12],[11900,"*ZA-EST2","Louisville City","Charleston",12],[11930,"*ZA-EST2","Memphis","Hartford Athletic",12],[12000,"*ZA-EST2","New Mexico","Miami FC",12],[12100,"*ZA-EST2","Monterey Bay","El Paso",12],[12100,"*ZA-EST2","Orange County SC","Colorado Springs",12],[12100,"*ZA-EST2","San Diego Loyal","San Antonio",12],[12130,"*ZA-EST2","Phoenix Rising","Las Vegas Lights",12],[12200,"*ZA-EST2","Sacramento Republic","Rio Grande",12],[10815,"*ZA-URU2","Progreso","Juventud",12],[11600,"*ZA-VEN1","Mineros","Metropolitanos",12],[11815,"*ZA-VEN1","Caracas","Hermanos Colmenarez",11],[10830,"ALE1","Augsburgo","Friburgo",8],[10830,"ALE1","Bochum","Mainz",8],[10830,"ALE1","Borussia Mgladbach","Hoffenheim",7],[10830,"ALE1","Union Berlín","Hertha BSC",7],[10830,"ALE1","Wolfsburgo","Werder Bremen",7],[11130,"ALE1","Borussia Dortmund","Bayer Leverkusen",5],[10600,"ALE2","Hamburgo","Heidenheim",7],[10600,"ALE2","Paderborn","Hannover",7],[10600,"ALE2","Regensburg","Núremberg",8],[11330,"ALE2","Rostock","Arminia Bielefeld",7],[10700,"ALE3","1860 Múnich","VfB Oldenburg",7],[10700,"ALE3","Elversberg","Saarbrücken",10],[10700,"ALE3","Hallescher","Dynamo Dresden",8],[10700,"ALE3","Meppen","Zwickau",7],[10700,"ALE3","SpVgg Bayreuth","Friburgo II",10],[10700,"ALE3","Viktoria Köln","Wehen",7],[11000,"FRA1","Estrasburgo","Mónaco",6],[11400,"FRA1","Clermont","PSG",2],[10800,"FRA2","Saint-Étienne","Nimes",5],[11200,"FRA2","Amiens","Annecy",5],[11200,"FRA2","Grenoble","Sochaux",8],[11200,"FRA2","Laval","EA Guingamp",6],[11200,"FRA2","Niort","Bastia",7],[11200,"FRA2","Paris FC","Quevilly Rouen",5],[11200,"FRA2","Pau FC","Dijon",10],[11200,"FRA2","Rodez","Girondins",10],[11200,"FRA2","Valenciennes","Le Havre",7],[10900,"R-ESC1","Aberdeen","St. Mirren",7],[10900,"R-ESC1","Motherwell","St. Johnstone",7],[10900,"R-ESC1","Rangers","Kilmarnock",1],[10900,"R-ESC1","Ross County","Celtic",2],[10630,"R-ING1","Fulham","Liverpool",2],[10900,"R-ING1","Bournemouth","Aston Villa",4],[10900,"R-ING1","Leeds Utd","Wolves",3],[10900,"R-ING1","Newcastle","Nottingham Forest",3],[10900,"R-ING1","Tottenham","Southampton",1],[11130,"R-ING1","Everton","Chelsea",2],[10630,"R-ING2","Norwich","Wigan",10],[10900,"R-ING2","Bristol City","Sunderland",6],[10900,"R-ING2","Burnley","Luton",10],[10900,"R-ING2","Preston","Hull",10],[10900,"R-ING2","QPR","Middlesbrough",8],[10900,"R-ING2","Reading","Cardiff",10],[10900,"R-ING2","Sheffield Utd","Millwall",7],[10900,"R-ING2","Stoke","Blackpool",7],[10900,"R-ING2","Swansea","Blackburn",7],[10900,"R-INGO","Barnsley","Cheltenham",7],[10900,"R-INGO","Bolton","Wycombe",7],[10900,"R-INGO","Burton","Bristol Rovers",9],[10900,"R-INGO","Charlton","Derby",8],[10900,"R-INGO","Exeter","Port Vale",10],[10900,"R-INGO","Fleetwood","Plymouth",8],[10900,"R-INGO","Forest Green","Ipswich",9],[10900,"R-INGO","MK Dons","Sheffield Wed",9],[10900,"R-INGO","Oxford Utd","Cambridge Utd",10],[10900,"R-INGO","Peterborough","Morecambe",10],[10900,"R-INGO","Portsmouth","Lincoln",7],[10900,"R-INGO","Shrewsbury","Accrington",10],[10900,"R-INGT","Barrow","Bradford City",9],[10900,"R-INGT","Colchester","Carlisle",10],[10900,"R-INGT","Crawley","Leyton Orient",8],[10900,"R-INGT","Crewe","Harrogate",10],[10900,"R-INGT","Doncaster","Sutton",9],[10900,"R-INGT","Gillingham FC","Rochdale",10],[10900,"R-INGT","Grimsby","Northampton",9],[10900,"R-INGT","Hartlepool","Wimbledon",10],[10900,"R-INGT","Mansfield","Tranmere",7],[10900,"R-INGT","Newport","Walsall",10],[10900,"R-INGT","Stevenage","Stockport",9],[10900,"R-INGT","Swindon","Salford",10],[10430,"S-CHI1","Dalian Pro","Shanghai Port",8],[10630,"S-CHI1","Guangzhou City","Wuhan Three Towns",8],[10700,"S-CHI1","Tianjin Jinmen Tiger","Shandong Taishan",9],[10500,"S-COR1","Pohang","Gangwon",7],[10530,"S-COR1","Suwon FC","Suwon",7],[10400,"S-JAP1","Kashima","Hiroshima",9],[10430,"S-JAP1","Kyoto","Kashiwa",9],[10500,"S-JAP1","C-Osaka","Vissel Kobe",10],[10500,"S-JAP1","Nagoya","Urawa",8],[10900,"YE-BEL1","Genk","Eupen",7],[11115,"YE-BEL1","Charleroi","Oostende",7],[11115,"YE-BEL1","Kortrijk","St. Truiden",9],[11345,"YE-BEL1","KV Mechelen","Royale Union SG",8],[10930,"YE-HOL1","Sittard","Ajax",2],[11145,"YE-HOL1","Cambuur","Excelsior",7],[11300,"YE-HOL1","PSV","FC Emmen",1],[11400,"YE-HOL1","Waalwijk","Utrecht",8],[10800,"YE-POL1","Lechia","Korona",7],[11030,"YE-POL1","Jagiellonia","Radomiak Radom",7],[11300,"YE-POL1","Slask","Widzew Lodz",7],[10930,"YE-POR1","Rio Ave","Vizela",7],[11200,"YE-POR1","Estoril","Famalicao",10],[11430,"YE-POR1","Oporto","Marítimo",1],[10500,"YE-POR2","Farense","Torreense",7],[10800,"YE-POR2","Nacional","Tondela",10],[10800,"YE-POR2","Oliveirense","Mafra",8],[10930,"YE-POR2","Trofense","BSAD",7],[11200,"YE-POR2","Benfica B","Academico Viseu",7],[10900,"YE-REP1","Liberec","Teplice",7],[10900,"YE-REP1","Plzen","Pardubice",7],[10900,"YE-REP1","Sigma Olomouc","Brno",7],[11200,"YE-REP1","Bohemians","Ostrava",7],[11100,"YE-RUM1","Mioveni","FCSB",8],[11345,"YE-RUM1","Rapid Bucarest","FC Arges",7],[10700,"YE-RUS1","Ural","Spartak Moscú",8],[10930,"YE-RUS1","CSKA Moscú","F. Voronezh",5],[11200,"YE-RUS1","Akhmat Grozny","Zenit",4],[11200,"YE-RUS1","Krasnodar","Lokomotiv Moscú",10],[11100,"YE-SUI1","Servette","Winterthur",7],[11330,"YE-SUI1","Grasshoppers","St. Gallen",9],[11115,"YE-TUR1","Sivasspor","Gaziantep",10],[11345,"YE-TUR1","Beşiktaş","Kayserispor",5],[11100,"ZA-ARG1","Arsenal Sarandí","Atl. Tucumán",6],[11300,"ZA-ARG1","Barracas Central","Racing Club",6],[11600,"ZA-ARG1","Talleres","Argentinos Jrs.",6],[11600,"ZA-ARG1","Unión Santa Fe","Vélez Sarsfield",7],[11900,"ZA-ARG1","Boca Jrs.","Platense",3],[11110,"ZA-ARG2","San Telmo","San Martín Tuc.",6],[11300,"ZA-ARG2","Gimnasia Mendoza","Tristán Suárez",5],[11330,"ZA-ARG2","Dep. Riestra","Sacachispas",7],[11330,"ZA-ARG2","Villa Dálmine","Ferro Carril Oeste",8],[11440,"ZA-ARG2","CA Estudiantes","Guillermo Brown",7],[11605,"ZA-ARG2","Temperley","Nueva Chicago",7],[11430,"ZA-BRA1","Botafogo","Ceará",7],[11430,"ZA-BRA1","Juventude","América-MG",10],[11700,"ZA-BRA1","Atlético-GO","Bragantino",6],[11700,"ZA-BRA1","Avaí","Corinthians",2],[11830,"ZA-BRA1","Sao Paulo","Flamengo",6],[11430,"ZA-BRA2","Bahia","CSA",7],[11700,"ZA-BRA2","Cruzeiro","Tombense",1],[11700,"ZA-BRA2","Novorizontino","Londrina",10],[11130,"ZA-CHI1","OHiggins","Curicó Unido",7],[11400,"ZA-CHI1","Cobresal","La Serena",7],[11630,"ZA-CHI1","Everton","U. Católica",10],[11400,"ZA-COL1","Envigado","U. Magdalena",10],[11605,"ZA-COL1","Tolima","Jaguares de Córdoba",5],[11810,"ZA-COL1","Alianza Petrolera","Atl. Nacional",4],[12015,"ZA-COL1","Millonarios","Deportivo Cali",3],[11500,"ZA-ECU1","Orense","Ind. del Valle",6],[11730,"ZA-ECU1","Guayaquil City","Macará",7],[12000,"ZA-ECU1","Delfín","Emelec",8],[11400,"ZA-EST1","Atlanta Utd","Seattle Sounders",10],[11800,"ZA-EST1","Charlotte","Chicago Fire",10],[11830,"ZA-EST1","CF Montreal","Inter Miami",10],[11830,"ZA-EST1","Cincinnati","Philadelphia Union",8],[11830,"ZA-EST1","Columbus Crew","New York City",10],[11830,"ZA-EST1","DC United","New York Red Bulls",8],[11830,"ZA-EST1","Orlando City","New England Revolution",7],[11900,"ZA-EST1","Nashville SC","Toronto FC",10],[11930,"ZA-EST1","Sporting Kansas City","Los Angeles Galaxy",8],[12000,"ZA-EST1","Austin FC","San Jose Earthquakes",7],[12000,"ZA-EST1","Colorado Rapids","Minnesota United",10],[12100,"ZA-EST1","Real Salt Lake","Los Angeles FC",8],[12130,"ZA-EST1","Portland Timbers","FC Dallas",7],[11905,"ZA-MEX1","Monterrey","León",7],[12105,"ZA-MEX1","Santos Laguna","Cruz Azul",10],[11600,"ZA-PAR1","12 de Octubre","Libertad",6],[11815,"ZA-PAR1","Cerro Porteño","Nacional Asunción",1],[11100,"ZA-PER1","San Martín","Alianza Atl.",8],[11315,"ZA-PER1","AD Cantolao","Sporting Cristal",6],[11530,"ZA-PER1","Binacional","Ayacucho",7],[11800,"ZA-PER1","Sport Huancayo","ADT Tarma",10],[11030,"ZA-URU1","River Plate","Plaza Colonia",7],[11300,"ZA-URU1","Cerro Largo","Wanderers",10],[11730,"ZA-URU1","Cerrito","Boston River",8]]

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

