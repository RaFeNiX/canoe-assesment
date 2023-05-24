import { Module } from '@nestjs/common';
import { FundManagerService } from './fund-manager.service';
import { FundManagerController } from './fund-manager.controller';
import { FundManagerController } from './fund-manager.controller';
import { FundManagerService } from './fund-manager.service';

@Module({
  providers: [FundManagerService],
  controllers: [FundManagerController]
})
export class FundManagerModule {}
