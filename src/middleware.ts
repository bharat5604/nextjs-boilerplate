import { store } from "./redux/store";

export { default } from "next-auth/middleware";

export function middleware(request: any) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/signin" || path === "/signup";
  const data = store.getState().userReducer.users;
  console.log("middleware", data);

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
