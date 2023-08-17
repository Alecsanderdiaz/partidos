let PARTIDOS = [
    [118811130, 'ALE2', 'SV Wehen Wiesbaden', 3.60, 'Empate', 3.40, 'Karlsruher SC', 2.00, 90],
    [118811130, 'ALE2', '1. FC Kaiserslautern', 2.15, 'Empate', 3.40, 'SV Elversberg', 3.20, 90],
    [119810600, 'ALE2', 'Fortuna Dusseldorf', 2.15, 'Empate', 3.45, 'Paderborn', 3.10, 90],
    [119810600, 'ALE2', 'Hansa Rostock', 2.45, 'Empate', 3.25, 'Hannover 96', 2.80, 88],
    [119810600, 'ALE2', 'Greuther Furth', 2.75, 'Empate', 3.35, 'FC St. Pauli', 2.45, 88],
    [119811330, 'ALE2', 'Hamburger SV', 2.05, 'Empate', 3.50, 'Hertha Berlin', 3.30, 90],
    [120810630, 'ALE2', 'VfL Osnabruck', 2.60, 'Empate', 3.30, 'Nurnberg', 2.60, 88],
    [120810630, 'ALE2', 'Eintracht Braunschweig', 4.75, 'Empate', 3.60, 'Schalke 04', 1.727, 88],
    [120810630, 'ALE2', 'Holstein Kiel', 1.85, 'Empate', 3.60, '1. FC Magdeburg', 3.90, 90],
    [118811300, 'YE-HOL1', 'Heracles Almelo', 2.65, 'Empate', 3.60, 'NEC Nijmegen', 2.45, 147],
    [119811300, 'YE-HOL1', 'Fortuna Sittard', 1.95, 'Empate', 3.80, 'Almere City FC', 3.45, 148],
    [119811400, 'YE-HOL1', 'GO Ahead Eagles', 1.70, 'Empate', 4.00, 'Volendam', 4.50, 145],
    [120810515, 'YE-HOL1', 'Utrecht', 1.769, 'Empate', 4.00, 'Heerenveen', 4.20, 148],
    [120810730, 'YE-HOL1', 'Twente', 1.363, 'Empate', 5.00, 'Zwolle', 8.00, 146],
    [120810730, 'YE-HOL1', 'Sparta Rotterdam', 6.00, 'Empate', 4.75, 'Feyenoord Rotterdam', 1.45, 145],
    [120810945, 'YE-HOL1', 'RKC Waalwijk', 3.75, 'Empate', 3.85, 'AZ Alkmaar', 1.90, 148],
    [120811345, 'YE-TUR1', 'Gaziantep BB', 2.35, 'Empate', 3.45, 'Sivasspor', 2.80, 87],
    [120811030, 'ESP1', 'Girona', 2.20, 'Empate', 3.10, 'Getafe', 3.60, 141],
    [120811230, 'ESP1', 'Barcelona', 1.25, 'Empate', 6.00, 'CF Cadiz', 12.00, 145],
    [120811430, 'ESP1', 'Real Betis', 3.45, 'Empate', 3.30, 'Atlético Madrid', 2.15, 144],
    [121811200, 'ESP1', 'CD Alaves', 3.00, 'Empate', 3.10, 'Sevilla', 2.50, 141],
    [121811430, 'ESP1', 'Granada', 2.65, 'Empate', 3.10, 'Rayo Vallecano', 2.75, 143],
    [118811400, 'FRA1', 'FC Metz', 4.75, 'Empate', 4.00, 'Marseille', 1.666, 144],
    [119811000, 'FRA1', 'Lyon', 1.60, 'Empate', 4.20, 'Montpellier', 5.25, 146],
    [119811400, 'FRA1', 'Toulouse', 4.20, 'Empate', 4.333, 'PSG', 1.666, 149],
    [120810600, 'FRA1', 'Lille', 1.45, 'Empate', 4.50, 'Nantes', 7.00, 144],
    [120810800, 'FRA1', 'Lorient', 2.95, 'Empate', 3.40, 'Nice', 2.35, 146],
    [120810800, 'FRA1', 'Stade Reims', 1.80, 'Empate', 3.80, 'Clermont Foot', 4.20, 145],
    [120810800, 'FRA1', 'AC Le Havre', 2.80, 'Empate', 3.10, 'Brest', 2.625, 143],
    [120811005, 'FRA1', 'AS Monaco', 1.80, 'Empate', 3.90, 'Strasbourg', 4.00, 146],
    [120811345, 'FRA1', 'RC Lens', 2.15, 'Empate', 3.50, 'Rennes', 3.20, 146],
    [119811400, 'ZA-BRA1', 'Sao Paulo SP', 2.00, 'Empate', 3.20, 'Botafogo RJ', 4.00, 142],
    [119811630, 'ZA-BRA1', 'Fluminense RJ', 1.55, 'Empate', 3.95, 'America Mineiro MG', 6.00, 144],
    [119811630, 'ZA-BRA1', 'Cuiaba MT', 3.00, 'Empate', 3.30, 'Palmeiras SP', 2.35, 141],
    [119811900, 'ZA-BRA1', 'Cruzeiro MG', 2.10, 'Empate', 3.20, 'Corinthians SP', 3.70, 143],
    [120810900, 'ZA-BRA1', 'Vasco Da Gama RJ', 3.30, 'Empate', 3.10, 'Atletico MG', 2.30, 141],
    [120811400, 'ZA-BRA1', 'Bahia BA', 2.85, 'Empate', 3.30, 'Bragantino SP', 2.45, 145],
    [120811400, 'ZA-BRA1', 'Coritiba PR', 3.95, 'Empate', 3.45, 'Flamengo RJ', 1.95, 145],
    [120811400, 'ZA-BRA1', 'Santos SP', 2.80, 'Empate', 3.20, 'Gremio RS', 2.55, 143],
    [120811630, 'ZA-BRA1', 'Goias GO', 2.875, 'Empate', 3.00, 'Athletico PR', 2.60, 141],
    [121811800, 'ZA-BRA1', 'Internacional RS', 2.20, 'Empate', 3.10, 'Fortaleza CE', 3.50, 143],
    [111811900, 'AMI-C', 'Cimarrones de Sonora FC III', 2.25, 'Empate', 3.65, 'Deportivo Etchojoa', 2.50, 9],
    [118811400, 'R-ING2', 'Leeds United', 1.833, 'Empate', 3.50, 'West Bromwich', 4.333, 144],
    [118810500, 'S-JAP1', 'Avispa Fukuoka', 2.10, 'Empate', 3.25, 'Albirex Niigata', 3.55, 90],
    [118810530, 'S-JAP1', 'Urawa Red Diamonds', 2.25, 'Empate', 3.00, 'Nagoya Grampus', 3.35, 86],
    [118811100, 'YE-POLE', 'Zaglebie Lubin', 1.533, 'Empate', 4.20, 'Puszcza Niepolomice', 5.50, 89],
    [118811330, 'YE-POLE', 'Gornik Zabrze', 2.25, 'Empate', 3.20, 'Widzew Lodz', 3.20, 89],
    [119810800, 'YE-POLE', 'Radomiak Radom', 2.15, 'Empate', 3.10, 'Warta Poznan', 3.60, 89],
    [119811030, 'YE-POLE', 'Rakow Czestochowa', 1.285, 'Empate', 5.25, 'Stal Mielec', 10.00, 89],
    [119811300, 'YE-POLE', 'Ruch Chorzow', 2.60, 'Empate', 3.20, 'Jagiellonia Bialystok', 2.70, 89],
    [120810800, 'YE-POLE', 'LKS Lodz', 3.90, 'Empate', 3.35, 'Pogon Szczecin', 1.95, 90],
    [120811030, 'YE-POLE', 'Slask Wroclaw', 4.00, 'Empate', 3.45, 'Lech Poznan', 1.85, 88],
    [120811300, 'YE-POLE', 'Legia Warsaw', 1.444, 'Empate', 4.50, 'Korona Kielce', 6.50, 90],
    [119810800, 'FRA2', 'Angers SCO', 2.55, 'Empate', 3.20, 'AJ Auxerre', 2.70, 89],
    [119811200, 'FRA2', 'Concarneau', 3.55, 'Empate', 3.25, 'Caen', 2.05, 89],
    [119811200, 'FRA2', 'SC Amiens', 2.50, 'Empate', 3.20, 'SC Bastia', 2.75, 89],
    [119811200, 'FRA2', 'Valenciennes', 3.35, 'Empate', 3.35, 'EA Guingamp', 2.10, 90],
    [119811200, 'FRA2', 'Laval', 1.909, 'Empate', 3.40, 'Rodez Aveyron', 3.95, 89],
    [119811200, 'FRA2', 'Grenoble', 2.30, 'Empate', 3.25, 'Troyes', 3.10, 89],
    [119811200, 'FRA2', 'Annecy FC', 2.80, 'Empate', 3.20, 'Dunkerque', 2.50, 89],
    [119811200, 'FRA2', 'Pau FC', 2.50, 'Empate', 3.10, 'Paris FC', 2.85, 89],
    [119811200, 'FRA2', 'Saint Etienne', 1.666, 'Empate', 3.75, 'Quevilly US', 4.75, 87],
    [121811345, 'FRA2', 'Ajaccio', 2.25, 'Empate', 3.00, 'Burdeos', 3.40, 87],
    [118811300, 'ZA-ARG2', 'Deportivo Riestra', 1.769, 'Empate', 3.25, 'Chaco For Ever', 4.50, 75],
    [119811300, 'ZA-ARG2', 'Brown de Adrogue', 2.20, 'Empate', 2.80, 'Deportivo Madryn', 3.50, 75],
    [119811510, 'ZA-ARG2', 'Club Atletico Atlanta', 3.25, 'Empate', 3.10, 'Chacarita Juniors', 2.20, 74],
    [119811700, 'ZA-ARG2', 'Tristan Suarez', 2.35, 'Empate', 3.40, 'CA Aldosivi', 2.70, 77],
    [119811700, 'ZA-ARG2', 'Estudiantes de Buenos Aires', 2.55, 'Empate', 3.00, 'Atletico Rafaela', 2.70, 76],
    [119811710, 'ZA-ARG2', 'Ferro Carril Oeste', 2.80, 'Empate', 3.25, 'Independiente Rivadavia', 2.35, 76],
    [119811735, 'ZA-ARG2', 'Quilmes AC', 1.333, 'Empate', 4.333, 'Villa Dalmine', 10.00, 75],
    [118811805, 'ZA-MEX2', 'Coyotes FC', 3.10, 'Empate', 3.35, 'Cimarrones de Sonora', 2.20, 87],
    [119812005, 'ZA-MEX2', 'Cancun FC', 2.50, 'Empate', 3.25, 'Atletico Morelia', 2.75, 89],
[118811430, 'ZA-ARG1', 'Defensa Y Justicia', 2.20, 'Empate', 3.30, 'Godoy Cruz', 3.35, 162],
[118811700, 'ZA-ARG1', 'Union Santa Fe', 2.35, 'Empate', 3.10, 'Racing Club', 3.25, 159],
[118811900, 'ZA-ARG1', 'Boca Juniors', 1.80, 'Empate', 3.35, 'Platense', 4.75, 143],
[119811430, 'ZA-ARG1', 'CA Independiente', 2.05, 'Empate', 3.25, 'Colon de Santa Fe', 3.85, 143],
[119811700, 'ZA-ARG1', 'Gimnasia LP', 3.60, 'Empate', 3.45, 'Talleres de Cordoba', 2.05, 144],
[119811900, 'ZA-ARG1', 'Velez Sarsfield', 2.25, 'Empate', 3.20, 'CA Barracas Central', 3.40, 142],
[120811400, 'ZA-ARG1', 'Argentinos Juniors', 3.25, 'Empate', 3.30, 'River Plate', 2.25, 145],
[120811400, 'ZA-ARG1', 'Huracan', 2.375, 'Empate', 3.00, 'Banfield', 3.25, 141],
[120811400, 'ZA-ARG1', 'Atletico Lanus', 2.25, 'Empate', 3.00, 'San Lorenzo', 3.60, 141],
[120811400, 'ZA-ARG1', 'Sarmiento', 2.55, 'Empate', 3.10, 'CA Tigre', 2.85, 142],
[120811400, 'ZA-ARG1', 'Rosario Central', 2.15, 'Empate', 3.25, 'Atletico Tucuman', 3.45, 143],
[120811400, 'ZA-ARG1', 'Arsenal de Sarandi', 3.35, 'Empate', 2.95, 'Instituto AC Cordoba', 2.375, 141],
[121811830, 'ZA-ARG1', 'Newells Old Boys', 2.45, 'Empate', 3.00, 'Central Cordoba', 3.10, 141],
[118811500, 'ZA-ECU1', 'Cumbaya FC', 2.60, 'Empate', 3.25, 'Deportivo Cuenca', 2.55, 78],
[118811730, 'ZA-ECU1', 'LDU Quito', 1.50, 'Empate', 4.20, 'El Nacional', 5.50, 77],
[118812000, 'ZA-ECU1', 'Barcelona SC', 2.25, 'Empate', 3.30, 'Independiente Del Valle', 2.90, 78],
[118812006, 'ZA-MEX1', 'Leon', 1.333, 'Empate', 5.25, 'Mazatlan FC', 9.00, 170],
[118812200, 'ZA-MEX1', 'Pumas Unam', 2.60, 'Empate', 3.50, 'Toluca', 2.55, 172],
[118812206, 'ZA-MEX1', 'Puebla', 2.20, 'Empate', 3.55, 'Atletico San Luis', 3.10, 173],
[118812210, 'ZA-MEX1', 'FC Juarez', 2.60, 'Empate', 3.20, 'Chivas Guadalajara', 2.75, 168],
[120811800, 'ZA-MEX1', 'Cruz Azul', 2.30, 'Empate', 3.45, 'Santos Laguna', 3.00, 172],
[120812006, 'ZA-MEX1', 'Queretaro FC', 2.875, 'Empate', 3.40, 'Pachuca', 2.40, 172],
[120812010, 'ZA-MEX1', 'Atlas de Guadalajara', 2.95, 'Empate', 3.40, 'America', 2.35, 172],
[120812200, 'ZA-MEX1', 'Necaxa', 3.40, 'Empate', 3.35, 'Tigres UANL', 2.15, 170],
[122812000, 'ZA-MEX1', 'Chivas Guadalajara', 1.75, 'Empate', 3.60, 'Tijuana', 4.00, 1],
[122812000, 'ZA-MEX1', 'Mazatlan FC', 2.20, 'Empate', 3.30, 'Puebla', 2.85, 1],
[122812206, 'ZA-MEX1', 'FC Juarez', 2.25, 'Empate', 3.30, 'Pumas Unam', 2.80, 1],
[123812000, 'ZA-MEX1', 'America', 1.40, 'Empate', 3.80, 'Necaxa', 8.00, 1],
[123812006, 'ZA-MEX1', 'Pachuca', 1.90, 'Empate', 3.40, 'Cruz Azul', 3.60, 1],
[123812200, 'ZA-MEX1', 'Atletico San Luis', 2.25, 'Empate', 3.30, 'Leon', 2.85, 1],
[125812000, 'ZA-MEX1', 'Puebla', 2.10, 'Empate', 3.30, 'FC Juarez', 3.10, 1],
[125812200, 'ZA-MEX1', 'Tijuana', 1.85, 'Empate', 3.50, 'Mazatlan FC', 3.60, 1],
[126811800, 'ZA-MEX1', 'Atlas de Guadalajara', 2.40, 'Empate', 3.30, 'Toluca', 2.60, 1],
[126812000, 'ZA-MEX1', 'America', 1.60, 'Empate', 3.70, 'Leon', 5.00, 1],
[126812200, 'ZA-MEX1', 'Santos Laguna', 2.50, 'Empate', 3.30, 'Chivas Guadalajara', 2.50, 1],
[127811700, 'ZA-MEX1', 'Necaxa', 2.00, 'Empate', 3.30, 'Queretaro FC', 3.30, 1],
[127811900, 'ZA-MEX1', 'Pumas Unam', 2.60, 'Empate', 3.30, 'Tigres UANL', 2.40, 1],
[127812100, 'ZA-MEX1', 'Monterrey', 1.85, 'Empate', 3.40, 'Cruz Azul', 3.75, 1],
[128812200, 'ZA-MEX1', 'Pachuca', 1.80, 'Empate', 3.40, 'Atletico San Luis', 4.00, 1],
]

