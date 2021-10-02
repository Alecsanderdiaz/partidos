let PARTIDOS = [
    [10830, 'ALE1', 'Borussia Dortmund', 'Augsburgo'],
    [10830, 'ALE1', 'Hertha BSC', 'Friburgo'],
    [10830, 'ALE1', 'Stuttgart', 'Hoffenheim'],
    [10830, 'ALE1', 'Wolfsburgo', 'Borussia Mgladbach'],
    [11130, 'ALE1', 'RB Leipzig', 'Bochum'],
    [10630, 'ALE2', 'Fortuna Düsseldorf', 'Paderborn'],
    [10630, 'ALE2', 'Kiel', 'Rostock'],
    [10630, 'ALE2', 'Regensburg', 'Karlsruher'],
    [11330, 'ALE2', 'Núremberg', 'Hannover'],
    [10700, 'ALE3', '1860 Múnich', 'Viktoria Berlin'],
    [10700, 'ALE3', 'Duisburgo', 'Meppen'],
    [10700, 'ALE3', 'Friburgo II', 'Hallescher'],
    [10700, 'ALE3', 'Havelse', 'Kaiserslautern'],
    [10700, 'ALE3', 'Osnabruck', 'Zwickau'],
    [10700, 'ALE3', 'Wehen', 'Viktoria Köln'],
    [11130, 'ARG1', 'Godoy Cruz', 'Newells'],
    [11130, 'ARG1', 'Platense', 'Patronato'],
    [11345, 'ARG1', 'Huracán', 'Arsenal Sarandí'],
    [11600, 'ARG1', 'Atl. Tucumán', 'San Lorenzo'],
    [11815, 'ARG1', 'Vélez Sarsfield', 'Independiente'],
    [10930, 'ARG2', 'Barracas Central', 'All Boys'],
    [11300, 'ARG2', 'Chacarita', 'Deportivo Maipu'],
    [11400, 'ARG2', 'Guillermo Brown', 'Tristán Suárez'],
    [11410, 'ARG2', 'CA Estudiantes', 'Tigre'],
    [11500, 'ARG2', 'San Martín S.J.', 'Deportivo Morón'],
    [10915, 'BEL1', 'Kortrijk', 'Charleroi'],
    [11130, 'BEL1', 'Círculo Brujas', 'Royale Union SG'],
    [11130, 'BEL1', 'St. Truiden', 'Oostende'],
    [11345, 'BEL1', 'Leuven', 'Beerschot VA'],
    [10600, 'BIE1', 'Dinamo Brest', 'FC Minsk'],
    [10800, 'BIE1', 'Vitebsk', 'Isloch'],
    [11000, 'BIE1', 'Zhodino', 'Smorgon'],
    [11200, 'BIE1', 'Gomel', 'Slavia Mozyr'],
    [11500, 'BRA1', 'Cuiabá', 'América-MG'],
    [11500, 'BRA1', 'Fortaleza', 'Atlético-GO'],
    [11700, 'BRA1', 'Bragantino', 'Corinthians'],
    [11900, 'BRA1', 'Atlético-MG', 'Internacional'],
    [11400, 'BRA2', 'Brusque', 'Guaraní'],
    [11400, 'BRA2', 'Goiás', 'Vitória'],
    [11630, 'BRA2', 'CRB', 'CSA'],
    [11700, 'BRA2', 'Botafogo', 'Avaí'],
    [11900, 'BRA2', 'Ponte Preta', 'Vila Nova'],
    [11300, 'BRAS', 'Atlético-GO Sub-20', 'Chapecoense Sub-20'],
    [11830, 'CHI1', 'U. La Calera', 'U. Católica'],
    [11400, 'COL1', 'La Equidad', 'Quindío'],
    [11600, 'COL1', 'Envigado', 'Deportivo Cali'],
    [11805, 'COL1', 'Pereira', 'Atl. Nacional'],
    [12010, 'COL1', 'América de Cali', 'Atl. Huila'],
    [11500, 'COL2', 'Orsomarso', 'Real Santander'],
    [11700, 'COL2', 'Barranquilla', 'Boca Juniors'],
    [10000, 'COR1', 'Gangwon', 'Jeonbuk'],
    [10230, 'COR1', 'Suwon City', 'Ulsan Hyundai'],
    [10500, 'COR1', 'Incheon', 'Suwon'],
    [11500, 'ECU1', 'Orense', 'Macará'],
    [11730, 'ECU1', 'Nueve de Octubre', 'Ind. del Valle'],
    [12000, 'ECU1', 'LDU Quito', 'Guayaquil City'],
    [10900, 'ESC1', 'Dundee Utd', 'Ross County'],
    [10900, 'ESC1', 'Hearts', 'Motherwell'],
    [10900, 'ESC1', 'Livingston', 'St. Mirren'],
    [10900, 'ESC1', 'St. Johnstone', 'Dundee FC'],
    [10900, 'ESC2', 'Hamilton', 'Inverness'],
    [10900, 'ESC2', 'Kilmarnock', 'Raith'],
    [10900, 'ESC2', 'Morton', 'Arbroath'],
    [10900, 'ESC2', 'Partick Thistle', 'Ayr'],
    [10900, 'ESC2', 'Queen of South', 'Dunfermline'],
    [10700, 'ESP1', 'Osasuna', 'Rayo Vallecano'],
    [10915, 'ESP1', 'Mallorca', 'Levante'],
    [11130, 'ESP1', 'Cádiz', 'Valencia'],
    [11400, 'ESP1', 'Atlético de Madrid', 'Barcelona'],
    [10900, 'ESP2', 'Amorebieta', 'Sporting de Gijón'],
    [10900, 'ESP2', 'Huesca', 'Tenerife'],
    [11115, 'ESP2', 'Real Zaragoza', 'Real Oviedo'],
    [11400, 'ESP2', 'Alcorcón', 'R. Sociedad B'],
    [11430, 'EST1', 'Austin FC', 'Real Salt Lake'],
    [11800, 'EST1', 'Club de Foot Montreal', 'Atlanta Utd'],
    [11830, 'EST1', 'Cincinnati', 'New York Red Bulls'],
    [11830, 'EST1', 'Orlando City', 'DC United'],
    [11900, 'EST1', 'FC Dallas', 'Minnesota United'],
    [12100, 'EST1', 'Vancouver Whitecaps', 'San Jose Earthquakes'],
    [11800, 'EST2', 'Charleston', 'Tampa Bay'],
    [11800, 'EST2', 'Indy Eleven', 'Atlanta United 2'],
    [11830, 'EST2', 'Miami FC', 'Pittsburgh'],
    [11900, 'EST2', 'Colorado Springs', 'El Paso'],
    [11900, 'EST2', 'FC Tulsa', 'Memphis'],
    [11930, 'EST2', 'Rio Grande', 'Real Monarchs'],
    [12100, 'EST2', 'Oakland Roots', 'Las Vegas Lights'],
    [12100, 'EST2', 'Orange County SC', 'Phoenix Rising'],
    [12130, 'EST2', 'LA Galaxy 2', 'San Diego Loyal'],
    [12130, 'EST2', 'Sacramento Republic', 'Tacoma Defiance'],
    [11000, 'FRA1', 'Montpellier', 'Estrasburgo'],
    [11400, 'FRA1', 'Niza', 'Brest'],
    [10800, 'FRA2', 'Amiens', 'Toulouse'],
    [10800, 'FRA2', 'Auxerre', 'Nimes'],
    [11200, 'FRA2', 'AC Ajaccio', 'Quevilly Rouen'],
    [11200, 'FRA2', 'Dunkerque', 'Bastia'],
    [11200, 'FRA2', 'EA Guingamp', 'Rodez'],
    [11200, 'FRA2', 'Grenoble', 'Pau FC'],
    [11200, 'FRA2', 'Le Havre', 'Dijon'],
    [11200, 'FRA2', 'Paris FC', 'Nancy'],
    [11200, 'FRA2', 'SM Caen', 'Valenciennes'],
    [11200, 'FRA2', 'Sochaux', 'Niort'],
    [10800, 'GRE1', 'Volos', 'Asteras T.'],
    [11230, 'GRE1', 'Aris', 'Smyrnis'],
    [10630, 'ING1', 'Manchester Utd', 'Everton'],
    [10900, 'ING1', 'Burnley', 'Norwich'],
    [10900, 'ING1', 'Chelsea', 'Southampton'],
    [10900, 'ING1', 'Leeds Utd', 'Watford'],
    [10900, 'ING1', 'Wolves', 'Newcastle'],
    [11130, 'ING1', 'Brighton', 'Arsenal'],
    [10630, 'ING2', 'Coventry', 'Fulham'],
    [10900, 'ING2', 'Barnsley', 'Millwall'],
    [10900, 'ING2', 'Birmingham', 'Nottingham Forest'],
    [10900, 'ING2', 'Blackpool', 'Blackburn'],
    [10900, 'ING2', 'Bournemouth', 'Sheffield Utd'],
    [10900, 'ING2', 'Cardiff', 'Reading'],
    [10900, 'ING2', 'Derby', 'Swansea'],
    [10900, 'ING2', 'Hull', 'Middlesbrough'],
    [10900, 'ING2', 'Luton', 'Huddersfield'],
    [10900, 'ING2', 'Peterborough', 'Bristol City'],
    [10900, 'ING2', 'QPR', 'Preston'],
    [10900, 'INGO', 'Accrington', 'Ipswich'],
    [10900, 'INGO', 'Bolton', 'Shrewsbury'],
    [10900, 'INGO', 'Cheltenham', 'Rotherham'],
    [10900, 'INGO', 'Crewe', 'Cambridge Utd'],
    [10900, 'INGO', 'Doncaster', 'MK Dons'],
    [10900, 'INGO', 'Fleetwood', 'Charlton'],
    [10900, 'INGO', 'Gillingham FC', 'Wigan'],
    [10900, 'INGO', 'Lincoln', 'Plymouth'],
    [10900, 'INGO', 'Portsmouth', 'Sunderland'],
    [10900, 'INGO', 'Sheffield Wed', 'Oxford Utd'],
    [10900, 'INGO', 'Wimbledon', 'Burton'],
    [10900, 'INGO', 'Wycombe', 'Morecambe'],
    [10900, 'ING2', 'Bradford City', 'Rochdale'],
    [10900, 'ING2', 'Bristol Rovers', 'Swindon'],
    [10900, 'ING2', 'Carlisle', 'Forest Green'],
    [10900, 'ING2', 'Colchester', 'Salford'],
    [10900, 'ING2', 'Exeter', 'Walsall'],
    [10900, 'ING2', 'Mansfield', 'Barrow'],
    [10900, 'ING2', 'Newport', 'Scunthorpe'],
    [10900, 'ING2', 'Northampton', 'Sutton'],
    [10900, 'ING2', 'Oldham', 'Harrogate'],
    [10900, 'ING2', 'Port Vale', 'Leyton Orient'],
    [10900, 'ING2', 'Stevenage', 'Hartlepool'],
    [10900, 'ING2', 'Tranmere', 'Crawley'],
    [10900, 'INGN', 'Aldershot', 'Wrexham'],
    [10900, 'INGN', 'Barnet', 'Halifax'],
    [10900, 'INGN', 'Dagenham & Red.', 'Altrincham'],
    [10900, 'INGN', 'Grimsby', 'Dover'],
    [10900, 'INGN', 'Maidenhead', 'King’s Lynn'],
    [10900, 'INGN', 'Notts County', 'Woking'],
    [10900, 'INGN', 'Solihull Moors', 'Southend'],
    [10900, 'INGN', 'Torquay', 'Wealdstone'],
    [10900, 'INGN', 'Weymouth', 'Stockport'],
    [11120, 'INGN', 'Eastleigh', 'Boreham Wood'],
    [10800, 'ITA1', 'Salernitana', 'Genoa'],
    [11100, 'ITA1', 'Torino', 'Juventus'],
    [11345, 'ITA1', 'Sassuolo', 'Inter'],
    [10700, 'ITA2', 'Alessandria', 'Cosenza'],
    [10700, 'ITA2', 'Cremonese', 'Ternana'],
    [10700, 'ITA2', 'Crotone', 'Ascoli'],
    [10700, 'ITA2', 'Frosinone', 'Cittadella'],
    [10915, 'ITA2', 'Pisa', 'Reggina'],
    [11130, 'ITA2', 'Spal', 'Parma'],
    [10100, 'JAP1', 'Vissel Kobe', 'Urawa'],
    [10200, 'JAP1', 'Kashima', 'Yokohama FC'],
    [10200, 'JAP1', 'Kashiwa', 'Vegalta Sendai'],
    [10300, 'JAP1', 'Kawasaki', 'Tokyo'],
    [10500, 'JAP1', 'G-Osaka', 'Sapporo'],
    [12300, 'JAP1', 'Tokushima', 'Sagan Tosu'],
    [11700, 'MEX1', 'León', 'Atlético de San Luis'],
    [11906, 'MEX1', 'Santos Laguna', 'Mazatlán'],
    [12100, 'MEX1', 'Guadalajara', 'Atlas'],
    [11145, 'HOL1', 'Waalwijk', 'G.A. Eagles'],
    [11300, 'HOL1', 'Heracles', 'Willem II'],
    [11300, 'HOL1', 'Zwolle', 'Heerenveen'],
    [11400, 'HOL1', 'Sittard', 'Nijmegen'],
    [11700, 'PAR1', 'Sp. Luqueño', 'Sol de América'],
    [11915, 'PAR1', 'River Plate', 'Guairena FC'],
    [11030, 'PER1', 'Sport Huancayo', 'Alianza Huánuco'],
    [11300, 'PER1', 'Dep. Municipal', 'Binacional'],
    [11530, 'PER1', 'Alianza Lima', 'UTC'],
    [10530, 'POLE', 'Radomiak Radom', 'Termalica B-B.'],
    [10800, 'POLE', 'Cracovia', 'Stal Mielec'],
    [11030, 'POLE', 'Lech', 'Slask'],
    [11300, 'POLE', 'Gornik Z.', 'Plock'],
    [10930, 'POR1', 'Vizela', 'Santa Clara'],
    [11200, 'POR1', 'Oporto', 'P. Ferreira'],
    [11430, 'POR1', 'Arouca', 'Sporting CP'],
    [10500, 'POR2', 'Estrela', 'Leixoes'],
    [10800, 'POR2', 'Academico Viseu', 'Académica'],
    [10900, 'REP1', 'Bohemians', 'Sigma Olomouc'],
    [10900, 'REP1', 'Ceske Budejovice', 'Pardubice'],
    [10900, 'REP1', 'Slovacko', 'Teplice'],
    [11200, 'REP1', 'Plzen', 'Zlin'],
    [10830, 'RUM1', 'Dinamo Bucarest', 'UTA Arad'],
    [11130, 'RUM1', 'Sepsi Sf. Gheorghe', 'Rapid Bucarest'],
    [10600, 'RUS1', 'Rubin Kazan', 'Nizhny Novgorod'],
    [10830, 'RUS1', 'Dinamo Moscú', 'Kr. Sovetov'],
    [11100, 'RUS1', 'Arsenal Tula', 'Khimki'],
    [11100, 'RUS1', 'CSKA Moscú', 'Krasnodar'],
    [11100, 'SUI1', 'Grasshoppers', 'St. Gallen'],
    [11330, 'SUI1', 'Lugano', 'Lausanne'],
    [11100, 'SUI2', 'Wil', 'Lausanne Ouchy'],
    [11100, 'SUI2', 'Winterthur', 'Yverdon'],
    [10530, 'TUR1', 'Konyaspor', 'Alanyaspor'],
    [10800, 'TUR1', 'Göztepe', 'Giresunspor'],
    [10800, 'TUR1', 'Kayserispor', 'Trabzonspor'],
    [11100, 'TUR1', 'Beşiktaş', 'Sivasspor'],
    [10530, 'TUR2', 'Tuzlaspor', 'Keciorengucu'],
    [10800, 'TUR2', 'Balikesirspor', 'Genclerbirligi'],
    [11100, 'TUR2', 'Adanaspor', 'Bandirmaspor'],
    [11100, 'TUR2', 'Kocaelispor', 'Istanbulspor'],
    [10600, 'UCR1', 'Kolos Kovalivka', 'Ch. Odessa'],
    [10900, 'UCR1', 'Lviv', 'Dnipro-1'],
    [11130, 'UCR1', 'Vorskla', 'Inhulets'],
    [11115, 'URU1', 'Villa Española', 'Fénix'],
    [11330, 'URU1', 'River Plate', 'Cerro Largo'],
    [11715, 'VEN1', 'Zamora', 'Zulia'],
    [11930, 'VEN1', 'Carabobo', 'La Guaira'],
]
