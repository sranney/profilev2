import { Dispatch, SetStateAction, useContext } from 'react'
import { PostNavigationDropdown } from './PostNavigationDropdown'
import { NavigationContext } from '../../../utils/contexts/NavigationContext'
import { NavButtons } from './NavButtons'
import Link from 'next/link'

type NavigationBarProps = {
  toggleSideBarVisibility?: Dispatch<SetStateAction<boolean>>
}

export const NavigationBar = ({toggleSideBarVisibility = () => {}}: NavigationBarProps):JSX.Element => {
  const {currentTopic} = useContext(NavigationContext)
  return (
    <div className="bg-slate-800 h-10 xl:px-20 px-5 flex justify-between fixed w-full z-10">
      <div className="flex">
        <PostNavigationDropdown />
        <Link href="/projects">
          <a className="text-3xl text-white">Projects</a>
        </Link>
      </div>
      {currentTopic && <NavButtons toggleSideBarVisibility={toggleSideBarVisibility} />}
    </div>
  )
}