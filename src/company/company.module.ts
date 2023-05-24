import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  providers: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule {}
