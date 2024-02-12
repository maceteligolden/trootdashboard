import Cookies from "js-cookie";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const middleware = async (request: NextRequest) => {
    const isLoggedIn = request.cookies.get('token');


};

export default middleware;

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
