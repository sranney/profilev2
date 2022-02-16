import fs from 'fs'
import matter from 'gray-matter'
import { projectsDataDirectory } from './constants'

export const getProjects = (): ProjectData[] => {
  const projectFiles = fs.readdirSync(projectsDataDirectory)
  return projectFiles.map((projectFile): ProjectData => {
    /**
     * 1. Read and parse the meta data for the project file
     * this is the data included in the "---" in each .md file
    **/
    const fullFilePath = `${projectsDataDirectory}/${projectFile}`
    const fileContent = fs.readFileSync(fullFilePath, 'utf8')
    // parse fileContent with gray-matter which recognizes the meta data denotation "---" and separates it from the rest of the content
    const parsedFileContent = matter(fileContent)
    // finally return this parsed post data
    return {
      projectId: projectFile.replace(/.md/, ''),
      projectData: parsedFileContent.data as ProjectMetaData
    }
  })
}