////////////////////////////////////////////////////////////////////////
let PARTIDOS_SIN_CUOTA = [
  [11445, "R-ESC2*", "Partick Thistle", "Queen of South", 12],
  [11445, "R-ING2", "Bournemouth", "Peterborough", 5],
  [11445, "R-ING2", "Barnsley", "Stoke", 8],
  [11445, "R-ING2", "Blackburn", "Millwall", 10],
  [11445, "R-ING2", "Coventry", "Luton", 10],
  [11445, "R-ING2", "Sheffield Utd", "Middlesbrough", 6],
  [11445, "R-ING2", "Swansea", "Fulham", 8],
  [11445, "R-INGO", "Ipswich", "Lincoln", 7],
  [11445, "R-INGO", "MK Dons", "Cheltenham", 7],
  [11445, "R-INGO", "Plymouth", "Wimbledon", 7],
  [11445, "R-INGO", "Sunderland", "Fleetwood", 7],
  [11445, "R-INGO", "Crewe", "Portsmouth", 8],
  [11445, "R-INGT", "Exeter", "Swindon", 7],
  [11445, "R-INGT", "Crawley", "Bristol Rovers", 8],
  [11445, "R-INGN", "Solihull Moors", "Notts County", 11],
  [11445, "R-INGN", "Southend", "Grimsby", 11],
  [11445, "R-INGN", "Wrexham", "Boreham Wood", 11],
  [11445, "R-INGN", "Altrincham", "Weymouth", 12],
  [11445, "R-INGN", "Kings Lynn", "Woking", 12],
  [11445, "R-INGN", "Maidenhead", "Wealdstone", 12],
  [11445, "R-INGN", "Yeovil", "Dagenham & Red.", 12],
  [11500, "CHAMP", "Bayern Múnich", "Salzburgo", 1],
  [11500, "CHAMP", "Liverpool", "Inter", 1],
  [11500, "R-INGO", "Bolton", "Morecambe", 7],
  [11515, "YE-POR2", "Casa Pia", "Mafra", 7],
  [11715, "ZA-SUD", "Sol de América (Par)", "General Caballero JLM (Par)", 7],
  [11715, "ZA-SUD", "Estudiantes M. (Ven)", "Metropolitanos (Ven)", 10],
  [11715, "ZA-SUD", "Royal Pari (Bol)", "Oriente Petrolero (Bol)", 10],
  [11730, "ZA-COL1", "Aguilas Doradas", "Envigado", 10],
  [11800, "ZA-MEX2", "Celaya", "Atl. Morelia", 7],
  [11930, "ZA-LIB", "América-MG (Bra)", "Barcelona SC (Ecu)", 10],
  [11930, "ZA-SUD", "Cienciano (Per)", "Melgar (Per)", 7],
  [11930, "ZA-SUD", "Ñublense (Chi)", "U. La Calera (Chi)", 10],
  [11935, "ZA-COL1", "Jaguares de Córdoba", "Dep. Pasto", 10],
  [12000, "CONCA", "New York City (Usa)", "Comunicaciones (Gtm)", 7],
  [12005, "ZA-MEX2", "Tampico Madero", "Raya2", 7],
  [12200, "CONCA", "Seattle Sounders (Usa)", "León (Mex)", 7],
  [12205, "ZA-MEX2", "Venados", "Cancun", 7],
  [12206, "ZA-MEX1", "Monterrey", "Juárez", 5]
];

