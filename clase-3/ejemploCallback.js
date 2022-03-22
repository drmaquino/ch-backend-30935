function hacerAlgoTresVeces(algo) {
    console.log(algo())
    console.log(algo())
    console.log(algo())
}

// 'algo' es el callback de la funcion 'hacerAlgoTresVeces'

// hacerAlgoTresVeces(function () { console.log('hola') })

// hacerAlgoTresVeces(() => { console.log('hola') })

// hacerAlgoTresVeces(() => { console.log('hola') })

// hacerAlgoTresVeces(function () { return 5 })

hacerAlgoTresVeces(() => 5)
