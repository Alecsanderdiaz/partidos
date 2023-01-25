let PARTIDOS = [
  [11100,"*CLUB","Ruch (Pol)","Pawlowice (Pol)",12,1,null,1],[11200,"*CLUB","Chlumec nad Cidlinou (Cze)","Zbuzany (Cze)",12,1,null,1],[11230,"ALE1","Mainz","Borussia Dortmund",2,1.76,null,1.76],[11230,"*YE-GREC","Aris","Olympiacos",11,1.5,null,2.64],[11245,"YE-HOL1","G.A. Eagles","AZ Alkmaar",4,1.72,null,4.54],[11245,"YE-HOL1","Vitesse","Twente",8,1.93,null,8.76],[11300,"*ZA-BPAU","Primavera EC","Oeste",7,2.62,null,22.95],[11300,"*ZA-BPER","CA Porto","Afogados da Ingazeira",11,1,null,22.95],[11300,"*CLUB","Borussia Mgladbach II (Ger)","Union Nettetal (Ger)",12,1,null,22.95],[11300,"*CLUB","Greuther Fürth II (Ger)","Erlangen (Ger)",12,1,null,22.95],[11300,"*CLUB","Hannover II (Ger)","Egestorf-Langreder (Ger)",12,1,null,22.95],[11300,"*CLUB","Hohenems (Aut)","Bruhl SG (Sui)",12,1,null,22.95],[11300,"*CLUB","Wiedenbruck (Ger)","Finnentrop/Bamenohl (Ger)",12,1,null,22.95],[11315,"*CLUB","Fram (Nor)","Pors (Nor)",12,1,null,22.95],[11330,"*ZA-BCAR","Audax RJ","Nova Iguacu",10,2.6,null,59.67],[11330,"*ZA-BCEA","Ferroviario","Atletico-CE",11,1.28,null,76.37],[11330,"*ZA-BPARAN","Rio Branco PR","Aruko Sports",11,1.4,null,106.91],[11330,"*ZA-B20","Palmeiras Sub-20","América-MG Sub-20",11,1,null,106.91],[11330,"*CLUB","Ahlen (Ger)","Hammer SpVgg. (Ger)",12,1,null,106.91],[11330,"*CLUB","Berbourg (Lux)","Racing Luxembourg (Lux)",12,1,null,106.91],[11330,"*CLUB","Jeunesse Esch (Lux)","Rumelange (Lux)",12,1,null,106.91],[11330,"*CLUB","RW Koblenz (Ger)","Eisbachtal (Ger)",12,1,null,106.91],[11330,"*CLUB","Wettswil-Bonstetten (Sui)","Rapperswil (Sui)",12,1,null,106.91],[11400,"*CLUB","Emden (Ger)","Meppen Sub-19 (Ger)",12,1,null,106.91],[11400,"YE-HOL1","Sittard","Heerenveen",8,2,null,213.82],[11430,"ALE1","Bayer Leverkusen","Bochum",5,1.55,null,331.42],[11430,"ALE1","Augsburgo","Borussia Mgladbach",8,1.76,null,583.29],[11430,"ALE1","Friburgo","Eintracht Frankfurt",10,2.1,null,1224.9],[11430,"ALE1","Werder Bremen","Union Berlín",8,2.15,null,2633.53],[11430,"R-INGN","Halifax","Scunthorpe",11,1.4,null,3686.94],[11430,"*CLUB","UC Dublin (Irl)","Bray (Irl)",11,1.35,null,4977.36],[11445,"YE-PORT","Oporto","Academico Viseu",5,1.25,null,6221.7],[11500,"ESPC","Barcelona","Real Sociedad",6,2.95,null,18354.01],[11500,"R-INGE","Nottingham Forest","Manchester Utd",2,1.66,null,30467.65],[11500,"YE-HOL1","Feyenoord","Nijmegen",5,1.44,null,43873.41],[11500,"YE-HOL1","Utrecht","Excelsior",7,1.45,null,63616.44],[11510,"ZA-COL1","U. Magdalena","Atl. Huila",2,3,null,190849.32],[11600,"ESPC","Osasuna","Sevilla",2,2.5,null,477123.3],[11615,"*CLUB","Danubio (Uru)","Fénix (Uru)",7,2,null,954246.6],[11700,"*ZA-BCAR","Volta Redonda","Resende",7,2.05,null,1956205.52],[11700,"*ZA-BCAT","Hercilio Luz","Avaí",11,1.7,null,3325549.38],[11700,"*ZA-BGAU","Avenida","Internacional",11,1.42,null,4722280.11],[11700,"*ZA-BGOI","CRAC","Goiás",11,1.55,null,7319534.17],[11700,"*ZA-BPAU","Bragantino","Ferroviaria",7,1.8,null,13175161.5],[11700,"*ZA-BPAU","Ponte Preta","Monte Azul",7,1.5,null,19762742.25],[11700,"I-S20","Argentina Sub-20","Perú Sub-20",10,4,null,79050969],[11715,"*ZA-BBAI","Alagoinhas","Jacuipense",11,1.57,null,124110021.33],[11715,"*ZA-BPARAN","Athletico-PR","Foz do Iguacu",11,1.3,null,161343027.72],[11715,"*ZA-BPARAN","Azuriz","Sao Joseense",11,1.57,null,253308553.52],[11715,"*ZA-BPARAN","Cascavel","Cianorte",11,1.6,null,405293685.63],[11720,"ZA-COL1","Aguilas Doradas","Junior",2,2.35,null,952440161.23],[11730,"*ZA-BGOI","Atlético-GO","Anapolis",11,1.42,null,1352465028.94],[11730,"*ZA-BPARAI","Sousa","Campinense",11,1.57,null,2123370095.43],[11730,"*ZA-BPAU","Ituano","Palmeiras",8,1.9,null,4034403181.31],[11730,"*ZA-BPAU","Noroeste","Juventus-SP",10,2.65,null,10691168430.47],[11800,"*ZA-BALA","Alianca","Cruzeiro Arapiraca",11,1.55,null,16571311067.22],[11800,"*ZA-BALA","ASA","CSE",11,1.48,null,24525540379.48],[11800,"*ZA-BCEA","Barbalha","Maracana",11,1,null,24525540379.48],[11800,"*ZA-BCEA","Ceará","Pacajus",11,1.4,null,34335756531.27],[11800,"*ZA-BGOI","Goianesia","Gremio Anapolis",11,1.48,null,50816919666.27],[11800,"*ZA-BGOI","Morrinhos","Goiania",11,1.6,null,81307071466.03],[11800,"*ZA-BPAU","Sao Caetano","Piracicaba",7,2.55,null,207333032238.37],[11800,"*ZA-BPAU","Taubate","Rio Claro",7,2.25,null,466499322536.33],[11800,"*ZA-BPAU","Comercial","Portuguesa Santista",10,2.45,null,1142923340214],[11800,"*ZA-BPAU","Velo Clube","Linense",10,3,null,3428770020642],[11800,"*ZA-BPER","Retro","Náutico",11,1.45,null,4971716529930.89],[11800,"ZA-MEX1","Celaya","Leones Negros",7,1.9,null,9446261406868.69],[11830,"*ZA-BALA","CRB","Coruripe",11,1.4,null,13224765969616.16],[11830,"*ZA-BGOI","Aparecidense","Inhumas",11,1.55,null,20498387252905.05],[11830,"*ZA-BGOI","Vila Nova","Ipora",11,1.42,null,29107709899125.17],[11830,"*ZA-BPARAI","Treze","Serra Branca",11,1.45,null,42206179353731.5],[11830,"*ZA-BPAU","Santo Andre","Botafogo SP",8,2.75,null,116066993222761.62],[11900,"*ZA-BCAT","Camboriu","Concordia",11,1.76,null,204277908072060.47],[11900,"*ZA-BCAT","Figueirense","Chapecoense",11,1.66,null,339101327399620.4],[11900,"*CLUB","Barcelona SC (Ecu)","FC Dallas (Usa)",12,1,null,339101327399620.4],[11900,"*CLUB","Inter Miami (Usa)","FIU Panthers (Usa)",12,1,null,339101327399620.4],[11910,"*ZA-BCAR","Portuguesa RJ","Vasco",8,1.9,null,644292522059278.6],[11930,"*ZA-BBAI","Jacobinense","Bahia",11,1.33,null,856909054338840.6],[11930,"*ZA-BGAU","Gremio","Brasil de Pelotas",11,1.38,null,1182534494987600],[11930,"*ZA-BPARAN","Maringa FC","Coritiba",11,1.5,null,1773801742481400],[11930,"*CLUB","Wanderers (Uru)","Cerro CA (Uru)",10,2.9,null,5144025053196060],[11930,"I-S20","Brasil Sub-20","Colombia Sub-20",10,2.25,null,11574056369691136],[11935,"*ZA-BPAU","Santos","Agua Santa",7,1.76,null,20370339210656400],[12005,"ZA-MEX1","Cancun","Correcaminos U.A.T.",7,2,null,40740678421312800],[12200,"*PAISES","EE. UU.","Serbia",10,2.8,null,114073899579675840],[12205,"ZA-MEX1","Alebrijes Oaxaca","Dorados",10,2.35,null,268073664012238240]
]
