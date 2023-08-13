import ApiService from "@/helper/httpFetcher";

export default function signIn(data: { username: string; password: string }) {
  return ApiService.fetchData({
    url: "auth",
    method: "post",
    data,
  });
}
