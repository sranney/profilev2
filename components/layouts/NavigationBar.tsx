import { useContext } from 'react'
import Link from 'next/link'
import { NavigationContext } from '../../utils/contexts/NavigationContext'

const pages = ['Home', 'Movies', 'Cooking', 'Music', 'Projects', 'Books']

export const NavigationBar = ():JSX.Element => {
  const {activePage, topics} = useContext(NavigationContext)
  const isActivePage = (page:string):boolean => activePage?.toLowerCase() === page.toLowerCase()
  const pageClasses = (page: string):string => isActivePage(page) ? 'px-5 bg-slate-400 text-slate-800' : 'px-5 hover:bg-white hover:text-slate-800 cursor-pointer'
  const pageRoute = (page: string):string => `/${page === 'Home' ? '' : page.toLowerCase()}`
  return (
    <div className="bg-slate-800 h-10 px-20 flex justify-between fixed w-full z-10">
      <div className="text-3xl text-white group">
        Navigation
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
      </div>
      <div className="text-3xl text-white">
        {activePage}
      </div>
    </div>
  )
}