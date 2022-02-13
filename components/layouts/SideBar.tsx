import { useContext } from 'react'
import { NavigationContext } from '../../utils/contexts/NavigationContext'
export const SideBar = (): JSX.Element => {
  const { activePage } = useContext(NavigationContext)
  return <div>{ activePage } </div>
}