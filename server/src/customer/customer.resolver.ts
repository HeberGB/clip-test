import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
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

  @Mutation()
  async updateCustomer(
    @Args('id') id: string,
    @Args('dto') dto: CustomerDto,
  ): Promise<Customer> {
    return this.customerService.update(id, dto);
  }

  @Query()
  async getCustomers(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  @Query()
  async getCustomerById(@Args('id') id: string) {
    return this.customerService.findOneById(id);
  }
}
