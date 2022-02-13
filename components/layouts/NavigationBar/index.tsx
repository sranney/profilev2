import Link from 'next/link'
import { MdHome } from 'react-icons/md'
import { NavigationDropdown } from './NavigationDropdown'

export const NavigationBar = ():JSX.Element => {
  return (
    <div className="bg-slate-800 h-10 px-20 flex justify-between fixed w-full z-10">
      <div className="text-3xl text-white group">
        Navigation
        <NavigationDropdown />
      </div>
      <Link href="/"><a className="self-center"><MdHome className="text-3xl text-white" /></a></Link>
    </div>
  )
}