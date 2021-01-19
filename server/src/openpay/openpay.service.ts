import { Injectable } from '@nestjs/common';
import * as Openpay from 'openpay';
import { ConfigService } from '../config/config.service';
import { CustomerDto } from '../customer/customer.dto';
import { Customer } from './customer.type';

@Injectable()
export class OpenpayService {
  private openpay: Openpay;
  constructor(config: ConfigService) {
    this.openpay = new Openpay(
      config.env.OP_MERCHANT_ID,
      config.env.OP_PRIVATE_KEY,
      config.env.NODE_ENV === 'production',
    );
  }

  async createOPCustomer(dto: CustomerDto): Promise<Customer> {
    return new Promise((resolve, reject) => {
      this.openpay.customers.create(dto, (error, body) => {
        if (error) {
          reject(error);
        }
        resolve(body);
      });
    });
  }

  async updateOPCustomer(id: string, dto: CustomerDto): Promise<Customer> {
    return new Promise((resolve, reject) => {
      this.openpay.customers.update(id, dto, (error, body) => {
        if (error) {
          reject(error);
        }
        resolve(body);
      });
    });
  }
}
