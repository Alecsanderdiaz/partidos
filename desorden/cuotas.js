let cuotasx25 = []

for (let index = 110; index < 171; index++) {
    const element = index / 100
    const elevado = Math.floor(( element ** 25 ) / 100)
    let elevadox10 = elevado * 10
    if ((elevadox10 / 10) > 500) {
        elevadox10 = 0
    }
    const temp = [element, elevado / 10, elevadox10 / 10]
    console.log({ temp })
}