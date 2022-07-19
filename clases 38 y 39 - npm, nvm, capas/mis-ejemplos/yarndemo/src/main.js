require('express')().get('/', (_, r) => { r.send('funciona!') }).listen(8080)
