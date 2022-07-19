const socios = []

export async function guardarSocio(socio) {
    socios.push(socio.soloDatos())
    console.log(socios)
}