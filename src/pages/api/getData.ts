import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

 
type ResponseData = {
  code: number
  message: string
  data: any
}

const initialPosts = [
  { name: 'Post 1' },
  { name: 'Post 2' },
  { name: 'Post 3' },
];
 
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
  const notes = await prisma.note.findMany();
  res.status(200).json({
    code: 0,
    message: 'Hello from Next.js!',
    data: notes,
  });

}