let PARTIDOS_CON_CUOTA = [
  [12000, 'New York City', 'CSD Comunicaciones', 'New York City', 1.44],
  [12200, 'Seattle Sounders', 'Leon', 'Seattle Sounders', 2.35],
  [11730, 'Rionegro Aguilas', 'Envigado FC', 'Envigado FC', 2.65],
  [11935, 'Jaguares De Córdoba', 'Deportivo Pasto', 'Deportivo Pasto', 2.90],
  [11930, 'America Mineiro MG', 'Barcelona SC', 'Barcelona SC', 2.80],
  [11800, 'Club Celaya', 'Atletico Morelia', 'Club Celaya', 2.25],
  [12005, 'Tampico Madero', 'Raya2', 'Tampico Madero', 2.05],
  [12205, 'Venados FC', 'Cancun FC', 'Venados FC', 2.00],
  [11715, 'Sol de America', 'Club General Caballero Jlm', 'Sol de America', 1.80],
  [11715, 'Estudiantes de Merida', 'Metropolitano SC', 'Metropolitano SC', 2.50],
  [11715, 'Royal Pari', 'Oriente Petrolero', 'Oriente Petrolero', 2.05],
  [11930, 'Nublense', 'Union La Calera', 'Union La Calera', 2.40],
  [11500, 'Bayern Munich', 'FC Salzburg', 'Bayern Munich', 1.28],
  [11500, 'Liverpool', 'Inter', 'Liverpool', 1.57],
  [11445, 'Bournemouth', 'Peterborough United', 'Bournemouth', 1.42],
  [11445, 'Barnsley', 'Stoke City', 'Stoke City', 2.15],
  [11445, 'Coventry', 'Luton Town', 'Luton Town', 2.55],
  [11445, 'Blackburn Rovers', 'Millwall', 'Millwall', 2.95],
  [11445, 'Sheffield United', 'Middlesbrough', 'Middlesbrough', 2.45],
  [11445, 'Swansea', 'Fulham', 'Fulham', 1.76],
  [11445, 'Solihull Moors FC', 'Notts County', '0.5', 1.40],
  [11445, 'Wrexham FC', 'Boreham Wood', '0.5', 1.42],
  [11445, 'Southend United', 'Grimsby Town', '0.5', 1.42],
  [11445, 'Ipswich Town', 'Lincoln City', 'Ipswich Town', 1.66],
  [11445, 'MK Dons', 'Cheltenham Town', 'MK Dons', 1.70],
  [11445, 'Plymouth Argyle', 'AFC Wimbledon', 'Plymouth Argyle', 1.70],
  [11445, 'Sunderland', 'Fleetwood Town', 'Sunderland', 1.60],
  [11500, 'Bolton Wanderers', 'Morecambe', 'Bolton Wanderers', 1.55],
  [11445, 'Crewe Alexandra', 'Portsmouth', 'Portsmouth', 1.70],
  [11445, 'Exeter City', 'Swindon Town', 'Exeter City', 1.85],
  [11445, 'Crawley Town', 'Bristol Rovers', 'Bristol Rovers', 2.05],
  [11515, 'Casa Pia Atletico', 'CD Mafra', 'Casa Pia Atletico', 1.95],
]
























////////////////////////////////////////////////////////////////////////
// let PARTIDOS_SIN_CUOTA = [

// ];

// let PARTIDOS_CON_CUOTA = [

// ]



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
  } else {
    let indice_encontrado_2 = PARTIDOS_CON_CUOTA.findIndex((p) => {
      // console.log({ p });
      return p[2].toLowerCase() === partido[3].toLowerCase();
    });

    if (indice_encontrado_2 >= 0) {
      //   PARTIDOS_CON_CUOTA_Y_GRUPO[indice] = partido;
      PARTIDOS_SIN_CUOTA[indice][5] =
        PARTIDOS_CON_CUOTA[indice_encontrado_2][4];
    }
  }

  indice++;
  //   }
}

const { writeFile } = require('fs');

writeFile('partidos.txt', JSON.stringify(PARTIDOS_SIN_CUOTA), 'utf8', () => {
  console.log({
    PARTIDOS_SIN_CUOTA_C: PARTIDOS_SIN_CUOTA.length,
    PARTIDOS_CON_CUOTA_C: PARTIDOS_CON_CUOTA.length,
    // PARTIDOS_SIN_CUOTA: JSON.stringify(PARTIDOS_SIN_CUOTA),
  });
});

