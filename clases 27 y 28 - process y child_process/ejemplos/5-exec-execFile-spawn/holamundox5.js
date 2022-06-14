let restantes = 5
const timer = setInterval(() => {
    console.log('hola mundo')
    restantes--
    if (restantes === 0) clearInterval(timer)
}, 1000)