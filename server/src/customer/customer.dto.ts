import { IsEmail, IsString } from 'class-validator';
import { ICustomer } from './customer.interface';

export class CustomerDto implements ICustomer {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
