import { SiteFooter } from "@/components/layouts/site-footer";
import { SiteHeader } from "@/components/layouts/site-header";

interface LobbyLayoutProps {
  children: React.ReactNode;
}

export default async function LobbyLayout({ children }: LobbyLayoutProps) {
  //   const user = await currentUser();
  const user = {
    firstName: "tes",
    lastName: "singh",
    imageUrl: "",
    username: "test",
  };

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
