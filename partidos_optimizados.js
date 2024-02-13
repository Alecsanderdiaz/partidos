let PARTIDOS_OPTIMIZADOS = [
	{ "hora": 11500, "liga": "R-CHAM", "local": "FC Copenhagen", "visitante": "Manchester City", "cuotaLocal": 13, "empate": 6.25, "cuotaVisitante": 1.25, "cantidadDeApuestas": 290, "cuotaCualquiera": 1.285, "cuotaFavorito": 1, "rate": 1, "stake": 5, "favorito": "visitante" },
	{ "hora": 11500, "liga": "R-CHAM", "local": "RB Leipzig", "visitante": "Real Madrid", "cuotaLocal": 2.9, "empate": 3.8, "cuotaVisitante": 2.3, "cantidadDeApuestas": 304, "cuotaCualquiera": 1.285, "cuotaFavorito": 1, "rate": 1, "stake": 3, "favorito": "visitante" },
	{ "hora": 11445, "liga": "R-ING2", "local": "Birmingham City", "visitante": "Blackburn Rovers", "cuotaLocal": 2.2, "empate": 3.55, "cuotaVisitante": 3.1, "cantidadDeApuestas": 147, "cuotaCualquiera": 1.333, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "visitante" },
	{ "hora": 11445, "liga": "R-ING2", "local": "Leicester City", "visitante": "Sheffield Wednesday", "cuotaLocal": 1.3, "empate": 5.25, "cuotaVisitante": 10, "cantidadDeApuestas": 147, "cuotaCualquiera": 1.3, "cuotaFavorito": 1, "rate": 1, "stake": 3, "favorito": "local" },
	{ "hora": 11445, "liga": "R-ING2", "local": "Norwich City", "visitante": "Watford", "cuotaLocal": 2.1, "empate": 3.5, "cuotaVisitante": 3.35, "cantidadDeApuestas": 146, "cuotaCualquiera": 1.363, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "visitante" },
	{ "hora": 11445, "liga": "R-ING2", "local": "Rotherham", "visitante": "Hull City", "cuotaLocal": 4.333, "empate": 3.65, "cuotaVisitante": 1.8, "cantidadDeApuestas": 144, "cuotaCualquiera": 1.42, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "visitante" },
	{ "hora": 11445, "liga": "R-ING2", "local": "Swansea", "visitante": "Leeds United", "cuotaLocal": 5.75, "empate": 4.5, "cuotaVisitante": 1.5, "cantidadDeApuestas": 144, "cuotaCualquiera": 1.285, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "visitante" },
	{ "hora": 11500, "liga": "R-ING2", "local": "Bristol City", "visitante": "Southampton", "cuotaLocal": 4.75, "empate": 3.65, "cuotaVisitante": 1.75, "cantidadDeApuestas": 144, "cuotaCualquiera": 1.4, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "visitante" },
	{ "hora": 11500, "liga": "R-ING2", "local": "West Bromwich", "visitante": "Cardiff City", "cuotaLocal": 1.7, "empate": 3.65, "cuotaVisitante": 5.25, "cantidadDeApuestas": 144, "cuotaCualquiera": 1.45, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 11445, "liga": "R-INGN", "local": "York City", "visitante": "Dorking Wanderers", "cuotaLocal": 1.833, "empate": 3.45, "cuotaVisitante": 3.8, "cantidadDeApuestas": 43, "cuotaCualquiera": 1, "cuotaFavorito": 1, "rate": 1, "stake": 0 },
	{ "hora": 11445, "liga": "R-INGN", "local": "Aldershot Town", "visitante": "AFC Fylde", "cuotaLocal": 2.2, "empate": 3.5, "cuotaVisitante": 2.75, "cantidadDeApuestas": 43, "cuotaCualquiera": 1, "cuotaFavorito": 1, "rate": 1, "stake": 0 },
	{ "hora": 11445, "liga": "R-INGN", "local": "Halifax Town", "visitante": "Maidenhead United", "cuotaLocal": 2.15, "empate": 3, "cuotaVisitante": 3.2, "cantidadDeApuestas": 43, "cuotaCualquiera": 1, "cuotaFavorito": 1, "rate": 1, "stake": 0 },
	{ "hora": 11445, "liga": "R-INGN", "local": "Solihull Moors FC", "visitante": "Kidderminster Harriers", "cuotaLocal": 2.3, "empate": 3.2, "cuotaVisitante": 2.8, "cantidadDeApuestas": 43, "cuotaCualquiera": 1, "cuotaFavorito": 1, "rate": 1, "stake": 0 },
	{ "hora": 11445, "liga": "R-INGN", "local": "Oldham", "visitante": "Boreham Wood", "cuotaLocal": 1.85, "empate": 3.4, "cuotaVisitante": 3.75, "cantidadDeApuestas": 43, "cuotaCualquiera": 1, "cuotaFavorito": 1, "rate": 1, "stake": 0 },
	{ "hora": 11445, "liga": "R-INGO", "local": "Bolton Wanderers", "visitante": "Wycombe Wanderers", "cuotaLocal": 1.833, "empate": 3.6, "cuotaVisitante": 4.2, "cantidadDeApuestas": 112, "cuotaCualquiera": 1.38, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 11445, "liga": "R-INGO", "local": "Burton Albion", "visitante": "Carlisle", "cuotaLocal": 2.25, "empate": 3.2, "cuotaVisitante": 3.3, "cantidadDeApuestas": 109, "cuotaCualquiera": 1.533, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 11445, "liga": "R-INGO", "local": "Charlton Athletic", "visitante": "Lincoln City", "cuotaLocal": 2.2, "empate": 3.3, "cuotaVisitante": 3.3, "cantidadDeApuestas": 110, "cuotaCualquiera": 1.48, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "visitante" },
	{ "hora": 11445, "liga": "R-INGO", "local": "Cheltenham Town", "visitante": "Blackpool", "cuotaLocal": 3.2, "empate": 3.3, "cuotaVisitante": 2.25, "cantidadDeApuestas": 109, "cuotaCualquiera": 1.48, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "visitante" },
	{ "hora": 11445, "liga": "R-INGO", "local": "Exeter City", "visitante": "Derby County", "cuotaLocal": 3.5, "empate": 3.45, "cuotaVisitante": 2.05, "cantidadDeApuestas": 111, "cuotaCualquiera": 1.42, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "visitante" },
	{ "hora": 11445, "liga": "R-INGO", "local": "Fleetwood Town", "visitante": "Reading", "cuotaLocal": 2.8, "empate": 3.45, "cuotaVisitante": 2.45, "cantidadDeApuestas": 110, "cuotaCualquiera": 1.35, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "visitante" },
	{ "hora": 11445, "liga": "R-INGO", "local": "Leyton Orient", "visitante": "Northampton", "cuotaLocal": 1.65, "empate": 3.85, "cuotaVisitante": 5.25, "cantidadDeApuestas": 109, "cuotaCualquiera": 1.42, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 11445, "liga": "R-INGO", "local": "Oxford United", "visitante": "Wigan", "cuotaLocal": 1.909, "empate": 3.45, "cuotaVisitante": 4, "cantidadDeApuestas": 111, "cuotaCualquiera": 1.42, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "visitante" },
	{ "hora": 11445, "liga": "R-INGO", "local": "Peterborough United", "visitante": "Port Vale", "cuotaLocal": 1.48, "empate": 4.5, "cuotaVisitante": 6, "cantidadDeApuestas": 111, "cuotaCualquiera": 1.3, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 11445, "liga": "R-INGO", "local": "Portsmouth", "visitante": "Cambridge United", "cuotaLocal": 1.42, "empate": 4.5, "cuotaVisitante": 7.5, "cantidadDeApuestas": 111, "cuotaCualquiera": 1.35, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 11445, "liga": "R-INGO", "local": "Shrewsbury", "visitante": "Barnsley", "cuotaLocal": 3.55, "empate": 3.4, "cuotaVisitante": 2.05, "cantidadDeApuestas": 111, "cuotaCualquiera": 1.42, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "visitante" },
	{ "hora": 11445, "liga": "R-INGO", "local": "Stevenage", "visitante": "Bristol Rovers", "cuotaLocal": 1.8, "empate": 3.65, "cuotaVisitante": 4.333, "cantidadDeApuestas": 110, "cuotaCualquiera": 1.42, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 11445, "liga": "R-INGT", "local": "Accrington", "visitante": "AFC Wimbledon", "cuotaLocal": 2.9, "empate": 3.3, "cuotaVisitante": 2.4, "cantidadDeApuestas": 110, "cuotaCualquiera": 1.42, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "visitante" },
	{ "hora": 11445, "liga": "R-INGT", "local": "Barrow FC", "visitante": "Forest Green Rovers", "cuotaLocal": 1.615, "empate": 3.9, "cuotaVisitante": 5.5, "cantidadDeApuestas": 109, "cuotaCualquiera": 1.38, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 11445, "liga": "R-INGT", "local": "Bradford City", "visitante": "MK Dons", "cuotaLocal": 2.35, "empate": 3.4, "cuotaVisitante": 2.95, "cantidadDeApuestas": 110, "cuotaCualquiera": 1.4, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "visitante" },
	{ "hora": 11445, "liga": "R-INGT", "local": "Colchester", "visitante": "Grimsby Town", "cuotaLocal": 2.3, "empate": 3.65, "cuotaVisitante": 2.85, "cantidadDeApuestas": 110, "cuotaCualquiera": 1.3, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 11445, "liga": "R-INGT", "local": "Crawley Town", "visitante": "Walsall", "cuotaLocal": 2.75, "empate": 3.55, "cuotaVisitante": 2.4, "cantidadDeApuestas": 110, "cuotaCualquiera": 1.333, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 11445, "liga": "R-INGT", "local": "Gillingham", "visitante": "Swindon Town", "cuotaLocal": 1.833, "empate": 3.7, "cuotaVisitante": 4.2, "cantidadDeApuestas": 112, "cuotaCualquiera": 1.35, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 11445, "liga": "R-INGT", "local": "Mansfield Town", "visitante": "Harrogate Town", "cuotaLocal": 1.5, "empate": 4.333, "cuotaVisitante": 6, "cantidadDeApuestas": 110, "cuotaCualquiera": 1.3, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 11445, "liga": "R-INGT", "local": "Newport", "visitante": "Notts County", "cuotaLocal": 2.625, "empate": 3.65, "cuotaVisitante": 2.5, "cantidadDeApuestas": 110, "cuotaCualquiera": 1.3, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 11445, "liga": "R-INGT", "local": "Salford City", "visitante": "Doncaster Rovers", "cuotaLocal": 1.9, "empate": 3.65, "cuotaVisitante": 3.85, "cantidadDeApuestas": 112, "cuotaCualquiera": 1.35, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 11445, "liga": "R-INGT", "local": "Stockport County", "visitante": "Crewe Alexandra", "cuotaLocal": 1.5, "empate": 4.5, "cuotaVisitante": 6, "cantidadDeApuestas": 110, "cuotaCualquiera": 1.3, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 11445, "liga": "R-INGT", "local": "Sutton United", "visitante": "Wrexham FC", "cuotaLocal": 3.8, "empate": 3.6, "cuotaVisitante": 1.95, "cantidadDeApuestas": 111, "cuotaCualquiera": 1.363, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "visitante" },
	{ "hora": 11445, "liga": "R-INGT", "local": "Tranmere", "visitante": "Morecambe", "cuotaLocal": 2.05, "empate": 3.55, "cuotaVisitante": 3.5, "cantidadDeApuestas": 111, "cuotaCualquiera": 1.38, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "visitante" },
	{ "hora": 11500, "liga": "ZA-ARG1", "local": "San Lorenzo", "visitante": "Estudiantes de La Plata", "cuotaLocal": 3.2, "empate": 2.85, "cuotaVisitante": 2.55, "cantidadDeApuestas": 167, "cuotaCualquiera": 1.7, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "visitante" },
	{ "hora": 11715, "liga": "ZA-ARG1", "local": "Gimnasia LP", "visitante": "Huracan", "cuotaLocal": 2.45, "empate": 3, "cuotaVisitante": 3.1, "cantidadDeApuestas": 168, "cuotaCualquiera": 1.615, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 11930, "liga": "ZA-ARG1", "local": "Godoy Cruz", "visitante": "Union Santa Fe", "cuotaLocal": 1.95, "empate": 3.1, "cuotaVisitante": 4.5, "cantidadDeApuestas": 170, "cuotaCualquiera": 1.6, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 11930, "liga": "ZA-ARG1", "local": "CA Independiente", "visitante": "Rosario Central", "cuotaLocal": 1.909, "empate": 3.25, "cuotaVisitante": 4.333, "cantidadDeApuestas": 170, "cuotaCualquiera": 1.571, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 11810, "liga": "ZA-COL1", "local": "Rionegro Aguilas", "visitante": "La Equidad", "cuotaLocal": 2.1, "empate": 3.2, "cuotaVisitante": 4, "cantidadDeApuestas": 161, "cuotaCualquiera": 1.55, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 12020, "liga": "ZA-COL1", "local": "Independiente Santa Fe", "visitante": "Deportivo Cali", "cuotaLocal": 1.8, "empate": 3.55, "cuotaVisitante": 4.75, "cantidadDeApuestas": 181, "cuotaCualquiera": 1.48, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "visitante" },
	{ "hora": 12200, "liga": "ZA-CONC", "local": "Chivas Guadalajara", "visitante": "Forge", "cuotaLocal": 1.166, "empate": 7.5, "cuotaVisitante": 15, "cantidadDeApuestas": 174, "cuotaCualquiera": 1.222, "cuotaFavorito": 1, "rate": 1, "stake": 3, "favorito": "local" },
	{ "hora": 11930, "liga": "ZA-LIB", "local": "Defensor Sporting", "visitante": "Academia Puerto Cabello", "cuotaLocal": 1.5, "empate": 4, "cuotaVisitante": 5.75, "cantidadDeApuestas": 87, "cuotaCualquiera": 1.363, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" },
	{ "hora": 12005, "liga": "ZA-MEX2", "local": "Cancun FC", "visitante": "Club Celaya", "cuotaLocal": 2.375, "empate": 3.2, "cuotaVisitante": 2.95, "cantidadDeApuestas": 89, "cuotaCualquiera": 1.42, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "visitante" },
	{ "hora": 12205, "liga": "ZA-MEX2", "local": "Dorados", "visitante": "Correcaminos", "cuotaLocal": 3.2, "empate": 3.35, "cuotaVisitante": 2.2, "cantidadDeApuestas": 90, "cuotaCualquiera": 1.38, "cuotaFavorito": 1, "rate": 1, "stake": 2, "favorito": "local" }
]
