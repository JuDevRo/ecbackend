import {Module, Global} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'
import { MongoClient } from 'mongodb';


  //const lobbysCollection = database.collection('lobbys');
  //const lobbys = await lobbysCollection.find().toArray();
  //console.log(lobbys);

@Global()
@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017', {
            user: 'root',
            pass: 'root',
            dbName: 'ecbackend'
        }),
    ],
    providers: [
        {
            provide: 'MONGO',
            useFactory: async () => {
                const uri = 'mongodb://root:root@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
                const client = new MongoClient(uri);
                await client.connect();
                const database = client.db('ecbackend');
                return database;
            },
        },
    ],
    exports: ['MONGO', MongooseModule],
})

export class DatabaseModule {}