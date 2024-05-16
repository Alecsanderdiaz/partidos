let files = [
    "01-input-partidos-flashscore.txt",
    "02-input-partidos-wplay.txt",
    "03-input-se-marcara-en-la-primera-mitad.txt",
    "04-input-ambos-marcan.txt",
    "05-input-over.txt",
    "06-input-local-primera-mitad.txt",
    "07-input-visitante-primera-mitad.txt",
    "08-input-favorito.txt",
    "09-input-apuestas-abiertas.txt",
]

const fs = require('fs')
files.forEach(file => fs.writeFileSync(file, ''))

