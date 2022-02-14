import { Dispatch, SetStateAction, useContext } from 'react'
import { NavigationDropdown } from './NavigationDropdown'
import { NavigationContext } from '../../../utils/contexts/NavigationContext'
import { NavButtons } from './NavButtons'

type NavigationBarProps = {
  toggleSideBarVisibility?: Dispatch<SetStateAction<boolean>>
}

export const NavigationBar = ({toggleSideBarVisibility = () => {}}: NavigationBarProps):JSX.Element => {
  const {currentTopic} = useContext(NavigationContext)
  return (
    <div className="bg-slate-800 h-10 px-20 flex justify-between fixed w-full z-10">
      <div className="text-3xl text-white group">
        Navigation
        <NavigationDropdown />
      </div>
      {currentTopic && <NavButtons toggleSideBarVisibility={toggleSideBarVisibility} />}
    </div>
  )
}