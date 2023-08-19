let PARTIDOS = [
  [11700, 'ZA-BRA2', 'CRB', 'Ponte Preta'],
  [11430, 'ZA-B20', 'Botafogo Sub-20', 'Palmeiras Sub-20'],
  [11700, 'ZA-CHI1', 'U. La Calera', 'Magallanes'],
  [10635, 'S-CHI1', 'Henan Songshan Longmen', 'Nantong Zhiyun'],
  [10635, 'S-CHI1', 'Shanghai Port', 'Cangzhou'],
  [10635, 'S-CHI1', 'Tianjin Jinmen Tiger', 'Shenzhen'],
  [11600, 'ZA-COL1', 'Tolima', 'Once Caldas'],
  [11815, 'ZA-COL1', 'La Equidad', 'Envigado'],
  [12030, 'ZA-COL1', 'Dep. Pasto', 'Alianza Petrolera'],
  [10530, 'S-COR1', 'Pohang', 'Jeonbuk'],
  [10530, 'S-COR1', 'Ulsan Hyundai', 'Jeju'],
  [12000, 'ZA-EST2', 'FC Tulsa', 'Rio Grande'],
  [12005, 'ZA-MEX1', 'Venados', 'Tlaxcala'],
  [10800, 'I-AMI', 'Kirguistán', 'Brera Strumica'],
  [10200, 'AMI', 'Jiul Petrosani (Rou)', 'CSM Deva (Rou)'],
  [10300, 'AMI', 'Eldense (Esp)', 'Sheffield Wed (Eng)'],
  [10300, 'AMI', 'Port Vale (Eng)', 'Grimsby (Eng)'],
  [10300, 'AMI', 'Rukh Lviv (Ukr)', 'Metalist 1925 (Ukr)'],
  [10400, 'AMI', 'Trinec (Cze)', 'Kvitkovice (Cze)'],
  [10600, 'AMI', 'Union Rochefortoise (Bel)', 'Seraing (Bel)'],
  [10630, 'AMI', 'Liefering (Aut)', 'LASK (Am) (Aut)'],
  [10700, 'AMI', 'Arouca (Por)', 'Trofense (Por)'],
  [10700, 'AMI', 'CSM Resita (Rou)', 'Al Sharjah (Uae)'],
  [10700, 'AMI', 'Jong Utrecht (Ned)', 'Oss (Ned)'],
  [10700, 'AMI', 'Kecskemeti (Hun)', 'Hodmezovasarhely FC (Hun)'],
  [10700, 'AMI', 'MOL Fehervar (Hun)', 'Gyirmot (Hun)'],
  [10700, 'AMI', 'Újpest (Hun)', 'Al-Fateh (Sau)'],
  [10800, 'AMI', 'Colonia (Ger)', 'Mallorca (Esp)'],
  [10830, 'AMI', 'Presov (Svk)', 'Podbrezova (Svk)'],
  [10900, 'AMI', 'Beşiktaş (Tur)', 'Estrasburgo (Fra)'],
  [10900, 'AMI', 'Club Brujas Sub-23 (Bel)', 'Knokke (Bel)'],
  [10900, 'AMI', 'Kecskemeti (Hun)', 'Ajka (Hun)'],
  [10900, 'AMI', 'Konyaspor (Tur)', 'Sabail (Aze)'],
  [10900, 'AMI', 'Michalovce (Svk)', 'L. Mikulas (Svk)'],
  [10900, 'AMI', 'Osnabruck (Ger)', 'MK Dons (Eng)'],
  [10900, 'AMI', 'Regensburg (Ger)', 'Plauen (Ger)'],
  [10900, 'AMI', 'Rukh Lviv (Ukr)', 'Ahrobiznes Volochysk (Ukr)'],
  [10900, 'AMI', 'Tisselt (Bel)', 'Boom (Bel)'],
  [11000, 'AMI', 'Banska Bystrica (Svk)', 'Petrzalka (Svk)'],
  [11000, 'AMI', 'Bielsko-Biala (Pol)', 'Vorskla (Ukr)'],
  [11000, 'AMI', 'Denizlispor (Tur)', 'Kocaelispor (Tur)'],
  [11000, 'AMI', 'Duisburgo (Ger)', 'Lokomotive Leipzig (Ger)'],
  [11000, 'AMI', 'Haladas (Hun)', 'VLS Veszprem (Hun)'],
  [11000, 'AMI', 'Liefering (Aut)', 'Ried (Am) (Aut)'],
  [11000, 'AMI', 'PSG (Fra)', 'Le Havre (Fra)'],
  [11030, 'AMI', 'Al-Sadd (Qat)', 'Raja Casablanca (Mar)'],
  [11030, 'AMI', 'Belisce (Cro)', 'Bijelo Brdo (Cro)'],
  [11030, 'AMI', 'Paderborn (Ger)', 'Bayer Leverkusen (Ger)'],
  [11100, 'AMI', 'Chemnitzer (Ger)', 'Altglienicke (Ger)'],
  [11100, 'AMI', 'Fortuna Düsseldorf (Ger)', 'Bochum (Ger)'],
  [11100, 'AMI', 'IFK Hassleholm (Swe)', 'Angelholm (Swe)'],
  [11100, 'AMI', 'MSK Martin (Svk)', 'Oravske Vesele (Svk)'],
  [11100, 'AMI', 'St. Lieja (Bel)', 'Hertha BSC (Ger)'],
  [11100, 'AMI', 'Villefranche (Fra)', 'Le Puy-en-Velay (Fra)'],
  [11115, 'AMI', 'Royale Union SG (Bel)', 'Oostende (Bel)'],
  [11130, 'AMI', 'Austria (Am) (Aut)', 'Wolfsberger (Am) (Aut)'],
  [11130, 'AMI', 'Laval (Fra)', 'Cholet (Fra)'],
  [11130, 'AMI', 'Stuttgarter Kickers (Ger)', 'Pforzheim (Ger)'],
  [11200, 'AMI', 'Chateauroux (Fra)', 'Orleans (Fra)'],
  [11200, 'AMI', 'Dordrecht (Ned)', 'Den Bosch (Ned)'],
  [11200, 'AMI', 'Eindhoven (Ned)', 'Beerschot VA (Bel)'],
  [11200, 'AMI', 'Ilzer SV (Aut)', 'Pachern (Aut)'],
  [11200, 'AMI', 'Leithaprodersdorf (Aut)', 'Katzelsdorf (Aut)'],
  [11200, 'AMI', 'Sopron (Hun)', 'Margarethen (Aut)'],
  [11200, 'AMI', 'SV Union Gnas (Aut)', 'Gratkorn (Aut)'],
  [11200, 'AMI', 'SV Union Liebenau (Aut)', 'SV Wildon (Aut)'],
  [11200, 'AMI', 'Tillmitsch (Aut)', 'Rottenman (Aut)'],
  [11200, 'AMI', 'Villarreal Sub-21 (Esp)', 'Arsenal Sub-21 (Eng)'],
  [11200, 'AMI', 'Waldalgesheim (Ger)', 'Hassia Bingen (Ger)'],
  [11200, 'AMI', 'Wals-Grunau (Aut)', 'Vocklamarkt (Aut)'],
  [11230, 'AMI', 'Bonner (Ger)', 'Aachen (Ger)'],
  [11230, 'AMI', 'Geestemunde (Ger)', 'Hagen/Uthlede (Ger)'],
  [11230, 'AMI', 'Jeddeloh (Ger)', 'Delmenhorst (Ger)'],
  [11230, 'AMI', 'Schifflange (Lux)', 'Francs Borains (Bel)'],
  [11230, 'AMI', 'SV Worgl (Aut)', 'FC Buch (Aut)'],
  [11230, 'AMI', 'Teruel (Esp)', 'Real Zaragoza (Esp)'],
  [11230, 'AMI', 'Valencia B (Esp)', 'UD Ibiza (Esp)'],
  [11230, 'AMI', 'Wiener (Aut)', 'Babelsberg (Ger)'],
  [11300, 'AMI', 'Mannsworth (Aut)', 'Ritzing (Aut)'],
  [11300, 'AMI', 'Olbia (Ita)', 'Cagliari (Ita)'],
  [11315, 'AMI', 'Hibernian (Sco)', 'Groningen (Ned)'],
  [11315, 'AMI', 'Leek (Eng)', 'Stoke Sub-21 (Eng)'],
  [11330, 'AMI', 'Dunston (Eng)', 'Gateshead (Eng)'],
  [11330, 'AMI', 'Fleetwood (Eng)', 'Blackburn (Eng)'],
  [11330, 'AMI', 'Hebburn Town (Eng)', 'Horden (Eng)'],
  [11330, 'AMI', 'Isle of Man (Eng)', 'Southport (Eng)'],
  [11330, 'AMI', 'Marine (Eng)', 'Bootle (Eng)'],
  [11330, 'AMI', 'Oxford Utd (Eng)', 'Swansea (Wal)'],
  [11330, 'AMI', 'Tiverton (Eng)', 'Truro (Eng)'],
  [11330, 'AMI', 'Walsall (Eng)', 'Rochdale (Eng)'],
  [11345, 'AMI', 'Coalville (Eng)', 'Tamworth (Eng)'],
  [11345, 'AMI', 'Heybridge (Eng)', 'Canvey Island (Eng)'],
  [11345, 'AMI', 'Ilkeston (Eng)', 'Belper Town (Eng)'],
  [11345, 'AMI', 'Ipswich Wanderers (Eng)', 'Hadleigh (Eng)'],
  [11345, 'AMI', 'Osasuna (Esp)', 'Real Sociedad (Esp)'],
  [11430, 'AMI', 'Benfica (Por)', 'Celta de Vigo (Esp)'],
  [11900, 'AMI', 'North Carolina (Usa)', 'Sunderland (Eng)'],
  [12100, 'AMI', 'Hoffenheim II (Ger)', 'Crystal Palace Sub-21 (Eng)'],
  [10000, 'MUJE', 'Filipinas F', 'Suiza F'],
  [10230, 'MUJE', 'España F', 'Costa Rica F'],
  [12000, 'MUJE', 'EE. UU. F', 'Vietnam F'],
  [11900, 'I-LEA', 'Inter Miami', 'Cruz Azul'],
  [11900, 'I-LEA', 'Orlando City', 'Houston Dynamo'],
  [11930, 'I-LEA', 'Austin FC', 'Mazatlán'],
  [12000, 'I-LEA', 'FC Dallas', 'Charlotte'],
  [12130, 'I-LEA', 'León', 'Vancouver Whitecaps'],
  [11800, 'ZA-PAR1', 'Tacuary', 'Guaraní'],
  [11300, 'ZA-PER1', 'Unión Comercio', 'César Vallejo'],
  [11945, 'ZA-PER1', 'Cienciano', 'Sport Huancayo'],
  [11100, 'YE-POLE', 'Warta', 'Pogon Szczecin'],
  [11330, 'YE-POLE', 'Legia', 'LKS Lodz'],
  [11415, 'YE-PORT', 'Torreense', 'Mafra'],
  [11030, 'YE-RUM1', 'Sepsi Sf. Gheorghe', 'U Craiova 1948'],
  [11330, 'YE-RUM1', 'UTA Arad', 'CFR Cluj'],
  [11100, 'YE-RUS1', 'Dinamo Moscú', 'Krasnodar'],
  [11230, 'YE-SUI2', 'Thun', 'Nyonnais'],
  [11230, 'YE-SUI2', 'Xamax', 'Schaffhausen'],
  [11315, 'YE-SUI2', 'Aarau', 'Baden'],
  [11300, 'ZA-URU1', 'Fénix', 'Liverpool M.'],
  [11800, 'ZA-URU1', 'La Luz', 'Montevideo City'],
  [11600, 'ZA-VEN1', 'Metropolitanos', 'Angostura'],
  [11815, 'ZA-VEN1', 'Zamora', 'Rayo Zuliano'],
]