import { NavigationBar } from './NavigationBar'
import { SideBar } from './SideBar'

export const Layout = ({children, activePage}: LayoutWithActivePage):JSX.Element => {
  return (
    <>
      <NavigationBar />
      <SideBar activePage={activePage}/>
      <main className="container mx-auto pt-10">
        {children}
      </main>
    </>
  )
}