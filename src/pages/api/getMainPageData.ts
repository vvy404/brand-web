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
  // const notes = await prisma.note.findMany();
  // res.status(200).json({ message: 'Hello from Next.js!' + notes.length });
  // for (const post of initialPosts) {
  //   await prisma.note.create({
  //     data: post,
  //   });
  // }
  const products = await prisma.product.findMany();
  const mainPageConf = await prisma.mainPageImageConfig.findMany();
  const midPageConf = await prisma.midPageImageConfig.findMany();

  res.status(200).json({
    code: 0,
    message: 'success!',
    data: {
      mainpageconf: mainPageConf,
      midpageconf: midPageConf,
      mainlist: products,
      newlist: products,
    },
  });

}