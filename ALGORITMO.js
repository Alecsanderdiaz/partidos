let PARTIDOS_CON_CUOTA = [
  [12100, 'Monterey Bay FC', 'Sacramento Republic FC', '0.5', 1.44],
  [11930, 'Union La Calera', 'Antofagasta', 'Union La Calera', 1.85],
  [11945, 'CD Junior', 'Independiente Medellin', 'CD Junior', 2.00],
  [12000, 'Barcelona SC', 'Universidad Catolica Quito', 'Barcelona SC', 1.76],
  [12008, 'Austin FC', 'Sporting Kansas City', 'Austin FC', 1.55],
  [12008, 'Colorado Rapids', 'Columbus Crew', 'Colorado Rapids', 1.72],
  [12108, 'L.A. Galaxy', 'Vancouver Whitecaps FC', 'L.A. Galaxy', 1.55],
  [12138, 'Los Angeles FC', 'Charlotte FC', 'Los Angeles FC', 1.45],
  [12008, 'FC Dallas', 'San Jose Earthquakes', 'San Jose Earthquakes', 2.45],
  [12008, 'Houston Dynamo', 'CF Montreal', 'CF Montreal', 2.00],
  [11905, 'Pumas Unam', 'America', 'America', 2.15],
  [12105, 'Chivas Guadalajara', 'Atlas de Guadalajara', 'Atlas de Guadalajara', 2.80],
  [11830, 'Detroit City', 'Oakland Roots', '0.5', 1.40],
  [11815, 'Academia Puerto Cabello', 'Mineros de Guayana', '0.5', 1.45],
  [11600, 'Las Palmas', 'Real Zaragoza', 'Real Zaragoza', 2.55],
  [11830, 'River Plate', 'Newells Old Boys', 'River Plate', 1.65],
  [11600, 'Atletico Lanus', 'CA Independiente', 'CA Independiente', 2.30],
  [11610, 'Instituto AC Cordoba', 'Deportivo Riestra', 'Instituto AC Cordoba', 2.00],
  [11700, 'Corinthians SP', 'Palmeiras SP', 'Corinthians SP', 2.50],
  [11830, 'Cuiaba MT', 'Juventude RS', 'Cuiaba MT', 2.20],
  [11900, 'Botafogo RJ', 'Atletico GO', 'Botafogo RJ', 2.05],
  [11630, 'Guarani SP', 'Nautico PE', 'Guarani SP', 2.00],
  [11830, 'CRB Maceio AL', 'Gremio RS', 'Gremio RS', 2.10],
  [11515, 'Cortulua', 'Alianza Petrolera', 'Cortulua', 2.05],
  [11730, 'Independiente Santa Fe', 'Tolima', 'Tolima', 2.55],
  [11730, 'Club Nueve de Octubre', 'Aucas', 'Aucas', 1.95],
  [11708, 'New York Red Bulls', 'Orlando City SC', 'New York Red Bulls', 1.70],
  [11838, 'FC Cincinnati', 'Atlanta United', 'FC Cincinnati', 1.72],
  [11838, 'New England Revolution', 'DC United', 'New England Revolution', 1.60],
  [11838, 'Philadelphia Union', 'Chicago Fire', 'Philadelphia Union', 1.66],
  [11838, 'Toronto FC', 'Portland Timbers', 'Toronto FC', 1.65],
  [11908, 'Inter Miami CF', 'New York City', 'Inter Miami CF', 2.00],
  [11700, 'Leon', 'Mazatlan FC', 'Leon', 1.65],
  [11530, 'Libertad Asuncion', 'Sol de America', 'Libertad Asuncion', 1.60],
  [11800, 'Guairena FC', '12 de Octubre', 'Guairena FC', 2.00],
  [11630, 'Penarol Montevideo', 'Albion FC', 'Penarol Montevideo', 1.70],
  [11900, 'Universitario de Deportes', 'EM Deportivo Binacional', 'Universitario de Deportes', 1.76],
  [11400, 'Barcelona', 'Rayo Vallecano', 'Barcelona', 1.36],
  [11400, 'CD Leganes', 'CD Alaves', 'CD Leganes', 2.20],
  [11400, 'Paris S.G.', 'Montpellier', 'Paris S.G.', 1.20],
  [11345, 'Lecce', 'Inter', 'Inter', 1.44],
  [11345, 'Monza', 'Torino', 'Torino', 2.25],
  [11345, 'Cittadella', 'SC Pisa', 'Cittadella', 2.00],
  [11345, 'Palermo', 'Perugia', 'Palermo', 2.05],
  [11345, 'Como', 'Cagliari', 'Cagliari', 1.85],
  [11345, 'St. Gilloise', 'Kortrijk', 'St. Gilloise', 1.50],
  [11400, 'Feyenoord Rotterdam', 'Heerenveen', 'Feyenoord Rotterdam', 1.40],
  [11430, 'Sporting Lisbon', 'Rio Ave', 'Sporting Lisbon', 1.45],
  [11345, 'Petrolul Ploiesti', 'Rapid Bucharest', 'Rapid Bucharest', 2.15],
  [11330, 'FC St. Gallen', 'FC Luzern', 'FC St. Gallen', 1.60],
  [11345, 'Adana Demirspor', 'Sivasspor', 'Adana Demirspor', 1.72],
  [11345, 'Galatasaray', 'Giresunspor', 'Galatasaray', 1.50],
  [11330, 'Defensa Y Justicia', 'CA Tigre', 'CA Tigre', 2.15],
  [11430, 'Goias GO', 'Avai SC', 'Goias GO', 2.05],
  [11400, 'Sport Recife PE', 'Csa AL', 'Sport Recife PE', 2.15],
  [11430, 'Cruzeiro MG', 'Chapecoense SC', 'Cruzeiro MG', 1.70],
  [11445, 'Curico Unido', 'Universidad de Chile', 'Universidad de Chile', 2.37],
  [11500, 'Bogota FC', 'Barranquilla', 'Bogota FC', 1.70],
  [11500, 'Llaneros FC', 'Boca Juniors de Cali', 'Llaneros FC', 1.70],
  [11500, 'Deportes Quindio', 'Fortaleza FC', 'Deportes Quindio', 1.95],
  [11500, 'Independiente Del Valle', 'Gualaceo SC', 'Independiente Del Valle', 1.55],
  [11330, 'Rentistas', 'Danubio', 'Danubio', 2.15],
  [11330, 'SV Darmstadt 98', 'Hansa Rostock', 'SV Darmstadt 98', 1.61],
  [11200, 'Real Valladolid', 'Villarreal', 'Villarreal', 1.85],
  [11200, 'Mirandes', 'Sporting Gijon', 'Sporting Gijon', 2.10],
  [11200, 'Dijon', 'Caen', 'Dijon', 2.05],
  [11200, 'Burdeos', 'Chamois Niort FC', 'Burdeos', 1.76],
  [11200, 'AC Le Havre', 'Pau FC', 'AC Le Havre', 1.95],
  [11200, 'FC Metz', 'Valenciennes', 'FC Metz', 1.90],
  [11200, 'Nimes', 'Rodez Aveyron', 'Nimes', 2.05],
  [11200, 'Sochaux', 'SC Amiens', 'Sochaux', 1.85],
  [11200, 'Annecy FC', 'Laval', 'Laval', 2.40],
  [11200, 'SC Bastia', 'Grenoble', 'Grenoble', 2.65],
  [11130, 'Sampdoria', 'Atalanta', 'Atalanta', 1.66],
  [11300, 'Utrecht', 'Cambuur Leeuwarden', 'Utrecht', 1.48],
  [11145, 'GO Ahead Eagles', 'PSV Eindhoven', 'PSV Eindhoven', 1.48],
  [11300, 'FC Emmen', 'RKC Waalwijk', 'RKC Waalwijk', 2.45],
  [11300, 'Pogon Szczecin', 'Wisla Plock', 'Wisla Plock', 2.30],
  [11200, 'Casa Pia Atletico', 'Benfica', 'Benfica', 1.44],
  [11200, 'FC Hradec Kralove', 'Viktoria Plzen', 'Viktoria Plzen', 1.76],
  [11200, 'Dinamo Moscow', 'Krasnodar', 'Dinamo Moscow', 1.61],
  [11330, 'Rosario Central', 'CA Barracas Central', 'Rosario Central', 1.90],
  [11300, 'Quilmes AC', 'CSD Flandria', 'Quilmes AC', 1.90],
  [11210, 'Sacachispas FC', 'CA Belgrano', 'CA Belgrano', 2.00],
  [11300, 'CD Maipu', 'Temperley', 'Temperley', 2.95],
  [11215, 'Audax Italiano', 'CD Everton Vina Del Mar', 'Audax Italiano', 2.30],
  [11315, 'Carlos Mannucci', 'Deportivo San Martin', 'Carlos Mannucci', 1.66],
  [10900, 'Boreham Wood', 'Notts County', '0.5', 1.40],
  [10900, 'Halifax Town', 'Torquay United', '0.5', 1.42],
  [11100, 'Slavia Mozyr', 'FC Gomel', '0.5', 1.40],
  [10900, 'Manisa Futbol Kulubu', 'Boluspor', '0.5', 1.42],
  [11130, 'Schalke 04', 'Borussia Monchengladbach', 'Borussia Monchengladbach', 1.72],
  [11000, 'Celta de Vigo', 'Espanyol', 'Celta de Vigo', 1.83],
  [11000, 'SD Eibar', 'CD Tenerife', 'SD Eibar', 2.05],
  [11000, 'AS Monaco', 'Rennes', 'AS Monaco', 1.85],
  [11130, 'AC Milán', 'Udinese', 'AC Milán', 1.55],
  [11130, 'Brentford', 'Manchester United', 'Manchester United', 1.80],
  [10900, 'Sutton United', 'Barrow FC', 'Barrow FC', 2.37],
  [10900, 'Tranmere', 'Gillingham', 'Gillingham', 2.20],
  [11115, 'Cercle Brugge', 'Mechelen', 'Mechelen', 2.10],
  [11115, 'RFC Seraing United', 'Charleroi', 'Charleroi', 1.65],
  [11030, 'Gornik Zabrze', 'Stal Mielec', 'Gornik Zabrze', 1.61],
  [10930, 'CF Estrela', 'Sporting Farense', 'Sporting Farense', 2.10],
  [10930, 'Torreense', 'Nacional Madeira', 'Nacional Madeira', 2.15],
  [10900, 'Banik Ostrava', 'Fastav Zlin', 'Banik Ostrava', 1.66],
  [10900, 'FC Zbrojovka Brno', 'FK Mlada Boleslav', 'FK Mlada Boleslav', 1.90],
  [10900, 'FK Teplice', 'Bohemians 1905', 'Bohemians 1905', 2.10],
  [11100, 'FC Uta Arad', 'Universitatea Cluj', 'Universitatea Cluj', 2.70],
  [10900, 'Zenit St Petersburg', 'CSKA Moscow', 'Zenit St Petersburg', 1.50],
  [11100, 'FC Sion', 'Grasshoppers', 'Grasshoppers', 2.05],
  [11115, 'Kayserispor', 'Istanbulspor AS', 'Kayserispor', 1.65],
  [11100, 'Sporting Cristal', 'FC Carlos Stein', 'Sporting Cristal', 1.44],
  [10900, 'Hull City', 'Norwich City', 'Norwich City', 1.95],
  [10900, 'Luton Town', 'Preston', 'Preston', 2.37],
  [10900, 'Millwall', 'Coventry', 'Coventry', 2.40],
  [10900, 'Rotherham', 'Reading', 'Reading', 2.37],
  [10900, 'Accrington', 'Burton Albion', 'Accrington', 1.72],
  [10900, 'Derby County', 'Barnsley', 'Derby County', 1.80],
  [10900, 'Ipswich Town', 'MK Dons', 'Ipswich Town', 1.75],
  [10900, 'Lincoln City', 'Forest Green Rovers', 'Lincoln City', 1.95],
  [10900, 'Sheffield Wednesday', 'Charlton Athletic', 'Sheffield Wednesday', 1.70],
  [10900, 'Wycombe Wanderers', 'Shrewsbury', 'Wycombe Wanderers', 1.85],
  [10900, 'Cambridge United', 'Exeter City', 'Exeter City', 1.95],
  [10900, 'Cheltenham Town', 'Portsmouth', 'Portsmouth', 1.80],
  [10900, 'Morecambe', 'Fleetwood Town', 'Fleetwood Town', 2.05],
  [10900, 'Plymouth Argyle', 'Peterborough United', 'Peterborough United', 2.00],
  [10900, 'Port Vale', 'Bolton Wanderers', 'Bolton Wanderers', 1.90],
  [10900, 'Bradford City', 'Newport', 'Bradford City', 2.00],
  [10900, 'Carlisle', 'Swindon Town', 'Carlisle', 1.90],
  [10900, 'Harrogate Town', 'Crawley Town', 'Harrogate Town', 1.85],
  [10900, 'Leyton Orient', 'Mansfield Town', 'Leyton Orient', 2.10],
  [10900, 'Northampton', 'Hartlepool', 'Northampton', 1.85],
  [10900, 'Rochdale', 'Grimsby Town', 'Rochdale', 1.95],
  [10900, 'Salford City', 'Crewe Alexandra', 'Salford City', 1.80],
  [10900, 'Walsall', 'Stevenage', 'Walsall', 2.10],
  [10900, 'AFC Wimbledon', 'Doncaster Rovers', 'AFC Wimbledon', 1.80],
  [10900, 'Stockport County', 'Colchester', 'Colchester', 2.55],
  [10900, 'Ayr United', 'Hamilton Academical', '0.5', 1.48],
  [10900, 'Inverness CT', 'Cove', '0.5', 1.45],
  [10900, 'Queens Park', 'Partick Thistle', '0.5', 1.48],
  [10900, 'Raith Rovers', 'Greenock Morton', '0.5', 1.48],
  [10830, 'Bayer Leverkusen', 'Augsburg', 'Bayer Leverkusen', 1.40],
  [10830, 'RB Leipzig', 'Cologne', 'RB Leipzig', 1.48],
  [10830, 'Werder Bremen', 'Stuttgart', 'Werder Bremen', 1.85],
  [10830, 'Hertha Berlin', 'Eintracht Frankfurt', 'Eintracht Frankfurt', 1.85],
  [10830, 'Hoffenheim', 'VfL Bochum', 'VfL Bochum', 2.37],
  [10900, 'Aberdeen', 'Motherwell', 'Aberdeen', 1.76],
  [10900, 'Livingston', 'Hibernian', 'Livingston', 2.40],
  [10900, 'Glasgow Rangers', 'St Johnstone', 'Glasgow Rangers', 1.36],
  [10900, 'St Mirren', 'Ross County', 'Ross County', 2.25],
  [10900, 'Arsenal', 'Leicester City', 'Arsenal', 1.57],
  [10900, 'Manchester City', 'Bournemouth', 'Manchester City', 1.22],
  [10900, 'Wolverhampton Wanderers', 'Fulham', 'Wolverhampton Wanderers', 2.05],
  [10900, 'Brighton', 'Newcastle', 'Newcastle', 2.30],
  [10900, 'Southampton', 'Leeds United', 'Leeds United', 2.10],
  [10900, 'Sunderland', 'QPR', 'Sunderland', 1.95],
  [10900, 'Wigan', 'Bristol City', 'Wigan', 1.95],
  [10900, 'Blackpool', 'Swansea', 'Swansea', 2.25],
  [10900, 'Huddersfield', 'Stoke City', 'Stoke City', 2.20],
  [10900, 'Westerlo', 'Standard Liege', 'Standard Liege', 2.20],
  [10900, 'Operario PR', 'Sampaio Correa MA', 'Operario PR', 2.20],
  [10900, 'Vasco Da Gama RJ', 'Tombense MG', 'Vasco Da Gama RJ', 1.85],
  [10600, 'Holstein Kiel', 'Eintracht Braunschweig', 'Holstein Kiel', 1.70],
  [10600, 'Arminia Bielefeld', 'Hamburger SV', 'Hamburger SV', 1.70],
  [10600, 'Karlsruher SC', 'SV Sandhausen', 'SV Sandhausen', 2.05],
  [10700, 'Borussia Dortmund II', 'Rot Weiss Essen', 'Borussia Dortmund II', 2.00],
  [10700, 'SV Elversberg', 'FSV Zwickau', 'SV Elversberg', 1.72],
  [10700, 'FC Ingolstadt 04', '1.FC Saarbrücken', 'FC Ingolstadt 04', 1.85],
  [10700, 'FC Viktoria Köln', 'Dynamo Dresden', 'FC Viktoria Köln', 2.15],
  [10700, 'SpVgg Bayreuth', 'VfL Osnabruck', 'VfL Osnabruck', 1.70],
  [10700, 'SC Verl', 'TSV 1860 München', 'TSV 1860 München', 1.76],
  [10800, 'EA Guingamp', 'Paris FC', 'EA Guingamp', 2.05],
  [10630, 'Aston Villa', 'Everton', 'Everton', 2.80],
  [10630, 'Cardiff City', 'Birmingham City', 'Cardiff City', 2.10],
  [10630, 'Bristol Rovers', 'Oxford United', 'Bristol Rovers', 2.05],
  [10600, 'Henan Songshan Longmen', 'Meizhou Kejia', 'Henan Songshan Longmen', 1.65],
  [10630, 'Guangzhou City', 'Wuhan FC', 'Wuhan FC', 2.05],
  [10400, 'Ulsan Hyundai Horang-I', 'Daegu FC', 'Ulsan Hyundai Horang-I', 1.53],
  [10530, 'Incheon United', 'Jeonbuk Hyundai Motors', 'Jeonbuk Hyundai Motors', 1.76],
  [10500, 'Kawasaki Frontale', 'Kyoto Sanga', 'Kawasaki Frontale', 1.48],
  [10500, 'FC Tokyo', 'Cerezo Osaka', 'FC Tokyo', 2.10],
  [10500, 'Yokohama F Marinos', 'Shonan Bellmare', 'Yokohama F Marinos', 1.57],
  [10000, 'Consadole Sapporo', 'Vissel Kobe', 'Vissel Kobe', 1.95],
  [10430, 'Jubilo Iwata', 'Urawa Red Diamonds', 'Urawa Red Diamonds', 1.70],
  [10800, 'Cracovia Krakow', 'GKS Piast Gliwice', 'Cracovia Krakow', 1.95],
  [10500, 'Sporting Covilha', 'Feirense', 'Sporting Covilha', 2.20],
  [10700, 'Lokomotiv Moscow', 'Krylia Sovetov Samara', 'Lokomotiv Moscow', 1.90]
]

