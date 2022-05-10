import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongoClient } from 'mongodb';
import { DatabaseModule } from './database/database.module';
import { LobbysModule } from './lobbys/lobbys.module';

//const uri = 'mongodb://root:root@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

//const client = new MongoClient(uri);
//async function run() {
//  await client.connect();
//  const database = client.db('ecbackend');
//  const lobbysCollection = database.collection('lobbys');
//  const lobbys = await lobbysCollection.find().toArray();
//  console.log(lobbys);
//}
//run();

@Module({
  imports: [UsersModule, DatabaseModule, LobbysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
