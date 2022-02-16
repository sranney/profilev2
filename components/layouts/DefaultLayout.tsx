import { NavigationBar } from './NavigationBar'
import { LayoutProps } from './types'
import { Footer } from './Footer'

export const Layout = ({ children }: LayoutProps):JSX.Element => {
  return (
    <>
      <NavigationBar/>
      <main className="xl:container mx-auto pt-10">
        {children}
      </main>
      <Footer />
    </>
  )
}