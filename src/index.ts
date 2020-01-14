import 'dotenv/config'
import "reflect-metadata";
import app from './app'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";
import { createConnection } from "typeorm";

(async () => {
    await createConnection()

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver]
        }),
        context: ({ req, res }) => ({ req, res })
    })

    apolloServer.applyMiddleware({ app, cors: false })

    await app.listen(app.get('port'))
    console.log("express server started")
})()

