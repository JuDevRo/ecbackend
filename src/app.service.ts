import { Injectable, Inject } from '@nestjs/common';
import {Db} from 'mongodb'

@Injectable()
export class AppService {
  constructor(
    @Inject('MONGO') private database: Db,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  Hola(): string {
    return 'Hola bb'
  }

  getLobbys() {
    const lobbysCollection = this.database.collection('lobbys');
    return lobbysCollection.find().toArray();
  }

}
