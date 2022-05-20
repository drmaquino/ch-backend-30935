import { MongoClient } from 'mongodb'

// EJEMPLO LOCAL

// const host = 'localhost'
// const port = '27017'

// const username = 'root'
// const password = 'mongopassword'

// const uri = `mongodb://${host}`//:${port}`;

// const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     authSource: "admin",
//     auth: {
//         username,
//         password,
//     }
// })

//======================================================
// EJEMPLO REMOTO (MONGO ATLAS)

const username = 'coderhouse'
const password = 'coderhouse'

const uri = `mongodb+srv://${username}:${password}@cluster0.o0eqf.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin"
})

//-------------

await client.connect()

const dbCoderhouse = client.db("coderhouse")

const dbPersonas = dbCoderhouse.collection("personas");

const personas = await dbPersonas.find().toArray()

console.log(personas)

await client.close();
