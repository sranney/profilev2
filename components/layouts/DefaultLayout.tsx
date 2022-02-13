import { NavigationBar } from './NavigationBar'
import { LayoutProps } from './types'

export const Layout = ({ children }: LayoutProps):JSX.Element => {
  return (
    <>
      <NavigationBar/>
      <main className="container mx-auto pt-10">
        {children}
      </main>
    </>
  )
}