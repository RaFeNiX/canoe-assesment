import { Prisma } from '@prisma/client';

export type Fund = Prisma.FundGetPayload<{
  include: { aliases: true; manager: true; investments: true };
}>;
