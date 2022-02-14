import { createContext } from 'react'
import { CurrentTopicEnum } from '../../enumTypes'

type Navigation = {
  currentTopic?: keyof typeof CurrentTopicEnum,
  topics: string[]
}

const initialContextValue: Navigation = {
  currentTopic: CurrentTopicEnum.Home,
  topics: []
}

export const NavigationContext = createContext(initialContextValue)