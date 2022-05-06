let PARTIDOS_CON_CUOTA = [
  [11800, 'Charleston Battery', 'Memphis 901 FC', '0.5', 1.40],
  [11930, 'CA Cerro', 'Institucion Atletica Sud America', '0.5', 1.45],
  [11615, 'Monagas SC', 'Aragua FC', '0.5', 1.48],
  [11830, 'Carabobo FC', 'Zulia FC', '0.5', 1.50],
  [11630, 'San Lorenzo', 'Racing Club', 'Racing Club', 1.95],
  [11930, 'CA Barracas Central', 'Godoy Cruz', 'Godoy Cruz', 1.76],
  [11910, 'Club Atletico Atlanta', 'Club Almagro', 'Club Almagro', 2.75],
  [11930, 'Sport Recife PE', 'Tombense MG', 'Sport Recife PE', 2.05],
  [11700, 'Vila Nova FC', 'Nautico PE', 'Nautico PE', 2.40],
  [12000, 'Atlético Nacional', 'Deportivo Pereira', 'Atlético Nacional', 1.85],
  [11900, 'Deportivo Cuenca', 'Tecnico Universitario', 'Deportivo Cuenca', 2.10],
  [11700, 'Nacional Asuncion', 'Resistencia', 'Nacional Asuncion', 1.83],
  [11915, 'Sportivo Ameliano', '12 de Octubre', '12 de Octubre', 2.45],
  [11715, 'Cerrito CS', 'Torque', 'Torque', 1.85],
  [11345, 'Inverness CT', 'Partick Thistle', '0.5', 1.53],
  [11300, 'CA Atenas De San Carlos', 'Central Espanol FC', '0.5', 1.45],
  [11330, 'VfL Bochum', 'Arminia Bielefeld', 'Arminia Bielefeld', 2.15],
  [11330, 'Alessandria', 'Vicenza', 'Alessandria', 1.85],
  [11330, 'Cosenza', 'Cittadella', 'Cittadella', 2.45],
  [11330, 'Frosinone', 'SC Pisa', 'SC Pisa', 2.30],
  [11300, 'Cambuur Leeuwarden', 'RKC Waalwijk', 'Cambuur Leeuwarden', 1.85],
  [11300, 'FC Emmen', 'ADO Den Haag', 'FC Emmen', 1.36],
  [11300, 'Volendam', 'FC Eindhoven', 'Volendam', 1.60],
  [11300, 'PSV (R)', 'FC Dordrecht', 'PSV (R)', 1.35],
  [11300, 'Utrecht (R)', 'VVV Venlo', 'Utrecht (R)', 1.70],
  [11300, 'Roda JC', 'SC Telstar', 'Roda JC', 1.35],
  [11300, 'Ajax (R)', 'De Graafschap', 'Ajax (R)', 1.65],
  [11300, 'Helmond Sport', 'FC Den Bosch', 'FC Den Bosch', 1.66],
  [11300, 'Almere City FC', 'AZ Alkmaar (R)', 'AZ Alkmaar (R)', 2.65],
  [11300, 'SBV Excelsior', 'NAC Breda', 'NAC Breda', 1.70],
  [11300, 'FC Oss', 'MVV Maastricht', 'MVV Maastricht', 1.90],
  [11330, 'Legia Warsaw', 'Gornik Zabrze', 'Legia Warsaw', 1.70],
  [11415, 'Boavista', 'Vitoria Guimaraes', 'Boavista', 2.55],
  [11330, 'CA San Telmo', 'Deportivo Madryn', 'CA San Telmo', 2.25],
  [11400, 'Las Palmas', 'Mirandes', 'Las Palmas', 1.53],
  [11400, 'Levante', 'Real Sociedad', 'Real Sociedad', 1.85],
  [11400, 'Lille', 'AS Monaco', 'AS Monaco', 1.76],
  [11345, 'Charleroi', 'Genk', 'Genk', 1.66],
  [11400, 'Génova', 'Juventus', 'Juventus', 2.00],
  [11330, 'Como', 'Cremonese', 'Cremonese', 1.53],
  [11345, 'Sunderland', 'Sheffield Wednesday', 'Sunderland', 2.15],
  [11330, 'Brescia', 'Reggina', 'Brescia', 1.38],
  [11330, 'Perugia', 'Monza', 'Perugia', 2.30],
  [11330, 'Lecce', 'Pordenone', 'Lecce', 1.30],
  [11330, 'Ascoli', 'Ternana', 'Ascoli', 1.53],
  [11330, 'Benevento Calcio', 'Spal', 'Benevento Calcio', 1.48],
  [11130, 'Paderborn', 'SV Sandhausen', 'Paderborn', 1.55],
  [11130, 'Fortuna Dusseldorf', 'SV Darmstadt 98', 'SV Darmstadt 98', 1.61],
  [11200, 'Borussia Dortmund II', 'SC Verl', 'SC Verl', 1.76],
  [11145, 'Inter', 'Empoli', 'Inter', 1.25],
  [11115, 'Crotone', 'Parma', 'Parma', 1.95],
  [11100, 'Radomiak Radom', 'Zaglebie Lubin', 'Radomiak Radom', 2.10],
  [11000, 'Sigma Olomouc', 'FK Mlada Boleslav', 'Sigma Olomouc', 2.00],
  [11230, 'FC Botosani', 'Dinamo Bucuresti', 'FC Botosani', 1.76],
  [10930, 'Gaz Metan Medias', 'CS FC Clinceni', 'CS FC Clinceni', 1.66],
  [11000, 'Krylia Sovetov Samara', 'Dinamo Moscow', 'Dinamo Moscow', 2.10],
  [11200, 'Gaziantep BB', 'Kayserispor', 'Gaziantep BB', 1.61],
]

