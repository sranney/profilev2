import { createContext } from 'react'
import { ActivePageEnum } from '../../enumTypes'

type Navigation = {
  activePage?: ActivePageEnum,
  topics: string[]
}

const initialContextValue: Navigation = {
  activePage: ActivePageEnum.Home,
  topics: []
}

export const NavigationContext = createContext(initialContextValue)