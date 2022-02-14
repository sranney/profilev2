import { useState } from 'react'
import { NavigationBar } from './NavigationBar'
import { SideBar } from './SideBar'
import { LayoutProps } from './types'

type TopicLayoutProps = LayoutProps & {currentTopicPosts: FileData[]}

export const Layout = ({children, currentTopicPosts}: TopicLayoutProps):JSX.Element => {
  const [ sideBarVisibility, toggleSideBarVisibility ] = useState<boolean>(false)
  return (
    <>
      <NavigationBar toggleSideBarVisibility={toggleSideBarVisibility}/>
      <SideBar sideBarVisibility={sideBarVisibility} toggleSideBarVisibility={toggleSideBarVisibility} currentTopicPosts={currentTopicPosts}/>
      <main className="container mx-auto pt-10">
        {children}
      </main>
    </>
  )
}