let PARTIDOS_SIN_CUOTA = [
  [11330, "ALE1", "Bochum", "Arminia Bielefeld", 10], [11130, "ALE2", "Fortuna Düsseldorf", "Darmstadt", 6], [11130, "ALE2", "Paderborn", "Sandhausen", 7], [11200, "ALE3", "Borussia Dortmund II", "Verl", 8], [11630, "ZA-ARG1", "San Lorenzo", "Racing Club", 8], [11930, "ZA-ARG1", "Barracas Central", "Godoy Cruz", 8], [11330, "ZA-ARG2", "San Telmo", "Deportivo Madryn", 7], [11910, "ZA-ARG2", "Atlanta", "Almagro", 10], [11345, "YE-BEL1", "Charleroi", "Genk", 6], [11830, "*ZA-BOL1", "Royal Pari", "Guabirá", 12], [11700, "ZA-BRA2", "Vila Nova", "Náutico", 10], [11930, "ZA-BRA2", "Sport Recife", "Tombense", 7], [12000, "ZA-COL1", "Atl. Nacional", "Pereira", 1], [11900, "ZA-ECU1", "Dep. Cuenca", "Técnico U.", 7], [11345, "*R-ESC2", "Inverness", "Partick Thistle", 11], [11400, "ESP1", "Levante", "Real Sociedad", 6], [11400, "ESP2", "Las Palmas", "Mirandés", 5], [11800, "*ZA-EST2", "Charleston", "Memphis", 11], [11400, "FRA1", "Lille", "Mónaco", 6], [11345, "R-INGO", "Sunderland", "Sheffield Wed", 5], [11145, "ITA1", "Inter", "Empoli", 1], [11400, "ITA1", "Genoa", "Juventus", 4], [11115, "ITA2", "Crotone", "Parma", 10], [11330, "ITA2", "Alessandria", "L.R. Vicenza", 7], [11330, "ITA2", "Ascoli", "Ternana", 5], [11330, "ITA2", "Benevento", "Spal", 5], [11330, "ITA2", "Brescia", "Reggina", 5], [11330, "ITA2", "Como", "Cremonese", 6], [11330, "ITA2", "Cosenza", "Cittadella", 10], [11330, "ITA2", "Frosinone", "Pisa", 10], [11330, "ITA2", "Lecce", "Pordenone", 1], [11330, "ITA2", "Perugia", "Monza", 5], [11300, "YE-HOL1", "Cambuur", "Waalwijk", 7], [11300, "YE-HOL2", "Almere", "Jong AZ", 10], [11300, "YE-HOL2", "Excelsior", "Breda", 10], [11300, "YE-HOL2", "FC Emmen", "Den Haag", 7], [11300, "YE-HOL2", "FC Volendam", "Eindhoven", 7], [11300, "YE-HOL2", "Helmond", "Den Bosch", 8], [11300, "YE-HOL2", "Jong Ajax", "Graafschap", 9], [11300, "YE-HOL2", "Jong PSV", "Dordrecht", 7], [11300, "YE-HOL2", "Jong Utrecht", "Venlo", 7], [11300, "YE-HOL2", "Oss", "Maastricht", 10], [11300, "YE-HOL2", "Roda", "Telstar", 7], [11700, "ZA-PAR1", "Nacional Asunción", "Resistencia", 7], [11915, "ZA-PAR1", "Ameliano", "12 de Octubre", 10], [11100, "YE-POL1", "Radomiak Radom", "Zaglebie", 7], [11330, "YE-POL1", "Legia", "Gornik Z.", 7], [11415, "YE-POR1", "Boavista", "V. Guimaraes", 9], [11000, "YE-REP1", "Sigma Olomouc", "Mlada Boleslav", 7], [10930, "YE-RUM1", "Gaz Metan", "Academica Clinceni", 8], [11230, "YE-RUM1", "Botosani", "Dinamo Bucarest", 7], [11000, "YE-RUS1", "Kr. Sovetov", "Dinamo Moscú", 8], [11230, "*YE-SUI2", "Lausanne Ouchy", "Xamax", 12], [11230, "*YE-SUI2", "Schaffhausen", "Kriens", 12], [11230, "*YE-SUI2", "Winterthur", "Thun", 12], [11315, "*YE-SUI2", "Vaduz", "Wil", 12], [11315, "*YE-SUI2", "Yverdon", "Aarau", 12], [11200, "YE-TUR1", "Gaziantep", "Kayserispor", 7], [11200, "YE-TUR1", "Hatayspor", "Trabzonspor", 8], [11715, "ZA-URU1", "Cerrito", "Montevideo City", 8], [11300, "*ZA-URU2", "Atenas", "Central Esp.", 11], [11930, "*ZA-URU2", "Cerro CA", "Sud América", 11], [11615, "*ZA-VEN1", "Monagas", "Aragua", 11], [11830, "*ZA-VEN1", "Carabobo", "Zulia", 11]
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

