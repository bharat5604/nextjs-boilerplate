import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/signup";

  const token = request.cookies.get("jwt")?.value;
  console.log("token", token);
}
