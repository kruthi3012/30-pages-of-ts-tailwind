import NavigationMenu from "@/components/NavigationMenu"

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
    <p className="font-roboto-mono text-5xl leading-16 pb-8 pt-24">
      WELCOME TO THE HOMEPAGE</p>
    </div>
    <NavigationMenu/>
    </>
  )
}