let PARTIDOS_SIN_CUOTA = [
  [10830,"ALE1","Bayer Leverkusen","Augsburgo",7],[10830,"ALE1","Hertha BSC","Eintracht Frankfurt",8],[10830,"ALE1","Hoffenheim","Bochum",10],[10830,"ALE1","RB Leipzig","Colonia",5],[10830,"ALE1","Werder Bremen","Stuttgart",7],[11130,"ALE1","Schalke","Borussia Mgladbach",8],[10600,"ALE2","Arminia Bielefeld","Hamburgo",6],[10600,"ALE2","Karlsruher","Sandhausen",10],[10600,"ALE2","Kiel","Braunschweig",7],[11330,"ALE2","Darmstadt","Rostock",7],[10700,"ALE3","Borussia Dortmund II","RW Essen",7],[10700,"ALE3","Elversberg","Zwickau",7],[10700,"ALE3","Ingolstadt","Saarbrücken",7],[10700,"ALE3","SpVgg Bayreuth","Osnabruck",8],[10700,"ALE3","Verl","1860 Múnich",8],[10700,"ALE3","Viktoria Köln","Dynamo Dresden",9],[11330,"ZA-ARG1","Defensa y Justicia","Tigre",8],[11330,"ZA-ARG1","Rosario Central","Barracas Central",7],[11600,"ZA-ARG1","Lanús","Independiente",8],[11830,"ZA-ARG1","River Plate","Newells",5],[11210,"ZA-ARG2","Sacachispas","Belgrano",8],[11300,"ZA-ARG2","Deportivo Maipu","Temperley",10],[11300,"ZA-ARG2","Quilmes","Flandria",7],[11610,"ZA-ARG2","Instituto","Dep. Riestra",7],[10900,"YE-BEL1","Westerlo","St. Lieja",10],[11115,"YE-BEL1","Círculo Brujas","KV Mechelen",10],[11115,"YE-BEL1","Seraing","Charleroi",8],[11345,"YE-BEL1","Royale Union SG","Kortrijk",7],[10700,"*YE-BIE1","Isloch","Dinamo Brest",12],[10900,"*YE-BIE1","FC Minsk","Vitebsk",12],[11100,"*YE-BIE1","Slavia Mozyr","Gomel",11],[11400,"*ZA-BOL1","Santa Cruz","Bolívar",12],[11615,"*ZA-BOL1","The Strongest","Palmaflor",12],[11830,"*ZA-BOL1","Guabirá","Independiente Petrolero",12],[11430,"ZA-BRA1","Goiás","Avaí",7],[11700,"ZA-BRA1","Corinthians","Palmeiras",9],[11830,"ZA-BRA1","Cuiabá","Juventude",7],[11900,"ZA-BRA1","Botafogo","Atlético-GO",7],[10900,"ZA-BRA2","Operario","Sampaio Correa",7],[10900,"ZA-BRA2","Vasco","Tombense",5],[11400,"ZA-BRA2","Sport Recife","CSA",7],[11430,"ZA-BRA2","Cruzeiro","Chapecoense",1],[11630,"ZA-BRA2","Guaraní","Náutico",7],[11830,"ZA-BRA2","CRB","Gremio",2],[10900,"*ZA-BRAS","Internacional Sub-20","Flamengo Sub-20",12],[11200,"*ZA-BRAS","Sao Paulo Sub-20","Athletico-PR Sub-20",12],[11215,"ZA-CHI1","Audax","Everton",7],[11445,"ZA-CHI1","Curicó Unido","U. De Chile",10],[11930,"ZA-CHI1","U. La Calera","Antofagasta",7],[10600,"S-CHI1","Henan Songshan Longmen","Meizhou Hakka",7],[10630,"S-CHI1","Guangzhou City","Wuhan FC",10],[11515,"ZA-COL1","Cortuluá","Alianza Petrolera",7],[11730,"ZA-COL1","Ind. Santa Fe","Tolima",10],[11945,"ZA-COL1","Junior","Ind. Medellín",7],[11500,"ZA-COL2","Bogotá","Barranquilla",7],[11500,"ZA-COL2","Llaneros","Boca Juniors",7],[11500,"ZA-COL2","Quindío","Fortaleza",7],[10400,"S-COR1","Ulsan Hyundai","Daegu",7],[10530,"S-COR1","Incheon","Jeonbuk",8],[11500,"ZA-ECU1","Ind. del Valle","Gualaceo",3],[11730,"ZA-ECU1","Nueve de Octubre","Aucas",6],[12000,"ZA-ECU1","Barcelona SC","U. Católica",5],[10900,"R-ESC1","Aberdeen","Motherwell",7],[10900,"R-ESC1","Livingston","Hibernian",7],[10900,"R-ESC1","Rangers","St. Johnstone",3],[10900,"R-ESC1","St. Mirren","Ross County",10],[10900,"*R-ESC2","Ayr","Hamilton",11],[10900,"*R-ESC2","Inverness","Cove Rangers",11],[10900,"*R-ESC2","Queens Park","Partick Thistle",11],[10900,"*R-ESC2","Raith","Morton",11],[11000,"ESP1","Celta de Vigo","Espanyol",5],[11200,"ESP1","Real Valladolid","Villarreal",4],[11400,"ESP1","Barcelona","Rayo Vallecano",1],[11000,"ESP2","Eibar","Tenerife",7],[11200,"ESP2","Mirandés","Sporting de Gijón",10],[11400,"ESP2","Leganés","Alavés",7],[11600,"ESP2","Las Palmas","Real Zaragoza",10],[11700,"ZA-EST1","New York Red Bulls","Orlando City",7],[11830,"ZA-EST1","Cincinnati","Atlanta Utd",7],[11830,"ZA-EST1","New England Revolution","DC United",7],[11830,"ZA-EST1","Philadelphia Union","Chicago Fire",7],[11830,"ZA-EST1","Toronto FC","Portland Timbers",7],[11900,"ZA-EST1","Inter Miami","New York City",9],[12000,"ZA-EST1","Austin FC","Sporting Kansas City",7],[12000,"ZA-EST1","Colorado Rapids","Columbus Crew",7],[12000,"ZA-EST1","FC Dallas","San Jose Earthquakes",10],[12000,"ZA-EST1","Houston Dynamo","CF Montreal",10],[12100,"ZA-EST1","Los Angeles Galaxy","Vancouver Whitecaps",7],[12130,"ZA-EST1","Los Angeles FC","Charlotte",3],[11800,"*ZA-EST2","Hartford Athletic","Indy Eleven",12],[11800,"*ZA-EST2","Pittsburgh","Memphis",12],[11830,"*ZA-EST2","Atlanta United 2","Miami FC",12],[11830,"*ZA-EST2","Detroit","Oakland Roots",11],[11830,"*ZA-EST2","Louisville City","Tampa Bay",12],[11900,"*ZA-EST2","Birmingham","San Diego Loyal",12],[12000,"*ZA-EST2","San Antonio","Las Vegas Lights",12],[12100,"*ZA-EST2","Monterey Bay","Sacramento Republic",11],[11000,"FRA1","Mónaco","Stade Rennais",5],[11400,"FRA1","PSG","Montpellier",1],[10800,"FRA2","EA Guingamp","Paris FC",7],[11200,"FRA2","Annecy","Laval",10],[11200,"FRA2","Bastia","Grenoble",10],[11200,"FRA2","Dijon","SM Caen",7],[11200,"FRA2","Girondins","Niort",5],[11200,"FRA2","Le Havre","Pau FC",7],[11200,"FRA2","Metz","Valenciennes",5],[11200,"FRA2","Nimes","Rodez",7],[11200,"FRA2","Sochaux","Amiens",7],[10630,"R-ING1","Aston Villa","Everton",10],[10900,"R-ING1","Arsenal","Leicester",1],[10900,"R-ING1","Brighton","Newcastle",6],[10900,"R-ING1","Manchester City","Bournemouth",1],[10900,"R-ING1","Southampton","Leeds Utd",10],[10900,"R-ING1","Wolves","Fulham",7],[11130,"R-ING1","Brentford","Manchester Utd",2],[10630,"R-ING2","Cardiff","Birmingham",7],[10900,"R-ING2","Blackpool","Swansea",10],[10900,"R-ING2","Huddersfield","Stoke",8],[10900,"R-ING2","Hull","Norwich",8],[10900,"R-ING2","Luton","Preston",10],[10900,"R-ING2","Millwall","Coventry",10],[10900,"R-ING2","Rotherham","Reading",10],[10900,"R-ING2","Sunderland","QPR",7],[10900,"R-ING2","Wigan","Bristol City",7],[10630,"R-INGO","Bristol Rovers","Oxford Utd",9],[10900,"R-INGO","Accrington","Burton",7],[10900,"R-INGO","Cambridge Utd","Exeter",8],[10900,"R-INGO","Cheltenham","Portsmouth",8],[10900,"R-INGO","Derby","Barnsley",7],[10900,"R-INGO","Ipswich","MK Dons",7],[10900,"R-INGO","Lincoln","Forest Green",7],[10900,"R-INGO","Morecambe","Fleetwood",10],[10900,"R-INGO","Plymouth","Peterborough",10],[10900,"R-INGO","Port Vale","Bolton",6],[10900,"R-INGO","Sheffield Wed","Charlton",7],[10900,"R-INGO","Wycombe","Shrewsbury",7],[10900,"R-INGT","Bradford City","Newport",7],[10900,"R-INGT","Carlisle","Swindon",7],[10900,"R-INGT","Harrogate","Crawley",7],[10900,"R-INGT","Leyton Orient","Mansfield",9],[10900,"R-INGT","Northampton","Hartlepool",7],[10900,"R-INGT","Rochdale","Grimsby",7],[10900,"R-INGT","Salford","Crewe",7],[10900,"R-INGT","Stockport","Colchester",10],[10900,"R-INGT","Sutton","Barrow",10],[10900,"R-INGT","Tranmere","Gillingham FC",10],[10900,"R-INGT","Walsall","Stevenage",7],[10900,"R-INGT","Wimbledon","Doncaster",7],[10900,"*R-INGN","Boreham Wood","Notts County",11],[10900,"*R-INGN","Bromley","Altrincham",12],[10900,"*R-INGN","Chesterfield","Aldershot",12],[10900,"*R-INGN","Eastleigh","Wealdstone",12],[10900,"*R-INGN","Gateshead","Barnet",12],[10900,"*R-INGN","Halifax","Torquay",11],[10900,"*R-INGN","Maidenhead","Scunthorpe",12],[10900,"*R-INGN","Maidstone","York",12],[10900,"*R-INGN","Solihull Moors","Southend",12],[10900,"*R-INGN","Woking","Dagenham & Red.",12],[10900,"*R-INGN","Yeovil","Wrexham",12],[11120,"*R-INGN","Oldham","Dorking",12],[11130,"ITA1","AC Milan","Udinese",3],[11130,"ITA1","Sampdoria","Atalanta",6],[11345,"ITA1","Lecce","Inter",2],[11345,"ITA1","Monza","Torino",10],[11345,"ITA2","Cittadella","Pisa",7],[11345,"ITA2","Como","Cagliari",8],[11345,"ITA2","Palermo","Perugia",5],[10000,"S-JAP1","Sapporo","Vissel Kobe",10],[10430,"S-JAP1","Iwata","Urawa",8],[10500,"S-JAP1","Kawasaki","Kyoto",7],[10500,"S-JAP1","Tokyo","C-Osaka",9],[10500,"S-JAP1","Yokohama M.","Shonan",7],[11700,"ZA-MEX1","León","Mazatlán",7],[11905,"ZA-MEX1","Pumas UNAM","Club América",6],[12105,"ZA-MEX1","Guadalajara","Atlas",10],[12105,"ZA-MEX1","Juárez","Pachuca",8],[10230,"*AMI","Cádiz B (Esp)","At. Sanluqueño (Esp)",12],[10230,"*AMI","Mar Menor (Esp)","La Unión (Esp)",12],[10330,"*AMI","Utebo (Esp)","Ebro (Esp)",12],[10400,"*AMI","Fafe (Por)","Vilaverdense (Por)",12],[10400,"*AMI","Valladolid Promesas (Esp)","Rayo Majadahonda (Esp)",12],[10430,"*AMI","Amorebieta (Esp)","Athletic Club B (Esp)",12],[10430,"*AMI","Numancia (Esp)","San Sebastián de los Reyes (Esp)",12],[10700,"*AMI","UD Logroñés B (Esp)","Alavés B (Esp)",12],[10800,"*AMI","Bonner (Ger)","Alfter (Ger)",12],[11000,"*AMI","Arsimi (Mkd)","Teteks (Mkd)",12],[11000,"*AMI","Fanfulla (Ita)","Lecco (Ita)",12],[11000,"*AMI","FeralpiSalo (Ita)","Desenzano Calvina (Ita)",12],[11000,"*AMI","L.R. Vicenza (Ita)","Mantova (Ita)",12],[11000,"*AMI","Pergolettese (Ita)","Giana Erminio (Ita)",12],[11000,"*AMI","Rouen (Fra)","Oissel (Fra)",12],[11000,"*AMI","Sanjoanense (Por)","Académica (Por)",12],[11030,"*AMI","Chloraka (Cyp)","Aris (Cyp)",12],[11030,"*AMI","FK Skopje (Mkd)","Besa 1976 (Mkd)",12],[11030,"*AMI","Levadiakos (Gre)","Atromitos (Gre)",12],[11100,"*AMI","AlbinoLeffe (Ita)","Villa Valle (Ita)",12],[11100,"*AMI","Asteras T. (Gre)","Panetolikos (Gre)",12],[11100,"*AMI","Carrarese (Ita)","Arezzo (Ita)",12],[11100,"*AMI","Lamia (Gre)","Ionikos (Gre)",12],[11100,"*AMI","OFI Creta (Gre)","Episkopi (Gre)",12],[11100,"*AMI","Paphos (Cyp)","Doxa (Cyp)",12],[11100,"*AMI","San Donato (Ita)","Sangiovannese (Ita)",12],[11100,"*AMI","Varzim (Por)","Tirsense (Por)",12],[11130,"*AMI","Mosta FC (Mlt)","Sirens (Mlt)",12],[11130,"*AMI","Volos (Gre)","PAOK (Gre)",12],[11200,"*AMI","Atl. Astorga (Esp)","Sporting de Gijón B (Esp)",12],[11200,"*AMI","Gernika (Esp)","Sestao River (Esp)",12],[11200,"*AMI","LHospitalet (Esp)","Sabadell (Esp)",12],[11200,"*AMI","Nea Salamis (Cyp)","Anorthosis (Cyp)",12],[11200,"*AMI","Vilassar de Mar (Esp)","Grama (Esp)",12],[11200,"*AMI","Zamora (Esp)","Guijuelo (Esp)",12],[11230,"*AMI","Eldense (Esp)","UCAM Murcia (Esp)",12],[11230,"*AMI","Gimnástica T. (Esp)","Rayo Cantabria (Esp)",12],[11230,"*AMI","Prat (Esp)","Castelldefels (Esp)",12],[11300,"*AMI","CD Badajoz (Esp)","Montijo (Esp)",12],[11300,"*AMI","CE Manresa (Esp)","Espanyol B (Esp)",12],[11300,"*AMI","CF Talavera (Esp)","Alcorcón (Esp)",12],[11300,"*AMI","Ciudad de Lucena (Esp)","Malagueño (Esp)",12],[11300,"*AMI","Gimnástica Segoviana (Esp)","Tudelano (Esp)",12],[11330,"*AMI","Chiclana (Esp)","San Fernando (Esp)",12],[11400,"*AMI","Orihuela (Esp)","Alcoyano (Esp)",12],[11400,"*AMI","San Roque de Lepe (Esp)","Real Betis B (Esp)",12],[11400,"*AMI","Xerez D.F.C. (Esp)","Córdoba (Esp)",12],[11145,"YE-HOL1","G.A. Eagles","PSV",4],[11300,"YE-HOL1","FC Emmen","Waalwijk",10],[11300,"YE-HOL1","Utrecht","Cambuur",7],[11400,"YE-HOL1","Feyenoord","Heerenveen",5],[11000,"YE-HOLC","Groene Ster","Barendrecht",12],[11000,"YE-HOLC","Rosmalen","Sportlust",12],[11000,"YE-HOLC","Staphorst","TOGB",12],[11000,"YE-HOLC","USV Hercules","Ter Leede",12],[11000,"YE-HOLC","Watergraafsmeer","Hoek",12],[11200,"YE-HOLC","ADO 20 Heemskerk","VVOG",12],[11530,"ZA-PAR1","Libertad","Sol de América",3],[11800,"ZA-PAR1","Guairena FC","12 de Octubre",7],[11100,"ZA-PER1","Sporting Cristal","Carlos Stein",3],[11315,"ZA-PER1","Carlos Mannucci","San Martín",7],[11530,"ZA-PER1","Ayacucho","ADT Tarma",7],[11900,"ZA-PER1","Universitario","Binacional",7],[10800,"YE-POLE","Cracovia","Piast",5],[11030,"YE-POLE","Gornik Z.","Stal Mielec",7],[11300,"YE-POLE","Pogon Szczecin","Plock",10],[11200,"YE-POR1","Casa Pia","Benfica",2],[11430,"YE-POR1","Sporting CP","Rio Ave",1],[10500,"YE-POR2","Covilha","Feirense",7],[10930,"YE-POR2","Estrela","Farense",8],[10930,"YE-POR2","Torreense","Nacional",10],[10900,"YE-REP1","Brno","Mlada Boleslav",8],[10900,"YE-REP1","Ostrava","Zlin",7],[10900,"YE-REP1","Teplice","Bohemians",8],[11200,"YE-REP1","Hradec Kralove","Plzen",6],[11100,"YE-RUM1","UTA Arad","U. Cluj",10],[11345,"YE-RUM1","Petrolul","Rapid Bucarest",6],[10700,"YE-RUS1","Lokomotiv Moscú","Kr. Sovetov",7],[10900,"YE-RUS1","Zenit","CSKA Moscú",5],[11200,"YE-RUS1","Dinamo Moscú","Krasnodar",5],[11100,"YE-SUI1","Sion","Grasshoppers",10],[11330,"YE-SUI1","St. Gallen","Lucerna",7],[11100,"*YE-SUI2","Lausanne Ouchy","Schaffhausen",12],[11115,"YE-TUR1","Kayserispor","Istanbulspor",7],[11345,"YE-TUR1","Adana Demirspor","Sivasspor",7],[11345,"YE-TUR1","Galatasaray","Giresunspor",1],[10900,"*YE-TUR2","Manisa FK","Boluspor",11],[11115,"*YE-TUR2","Rizespor","Keciorengucu",12],[11345,"*YE-TUR2","Eyupspor","Denizlispor",12],[11345,"*YE-TUR2","Genclerbirligi","Altinordu",12],[11330,"ZA-URU1","Rentistas","Danubio",8],[11630,"ZA-URU1","Peñarol","Albion",1],[11015,"*ZA-URU2","Uruguay Montevideo","Rampla Juniors",12],[11200,"*ZA-URU2","Juventud","La Luz",12],[11300,"*ZA-URU2","Villa Española","Atenas",12],[11330,"*ZA-URU2","Central Esp.","Sud América",12],[11600,"*ZA-VEN1","La Guaira","Caracas",12],[11815,"*ZA-VEN1","Puerto Cabello","Mineros",11]
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

