import { MongoClient } from 'mongodb'

const host = 'localhost'
// const port = '27017'

const username = 'root'
const password = 'mongopassword'

const uri = `mongodb://${host}`//:${port}`;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin",
    auth: {
        username,
        password,
    }
})

await client.connect()

const dbCoderhouse = client.db("coderhouse")

const dbPersonas = dbCoderhouse.collection("personas");

const personas = await dbPersonas.find().toArray()

console.log(personas)

await client.close();
