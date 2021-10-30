let PARTIDOS = [
[11000,"FRA1","Metz","Saint-Étienne",8],[11030,"EPOLE","Gornik Z.","Zaglebie",10],[11030,"AURU1","Fénix","Cerro Largo",8],[11100,"ITA1","Verona","Juventus",2],[11100,"EPOR1","Oporto","Boavista",1],[11100,"EREP1","Sigma Olomouc","Slovacko",8],[11100,"ERUM1","Univ. Craiova","Mioveni",7],[11100,"ERUS1","Krasnodar","Kr. Sovetov",7],[11100,"ERUS1","Nizhny Novgorod","Lokomotiv Moscú",2],[11100,"ESUI1","St. Gallen","Young Boys",8],[11100,"ESUI2","Kriens","Lausanne Ouchy",8],[11100,"ESUI2","Schaffhausen","Wil",8],[11100,"ESUI2","Yverdon","Thun",8],[11100,"ETUR1","Konyaspor","Fenerbahçe",2],[11100,"ETUR2","Eyupspor","Ankaragucu",8],[11115,"ESP2","Lugo","Sporting de Gijón",2],[11120,"INGN","Barnet","Aldershot",7],[11130,"ALE1","Eintracht Frankfurt","RB Leipzig",1],[11130,"EBEL1","Beerschot VA","Seraing",8],[11130,"EBEL1","St. Lieja","Kortrijk",1],[11130,"ESP1","Valencia","Villarreal",2],[11130,"EGRE1","Panetolikos","Olympiacos",2],[11130,"EGRE1","PAOK","Smyrnis",1],[11130,"ING1","Tottenham","Manchester Utd",2],[11130,"EUCR1","Inhulets","Veres-Rivne",8],[11145,"EHOL1","Heracles","Ajax",2],[11200,"AEST2","Loudoun","New York Red Bulls 2",8],[11200,"FRA2","Bastia","Amiens",7],[11200,"FRA2","Dijon","Paris FC",7],[11200,"FRA2","Dunkerque","Le Havre",8],[11200,"FRA2","Nancy","Sochaux",8],[11200,"FRA2","Nimes","Niort",8],[11200,"FRA2","Pau FC","AC Ajaccio",8],[11200,"FRA2","Rodez","Quevilly Rouen",7],[11200,"FRA2","SM Caen","Grenoble",8],[11230,"AEST1","Inter Miami","New York City",8],[11300,"EHOL1","Heerenveen","Vitesse",8],[11300,"EHOL2","Oss","Breda",8],[11300,"EPOLE","Jagiellonia","Piast",8],[11300,"EPOR1","Estoril","Benfica",2],[11330,"ALE2","Hamburgo","Kiel",1],[11330,"ABRAN","Moto Club","CRB",7],[11330,"ERUM1","CFR Cluj","FC Voluntari",7],[11330,"ESUI1","Zúrich","Basilea",4],[11345,"AARG1","Arsenal Sarandí","Sarmiento",8],[11345,"AARG1","Platense","Atl. Tucumán",8],[11345,"EBEL1","St. Truiden","Club Brujas",2],[11345,"ITA1","Torino","Sampdoria",7],[11400,"ABOL1","The Strongest","Blooming",7],[11400,"ABRA2","Ponte Preta","Vitória",7],[11400,"ACHI1","U. De Chile","Curicó Unido",1],[11400,"ESP1","Barcelona","Alavés",1],[11400,"ESP2","Cartagena","Ponferradina",7],[11400,"FRA1","Lyon","Lens",1],[11400,"ING2","Reading","Bournemouth",2],[11400,"EHOL1","AZ Alkmaar","Zwolle",7],[11400,"AURU1","Sud América","Maldonado",8],[11430,"AARG2","Gimnasia Mendoza","Estudiantes Rio Cuarto"],[11430,"AEST1","Real Salt Lake","San Jose Earthquakes"],[11500,"AARG2","San Martín S.J.","Instituto"],[11500,"ABRA1","Athletico-PR","Santos"],[11500,"ACOL2","Atletico F.C.","Leones"],[11500,"ACOL2","Bogotá","Llaneros"],[11500,"ACOL2","Boyacá Chicó","U. Magdalena"],[11500,"ACOL2","Fortaleza","Cortuluá"],[11500,"ACOL2","Orsomarso","Real Cartagena"],[11500,"ACOL2","Valledupar","Boca Juniors"],[11500,"AECU1","Orense","Técnico U."],[11500,"AEST1","New York Red Bulls","Club de Foot Montreal"],[11500,"APER1","Alianza Atl.","Dep. Municipal"],[11500,"APER1","Alianza Huánuco","Ayacucho"],[11500,"APER1","Binacional","César Vallejo"],[11500,"APER1","Carlos Mannucci","AD Cantolao"],[11500,"APER1","Cusco","Sport Huancayo"],[11500,"APER1","Sporting Cristal","Sport Boys"],[11500,"APER1","UTC","San Martín"],[11515,"AARG2","Villa Dálmine","Gimnasia Jujuy"],[11515,"EPOR1","Sporting CP","V. Guimaraes"],[11600,"AARG1","Banfield","Vélez Sarsfield"],[11600,"AARG1","Talleres","Huracán"],[11600,"ACOL2","Barranquilla","Tigres"],[11600,"APAR1","12 de Octubre","Libertad"],[11615,"ABOL1","J. Wilstermann","Guabirá"],[11615,"AURU1","Plaza Colonia","Progreso"],[11615,"AVEN1","Portuguesa","Aragua"],[11630,"ACHI1","U. Española","Everton"],[11645,"ABRA2","Confianca","Londrina"],[11700,"ABRA1","Flamengo","Atlético-MG"],[11700,"AEST1","Atlanta Utd","Toronto FC"],[11700,"AMEX1","Querétaro","Santos Laguna"],[11715,"ABRA1","Juventude","Bahia"],[11730,"AECU1","Macará","Manta"],[11800,"AEST2","Charleston","Miami FC"],[11800,"AEST2","Memphis","Indy Eleven"],[11800,"AEST2","New Mexico","Real Monarchs"],[11800,"AEST2","Pittsburgh","Hartford Athletic"],[11805,"ACOL1","Atl. Bucaramanga","Envigado"],[11815,"AARG1","Boca Jrs.","Gimnasia L.P."],[11815,"APAR1","Guaraní","Sp. Luqueño"],[11830,"AEST1","DC United","Columbus Crew"],[11830,"AEST2","Birmingham","Louisville City"],[11830,"AURU1","Montevideo City","Villa Española"],[11830,"AVEN1","Puerto Cabello","Hermanos Colmenarez"],[12000,"ABRA1","América-MG","Fortaleza"],[12000,"AECU1","Guayaquil City","Emelec"],[12000,"AEST1","FC Dallas","Austin FC"],[12000,"AEST2","FC Tulsa","Oklahoma City Energy"],[12006,"AMEX1","Pachuca","Pumas UNAM"],[12030,"AEST2","Rio Grande","El Paso"],[12030,"AEST2","San Antonio","Colorado Springs"],[12100,"AEST2","Austin Bold","Charlotte Independ."],[12100,"AEST2","Las Vegas Lights","Tampa Bay"],[12100,"AEST2","Oakland Roots","Sporting Kansas City 2"],[12110,"ACOL1","Millonarios","La Equidad"],[12110,"AMEX1","Tigres UANL","Guadalajara"],[12130,"AEST2","LA Galaxy 2","Orange County SC"],[12130,"AEST2","Phoenix Rising","Tacoma Defiance"],[12130,"AEST2","Sacramento Republic","San Diego Loyal"]
]
