import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CustomerDto } from './customer.dto';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';

@Resolver()
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Mutation()
  async createCustomer(@Args('dto') dto: CustomerDto): Promise<Customer> {
    return this.customerService.create(dto);
  }
}
