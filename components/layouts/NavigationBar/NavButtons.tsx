import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import { MdHome, MdFormatListBulleted } from 'react-icons/md'

type NavButtonsProps = {
  toggleSideBarVisibility: Dispatch<SetStateAction<boolean>>
}

export const NavButtons = ({toggleSideBarVisibility}: NavButtonsProps):JSX.Element => {
  const openSideBar = () => toggleSideBarVisibility(true)
  return (
    <div className="flex items-center">
      <Link href="/"><a ><MdHome className="text-3xl text-white" /></a></Link>
      <MdFormatListBulleted className="ml-3 text-3xl text-white cursor-pointer" onClick={openSideBar} />
    </div>
  )
}