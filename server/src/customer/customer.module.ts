import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OpenpayModule } from 'src/openpay/openpay.module';
import { Customer, CustomerSchema } from './customer.entity';
import { CustomerResolver } from './customer.resolver';
import { CustomerService } from './customer.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
    ]),
    OpenpayModule,
  ],
  providers: [CustomerResolver, CustomerService],
})
export class CustomerModule {}
