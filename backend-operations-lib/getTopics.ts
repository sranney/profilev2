import fs from 'fs'
import { postDataDirectory } from './constants'

export const getTopics = (): string[] => {
  const fileDirectoryEntity = fs.readdirSync(postDataDirectory, {withFileTypes: true})
  return fileDirectoryEntity.filter((entity:fs.Dirent):boolean => entity.isDirectory()).map((entity:fs.Dirent):string => entity.name)
}