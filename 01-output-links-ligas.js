

function pedazos(array, cantidad = 5) {
	var resultado = [];
	for (var i = 0; i < array.length; i += cantidad) {
		resultado.push(array.slice(i, i + cantidad));
	}
	return resultado;
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

let linksLigasWplay = todoArrayGroupCodes.map(arrayCodes => `<a href="https://apuestas.wplay.co/es/type-coupon?coupon_group_by=SBTYPE&mkt_sort=MRES&sb_type_ids=${arrayCodes.join('-')}" target="_blank">${ arrayCodes.join('-') }</a>`)

let linksLigasMitad = pedazos(
	LIGAS.filter(liga => liga.mitad).map(liga => liga.codigoWplay)
).map(arrayCodes => `<a href="https://apuestas.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=GSH1&sb_type_ids=${arrayCodes.join('-')}" target="_blank">${ arrayCodes.join('-') }</a>`)

let linksLigasNoMitad = pedazos(
	LIGAS.filter(liga => !liga.mitad).map(liga => liga.codigoWplay)
).map(arrayCodes => `<a href="https://apuestas.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=GSH1&sb_type_ids=${arrayCodes.join('-')}" target="_blank">${ arrayCodes.join('-') }</a>`)

let linksAmbosMarcan = todoArrayGroupCodes.map(arrayCodes => `<a href="https://apuestas.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=BTSC&sb_type_ids=${arrayCodes.join('-')}" target="_blank">${ arrayCodes.join('-') }</a>`)

let linksOver = todoArrayGroupCodes.map(arrayCodes => `<a href="https://apuestas.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=HCTG&sb_type_ids=${arrayCodes.join('-')}" target="_blank">${ arrayCodes.join('-') }</a>`)

let linksFavoritoLocal = favoritosArrayGroupCodes.map(arrayCodes => `<a href="https://apuestas.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=OU1H&sb_type_ids=${arrayCodes.join('-')}" target="_blank">${ arrayCodes.join('-') }</a>`)
let linksNoFavoritoLocal = noFavoritosArrayGroupCodes.map(arrayCodes => `<a href="https://apuestas.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=OU1H&sb_type_ids=${arrayCodes.join('-')}" target="_blank">${ arrayCodes.join('-') }</a>`)

let linksFavoritoVisitante = favoritosArrayGroupCodes.map(arrayCodes => `<a href="https://apuestas.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=OU1A&sb_type_ids=${arrayCodes.join('-')}" target="_blank">${ arrayCodes.join('-') }</a>`)
let linksNoFavoritoVisitante = noFavoritosArrayGroupCodes.map(arrayCodes => `<a href="https://apuestas.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=OU1A&sb_type_ids=${arrayCodes.join('-')}" target="_blank">${ arrayCodes.join('-') }</a>`)

let html = ''

html += '<p>Todos</p>'
html += linksLigasWplay.join(' - ')
html += '<p>Gol en primera mitad</p>'
html += linksLigasMitad.join(' - ')
html += '<p>Gol en primera mitad No</p>'
html += linksLigasNoMitad.join(' - ')
html += '<p>Over</p>'
html += linksOver.join(' - ')
html += '<p>Ambos Marcan</p>'
html += linksAmbosMarcan.join(' - ')
html += '<p>Local</p>'
html += linksFavoritoLocal.join(' - ')
html += '<p>Local No</p>'
html += linksNoFavoritoLocal.join(' - ')
html += '<p>Visitante</p>'
html += linksFavoritoVisitante.join(' - ')
html += '<p>Visitante No</p>'
html += linksNoFavoritoVisitante.join(' - ')

document.querySelector('#main').innerHTML = html
const anclas = document.querySelectorAll('a')

anclas.forEach(ancla => ancla.addEventListener('click', (element) => element.target.classList.add('click')))