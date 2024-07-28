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
  const orderlist = await prisma.order.findMany({
    where: {
      userId: 1,
    }
  });

  const finalOrder = [];
  for (let i = 0; i< orderlist.length; i++) {
    let oid = orderlist[i].id;
    const order_single = await prisma.orderCategory.findMany({
      take: 10,
      where: {
        orderId: oid
      }
    })
    finalOrder.push({...orderlist[i], orderCategory: order_single});
  }
  
  res.status(200).json({
    code: 0,
    message: 'success!',
    data: {
      list: finalOrder,
    },
  });

}