import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { FundService } from './fund.service';
import { Prisma } from '@prisma/client';

@Controller('fund')
export class FundController {
  constructor(private readonly fundService: FundService) {}

  @Post()
  create(@Body() createFundInput: Prisma.FundCreateInput) {
    return this.fundService.create(createFundInput);
  }

  @Get()
  findAll() {
    return this.fundService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fundService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateFundInput: Prisma.FundUpdateInput,
  ) {
    return this.fundService.update(+id, updateFundInput);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fundService.remove(+id);
  }
}
