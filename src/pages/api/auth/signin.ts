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
  const body = req.body;
  const params = JSON.parse(body);
  const { email, password } = params;

  const setSession = (param: any, userid: any) => {
    const cookie = serialize('token', param, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // One week
      path: '/',
    })
    const userid_cookie = serialize('userid', userid, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // One week
      path: '/',
    })
    res.setHeader('Set-Cookie', [cookie, userid_cookie]);
  }

  const setToken = async (userid: any) => {
    const token = await new SignJWT({ userId: userid })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('30d')
      .sign(new TextEncoder().encode("secret-key-phrase"));
    return token
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email,
      password: password,
    }
  });

  if (user && user.email) {
    // const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, {
    //   expiresIn: '1m',
    // });
    const token = await setToken(user.id);
    console.log('token-------', token);
    setSession(token, user.id);

    res.status(200).json({
      code: 0,
      message: 'success!',
      data: {
        userid: user.id,
        token,
      },
    });
  } else {
    res.status(200).json({
      code: 1,
      message: 'wrong!',
      data: "",
    });
  }

}