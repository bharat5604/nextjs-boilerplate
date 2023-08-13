export { default } from "next-auth/middleware";


export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/signin" || path === "/signup";

  // const token = request.cookies.get("jwt")?.value;

  // if (isPublicPath && token) {
  //   return NextResponse.redirect(new URL("/", request.nextUrl));
  // }

  // if (!isPublicPath && !token) {
  //   return NextResponse.redirect(new URL("/signin", request.nextUrl));
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  // matcher: ["/", "/profile", "/signin", "/signup", "/verifyemail", "/home"],
};

