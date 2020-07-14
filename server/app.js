const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

//allow cross origin requests
app.use(cors());

const url = 'mongodb://Sanskaar:shanx123@cluster0-shard-00-00.ixnix.mongodb.net:27017,cluster0-shard-00-01.ixnix.mongodb.net:27017,cluster0-shard-00-02.ixnix.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-19rj74-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose
    .connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected!'))
    .catch(err => console.log(err));
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening on PORT 4000');
});


