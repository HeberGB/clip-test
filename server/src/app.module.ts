import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { TerminusModule } from '@nestjs/terminus';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config/mongoose-config.service';
import { HealthController } from './health.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { CustomerModule } from './customer/customer.module';
import { OpenpayModule } from './openpay/openpay.module';

@Module({
  imports: [
    ConfigModule,
    TerminusModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongooseConfigService,
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
    CustomerModule,
    OpenpayModule,
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
