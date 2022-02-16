import { useState } from 'react'
import { NavigationBar } from './NavigationBar'
import { SideBar } from './SideBar'
import { LayoutProps } from './types'
import { Footer } from './Footer'

type TopicLayoutProps = LayoutProps & {currentTopicPosts: FileData[]}

export const Layout = ({children, currentTopicPosts}: TopicLayoutProps):JSX.Element => {
  const [ sideBarVisibility, toggleSideBarVisibility ] = useState<boolean>(false)
  return (
    <>
      <NavigationBar toggleSideBarVisibility={toggleSideBarVisibility}/>
      <SideBar sideBarVisibility={sideBarVisibility} toggleSideBarVisibility={toggleSideBarVisibility} currentTopicPosts={currentTopicPosts}/>
      <main className="xl:container px-5 mx-auto pt-10">
        {children}
      </main>
      <Footer />
    </>
  )
}