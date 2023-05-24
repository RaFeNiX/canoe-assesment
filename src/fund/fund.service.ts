import { Injectable } from '@nestjs/common';
import {
  PrismaClient,
  Fund,
  FundCreateArgs,
  FundUpdateInput,
} from '@prisma/client';

@Injectable()
export class FundService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll(): Promise<Fund[]> {
    return this.prisma.fund.findMany({
      include: { aliases: true, manager: true, investments: true },
    });
  }

  async findOne(id: number): Promise<Fund | null> {
    return this.prisma.fund.findUnique({
      where: { id },
      include: { aliases: true, manager: true, investments: true },
    });
  }

  async create(data: FundCreateInput): Promise<Fund> {
    return this.prisma.fund.create({
      data,
      include: { aliases: true, manager: true, investments: true },
    });
  }

  async update(id: number, data: FundUpdateInput): Promise<Fund> {
    return this.prisma.fund.update({
      where: { id },
      data,
      include: { aliases: true, manager: true, investments: true },
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.fund.delete({ where: { id } });
  }
}
