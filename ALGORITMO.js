let PARTIDOS_CON_CUOTA = [
  [10900, 'Crewe Alexandra', 'AFC Wimbledon', 'AFC Wimbledon', 2.00],
  [10900, 'Doncaster Rovers', 'Bolton Wanderers', 'Bolton Wanderers', 1.76],
  [10900, 'Fleetwood Town', 'Oxford United', 'Oxford United', 1.76],
  [10900, 'Accrington', 'Burton Albion', 'Burton Albion', 2.10],
  [10900, 'Bristol Rovers', 'Salford City', 'Bristol Rovers', 1.95],
  [10900, 'Leyton Orient', 'Scunthorpe United', 'Leyton Orient', 1.60],
  [10900, 'Mansfield Town', 'Sutton United', 'Mansfield Town', 1.75],
  [10900, 'Newport', 'Crawley Town', 'Newport', 1.70],
  [10900, 'Barrow FC', 'Forest Green Rovers', 'Forest Green Rovers', 1.90],
  [10900, 'Harrogate Town', 'Swindon Town', 'Swindon Town', 1.83],
  [10900, 'Hartlepool', 'Port Vale', 'Port Vale', 2.00],
  [10900, 'Oldham', 'Northampton', 'Northampton', 1.95],
  [10900, 'Bradford City', 'Tranmere', 'Tranmere', 2.20],
  [10900, 'Stevenage', 'Rochdale', 'Rochdale', 2.30],
  [10900, 'Walsall', 'Carlisle', 'Carlisle', 2.55],
  [10930, 'Arouca', 'CD Santa Clara', 'CD Santa Clara', 2.45],
  [10900, 'Altrincham FC', 'Halifax Town', '0.5', 1.40],
  [10900, 'Eastleigh FC', 'Bromley FC', '0.5', 1.42],
  [10900, 'Grimsby Town', 'Stockport County', '0.5', 1.50],
  [10900, 'Southend United', 'Wealdstone FC', '0.5', 1.44],
  [10900, 'Yeovil Town', 'Aldershot Town', '0.5', 1.42],
  [10930, 'Slutsksakhar Slutsk', 'FC Minsk', '0.5', 1.45],
  [10900, 'Tuzlaspor', 'Genclerbirligi', '0.5', 1.50],
  [10900, 'Swansea', 'Barnsley', 'Swansea', 1.75],
  [10900, 'West Bromwich', 'Blackpool', 'West Bromwich', 1.85],
  [10900, 'Bournemouth', 'Middlesbrough', 'Bournemouth', 1.90],
  [10900, 'Sheffield United', 'Reading', 'Sheffield United', 1.66],
  [10900, 'Stoke City', 'Bristol City', 'Stoke City', 1.75],
  [10900, 'Birmingham City', 'Coventry', 'Birmingham City', 2.35],
  [10900, 'Peterborough United', 'Blackburn Rovers', 'Blackburn Rovers', 1.76],
  [10900, 'Hull City', 'Cardiff City', 'Cardiff City', 2.40],
  [10900, 'Preston', 'Millwall', 'Millwall', 2.50],
  [10900, 'Sunderland', 'Shrewsbury', 'Sunderland', 1.76],
  [10900, 'Charlton Athletic', 'Morecambe', 'Charlton Athletic', 1.70],
  [10900, 'Cheltenham Town', 'Gillingham', 'Cheltenham Town', 1.85],
  [10900, 'Portsmouth', 'Lincoln City', 'Portsmouth', 1.70],
  [10900, 'Wycombe Wanderers', 'Plymouth Argyle', 'Wycombe Wanderers', 1.76],
  
]

