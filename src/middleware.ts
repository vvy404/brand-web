import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { SignJWT, jwtVerify, type JWTPayload } from 'jose';



 
// This function can be marked `async` if using `await` inside
export default async function middleware(request: NextRequest) {
  // let cookie = request.cookies.get('token');
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value as string;
  console.log("cookie token", token);
  try {
    const { payload: jwtData } = await jwtVerify(
      token, new TextEncoder().encode("secret-key-phrase")
    );
    // jwtData.uid => `your-data`
    // { userId: 13, iat: 1719486882, exp: 1722078882 }
    console.log('jwtData', jwtData);
  

} catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL('/main', request.url))
    // JWT validation failed or token is invalid
}



  // return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/profile/:path*',
    '/favourites',
    '/cart'
  ],
}