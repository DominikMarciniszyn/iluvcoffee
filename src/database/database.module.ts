import { DynamicModule, Module } from '@nestjs/common';
import { ConnectionOptions, createConnection } from 'typeorm';

@Module({})
export class DatabaseModule {
  static register(options: ConnectionOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'CONNECTION',
          useValue: createConnection(options),
        },
      ],
    };
  }
}

/*  Utilizing the dynamic DatabaseModule in another Modules imports: []
imports: [
  DatabaseModule.register({ // 👈 passing in dynamic values
    type: 'postgres',
    host: 'localhost',
    password: 'password',
  })
]
*/
