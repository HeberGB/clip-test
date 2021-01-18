import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { OpenpayService } from './openpay.service';

@Module({
  imports: [ConfigModule],
  providers: [OpenpayService],
  exports: [OpenpayService],
})
export class OpenpayModule {}
