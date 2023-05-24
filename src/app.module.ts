import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FundModule } from './fund/fund.module';
import { FundManagerModule } from './fund-manager/fund-manager.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [FundModule, FundManagerModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
