import { Module } from '@nestjs/common';
import { FundController } from './fund.controller';
import { FundService } from './fund.service';

@Module({
  providers: [FundService],
  controllers: [FundController],
})
export class FundModule {}
