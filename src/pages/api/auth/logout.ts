// import { serialize } from 'cookie'
import { serialize } from 'cookie';
import { SignJWT, jwtVerify, type JWTPayload } from 'jose';
import { NextResponse } from 'next/server'
import { nanoid } from 'nanoid'
import { cookies } from 'next/headers'




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
  const removeSession = () => {
    res.setHeader('Set-Cookie', [
      serialize('token', '', {
        maxAge: -1,
        path: '/',
      }),
      serialize('userid', '', {
        maxAge: -1,
        path: '/',
      }),
    ]);
  }




  try {
    removeSession();
    // res.writeHead(302, { Location: '/main' });
    // res.end();
    res.status(200).json({
      code: 0,
      message: 'success!',
      data: null,
    });
  
  } catch (error) {
    console.log(error);
    res.status(200).json({
      code: 1,
      message: 'error!',
      data: null,
    });
  }

  
  
  
  
}