import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OpenpayService } from 'src/openpay/openpay.service';
import { CustomerDto } from './customer.dto';
import { Customer, CustomerDocument } from './customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
    private openpayService: OpenpayService,
  ) {}

  async create(dto: CustomerDto): Promise<Customer> {
    const createdCustomer = new this.customerModel(dto);
    const savedCustomer = await createdCustomer.save();
    try {
      const { id } = await this.openpayService.createOPCustomer(dto);
      savedCustomer.opId = id;
      return savedCustomer.save();
    } catch (error) {
      await createdCustomer.deleteOne();
    }
  }

  async update(id: string, dto: CustomerDto): Promise<Customer> {
    const updated = await this.customerModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    await this.openpayService.updateOPCustomer(updated.opId, dto);
    return updated;
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.find().exec();
  }

  async findOneById(id: string): Promise<Customer> {
    return this.customerModel.findById(id).exec();
  }
}
