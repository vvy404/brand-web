import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma';
import { OrderStatusType } from '@/lib/globalts';

type ResponseData = {
  code: number
  message: string
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // const products = await prisma.$queryRaw`SELECT * FROM Product`
  const productid = Number(req.query.productid);
  const pageNum = Number(req.query.pageNum);
  const pageIndex = Number(req.query.currentPageIndex);
  const { userid } = req.cookies;

  // const productAll = await prisma.product.delete({
  //   where: {
  //     id: type,
  //   }
  // });
  // let finalProducts= [];

  // for (let i =0 ;i < products.length; i++) {
  //   const pid = products[i].id;

  const orderca = await prisma.orderCategory.findMany({
    where: {
      productid: productid
    }
  });
  let isOrderNotDone = false;
  for (let i = 0; i < orderca.length; i++) {
    const id = orderca[i].orderId;
    const order = await prisma.order.findFirst({
      where: {
        id: id,
        statusType: OrderStatusType["NOT_DELIVERY"],
      }
    });
    if (order && order.id) {
      isOrderNotDone = true;
    }
  }

  if (isOrderNotDone) {
    res.status(200).json({
      code: 0,
      message: 'worng! orders donot been done!',
      data: ""
    });
  } else {
    try {


      const p_color = await prisma.productColor.deleteMany({
        where: {
          productid: productid
        }
      });
      const p_size = await prisma.productSize.deleteMany({
        where: {
          productid: productid
        }
      })

      const favProduct = await prisma.favProduct.deleteMany({
        where: {
          productid: productid
        }
      })
      const imgProduct = await prisma.productImg.deleteMany({
        where: {
          productid: productid
        }
      })

      // const cartitem = await prisma.cartItem.deleteMany({
      //   where: {
      //     productid: productid
      //   }
      // })

      const products = await prisma.product.delete({
        where: {
          id: productid,
        }
      });
      res.status(200).json({
        code: 0,
        message: 'success',
        data: products
      });
    } catch (error) {
      res.status(200).json({
        code: 99,
        message: 'worng! orders donot been done!',
        data: error
      });
    }
  }

}