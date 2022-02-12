import fs from 'fs'
import { dataDirectory } from './constants'

export const getTopics = (): string[] => {
  const fileDirectoryEntity = fs.readdirSync(dataDirectory, {withFileTypes: true})
  return fileDirectoryEntity.filter((entity:fs.Dirent):boolean => entity.isDirectory()).map((entity:fs.Dirent):string => entity.name)
}