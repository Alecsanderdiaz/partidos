let PARTIDOS = [[10100,"S-JAP1","Kashima","Tokyo",5,1.85,null,1.85,"0M (A10k)"],[10100,"S-JAP1","Nagoya","Hiroshima",8,2.15,null,3.97,"0M (A10k)"],[10100,"S-JAP1","Shonan","C-Osaka",10,2.05,null,8.13,"0M (A10k)"],[10200,"S-JAP1","Kashiwa","Vissel Kobe",8,1.76,null,14.3,"0M (A10k)"],[10200,"S-JAP1","Yokohama FC","Kawasaki",8,1.53,null,21.87,"0M (A10k)"],[10230,"S-CHIF","Changzhou Lanzhiyi","Wuhan Jiangcheng",12,1,null,21.87,"0M (A10k)"],[10230,"S-CHIF","Inner Mongolia","Hunan Billows",12,1,null,21.87,"0M (A10k)"],[10230,"S-CHIF","Ningxia Renfangzhong","Taian Tiankuang",12,1,null,21.87,"0M (A10k)"],[10230,"S-CHIF","Qujing Yibu","Jiangxi Dark Horse",12,1,null,21.87,"0M (A10k)"],[10230,"S-CHIF","Shanghai Shenshui","Nantong Haimen",12,1,null,21.87,"0M (A10k)"],[10230,"S-COR1","Incheon","Gwangju",7,2.05,null,44.83,"0M (A10k)"],[10300,"S-JAP1","Sagan Tosu","Albirex Niigata",10,1.95,null,87.41,"0M (A10k)"],[10400,"S-COR1","Seoul","Jeju",7,1.83,null,159.96,"1M (A10k)"],[10500,"S-COR1","Daejeon","Daegu",7,1.85,null,295.92,"2M (A10k)"],[10500,"S-JAP1","G-Osaka","Yokohama M.",8,1.65,null,488.26,"4M (A10k)"],[10500,"YE-POR2","Covilha","Trofense",7,2.1,null,1025.34,"10M (A10k)"],[10500,"YE-UCR1","Ch. Odessa","Minaj",11,1.48,null,1517.5,"15M (A10k)"],[10600,"ALE2","Braunschweig","Regensburg",7,1.72,null,2610.1,"26M (A10k)"],[10600,"ALE2","Heidenheim","Sandhausen",5,1.42,null,3706.34,"37M (A10k)"],[10600,"ALE2","Arminia Bielefeld","Paderborn",10,1.75,null,6486.09,"64M (A10k)"],[10600,"YE-RUS1","Lokomotiv Moscú","F. Voronezh",7,1.7,null,11026.35,"110M (A10k)"],[10600,"YE-UCR1","Zorya","Inhulets",11,1.35,null,14885.57,"148M (A10k)"],[10630,"R-ESC1","Hearts","Aberdeen",10,2,null,29771.14,"297M (A10k)"],[10630,"R-ING1","Tottenham","Brentford",5,1.72,null,51206.36,0],[10630,"R-INGT","Stockport","Salford",10,2.6,null,133136.53,0],[10635,"S-CHI1","Henan Songshan Longmen","Dalian Pro",7,2.25,null,299557.19,0],[10635,"S-CHI1","Tianjin Jinmen Tiger","Shandong Taishan",9,2.55,null,763870.83,0],[10635,"S-CHI1","Meizhou Hakka","Shanghai Port",6,1.7,null,1298580.41,0],[10645,"YE-RUM1","Botosani","Mioveni",7,1.6,null,2077728.65,0],[10700,"ALE3","Borussia Dortmund II","SpVgg Bayreuth",7,1.55,null,3220479.4,0],[10700,"ALE3","Elversberg","Wehen",7,1.76,null,5668043.74,0],[10700,"ALE3","Hallescher","RW Essen",7,1.76,null,9975756.98,0],[10700,"ALE3","Aue","Ingolstadt",10,1.95,null,19452726.11,0],[10700,"ALE3","Verl","Friburgo II",8,1.8,null,35014906.99,0],[10700,"ALE3","Viktoria Köln","Osnabruck",8,1.75,null,61276087.23,0],[10700,"YE-BIE1","Belshina","Neman Grodno",11,1.38,null,84561000.37,0],[10700,"ESP1","Girona","Villarreal",6,1.85,null,156437850.68,0],[10700,"YE-UCR1","Oleksandriya","Dinamo Kiev",11,1.36,null,212755476.92,0],[10745,"FRA2","Girondins","Laval",5,1.65,null,351046536.91,0],[10800,"ITA1","Cremonese","Bolonia",8,2.1,null,737197727.51,0],[10800,"YE-POLE","Jagiellonia","Cracovia",10,1.95,null,1437535568.64,0],[10800,"YE-POR2","Academico Viseu","Feirense",10,2.5,null,3593838921.6,0],[10800,"YE-REP1","Slovacko","Sigma Olomouc",7,1.85,null,6648602004.96,0],[10800,"YE-REP1","Sparta Praga","Bohemians",7,1.36,null,9042098726.74,0],[10800,"YE-TUR1","Kasimpasa","Istanbulspor",10,2.05,null,18536302389.81,0],[10830,"ALE1","Werder Bremen","Colonia",9,1.9,null,35218974540.63,0],[10830,"ALE1","Hertha BSC","Bochum",10,2.05,null,72198897808.29,0],[10830,"ALE1","Hoffenheim","Union Berlín",6,2.1,null,151617685397.4,0],[10830,"ALE1","Schalke","Eintracht Frankfurt",8,1.83,null,277460364277.24,0],[10830,"YE-RUS1","Orenburg","Zenit",8,1.53,null,424514357344.17,0],[10830,"YE-RUS1","Torpedo Moscow","Dinamo Moscú",8,1.45,null,615545818149.04,0],[10900,"ZA-ARG2","Nueva Chicago","Alte. Brown",10,2.7,null,1661973709002.4,0],[10900,"YE-BIE1","Isloch","BATE",11,1.4,null,2326763192603.36,0],[10900,"R-ESC1","Kilmarnock","St. Johnstone",7,1.95,null,4537188225576.55,0],[10900,"R-ESC1","Livingston","Dundee Utd",7,2,null,9074376451153.1,0],[10900,"R-ESC1","Motherwell","Ross County",7,1.85,null,16787596434633.23,0],[10900,"R-ESC1","Celtic","St. Mirren",1,1.25,null,20984495543291.54,0],[10900,"R-ING1","Fulham","Crystal Palace",7,2,null,41968991086583.08,0],[10900,"R-ING1","Liverpool","Aston Villa",1,1.5,null,62953486629874.62,0],[10900,"R-ING1","Wolves","Everton",9,2.15,null,135349996254230.42,0],[10900,"R-ING1","Bournemouth","Manchester Utd",6,1.5,null,203024994381345.62,0],[10900,"R-INGT","Carlisle","Bradford City",10,2.4,null,487259986515229.5,0],[10915,"ESP1","Athletic Club","Celta de Vigo",5,1.76,null,857577576266803.9,0],[10915,"ESP2","UD Ibiza","Real Zaragoza",8,1.95,null,1672276273720267.5,0],[10930,"YE-POR1","Arouca","Chaves",10,2.4,null,4013463056928642,0],[10930,"YE-POR1","Santa Clara","Portimonense",10,2.4,null,9632311336628740,0],[10930,"YE-POR2","BSAD","Oliveirense",7,1.95,null,18783007106426044,0],[11000,"FRA1","Nantes","Montpellier",7,1.85,null,34748563146888180,0],[11030,"YE-POLE","Gornik Zabrze","Pogon Szczecin",9,1.9,null,66022269979087540,0],[11100,"YE-BIE1","Zhodino","Naftan",11,1.38,null,91110732571140800,0],[11100,"ITA1","Atalanta","Verona",5,1.65,null,150332708742382300,0],[11100,"YE-REP1","Slavia Praga","Plzen",7,1.55,null,233015698550692580,0],[11100,"YE-RUS1","Akhmat Grozny","Khimki",7,1.48,null,344863233855025000,0],[11100,"YE-SUI1","Winterthur","Servette",8,1.61,null,555229806506590400,0],[11100,"YE-SUI2","Wil","Vaduz",11,1.3,null,721798748458567600,0],[11100,"YE-TUR1","Galatasaray","Sivasspor",1,1.35,null,974428310419066200,0],[11100,"YE-TUR1","Kayserispor","Alanyaspor",10,1.85,null,1802692374275273000,0],[11100,"YE-TUR2","Altay","Tuzlaspor",11,1.28,null,2307446239072349000,0],[11115,"YE-BEL1","Westerlo","St. Lieja",10,1.8,null,4153403230330228700,0],[11115,"R-ESC2","Hamilton","Airdrieonians",11,1.38,null,5731696457855715000,0],[11130,"ALE1","Bayern Múnich","RB Leipzig",1,1.42,null,8139008970155116000,0],[11130,"ESP1","Almería","Mallorca",7,2.05,null,16684968388817986000,0],[11130,"ESP1","Getafe","Elche",5,1.75,null,29198694680431477000,0],[11130,"ESP2","Eibar","Sporting de Gijón",7,1.8,null,52557650424776660000,0],[11130,"ESP2","Alavés","Málaga",10,3,null,157672951274330000000,0],[11130,"ESP2","Cartagena","Las Palmas",6,2.05,null,323229550112376500000,0],[11130,"ESP2","Lugo","Huesca",6,2,null,646459100224753000000,0],[11130,"ESP2","Mirandés","Granada",2,1.75,null,1.1313034253933176e+21,0],[11130,"ESP2","Ponferradina","Albacete",6,1.83,null,2.0702852684697714e+21,0],[11130,"ESP2","Villarreal B","Levante",6,1.8,null,3.726513483245589e+21,0],[11130,"R-ING1","Nottingham Forest","Arsenal",2,1.55,null,5.776095899030662e+21,0],[11200,"ZA-ARG1","San Lorenzo","Instituto",5,2.25,null,1.299621577281899e+22,0],[11200,"ZA-ARG2","Agropecuario","Alvarado",7,2,null,2.599243154563798e+22,0],[11200,"ZA-ARG2","Aldosivi","Dep. Riestra",7,2.1,null,5.458410624583975e+22,0],[11200,"ZA-ARG2","Almagro","Gimnasia Mendoza",7,2.3,null,1.2554344436543143e+23,0],[11200,"ZA-ARG2","Temperley","Club A. Guemes",7,2.15,null,2.699184053856775e+23,0],[11200,"ZA-ARG2","Defensores Unidos","San Martín S.J.",8,2.2,null,5.9382049184849056e+23,0],[11200,"ZA-ARG2","San Telmo","Patronato",8,2.1,null,1.2470230328818303e+24,0],[11200,"FRA2","Paris FC","Sochaux",7,1.83,null,2.2820521501737495e+24,0],[11200,"FRA2","Saint-Étienne","Quevilly Rouen",7,1.6,null,3.6512834402779987e+24,0],[11200,"FRA2","Amiens","SM Caen",8,2,null,7.302566880555997e+24,0],[11200,"FRA2","EA Guingamp","Metz",6,1.7,null,1.2414363696945196e+25,0],[11200,"FRA2","Nimes","Dijon",8,1.95,null,2.4208009209043133e+25,0],[11200,"FRA2","Niort","Annecy",8,1.85,null,4.47848170367298e+25,0],[11200,"FRA2","Pau FC","Bastia",10,2.3,null,1.0300507918447853e+26,0],[11200,"YE-POR1","Boavista","SC Braga",6,1.57,null,1.617179743196313e+26,0],[11230,"YE-RUM1","Sepsi Sf. Gheorghe","CFR Cluj",8,1.8,null,2.9109235377533628e+26,0],[11300,"ZA-ECU1","Mushuc Runa","Aucas",6,1.95,null,5.676300898619057e+26,0],[11300,"F20","Guatemala Sub-20","Nueva Zelanda Sub-20",9,2.35,null,1.3339307111754783e+27,0],[11300,"F20","EE. UU. Sub-20","Ecuador Sub-20",10,2.35,null,3.134737171262374e+27,0],[11300,"ZA-PER1","ADT Tarma","AD Cantolao",7,1.48,null,4.6394110134683135e+27,0],[11300,"YE-POLE","Lechia","Legia",8,1.65,null,7.655028172222717e+27,0],[11300,"ZA-URU2","Albion","Potencia",11,1.38,null,1.056393887766735e+28,0],[11300,"ZA-URU2","Atenas","Rampla Juniors",11,1.55,null,1.6374105260384392e+28,0],[11300,"ZA-URU2","Juventud","Club Oriental De Futbol",11,1.45,null,2.3742452627557367e+28,0],[11300,"ZA-URU2","Miramar","Tacuarembo",11,1.42,null,3.3714282731131456e+28,0],[11300,"ZA-URU2","Sud América","Cerrito",11,1.48,null,4.989713844207456e+28,0],[11330,"ALE2","Hamburgo","Greuther Fürth",3,1.4,null,6.985599381890437e+28,0],[11330,"YE-SUI1","Lucerna","St. Gallen",7,1.55,null,1.0827679041930179e+29,0],[11345,"YE-BEL1","Gent","Círculo Brujas",7,1.6,null,1.7324286467088287e+29,0],[11345,"ITA1","AC Milan","Sampdoria",1,1.4,null,2.4254001053923603e+29,0],[11400,"ZA-BRA1","Bahia","Goiás",10,2.87,null,6.960898302476074e+29,0],[11400,"ZA-BRA2","Sport Recife","Botafogo SP",7,1.7,null,1.1833527114209326e+30,0],[11400,"ZA-CHI1","Ñublense","U. De Chile",10,2.25,null,2.662543600697098e+30,0],[11400,"ESP1","Barcelona","Real Sociedad",10,2.5,null,6.656359001742746e+30,0],[11400,"ESP2","Tenerife","Burgos CF",7,1.95,null,1.2979900053398353e+31,0],[11400,"FRA1","Lille","Marsella",10,1.95,null,2.5310805104126785e+31,0],[11430,"YE-POR1","Famalicao","Oporto",6,1.55,null,3.923174791139652e+31,0],[11500,"ZA-BRA2","Sampaio Correa","ABC",7,1.9,null,7.4540321031653385e+31,0],[11500,"ZA-BRA2","Ituano","Novorizontino",10,2.35,null,1.7516975442438546e+32,0],[11500,"ZA-VEN1","La Guaira","Dep. Táchira",11,1.45,null,2.539961439153589e+32,0],[11530,"ZA-ECU1","Dep. Cuenca","Ind. del Valle",4,1.76,null,4.470332132910317e+32,0],[11600,"ZA-EST2","Charleston","Monterey Bay",11,1.36,null,6.079651700758031e+32,0],[11600,"F20","Argentina Sub-20","Uzbekistán Sub-20",3,1.45,null,8.815494966099144e+32,0],[11600,"F20","Fiyi Sub-20","Eslovaquia Sub-20",6,1.11,null,9.785199412370051e+32,0],[11600,"ZA-PAR1","Libertad","Olimpia",3,1.8,null,1.7613358942266093e+33,0],[11630,"ZA-BOL1","Royal Pari","Always Ready",11,1.35,null,2.3778034572059228e+33,0],[11630,"ZA-BRA1","Sao Paulo","Vasco",5,1.9,null,4.517826568691253e+33,0],[11630,"ZA-BRA1","América-MG","Fortaleza",10,2.1,null,9.487435794251632e+33,0],[11630,"ZA-BRA1","Botafogo","Fluminense",8,2.1,null,1.9923615167928428e+34,0],[11630,"ZA-BRA1","Bragantino","Athletico-PR",10,2.6,null,5.180139943661391e+34,0],[11630,"ZA-BRA1","Coritiba","Atlético-MG",6,1.93,null,9.997670091266485e+34,0],[11630,"ZA-CHI1","Everton","Copiapó",7,1.72,null,1.7195992556978354e+35,0],[11700,"ZA-COL1","Dep. Pasto","Atl. Nacional",8,2.37,null,4.07545023600387e+35,0],[11715,"ZA-VEN1","Monagas","Caracas",11,1.45,null,5.9094028422056114e+35,0],[11800,"ZA-ECU1","U. Católica","Emelec",7,1.85,null,1.0932395258080382e+36,0],[11800,"ZA-EST2","Hartford Athletic","Loudoun",11,1.28,null,1.399346593034289e+36,0],[11800,"ZA-EST2","Indy Eleven","Colorado Springs",11,1.38,null,1.9310982983873186e+36,0],[11800,"ZA-EST2","Miami FC","San Diego Loyal",11,1.38,null,2.6649156517744994e+36,0],[11800,"ZA-EST2","Pittsburgh","Las Vegas Lights",11,1.36,null,3.6242852864133194e+36,0],[11800,"ZA-PER1","Deportivo Garcilaso","Alianza Atl.",7,1.53,null,5.545156488212379e+36,0],[11830,"ZA-EST1","Charlotte","Nashville SC",7,2,null,1.1090312976424757e+37,0],[11830,"ZA-EST1","Cincinnati","Columbus Crew",7,1.75,null,1.9408047708743326e+37,0],[11830,"ZA-EST1","Inter Miami","Orlando City",7,1.95,null,3.784569303204949e+37,0],[11830,"ZA-EST1","DC United","Los Angeles Galaxy",10,2.2,null,8.326052467050888e+37,0],[11830,"ZA-EST1","New York Red Bulls","CF Montreal",10,2.95,null,2.456185477780012e+38,0],[11830,"ZA-EST1","Philadelphia Union","New England Revolution",10,2.3,null,5.649226598894027e+38,0],[11830,"ZA-EST2","Birmingham","El Paso",11,1.33,null,7.513471376529057e+38,0],[11830,"ZA-EST2","Detroit","San Antonio",11,1.42,null,1.066912935467126e+39,0],[11900,"ZA-BOL1","The Strongest","Vaca Diez",11,1.2,null,1.280295522560551e+39,0],[11900,"ZA-BRA1","Santos","Palmeiras",6,1.9,null,2.432561492865047e+39,0],[11900,"ZA-CHI1","U. Católica","U. La Calera",7,1.75,null,4.2569826125138325e+39,0],[11900,"ZA-PAR1","Cerro Porteño","General Caballero JLM",5,1.53,null,6.513183397146163e+39,0],[11930,"ZA-ARG1","Tigre","Atl. Tucumán",7,2,null,1.3026366794292326e+40,0],[11930,"ZA-ARG1","Lanús","Newells",10,2.75,null,3.58225086843039e+40,0],[11930,"ZA-ARG2","Ind. Rivadavia","Deportivo Madryn",7,1.85,null,6.627164106596221e+40,0],[11930,"ZA-ARG2","Chaco For Ever","Atl. Rafaela",10,2.55,null,1.6899268471820364e+41,0],[11930,"ZA-ARG2","Tristán Suárez","Quilmes",8,2.25,null,3.802335406159582e+41,0],[11930,"ZA-EST1","Austin FC","Toronto FC",7,1.76,null,6.6921103148408644e+41,0],[11930,"ZA-EST1","FC Dallas","Houston Dynamo",7,1.85,null,1.23804040824556e+42,0],[11930,"ZA-EST1","Chicago Fire","Atlanta Utd",10,2.05,null,2.5379828369033977e+42,0],[11930,"ZA-EST2","Rio Grande","Tampa Bay",11,1.42,null,3.603935628402824e+42,0],[11930,"ZA-VEN1","Portuguesa","Metropolitanos",11,1.48,null,5.3338247300361796e+42,0],[12000,"ZA-COL1","Ind. Medellín","Millonarios",7,2.1,null,1.1201031933075978e+43,0],[12006,"ZA-MEX1","Monterrey","Tigres UANL",6,2.45,null,2.744252823603615e+43,0],[12030,"ZA-EST1","Colorado Rapids","Real Salt Lake",7,1.72,null,4.720114856598218e+43,0],[12030,"ZA-EST1","St. Louis City","Sporting Kansas City",10,2.25,null,1.062025842734599e+44,0],[12030,"ZA-PER1","Sporting Cristal","Cusco",5,1.55,null,1.6461400562386286e+44,0],[12100,"ZA-EST2","Orange County SC","Phoenix Rising",11,1.35,null,2.222289075922149e+44,0],[12100,"ZA-EST2","Sacramento Republic","Oakland Roots",11,1.36,null,3.0223131432541227e+44,0],[12130,"ZA-EST1","Los Angeles FC","San Jose Earthquakes",5,1,null,3.0223131432541227e+44,0],[12130,"ZA-EST1","Portland Timbers","Minnesota United",7,1.76,null,5.3192711321272556e+44,0],[12130,"ZA-EST1","Vancouver Whitecaps","Seattle Sounders",6,2.15,null,1.1436432934073599e+45,0],[12200,"ZA-MEX2","Tapatio","Atl. Morelia",10,2.25,null,2.5731974101665597e+45,0]]
