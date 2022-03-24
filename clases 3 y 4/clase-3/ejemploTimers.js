let i = 0

// const timer = setInterval(
//     () => {
//         console.log(i++)
//         if (i > 10) {
//             clearInterval(timer)
//         }
//     }, 500)

const timer = setTimeout(
    () => {
        console.log('adios argentina, me voy de viaje')
    }, 10_000)

setTimeout(() => {
    clearTimeout(timer)
}, 2_000)
