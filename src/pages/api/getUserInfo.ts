import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma';

type ResponseData = {
  code: number
  message: string
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const info = await prisma.user.findUnique({
    where: {
      id: 1,
    }
  });
  
  res.status(200).json({
    code: 0,
    message: 'success!',
    data: {
      info,
    },
  });

}