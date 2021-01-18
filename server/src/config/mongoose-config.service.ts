import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { ConfigService } from './config.service';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly config: ConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this.config.env.MONGO_URI,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    };
  }
}
