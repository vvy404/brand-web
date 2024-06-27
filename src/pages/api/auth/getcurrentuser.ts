import type { NextApiRequest, NextApiResponse } from 'next';
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
  const { userid, token } = req.cookies;

  const user = await prisma.user.findMany({
    where: {
      id: Number(userid),
    }
  });
  if (user) {
    res.status(200).json({
      code: 0,
      message: 'success!',
      data: {
        userid: userid,
        token: token,
      },
    });
  }
  

}