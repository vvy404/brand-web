import SideMenu from "@/components/public/SideMenu";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <div className="flex mt-28 mx-10">
      <SideMenu></SideMenu>
      {children}
    </div>
  )
}