import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

 
type ResponseData = {
  message: string
}

const initialPosts = [
  {
    "ismainimg": false,
    "imgSrc": "/a.jpeg",
    "title": "CURVED-HEM SHORT-SLEEVED DENIM SHIRT",
    "type": 1,
    "typeName": "women",
    "isInStock": true,
    "isLiked": false,
    "isNew": false,
    "stocknum": 0,
    "price": 1000,
  }
];

const initialProductImgs = [
  {
    "productid": 1,
    "imgSrc": "/a.jpeg",
    "color": "red",
    "ismainpage": true
  },
  {
    "productid": 1,
    "imgSrc": "/a.jpeg",
    "color": "white",
    "ismainpage": false
  },
  {
    "productid": 1,
    "imgSrc": "/a.jpeg",
    "color": "black",
    "ismainpage": false
  },
  {
    "productid": 1,
    "imgSrc": "/a.jpeg",
    "color": "blue",
    "ismainpage": false
  },
  {
    "productid": 1,
    "imgSrc": "/a.jpeg",
    "color": "yellow",
    "ismainpage": false
  },
  {
    "productid": 1,
    "imgSrc": "/a.jpeg",
    "color": "orange",
    "ismainpage": false
  },
  {
    "productid": 1,
    "imgSrc": "/a.jpeg",
    "color": "#111111",
    "ismainpage": false
  },
  {
    "productid": 1,
    "imgSrc": "/a.jpeg",
    "color": "#eeeeee",
    "ismainpage": false
  }
]

const initialProductColor = [
  {
    "productid": 1,
    "color": "blue",
    "img": "/a.jpeg",
    "availblenum": 1
  },
  {
    "productid": 1,
    "img": "/a.jpeg",
    "color": "orange",
    "availblenum": 2
  },
  {
    "productid": 1,
    "img": "/a.jpeg",
    "color": "white",
    "availblenum": 88
  }
]

const initialProductSize = [
  {
    "colorid": 1,
    "size": "1",
    "stocknum": 1,
  },
  {
    "colorid": 1,
    "size": "3",
    "stocknum": 1,
  },
  {
    "colorid": 1,
    "size": "5",
    "stocknum": 1,
  }
]


 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
// products

  // for (const post of initialPosts) {
  //   await prisma.product.create({
  //     data: post,
  //   });
  // }
  // for (const post of initialPosts) {
  //   await prisma.product.update({
  //     data: {
  //       createtime: new Date(),
  //     },
  //     where: {
  //       id : 1
  //     }
  //   });
  // }
  // const products = await prisma.product.findMany();


// // productImgs
//   for (const post of initialProductImgs) {
//     await prisma.productImg.create({
//       data: post,
//     });
//   }
//   const products = await prisma.productImg.findMany();


  // // productColors
  // for (const post of initialProductColor) {
  //   await prisma.productColor.create({
  //     data: post,
  //   });
  // }
  // const products = await prisma.productColor.findMany();



  // productSize
  for (const post of initialProductSize) {
    await prisma.productSize.create({
      data: post,
    });
  }
  const products = await prisma.productSize.findMany();

  res.status(200).json({ message: 'Hello from Next.js!' + products.length });

}