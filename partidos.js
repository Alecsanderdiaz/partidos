const PARTIDOS = [
[10830, 'ALE1', 'Bayern Múnich', 'Eintracht Frankfurt'],
[10830, 'ALE1', 'Mainz', 'Borussia Mgladbach'],
[10830, 'ALE1', 'RB Leipzig', 'Hertha BSC'],
[10830, 'ALE1', 'Union Berlín', 'Friburgo'],
[11130, 'ALE1', 'Borussia Dortmund', 'Schalke'],
[10600, 'ALE2', 'Darmstadt', 'St. Pauli'],
[10600, 'ALE2', 'Hamburgo', 'Würzburger Kickers'],
[10600, 'ALE2', 'Hannover', 'Fortuna Düsseldorf'],
[10600, 'ALE2', 'Kiel', 'Fürth'],
[10700, 'ALE3', 'Duisburgo', 'Uerdingen'],
[10700, 'ALE3', 'Ingolstadt', 'Dynamo Dresden'],
[10700, 'ALE3', 'Lubeck', 'Hallescher'],
[10700, 'ALE3', 'Magdeburgo', 'Wehen'],
[10700, 'ALE3', 'Meppen', 'Kaiserslautern'],
[10700, 'ALE3', 'Rostock', 'Viktoria Köln'],
[10100, 'AUST', 'Edgeworth E.', 'Broadmeadow'],
[12230, 'AUST', 'Newcastle Olympic', 'Maitland'],
[12300, 'AUST', 'Rockdale', 'Sydney Utd'],
[10330, 'AUST', 'Brisbane Strikers', 'Redlands'],
[10400, 'AUST', 'Eastern Suburbs', 'Gold Coast Knights'],
[10400, 'AUST', 'Queensland Lions', 'Brisbane City'],
[10030, 'AUST', 'Clarence Zebras', 'Launceston'],
[10030, 'AUST', 'Kingborough Lions', 'Olympia Warriors'],
[10200, 'AUST', 'Bayside', 'Brisbane K.'],
[10300, 'AUST', 'Caboolture', 'North Star'],
[10300, 'AUST', 'The Gap', 'Acacia Ridge'],
[10100, 'AUST', 'Albany Creek', 'Taringa'],
[10300, 'AUST', 'St. George Willawong', 'Grange Thistle'],
[11345, 'BEL1', 'Leuven', 'Club Brujas'],
[10630, 'BIE1', 'Gorodeja', 'Smolevichi'],
[10830, 'BIE1', 'BATE', 'Vitebsk'],
[11030, 'BIE1', 'Dinamo Minsk', 'Belshina'],
[11500, 'BRA1', 'Bragantino', 'Goiás'],
[11700, 'BRA1', 'Ceará', 'Coritiba'],
[12000, 'BRA1', 'Atlético-MG', 'Sport Recife'],
[11400, 'BRA2', 'CRB', 'Ponte Preta'],
[11630, 'BRA2', 'Sampaio Correa', 'Cuiaba Esporte'],
[12000, 'BRA2', 'América-MG', 'Confianca'],
[11300, 'BRAS', 'Bahia Sub-20', 'America Mineiro Sub-20'],
[11300, 'BRAS', 'Botafogo Sub-20', 'Athletico-PR Sub-20'],
[11300, 'BRAS', 'Internacional Sub-20', 'Vitória Sub-20'],
[10635, 'CHI1', 'Jiangsu Suning', 'Chongqing Lifan'],
[10230, 'CHI1', 'Guangzhou R&F', 'Qingdao Huanghai'],
[11600, 'COL1', 'Once Caldas', 'Jaguares de Córdoba'],
[11805, 'COL1', 'Tolima', 'La Equidad'],
[12110, 'COL1', 'Junior', 'Millonarios'],
[11400, 'COL2', 'Fortaleza', 'Real San Andrés'],
[11500, 'COL2', 'Atletico F.C.', 'Quindío'],
[11500, 'COL2', 'Valledupar', 'Llaneros'],
[11100, 'COLF', 'Real San Andrés F', 'Atl. Nacional F'],
[10000, 'COR1', 'Seoul', 'Gangwon'],
[10230, 'COR1', 'Incheon', 'Busan'],
[11530, 'ECU1', 'Emelec', 'Macará'],
[11800, 'ECU1', 'Técnico U.', 'Delfín'],
[12130, 'ECU1', 'LDU Quito', 'El Nacional'],
[10900, 'ESC1', 'Kilmarnock', 'Hibernian'],
[10900, 'ESC1', 'Motherwell', 'Ross County'],
[10900, 'ESC1', 'St. Johnstone', 'Dundee Utd'],
[10900, 'ESC2', 'Alloa', 'Dunfermline'],
[10900, 'ESC2', 'Dundee FC', 'Morton'],
[10900, 'ESC2', 'Inverness', 'Ayr'],
[10900, 'ESC2', 'Queen of South', 'Raith'],
[10900, 'ESP1', 'Barcelona', 'Real Madrid'],
[11130, 'ESP1', 'Osasuna', 'Athletic Club'],
[11130, 'ESP1', 'Sevilla', 'Eibar'],
[11400, 'ESP1', 'Atlético de Madrid', 'Real Betis'],
[11115, 'ESP2', 'Cartagena', 'Las Palmas'],
[11115, 'ESP2', 'Logroñés', 'Lugo'],
[11330, 'ESP2', 'Almería', 'Fuenlabrada'],
[11330, 'ESP2', 'Castellón', 'Girona'],
[11430, 'EST1', 'Inter Miami', 'Orlando City'],
[11500, 'EST1', 'Atlanta Utd', 'DC United'],
[11830, 'EST1', 'Chicago Fire', 'New York Red Bulls'],
[11830, 'EST1', 'Cincinnati', 'Minnesota United'],
[11830, 'EST1', 'New York City', 'Montreal Impact'],
[11830, 'EST1', 'Philadelphia Union', 'Toronto FC'],
[12000, 'EST1', 'Houston Dynamo', 'Columbus Crew'],
[12030, 'EST1', 'Real Salt Lake', 'FC Dallas'],
[12030, 'EST1', 'Sporting Kansas City', 'Colorado Rapids'],
[12100, 'EST1', 'Vancouver Whitecaps', 'San Jose Earthquakes'],
[11830, 'EST2', 'Louisville City', 'Tampa Bay'],
[12130, 'EST2', 'Phoenix Rising', 'El Paso'],
[11000, 'FRA1', 'Lorient', 'Marsella'],
[11400, 'FRA1', 'PSG', 'Dijon'],
[10800, 'FRA2', 'SM Caen', 'EA Guingamp'],
[11200, 'FRA2', 'Auxerre', 'Chambly'],
[11200, 'FRA2', 'Chateauroux', 'Paris FC'],
[11200, 'FRA2', 'Clermont', 'AC Ajaccio'],
[11200, 'FRA2', 'Dunkerque', 'Le Havre'],
[11200, 'FRA2', 'Pau FC', 'Niort'],
[11200, 'FRA2', 'Toulouse', 'Rodez'],
[11200, 'FRA2', 'Troyes', 'Valenciennes'],
[10630, 'ING1', 'West Ham', 'Manchester City'],
[10900, 'ING1', 'Fulham', 'Crystal Palace'],
[11130, 'ING1', 'Manchester Utd', 'Chelsea'],
[11400, 'ING1', 'Liverpool', 'Sheffield Utd'],
[10630, 'ING2', 'Watford', 'Bournemouth'],
[10900, 'ING2', 'Bristol City', 'Swansea'],
[10900, 'ING2', 'Cardiff', 'Middlesbrough'],
[10900, 'ING2', 'Coventry', 'Blackburn'],
[10900, 'ING2', 'Huddersfield', 'Preston'],
[10900, 'ING2', 'Millwall', 'Barnsley'],
[10900, 'ING2', 'Norwich', 'Wycombe'],
[10900, 'ING2', 'QPR', 'Birmingham'],
[10900, 'ING2', 'Reading', 'Rotherham'],
[10900, 'ING2', 'Sheffield Wed', 'Luton'],
[10900, 'ING2', 'Stoke', 'Brentford'],
[10700, 'INGO', 'Gillingham FC', 'Fleetwood'],
[10900, 'INGO', 'Blackpool', 'MK Dons'],
[10900, 'INGO', 'Burton', 'Wimbledon'],
[10900, 'INGO', 'Doncaster', 'Crewe'],
[10900, 'INGO', 'Hull', 'Peterborough'],
[10900, 'INGO', 'Lincoln', 'Ipswich'],
[10900, 'INGO', 'Northampton', 'Charlton'],
[10900, 'INGO', 'Shrewsbury', 'Rochdale'],
[10900, 'INGO', 'Sunderland', 'Portsmouth'],
[10900, 'INGO', 'Wigan', 'Plymouth'],
[10700, 'ING2', 'Exeter', 'Scunthorpe'],
[10900, 'ING2', 'Barrow', 'Walsall'],
[10900, 'ING2', 'Bradford City', 'Newport'],
[10900, 'ING2', 'Cambridge Utd', 'Bolton'],
[10900, 'ING2', 'Cheltenham', 'Mansfield'],
[10900, 'ING2', 'Colchester', 'Harrogate'],
[10900, 'ING2', 'Grimsby', 'Carlisle'],
[10900, 'ING2', 'Morecambe', 'Forest Green'],
[10900, 'ING2', 'Oldham', 'Port Vale'],
[10900, 'ING2', 'Salford', 'Crawley'],
[10900, 'ING2', 'Stevenage', 'Leyton Orient'],
[10900, 'ING2', 'Tranmere', 'Southend'],
[10900, 'INGF', 'Aldershot', 'Woking'],
[10900, 'INGF', 'Banbury', 'Bury Town'],
[10900, 'INGF', 'Bath', 'Havant & W'],
[10900, 'INGF', 'Boreham Wood', 'Wimborne'],
[10900, 'INGF', 'Brackley Town', 'Marske'],
[10900, 'INGF', 'Canvey Island', 'Cray'],
[10900, 'INGF', 'Chester', 'Marine'],
[10900, 'INGF', 'Concord', 'Chippenham'],
[10900, 'INGF', 'Dagenham & Red.', 'Hartley Wintney'],
[10900, 'INGF', 'Darlington', 'Cambridge City'],
[10900, 'INGF', 'Eastbourne Boro', 'Dulwich Hamlet'],
[10900, 'INGF', 'Eastleigh', 'Weston-super-Mare'],
[10900, 'INGF', 'FC United', 'Guiseley'],
[10900, 'INGF', 'Hemel Hempstead', 'Hampton & Richmond'],
[10900, 'INGF', 'Ilkeston', 'Hartlepool'],
[10900, 'INGF', 'King’s Lynn', 'Notts County'],
[10900, 'INGF', 'Leiston', 'Barnet'],
[10900, 'INGF', 'Maidenhead', 'Cray Valley PM'],
[10900, 'INGF', 'Maldon & Tiptree', 'Haringey'],
[10900, 'INGF', 'Sholing', 'Torquay'],
[10900, 'INGF', 'Solihull Moors', 'Wrexham'],
[10900, 'INGF', 'South Shields', 'Halifax'],
[10900, 'INGF', 'Stafford', 'Skelmersdale'],
[10900, 'INGF', 'Stockport', 'Chesterfield'],
[10900, 'INGF', 'Sutton', 'Bromley'],
[10900, 'INGF', 'Tonbridge', 'Taunton'],
[10900, 'INGF', 'Wealdstone', 'Hayes & Yeading'],
[10900, 'INGF', 'Weymouth', 'Oxford City'],
[10900, 'INGF', 'Yeovil', 'Dover'],
[10800, 'ITA1', 'Atalanta', 'Sampdoria'],
[11100, 'ITA1', 'Genoa', 'Inter'],
[11345, 'ITA1', 'Lazio', 'Bolonia'],
[10700, 'ITA2', 'Monza', 'Chievo'],
[10700, 'ITA2', 'Pordenone', 'Reggina'],
[10700, 'ITA2', 'Salernitana', 'Ascoli'],
[10700, 'ITA2', 'Spal', 'L.R. Vicenza'],
[10800, 'ITA2', 'Entella', 'Venezia'],
[10900, 'ITA2', 'Pescara', 'Frosinone'],
[10000, 'JAP1', 'Kashima', 'Hiroshima'],
[10000, 'JAP1', 'Nagoya', 'Vegalta Sendai'],
[10000, 'JAP1', 'Sapporo', 'Yokohama FC'],
[10200, 'JAP1', 'G-Osaka', 'Kashiwa'],
[10300, 'JAP1', 'Urawa', 'C-Osaka'],
[11700, 'MEX1', 'Querétaro', 'Necaxa'],
[12000, 'MEX1', 'Tigres UANL', 'Juárez'],
[12100, 'MEX1', 'Club América', 'Atlas'],
[12100, 'MEX1', 'Mazatlán', 'Monterrey'],
[11200, 'MEX2', 'Tapatio', 'Tlaxcala'],
[10930, 'HOL1', 'Venlo', 'Ajax'],
[11145, 'HOL1', 'Utrecht', 'Twente'],
[11300, 'HOL1', 'Zwolle', 'Willem II'],
[11400, 'HOL1', 'Heerenveen', 'FC Emmen'],
[11600, 'PAR1', 'Sp. Luqueño', 'River Plate'],
[11815, 'PAR1', 'Guairena FC', 'Olimpia'],
[11030, 'PER1', 'Llacuabamba', 'Sport Boys'],
[11300, 'PER1', 'Carlos Mannucci', 'César Vallejo'],
[11530, 'PER1', 'Universitario', 'Grau'],
[11830, 'PER1', 'Cienciano', 'Sporting Cristal'],
[10800, 'POL1', 'Wisla', 'Podbeskidzie'],
[11030, 'POL1', 'Slask', 'Jagiellonia'],
[11300, 'POL1', 'Pogon Szczecin', 'Legia'],
[10930, 'POR1', 'Nacional', 'P. Ferreira'],
[11200, 'POR1', 'Santa Clara', 'Sporting CP'],
[11430, 'POR1', 'Oporto', 'Gil Vicente'],
[10500, 'POR2', 'Vizela', 'Académica'],
[10900, 'POR2', 'CD Cova da Piedade', 'Leixoes'],
[10900, 'POR2', 'Oporto B', 'Chaves'],
[10900, 'POR2', 'Vilafranquense', 'Casa Pia'],
[11100, 'POR2', 'Benfica B', 'Academico Viseu'],
[10600, 'RUM1', 'UTA Arad', 'Chindia Targoviste'],
[11130, 'RUM1', 'Astra', 'Poli Iasi'],
[11345, 'RUM1', 'Sepsi Sf. Gheorghe', 'Dinamo Bucarest'],
[10600, 'RUS1', 'Dinamo Moscú', 'Sochi'],
[10830, 'RUS1', 'Zenit', 'Rubin Kazan'],
[11100, 'RUS1', 'Krasnodar', 'Spartak Moscú'],
[11100, 'RUS1', 'Lokomotiv Moscú', 'R. Volgograd'],
[11200, 'SUI1', 'Lugano', 'St. Gallen'],
[11200, 'SUI1', 'Vaduz', 'Zúrich'],
[11030, 'SUI2', 'Wil', 'Lausanne Ouchy'],
[11100, 'SUI2', 'Winterthur', 'Chiasso'],
[11130, 'SUI2', 'Aarau', 'Xamax'],
[11200, 'SUI2', 'Grasshoppers', 'Schaffhausen'],
[10800, 'TUR1', 'Gaziantep', 'Konyaspor'],
[11100, 'TUR1', 'Başakşehir', 'Antalyaspor'],
[11100, 'TUR1', 'Erzurum BB', 'Galatasaray'],
[10530, 'TUR2', 'Umraniyespor', 'Altinordu'],
[11100, 'TUR2', 'Samsunspor', 'Keciorengucu'],
[10600, 'UCR1', 'Shakhtar', 'Vorskla'],
[10900, 'UCR1', 'Dinamo Kiev', 'Oleksandriya'],
[10900, 'UCR1', 'Olimpik Donetsk', 'Desna'],
[11130, 'UCR1', 'Lviv', 'Dnipro-1'],
[11215, 'URU1', 'Progreso', 'Plaza Colonia'],
[11430, 'URU1', 'Fénix', 'Boston River'],
[11600, 'VEN1', 'La Guaira', 'Lara'],
[12000, 'VEN1', 'Atl. Venezuela', 'Puerto Cabello'],
];
