import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
  return NextResponse.next() //Deixa passar para acessar a rota inicial
  // return NextResponse.redirect('/blog') //Redireciona para uma rota específica
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}