let PARTIDOS_SIN_CUOTA = [
  [10500,"YE-POR2","Chaves","Covilha",7],[10630,"R-ING2","Luton","Nottingham Forest",8],[10630,"*YE-TUR2","Keciorengucu","Denizlispor",11],[10700,"R-INGT","Exeter","Colchester",7],[10800,"YE-POR2","Varzim","Casa Pia",8],[10900,"*R-INGN","Altrincham","Halifax",11],[10900,"*R-INGN","Eastleigh","Bromley",11],[10900,"*R-INGN","Grimsby","Stockport",11],[10900,"*R-INGN","Southend","Wealdstone",11],[10900,"*R-INGN","Yeovil","Aldershot",11],[10900,"*R-INGN","Boreham Wood","Dover",12],[10900,"*R-INGN","Dagenham & Red.","Barnet",12],[10900,"*R-INGN","Maidenhead","Weymouth",12],[10900,"*R-INGN","Notts County","Kings Lynn",12],[10900,"*R-INGN","Woking","Torquay",12],[10900,"*R-INGN","Wrexham","Solihull Moors",12],[10900,"R-ING2","Birmingham","Coventry",9],[10900,"R-ING2","Bournemouth","Middlesbrough",7],[10900,"R-ING2","Sheffield Utd","Reading",7],[10900,"R-ING2","Stoke","Bristol City",7],[10900,"R-ING2","Swansea","Barnsley",5],[10900,"R-ING2","West Brom","Blackpool",5],[10900,"R-ING2","Hull","Cardiff",10],[10900,"R-ING2","Peterborough","Blackburn",8],[10900,"R-ING2","Preston","Millwall",10],[10900,"R-INGO","Charlton","Morecambe",7],[10900,"R-INGO","Cheltenham","Gillingham FC",7],[10900,"R-INGO","Portsmouth","Lincoln",7],[10900,"R-INGO","Sunderland","Shrewsbury",5],[10900,"R-INGO","Wycombe","Plymouth",7],[10900,"R-INGO","Accrington","Burton",10],[10900,"R-INGO","Crewe","Wimbledon",8],[10900,"R-INGO","Doncaster","Bolton",8],[10900,"R-INGO","Fleetwood","Oxford Utd",8],[10900,"R-INGT","Bristol Rovers","Salford",7],[10900,"R-INGT","Leyton Orient","Scunthorpe",7],[10900,"R-INGT","Mansfield","Sutton",7],[10900,"R-INGT","Newport","Crawley",7],[10900,"R-INGT","Barrow","Forest Green",8],[10900,"R-INGT","Bradford City","Tranmere",10],[10900,"R-INGT","Harrogate","Swindon",8],[10900,"R-INGT","Hartlepool","Port Vale",8],[10900,"R-INGT","Oldham","Northampton",8],[10900,"R-INGT","Stevenage","Rochdale",10],[10900,"R-INGT","Walsall","Carlisle",10],[10900,"*YE-TUR2","Tuzlaspor","Genclerbirligi",11],[10930,"*YE-BIE1","Slutsk","FC Minsk",11],[10930,"YE-POR1","Arouca","Santa Clara",10],[10930,"YE-RUM1","Chindia Targoviste","Botosani",10],[11130,"ESP2","Eibar","Las Palmas",5],[11130,"R-ING2","Huddersfield","QPR",7],[11130,"YE-RUS1","Dinamo Moscú","Akhmat Grozny",5],[11200,"ITA1","Spezia","Inter",2],[11200,"YE-POR1","Famalicao","Gil Vicente",10],[11230,"YE-RUM1","Mioveni","Dinamo Bucarest",7],[11230,"YE-TUR1","Kayserispor","Rizespor",7],[11230,"YE-TUR1","Trabzonspor","Karagumruk",5],[11230,"*YE-TUR2","Istanbulspor","Bursaspor",12],[11300,"YE-HOL2","Dordrecht","FC Emmen",6],[11300,"YE-HOL2","Eindhoven","Jong PSV",7],[11300,"YE-HOL2","Graafschap","Oss",7],[11300,"YE-HOL2","Jong AZ","Den Haag",8],[11300,"YE-HOL2","Maastricht","Excelsior",8],[11300,"YE-HOL2","Roda","Helmond",7],[11300,"YE-HOL2","Venlo","Telstar",7],[11300,"ZA-PER1","Alianza Atl.","Binacional",10],[11345,"*R-ESC2","Inverness","Kilmarnock",11],[11400,"ESP1","Real Sociedad","Real Betis",6],[11400,"ESP2","Amorebieta","Mirandés",10],[11400,"FRA1","Stade Rennais","Mónaco",7],[11400,"ITA1","AC Milan","Genoa",1],[11400,"R-ING2","Derby","Fulham",8],[11400,"ZA-URU1","Danubio","Boston River",7],[11430,"YE-POR1","V. Guimaraes","P. Ferreira",7],[11430,"ZA-ARG1","Tigre","Huracán",7],[11500,"ZA-COL2","Atletico F.C.","Llaneros",8],[11530,"ZA-CHI1","La Serena","U. Española",6],[11530,"ZA-PER1","UTC","AD Cantolao",7],[11615,"*ZA-VEN1","Aragua","Carabobo",11],[11700,"*ZA-BOL1","Tomayapo","Universitario de Vinto",12],[11700,"ZA-ARG1","Aldosivi","Rosario Central",8],[11700,"ZA-ARG1","Central Córdoba","Arsenal Sarandí",10],[11700,"ZA-BRA2","Gremio","Chapecoense",5],[11700,"ZA-MEX2","Tapatio","Raya2",7],[11715,"ZA-COL2","Fortaleza","Tigres",5],[11800,"*ZA-EST2","Detroit","Birmingham",11],[11800,"*ZA-EST2","New York Red Bulls 2","Rio Grande",12],[11815,"ZA-URU1","Defensor Sp.","Fénix",10],[11900,"*ZA-BOL1","U. Sucre","Santa Cruz",12],[11900,"ZA-ECU1","Gualaceo","Mushuc Runa",10],[11900,"ZA-MEX1","Necaxa","Atlético de San Luis",7],[11930,"ZA-ARG1","Newells","Patronato",5],[11930,"ZA-BRA2","Náutico","Bahia",8],[11930,"ZA-COL1","Ind. Santa Fe","Alianza Petrolera",3],[12100,"ZA-MEX1","Juárez","Pachuca",6],[12106,"ZA-MEX1","Tijuana","Club América",6],[12300,"ZS-JAP1","Sapporo","Tokyo",10]
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

