import { NavigationBar } from './NavigationBar'

export const Layout = ({children, activePage}: LayoutWithActivePage):JSX.Element => {
  return (
    <>
      <NavigationBar activePage={activePage} />
      <main className="container mx-auto pt-10">
        {children}
      </main>
    </>
  )
}