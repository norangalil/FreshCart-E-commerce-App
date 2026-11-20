import ProfileSideBar from "@/features/profile/components/ProfileSideBar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 px-4 py-10">

      <ProfileSideBar/>

      <main>
        {children}
      </main>

    </div>
  );
}