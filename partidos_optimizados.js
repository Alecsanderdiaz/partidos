
let PARTIDOS_OPTIMIZADOS = [
    { "hora": 10900, "liga": "YE-BEL1", "local": "Mechelen", "visitante": "KAA Gent", "cuotaLocal": 3.8, "empate": 3.85, "cuotaVisitante": 1.833, "cantidadDeApuestas": 101, "cuotaCualquiera": 1.25 },
    { "hora": 10900, "liga": "R-ESC1", "local": "Hibernian", "visitante": "St Mirren", "cuotaLocal": 1.909, "empate": 3.6, "cuotaVisitante": 3.9, "cantidadDeApuestas": 111, "cuotaCualquiera": 1.444 },
    { "hora": 10900, "liga": "YE-UCR1", "local": "Kolos Kovalyovka", "visitante": "Chernomorets Odessa", "cuotaLocal": 2.7, "empate": 3.1, "cuotaVisitante": 2.45, "cantidadDeApuestas": 42, "cuotaCualquiera": 1.48 },
    { "hora": 10900, "liga": "YE-UCR1", "local": "Zorya Lugansk", "visitante": "Kryvbas Kryvyi Rih", "cuotaLocal": 2.15, "empate": 3.3, "cuotaVisitante": 3, "cantidadDeApuestas": 42, "cuotaCualquiera": 1.38 },
    { "hora": 10900, "liga": "XX-XXXX", "local": "Brighton", "visitante": "Rayo Vallecano", "cuotaLocal": 1, "empate": 1, "cuotaVisitante": 1, "cantidadDeApuestas": 1, "cuotaCualquiera": 1.25 },
    { "hora": 10930, "liga": "ALE3", "local": "SC Freiburg II", "visitante": "MSV Duisburg", "cuotaLocal": 2, "empate": 3.4, "cuotaVisitante": 3.35, "cantidadDeApuestas": 77, "cuotaCualquiera": 1.333 },
    { "hora": 10930, "liga": "YE-RUS1", "local": "Baltika", "visitante": "Fakel Voronezh", "cuotaLocal": 2.2, "empate": 3.1, "cuotaVisitante": 3.2, "cantidadDeApuestas": 77, "cuotaCualquiera": 1.5 },
    { "hora": 10930, "liga": "YE-SUI1", "local": "Grasshoppers", "visitante": "FC Basel", "cuotaLocal": 2.8, "empate": 3.6, "cuotaVisitante": 2.3, "cantidadDeApuestas": 91, "cuotaCualquiera": 1.25 },
    { "hora": 10930, "liga": "YE-SUI1", "local": "FC St. Gallen", "visitante": "FC Luzern", "cuotaLocal": 1.769, "empate": 3.95, "cuotaVisitante": 4, "cantidadDeApuestas": 91, "cuotaCualquiera": 1.25 },
    { "hora": 11000, "liga": "AMI-E", "local": "Borussia Dortmund", "visitante": "Ajax Amsterdam", "cuotaLocal": 1.666, "empate": 4, "cuotaVisitante": 4.5, "cantidadDeApuestas": 89, "cuotaCualquiera": 1.2 },
    { "hora": 11000, "liga": "AMI-C", "local": "Newcastle", "visitante": "Villarreal", "cuotaLocal": 2.05, "empate": 3.5, "cuotaVisitante": 3.35, "cantidadDeApuestas": 90, "cuotaCualquiera": 1.3 },
    { "hora": 11000, "liga": "YE-BIE1", "local": "Torpedo Zhodino", "visitante": "Dinamo Brest", "cuotaLocal": 1.65, "empate": 3.55, "cuotaVisitante": 4.75, "cantidadDeApuestas": 42, "cuotaCualquiera": 1.4 },
    { "hora": 11000, "liga": "R-COM", "local": "Manchester City", "visitante": "Arsenal", "cuotaLocal": 1.9, "empate": 3.9, "cuotaVisitante": 3.9, "cantidadDeApuestas": 197, "cuotaCualquiera": 1 },
    { "hora": 11000, "liga": "XX-XXXX", "local": "Manchester United", "visitante": "Athletic Bilbao", "cuotaLocal": 1, "empate": 1, "cuotaVisitante": 1, "cantidadDeApuestas": 1, "cuotaCualquiera": 1.35 },
    { "hora": 11000, "liga": "XX-XXXX", "local": "Stade Reims", "visitante": "Torino", "cuotaLocal": 1, "empate": 1, "cuotaVisitante": 1, "cantidadDeApuestas": 1, "cuotaCualquiera": 1.4 },
    { "hora": 11015, "liga": "YE-RUM1", "local": "Petrolul Ploiesti", "visitante": "Farul Constanta", "cuotaLocal": 2.75, "empate": 3.1, "cuotaVisitante": 2.45, "cantidadDeApuestas": 77, "cuotaCualquiera": 1.48 },
    { "hora": 11030, "liga": "YE-POLE", "local": "Zaglebie Lubin", "visitante": "Lech Poznan", "cuotaLocal": 3.25, "empate": 3.35, "cuotaVisitante": 2.15, "cantidadDeApuestas": 95, "cuotaCualquiera": 1.363 },
    { "hora": 11100, "liga": "R-ING2", "local": "Sunderland", "visitante": "Ipswich Town", "cuotaLocal": 2.5, "empate": 3.4, "cuotaVisitante": 2.9, "cantidadDeApuestas": 178, "cuotaCualquiera": 1.4 },
    { "hora": 11100, "liga": "ITAC", "local": "Reggiana", "visitante": "Pescara", "cuotaLocal": 2, "empate": 3.35, "cuotaVisitante": 3.45, "cantidadDeApuestas": 77, "cuotaCualquiera": 1.35 },
    { "hora": 11100, "liga": "YE-RUS1", "local": "Zenit St Petersburg", "visitante": "Dinamo Moscow", "cuotaLocal": 1.48, "empate": 4.333, "cuotaVisitante": 5.5, "cantidadDeApuestas": 81, "cuotaCualquiera": 1.285 },
    { "hora": 11100, "liga": "YE-REP1", "local": "Slavia Prague", "visitante": "Fastav Zlin", "cuotaLocal": 1.1, "empate": 8, "cuotaVisitante": 21, "cantidadDeApuestas": 80, "cuotaCualquiera": 1.181 },
    { "hora": 11100, "liga": "YE-UCR1", "local": "Rukh Vynnyky", "visitante": "Vorskla Poltava", "cuotaLocal": 2.35, "empate": 3.2, "cuotaVisitante": 2.8, "cantidadDeApuestas": 42, "cuotaCualquiera": 1.48 },
    { "hora": 11130, "liga": "YE-BEL1", "local": "Westerlo", "visitante": "Club Brugge", "cuotaLocal": 3.45, "empate": 3.7, "cuotaVisitante": 1.95, "cantidadDeApuestas": 101, "cuotaCualquiera": 1.285 },
    { "hora": 11130, "liga": "ZA-CHI1", "local": "Nublense", "visitante": "Cobresal", "cuotaLocal": 2.55, "empate": 3.1, "cuotaVisitante": 2.7, "cantidadDeApuestas": 82, "cuotaCualquiera": 1.45 },
    { "hora": 11130, "liga": "XX-XXXX", "local": "Napoles", "visitante": "Augsburg", "cuotaLocal": 1, "empate": 1, "cuotaVisitante": 1, "cantidadDeApuestas": 1, "cuotaCualquiera": 1.25 },
    { "hora": 11130, "liga": "XX-XXXX", "local": "Novara", "visitante": "Sampdoria", "cuotaLocal": 1, "empate": 1, "cuotaVisitante": 1, "cantidadDeApuestas": 1, "cuotaCualquiera": 1.3 },
    { "hora": 11200, "liga": "YE-RUS1", "local": "FC Sochi - 04", "visitante": "FC Akhmat Grozny", "cuotaLocal": 2.25, "empate": 3.25, "cuotaVisitante": 3, "cantidadDeApuestas": 83, "cuotaCualquiera": 1.4 },
    { "hora": 11200, "liga": "XX-XXXX", "local": "Burgos CF", "visitante": "CD Alaves", "cuotaLocal": 1, "empate": 1, "cuotaVisitante": 1, "cantidadDeApuestas": 1, "cuotaCualquiera": 1.533 },
    { "hora": 11215, "liga": "YE-BEL1", "local": "Kortrijk", "visitante": "St Truiden", "cuotaLocal": 2.85, "empate": 3.4, "cuotaVisitante": 2.35, "cantidadDeApuestas": 99, "cuotaCualquiera": 1.42 },
    { "hora": 11230, "liga": "ALE3", "local": "FC Erzgebirge Aue", "visitante": "FC Ingolstadt 04", "cuotaLocal": 2.625, "empate": 3.25, "cuotaVisitante": 2.5, "cantidadDeApuestas": 78, "cuotaCualquiera": 1.333 },
    { "hora": 11230, "liga": "XX-XXXX", "local": "Toulouse", "visitante": "Roma", "cuotaLocal": 1, "empate": 1, "cuotaVisitante": 1, "cantidadDeApuestas": 1, "cuotaCualquiera": 1.35 },
    { "hora": 11300, "liga": "ZA-MEX2", "local": "Atlante", "visitante": "CD Tepatitlan de Morelos", "cuotaLocal": 1.6, "empate": 3.9, "cuotaVisitante": 5.25, "cantidadDeApuestas": 87, "cuotaCualquiera": 1.4 },
    { "hora": 11300, "liga": "YE-POLE", "local": "Legia Warsaw", "visitante": "Ruch Chorzow", "cuotaLocal": 1.4, "empate": 4.5, "cuotaVisitante": 7, "cantidadDeApuestas": 96, "cuotaCualquiera": 1.3 },
    { "hora": 11300, "liga": "ZA-ECU1", "local": "Mushuc Runa", "visitante": "Independiente Del Valle", "cuotaLocal": 3.35, "empate": 3.5, "cuotaVisitante": 2, "cantidadDeApuestas": 77, "cuotaCualquiera": 1.333 },
    { "hora": 11300, "liga": "ZA-PER1", "local": "Alianza Atletico", "visitante": "Club Sportivo Cienciano", "cuotaLocal": 2.35, "empate": 3.3, "cuotaVisitante": 2.8, "cantidadDeApuestas": 77, "cuotaCualquiera": 1.38 },
    { "hora": 11300, "liga": "XX-XXXX", "local": "Girona", "visitante": "Lazio", "cuotaLocal": 1, "empate": 1, "cuotaVisitante": 1, "cantidadDeApuestas": 1, "cuotaCualquiera": 1.333 },
    { "hora": 11305, "liga": "ZA-ARG2", "local": "Guillermo Brown", "visitante": "San Martin de Tucuman", "cuotaLocal": 3.45, "empate": 2.9, "cuotaVisitante": 2.2, "cantidadDeApuestas": 74, "cuotaCualquiera": 1.666 },
    { "hora": 11305, "liga": "ZA-ARG2", "local": "CA Defensores Unidos", "visitante": "Nueva Chicago", "cuotaLocal": 2.5, "empate": 2.8, "cuotaVisitante": 3, "cantidadDeApuestas": 74, "cuotaCualquiera": 1.7 },
    { "hora": 11330, "liga": "YE-RUM1", "local": "FCSB", "visitante": "CFR Cluj", "cuotaLocal": 2.1, "empate": 3.25, "cuotaVisitante": 3.25, "cantidadDeApuestas": 77, "cuotaCualquiera": 1.48 },
    { "hora": 11330, "liga": "ZA-BRA2", "local": "Ponte Preta SP", "visitante": "Chapecoense SC", "cuotaLocal": 2.2, "empate": 3.2, "cuotaVisitante": 3.35, "cantidadDeApuestas": 86, "cuotaCualquiera": 1.6 },
    { "hora": 11330, "liga": "ZA-ARG2", "local": "CD Maipu", "visitante": "Ferro Carril Oeste", "cuotaLocal": 1.833, "empate": 3.25, "cuotaVisitante": 4.333, "cantidadDeApuestas": 76, "cuotaCualquiera": 1.5 },
    { "hora": 11330, "liga": "ITAC", "local": "Cesena", "visitante": "Virtus Entella", "cuotaLocal": 1.909, "empate": 3.4, "cuotaVisitante": 3.65, "cantidadDeApuestas": 77, "cuotaCualquiera": 1.42 },
    { "hora": 11400, "liga": "ZA-BRA1", "local": "Vasco Da Gama RJ", "visitante": "Gremio RS", "cuotaLocal": 3.2, "empate": 3.25, "cuotaVisitante": 2.3, "cantidadDeApuestas": 145, "cuotaCualquiera": 1.45 },
    { "hora": 11400, "liga": "ZA-BRA1", "local": "Sao Paulo SP", "visitante": "Atletico MG", "cuotaLocal": 2.625, "empate": 3, "cuotaVisitante": 2.875, "cantidadDeApuestas": 141, "cuotaCualquiera": 1.55 },
    { "hora": 11400, "liga": "ZA-ARG2", "local": "Mitre Santiago Del Estero", "visitante": "Club Atletico Atlanta", "cuotaLocal": 2.05, "empate": 3, "cuotaVisitante": 3.65, "cantidadDeApuestas": 75, "cuotaCualquiera": 1.571 },
    { "hora": 11400, "liga": "ZA-ARG2", "local": "Atletico Rafaela", "visitante": "Brown de Adrogue", "cuotaLocal": 2, "empate": 3.1, "cuotaVisitante": 3.75, "cantidadDeApuestas": 76, "cuotaCualquiera": 1.571 },
    { "hora": 11400, "liga": "ZA-CHI1", "local": "CD Everton Vina Del Mar", "visitante": "Colo Colo", "cuotaLocal": 2.6, "empate": 3.1, "cuotaVisitante": 2.65, "cantidadDeApuestas": 82, "cuotaCualquiera": 1.48 },
    { "hora": 11400, "liga": "ZA-COL1", "local": "Real Santa Cruz", "visitante": "Royal Pari", "cuotaLocal": 2.35, "empate": 3.25, "cuotaVisitante": 2.75, "cantidadDeApuestas": 42, "cuotaCualquiera": 1.38 },
    { "hora": 11400, "liga": "XX-XXXX", "local": "Elche", "visitante": "Parma", "cuotaLocal": 1, "empate": 1, "cuotaVisitante": 1, "cantidadDeApuestas": 1, "cuotaCualquiera": 1.4 },
    { "hora": 11400, "liga": "XX-XXXX", "local": "CF Cadiz", "visitante": "Lecce", "cuotaLocal": 1, "empate": 1, "cuotaVisitante": 1, "cantidadDeApuestas": 1, "cuotaCualquiera": 1.42 },
    { "hora": 11430, "liga": "ZA-ARG2", "local": "San Martin de San Juan", "visitante": "CA All Boys", "cuotaLocal": 1.727, "empate": 3.3, "cuotaVisitante": 4.75, "cantidadDeApuestas": 75, "cuotaCualquiera": 1.55 },
    { "hora": 11430, "liga": "ZA-VEN1", "local": "Carabobo FC", "visitante": "Metropolitano SC", "cuotaLocal": 1.8, "empate": 3.35, "cuotaVisitante": 4.2, "cantidadDeApuestas": 42, "cuotaCualquiera": 1.533 },
    { "hora": 11500, "liga": "ZA-PAR1", "local": "Olimpia Asuncion", "visitante": "Guarani Asuncion", "cuotaLocal": 1.65, "empate": 3.75, "cuotaVisitante": 4.5, "cantidadDeApuestas": 75, "cuotaCualquiera": 1.35 },
    { "hora": 11500, "liga": "ZA-PER1", "local": "Carlos Mannucci", "visitante": "Universidad Cesar Vallejo", "cuotaLocal": 2.8, "empate": 3.2, "cuotaVisitante": 2.4, "cantidadDeApuestas": 76, "cuotaCualquiera": 1.45 },
    { "hora": 11500, "liga": "ZA-COL2", "local": "Real Cartagena", "visitante": "Boca Juniors de Cali", "cuotaLocal": 1.727, "empate": 3.4, "cuotaVisitante": 4.333, "cantidadDeApuestas": 42, "cuotaCualquiera": 1.4 },
    { "hora": 11500, "liga": "ZA-COL2", "local": "Real Soacha Cundinamarca", "visitante": "Barranquilla", "cuotaLocal": 2.4, "empate": 3.2, "cuotaVisitante": 2.7, "cantidadDeApuestas": 42, "cuotaCualquiera": 1.4 },
    { "hora": 11510, "liga": "ZA-ARG2", "local": "Independiente Rivadavia", "visitante": "Deportivo Riestra", "cuotaLocal": 2, "empate": 3.1, "cuotaVisitante": 3.6, "cantidadDeApuestas": 76, "cuotaCualquiera": 1.55 },
    { "hora": 11515, "liga": "ZA-PER1", "local": "Asociacion Deportiva Tarma", "visitante": "Sporting Cristal", "cuotaLocal": 2.45, "empate": 3.2, "cuotaVisitante": 2.7, "cantidadDeApuestas": 76, "cuotaCualquiera": 1.4 },
    { "hora": 11530, "liga": "ZA-ECU1", "local": "Cumbaya FC", "visitante": "Guayaquil City FC", "cuotaLocal": 1.909, "empate": 3.2, "cuotaVisitante": 3.95, "cantidadDeApuestas": 76, "cuotaCualquiera": 1.45 },
    { "hora": 11600, "liga": "ZA-BRA2", "local": "Ceara CE", "visitante": "ABC RN", "cuotaLocal": 1.571, "empate": 3.85, "cuotaVisitante": 5.75, "cantidadDeApuestas": 88, "cuotaCualquiera": 1.5 },
    { "hora": 11600, "liga": "ZA-COL1", "local": "La Equidad", "visitante": "América de Cali", "cuotaLocal": 2.35, "empate": 3.25, "cuotaVisitante": 3.25, "cantidadDeApuestas": 144, "cuotaCualquiera": 1.48 },
    { "hora": 11600, "liga": "ZA-ARG2", "local": "Patronato Parana", "visitante": "Deportivo Moron", "cuotaLocal": 2.3, "empate": 2.95, "cuotaVisitante": 3.2, "cantidadDeApuestas": 75, "cuotaCualquiera": 1.55 },
    { "hora": 11630, "liga": "ZA-BRA1", "local": "Cruzeiro MG", "visitante": "Botafogo RJ", "cuotaLocal": 2.3, "empate": 3.2, "cuotaVisitante": 3.25, "cantidadDeApuestas": 144, "cuotaCualquiera": 1.5 },
    { "hora": 11630, "liga": "ZA-BRA1", "local": "Coritiba PR", "visitante": "Bragantino SP", "cuotaLocal": 3.1, "empate": 3.25, "cuotaVisitante": 2.35, "cantidadDeApuestas": 145, "cuotaCualquiera": 1.45 },
    { "hora": 11630, "liga": "ZA-BRA1", "local": "Bahia BA", "visitante": "America Mineiro MG", "cuotaLocal": 2.1, "empate": 3.35, "cuotaVisitante": 3.4, "cantidadDeApuestas": 146, "cuotaCualquiera": 1.4 },
    { "hora": 11630, "liga": "ZA-CHI1", "local": "Deportes Copiapo", "visitante": "Curico Unido", "cuotaLocal": 2.1, "empate": 3.3, "cuotaVisitante": 3.2, "cantidadDeApuestas": 77, "cuotaCualquiera": 1.4 },
    { "hora": 11630, "liga": "ZA-COL1", "local": "Real Tomayapo", "visitante": "The Strongest", "cuotaLocal": 3.2, "empate": 3.2, "cuotaVisitante": 2.15, "cantidadDeApuestas": 42, "cuotaCualquiera": 1.42 },
    { "hora": 11715, "liga": "ZA-VEN1", "local": "Academia Puerto Cabello", "visitante": "FC Angostura", "cuotaLocal": 1.45, "empate": 4, "cuotaVisitante": 6.25, "cantidadDeApuestas": 32, "cuotaCualquiera": 1.4 },
    { "hora": 11730, "liga": "ZA-PAR1", "local": "Nacional Asuncion", "visitante": "Guairena FC", "cuotaLocal": 1.65, "empate": 3.6, "cuotaVisitante": 5, "cantidadDeApuestas": 75, "cuotaCualquiera": 1.48 },
    { "hora": 11800, "liga": "ZA-BRA1", "local": "Cuiaba MT", "visitante": "Flamengo RJ", "cuotaLocal": 3.6, "empate": 3.2, "cuotaVisitante": 2.15, "cantidadDeApuestas": 144, "cuotaCualquiera": 1.533 },
    { "hora": 11800, "liga": "ZA-ECU1", "local": "Barcelona SC", "visitante": "Gualaceo SC", "cuotaLocal": 1.333, "empate": 4.75, "cuotaVisitante": 7.5, "cantidadDeApuestas": 76, "cuotaCualquiera": 1.285 },
    { "hora": 11800, "liga": "ZA-PER1", "local": "FBC Melgar", "visitante": "Universitario de Deportes", "cuotaLocal": 2.1, "empate": 3.1, "cuotaVisitante": 3.4, "cantidadDeApuestas": 78, "cuotaCualquiera": 1.444 },
    { "hora": 11805, "liga": "ZA-MEX2", "local": "Club Celaya", "visitante": "Atletico Morelia", "cuotaLocal": 2, "empate": 3.35, "cuotaVisitante": 3.65, "cantidadDeApuestas": 90, "cuotaCualquiera": 1 },
    { "hora": 11805, "liga": "XX-XXXX", "local": "Atletico Morelia", "visitante": "Club Celaya", "cuotaLocal": 1, "empate": 1, "cuotaVisitante": 1, "cantidadDeApuestas": 1, "cuotaCualquiera": 1.42 },
    { "hora": 11810, "liga": "ZA-COL1", "local": "Deportivo Cali", "visitante": "Atlético Nacional", "cuotaLocal": 2.3, "empate": 3.3, "cuotaVisitante": 3.3, "cantidadDeApuestas": 145, "cuotaCualquiera": 1.45 },
    { "hora": 11830, "liga": "ZA-COL1", "local": "Jorge Wilstermann", "visitante": "Always Ready", "cuotaLocal": 2.65, "empate": 3.1, "cuotaVisitante": 2.45, "cantidadDeApuestas": 42, "cuotaCualquiera": 1.45 },
    { "hora": 11900, "liga": "ZA-CHI1", "local": "Union La Calera", "visitante": "Palestino", "cuotaLocal": 2.45, "empate": 3.3, "cuotaVisitante": 2.7, "cantidadDeApuestas": 83, "cuotaCualquiera": 1.363 },
    { "hora": 12000, "liga": "ZA-VEN1", "local": "UCV FC", "visitante": "Hermanos Colmenarez", "cuotaLocal": 2.1, "empate": 3.2, "cuotaVisitante": 3.1, "cantidadDeApuestas": 42, "cuotaCualquiera": 1.48 },
    { "hora": 12020, "liga": "ZA-COL1", "local": "Deportivo Pasto", "visitante": "Independiente Santa Fe", "cuotaLocal": 2.45, "empate": 3.3, "cuotaVisitante": 3, "cantidadDeApuestas": 145, "cuotaCualquiera": 1.48 },
    { "hora": 12030, "liga": "I-LEA", "local": "FC Dallas", "visitante": "Inter Miami CF", "cuotaLocal": 3.35, "empate": 3.7, "cuotaVisitante": 2, "cantidadDeApuestas": 191, "cuotaCualquiera": 1.3 },
    { "hora": 12205, "liga": "ZA-MEX2", "local": "Club Atletico La Paz", "visitante": "CD Tapatio", "cuotaLocal": 2.1, "empate": 3.55, "cuotaVisitante": 3.2, "cantidadDeApuestas": 89, "cuotaCualquiera": 1.333 }
]
