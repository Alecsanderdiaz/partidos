

function pedazos(array, cantidad = 5) {
	var resultado = [];
	for (var i = 0; i < array.length; i += cantidad) {
		resultado.push(array.slice(i, i + cantidad));
	}
	return resultado;
}

let ligasCopy = [...LIGAS]
let codes = ligasCopy.map(liga => liga.codigoWplay)
codes = [...new Set(codes)]
if (ligasCopy.length > codes.length) {
	let ligasSinRepetir = ligasCopy.filter((liga, index) => {
		let indiceTemp = ligasCopy.findIndex(ligaTemp => ligaTemp.codigoWplay === liga.codigoWplay)
		return indiceTemp === index
	})

	LIGAS = ligasSinRepetir
}

let todoArrayGroupCodes = pedazos(
	LIGAS.map(liga => liga.codigoWplay)
)

let favoritosArrayGroupCodes = pedazos(
	LIGAS.filter(liga => liga.mitadFavorito).map(liga => liga.codigoWplay)
)

let noFavoritosArrayGroupCodes = pedazos(
	LIGAS.filter(liga => !liga.mitadFavorito).map(liga => liga.codigoWplay)
)

let linksLigasWplay = todoArrayGroupCodes.map(arrayCodes => `<a href="https://local.wplay.co/es/type-coupon?coupon_group_by=SBTYPE&mkt_sort=MRES&sb_type_ids=${arrayCodes.join('-')}" target="_blank">${ arrayCodes.join('-') }</a>`)

let linksLigasMitad = pedazos(
	LIGAS.filter(liga => liga.mitad).map(liga => liga.codigoWplay)
).map(arrayCodes => `<a href="https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=GSH1&sb_type_ids=${arrayCodes.join('-')}" target="_blank">${ arrayCodes.join('-') }</a>`)

// let linksLigasNoMitad = pedazos(
// 	LIGAS.filter(liga => !liga.mitad).map(liga => liga.codigoWplay)
// ).map(arrayCodes => `<a href="https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=GSH1&sb_type_ids=${arrayCodes.join('-')}" target="_blank">${ arrayCodes.join('-') }</a>`)

let linksLigasNoMitad = pedazos(
	LIGAS.filter(liga => !liga.mitad).map(liga => liga.codigoWplay)
).map(arrayCodes => `<a href="https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=OUH1&sb_type_ids=${arrayCodes.join('-')}" target="_blank">${ arrayCodes.join('-') }</a>`)

let linksAmbosMarcan = todoArrayGroupCodes.map(arrayCodes => `<a href="https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=BTSC&sb_type_ids=${arrayCodes.join('-')}" target="_blank">${ arrayCodes.join('-') }</a>`)

let linksOver = todoArrayGroupCodes.map(arrayCodes => `<a href="https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=HCTG&sb_type_ids=${arrayCodes.join('-')}" target="_blank">${ arrayCodes.join('-') }</a>`)

let linksFavoritoLocal = favoritosArrayGroupCodes.map(arrayCodes => `<a href="https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=OU1H&sb_type_ids=${arrayCodes.join('-')}" target="_blank">${ arrayCodes.join('-') }</a>`)
let linksNoFavoritoLocal = noFavoritosArrayGroupCodes.map(arrayCodes => `<a href="https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=OU1H&sb_type_ids=${arrayCodes.join('-')}" target="_blank">${ arrayCodes.join('-') }</a>`)

let linksFavoritoVisitante = favoritosArrayGroupCodes.map(arrayCodes => `<a href="https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=OU1A&sb_type_ids=${arrayCodes.join('-')}" target="_blank">${ arrayCodes.join('-') }</a>`)
let linksNoFavoritoVisitante = noFavoritosArrayGroupCodes.map(arrayCodes => `<a href="https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=OU1A&sb_type_ids=${arrayCodes.join('-')}" target="_blank">${ arrayCodes.join('-') }</a>`)

let html = ''

html += '<p>02 - Todos</p>'
html += linksLigasWplay.join(' - ')
html += '<p>03 - Gol en primera mitad</p>'
html += linksLigasMitad.join(' - ')
html += '<p>Gol en primera mitad No</p>'
html += linksLigasNoMitad.join(' - ')
html += '<p>04 - Ambos Marcan</p>'
html += linksAmbosMarcan.join(' - ')
html += '<p>05 - Over</p>'
html += linksOver.join(' - ')
html += '<p>06 - Local</p>'
html += linksFavoritoLocal.join(' - ')
html += '<p>Local No</p>'
html += linksNoFavoritoLocal.join(' - ')
html += '<p>07 - Visitante</p>'
html += linksFavoritoVisitante.join(' - ')
html += '<p>Visitante No</p>'
html += linksNoFavoritoVisitante.join(' - ')

document.querySelector('#main').innerHTML = html
const anclas = document.querySelectorAll('a')

anclas.forEach(ancla => ancla.addEventListener('click', (element) => element.target.classList.add('click')))