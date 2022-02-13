import { NavigationBar } from './NavigationBar'
import { SideBar } from './SideBar'
import { LayoutProps } from './types'

export const Layout = ({children}: LayoutProps):JSX.Element => {
  return (
    <>
      <NavigationBar />
      <SideBar/>
      <main className="container mx-auto pt-10">
        {children}
      </main>
    </>
  )
}