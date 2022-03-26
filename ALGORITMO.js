let PARTIDOS_SIN_CUOTA = [
  [10800, "ALE3", "Osnabruck", "Braunschweig", 7],
  [11800, "ZA-ARGC", "Independiente", "Central Norte", 5],
  [11400, "ZA-COL1", "Atl. Bucaramanga", "Jaguares de Córdoba", 7],
  [11605, "ZA-COL1", "Envigado", "Once Caldas", 8],
  [11810, "ZA-COL1", "U. Magdalena", "Aguilas Doradas", 7],
  [12015, "ZA-COL1", "Pereira", "Ind. Medellín", 8],
  [11500, "ZA-COL2", "Boca Juniors", "Tigres", 10],
  [11500, "ZA-COL2", "Bogotá", "Real Santander", 7],
  [11500, "ZA-COL2", "Llaneros", "Atl. Huila", 10],
  [12000, "ZA-COL2", "Boyacá Chicó", "Fortaleza", 10],
  [11500, "ZM-COLF*", "Orsomarso F", "La Equidad F", 12],
  [11700, "ZM-COLF*", "Deportivo Pereira F", "America de Cali F", 12],
  [11800, "ZM-COLF*", "Santa Fe F", "Cortuluá F", 12],
  [11800, "ZA-ECU2", "Olmedo", "Ind. Juniors", 12],
  [11900, "ZA-ECU2", "Imbabura", "Santo Domingo", 12],
  [11000, "R-ESC2*", "Arbroath", "Raith", 11],
  [11000, "R-ESC2*", "Hamilton", "Queen of South", 11],
  [11000, "R-ESC2*", "Inverness", "Dunfermline", 11],
  [11000, "R-ESC2*", "Kilmarnock", "Partick Thistle", 11],
  [11000, "R-ESC2*", "Morton", "Ayr", 11],
  [10800, "ESP2", "UD Ibiza", "R. Sociedad B", 10],
  [11000, "ESP2", "Eibar", "Lugo", 7],
  [11200, "ESP2", "Sporting de Gijón", "Cartagena", 7],
  [11530, "ESP2", "Real Oviedo", "Fuenlabrada", 7],
  [11600, "ZA-USA1", "Charlotte", "Cincinnati", 10],
  [11800, "ZA-USA1", "Sporting Kansas City", "Real Salt Lake", 10],
  [11500, "ZA-USA2*", "Detroit", "Pittsburgh", 11],
  [11700, "ZA-USA2*", "New Mexico", "Orange County SC", 11],
  [11800, "ZA-USA2*", "Miami FC", "Loudoun", 12],
  [11830, "ZA-USA2*", "Birmingham", "Colorado Springs", 12],
  [11830, "ZA-USA2*", "Louisville City", "Indy Eleven", 12],
  [11830, "ZA-USA2*", "Tampa Bay", "Hartford Athletic", 12],
  [12100, "ZA-USA2*", "Las Vegas Lights", "Memphis", 12],
  [12100, "ZA-USA2*", "Oakland Roots", "Monterey Bay", 12],
  [12130, "ZA-USA2*", "Phoenix Rising", "San Diego Loyal", 12],
  [10900, "U-SUB21", "Chipre Sub-21", "Bielorrusia Sub-21", 12],
  [11000, "R-INGO", "Accrington", "Gillingham FC", 7],
  [11000, "R-INGO", "Doncaster", "Charlton", 8],
  [11000, "R-INGO", "Ipswich", "Plymouth", 10],
  [11000, "R-INGO", "Sheffield Wed", "Cheltenham", 10],
  [11000, "R-INGO", "Shrewsbury", "Lincoln", 7],
  [11000, "R-INGO", "Wimbledon", "Cambridge Utd", 10],
  [11000, "R-INGT", "Bradford City", "Newport", 8],
  [11000, "R-INGT", "Carlisle", "Bristol Rovers", 8],
  [11000, "R-INGT", "Colchester", "Tranmere", 8],
  [11000, "R-INGT", "Crawley", "Rochdale", 7],
  [11000, "R-INGT", "Exeter", "Stevenage", 7],
  [11000, "R-INGT", "Leyton Orient", "Barrow", 7],
  [11000, "R-INGT", "Northampton", "Hartlepool", 7],
  [11000, "R-INGT", "Oldham", "Mansfield", 8],
  [11000, "R-INGT", "Port Vale", "Sutton", 7],
  [11000, "R-INGT", "Salford", "Walsall", 7],
  [11000, "R-INGT", "Scunthorpe", "Harrogate", 8],
  [11000, "R-INGN*", "Altrincham", "Aldershot", 12],
  [11000, "R-INGN*", "Eastleigh", "Stockport", 12],
  [11000, "R-INGN*", "Grimsby", "Dagenham & Red.", 11],
  [11000, "R-INGN*", "Kings Lynn", "Halifax", 12],
  [11000, "R-INGN*", "Maidenhead", "Barnet", 12],
  [11000, "R-INGN*", "Notts County", "Chesterfield", 11],
  [11000, "R-INGN*", "Torquay", "Weymouth", 12],
  [11000, "R-INGN*", "Wealdstone", "Bromley", 12],
  [11000, "R-INGN*", "Woking", "Solihull Moors", 12],
  [11000, "R-INGN*", "Wrexham", "Dover", 12],
  [11000, "R-INGN*", "Yeovil", "Southend", 11],
  [11800, "ZA-MEX1", "Pumas UNAM", "Mazatlán", 7],
  [12000, "ZA-MEX2", "Alebrijes Oaxaca", "Dorados", 10],
  [12200, "ZA-MEX2", "Cimarrones de Sonora", "Venados", 7],
  [12205, "ZA-MEX2", "Tepatitlán", "Atlante", 10],
  [11030, "YE-HOL2", "Den Bosch", "Venlo", 8],
  [11245, "YE-HOL2", "Excelsior", "Helmond", 7],
  [11600, "ZA-PAR1", "Sol de América", "Olimpia", 8],
  [11600, "ZA-VEN1*", "Mineros", "Aragua", 11],
  [11815, "ZA-VEN1*", "Caracas", "Portuguesa", 11]
]

