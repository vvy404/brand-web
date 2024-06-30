import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma';

const BIGType = [
  {
    type: 1,
    typename: "women",
  },
  {
    type: 2,
    typename: "men",
  },{
    type: 3,
    typename: "kid",
  }
];

const DETAILType = [
  {
    productcategoryid: 1,
    type: 1,
    typename: 'sneakers'
  },
  {
    productcategoryid: 1,
    type: 2,
    typename: 'running shoes'
  },
  {
    productcategoryid: 1,
    type: 3,
    typename: 'tennis shoes'
  },
  {
    productcategoryid: 1,
    type: 4,
    typename: 'slip-on shoes'
  },{
    productcategoryid: 1,
    type: 5,
    typename: 'shorts shoes'
  },{
    productcategoryid: 1,
    type: 6,
    typename: 'leather shoes'
  },{
    productcategoryid: 1,
    type: 7,
    typename: 'flat shoes'
  },{
    productcategoryid: 1,
    type: 8,
    typename: 'sandals shoes'
  },{
    productcategoryid: 1,
    type: 9,
    typename: 'heels'
  },{
    productcategoryid: 1,
    type: 10,
    typename: 'boots'
  },{
    productcategoryid: 1,
    type: 11,
    typename: 'snow boots'
  },{
    productcategoryid: 2,
    type: 12,
    typename: 'sneakers'
  },
  {
    productcategoryid: 2,
    type: 13,
    typename: 'running shoes'
  },
  {
    productcategoryid: 2,
    type: 14,
    typename: 'tennis shoes'
  },
  {
    productcategoryid: 2,
    type: 15,
    typename: 'slip-on shoes'
  },{
    productcategoryid: 2,
    type: 16,
    typename: 'shorts shoes'
  },{
    productcategoryid: 2,
    type: 17,
    typename: 'leather shoes'
  },{
    productcategoryid: 2,
    type: 18,
    typename: 'flat shoes'
  },{
    productcategoryid: 2,
    type: 19,
    typename: 'sandals shoes'
  },{
    productcategoryid: 2,
    type: 20,
    typename: 'boots'
  },{
    productcategoryid: 2,
    type: 21,
    typename: 'snow boots'
  },{
    productcategoryid: 3,
    type: 22,
    typename: 'sneakers'
  },
  {
    productcategoryid: 3,
    type: 23,
    typename: 'running shoes'
  },
  {
    productcategoryid: 3,
    type: 24,
    typename: 'tennis shoes'
  },
  {
    productcategoryid: 3,
    type: 25,
    typename: 'slip-on shoes'
  },{
    productcategoryid: 3,
    type: 26,
    typename: 'shorts shoes'
  },{
    productcategoryid: 3,
    type: 27,
    typename: 'leather shoes'
  },{
    productcategoryid: 3,
    type: 28,
    typename: 'flat shoes'
  },{
    productcategoryid: 3,
    type: 29,
    typename: 'sandals shoes'
  },{
    productcategoryid: 3,
    type: 30,
    typename: 'boots'
  },{
    productcategoryid: 3,
    type: 31,
    typename: 'snow boots'
  },
]

type ResponseData = {
  code: number
  message: string
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  const productBigType = await prisma.productCategoryOverAll.createMany({
    data: BIGType,
  });

  const productType = await prisma.productCategory.createMany({
    data: DETAILType,
  })

  
  res.status(200).json({
    code: 0,
    message: 'success!',
    data: {
      productBigType,
      productType,
    },
  });



}