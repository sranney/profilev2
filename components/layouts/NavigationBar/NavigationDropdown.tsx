import { useContext } from 'react'
import { NavigationContext } from '../../../utils/contexts/NavigationContext'
import Link from 'next/link'

export const NavigationDropdown = ():JSX.Element => {
  const {activePage, topics} = useContext(NavigationContext)
  const isActivePage = (page:string):boolean => activePage?.toLowerCase() === page.toLowerCase()
  const pageClasses = (page: string):string => isActivePage(page) ? 'px-5 bg-slate-400 text-slate-800' : 'px-5 hover:bg-white hover:text-slate-800 cursor-pointer'
  const pageRoute = (page: string):string => `/${page === 'Home' ? '' : page.toLowerCase()}`
  return (
    <div className="bg-slate-800 invisible group-hover:visible py-5 text-lg shadow-lg">
      <ul>
        {topics.map(topic => (
          !isActivePage(topic) 
          ? <Link href={pageRoute(topic)} key={topic}>
            <li className={pageClasses(topic)}>
              <a>{topic}</a>
            </li>
          </Link>
          : <li className={pageClasses(topic)} key={topic}>{topic}</li>
        ))}
      </ul>
    </div>
  )
}