let PARTIDOS_CON_CUOTA = [
  [11000, 'SD Eibar', 'CD Lugo', 'SD Eibar', 1.76],
  [11000, 'Arbroath', 'Raith Rovers', '0.15', 1.48],
  [11000, 'Hamilton Academical', 'Queen of the South', '0.15', 1.40],
  [11000, 'Inverness CT', 'Dunfermline', '0.15', 1.45],
  [11000, 'Kilmarnock', 'Partick Thistle', '0.15', 1.45],
  [11000, 'Greenock Morton', 'Ayr United', '0.15', 1.53],
  [11000, 'Grimsby Town', 'Dagenham & Redbridge', '0.15', 1.42],
  [11000, 'Notts County', 'Chesterfield', '0.15', 1.44],
  [11000, 'Yeovil Town', 'Southend United', '0.15', 1.48],
  [11000, 'Accrington', 'Gillingham', 'Accrington', 1.76],
  [11000, 'Shrewsbury', 'Lincoln City', 'Shrewsbury', 1.93],
  [11000, 'Doncaster Rovers', 'Charlton Athletic', 'Charlton Athletic', 1.80],
  [11000, 'Ipswich Town', 'Plymouth Argyle', 'Plymouth Argyle', 2.45],
  [11000, 'Sheffield Wednesday', 'Cheltenham Town', 'Cheltenham Town', 2.75],
  [11000, 'AFC Wimbledon', 'Cambridge United', 'Cambridge United', 2.25],
  [11000, 'Crawley Town', 'Rochdale', 'Crawley Town', 1.95],
  [11000, 'Exeter City', 'Stevenage', 'Exeter City', 1.76],
  [11000, 'Leyton Orient', 'Barrow FC', 'Leyton Orient', 2.05],
  [11000, 'Northampton', 'Hartlepool', 'Northampton', 2.05],
  [11000, 'Port Vale', 'Sutton United', 'Port Vale', 1.95],
  [11000, 'Salford City', 'Walsall', 'Salford City', 2.00],
  [11000, 'Bradford City', 'Newport', 'Newport', 2.05],
  [11000, 'Carlisle', 'Bristol Rovers', 'Bristol Rovers', 1.95],
  [11000, 'Colchester', 'Tranmere', 'Tranmere', 2.15],
  [11000, 'Oldham', 'Mansfield Town', 'Mansfield Town', 1.76],
  [10800, 'VfL Osnabruck', 'Eintracht Braunschweig', 'VfL Osnabruck', 1.93],
  [10800, 'UD Ibiza Eivissa', 'Real Sociedad B', 'Real Sociedad B', 2.60],
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

writeFile('partidos.txt', 'let PARTIDOS = ' + JSON.stringify(PARTIDOS_SIN_CUOTA), 'utf8', () => {
  console.log({
    PARTIDOS_SIN_CUOTA_C: PARTIDOS_SIN_CUOTA.length,
    PARTIDOS_CON_CUOTA_C: PARTIDOS_CON_CUOTA.length,
    // PARTIDOS_SIN_CUOTA: JSON.stringify(PARTIDOS_SIN_CUOTA),
  });
});

