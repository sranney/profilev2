import fs from 'fs'
import { dataDirectory } from './constants'
import { FileData, PostData } from './types'
import matter from 'gray-matter'

export const getTopicPosts = (topicName: String):FileData[] => {
  const topicDirectory = `${dataDirectory}/${topicName}`
  const fileNames = fs.readdirSync(topicDirectory) // this is just file names, but when displaying the posts, we want to display additional information about the posts
  // this data is in each of the files, so we have to read some of the data from the files and send that back
  // form an array of post data for the particular topic's posts
  return fileNames.map(fileName => {
    /**
     * 1. Create id for post file
     * filenames must be unique in a directory, so file names act as a natural origin for ids for category posts
     * each post file is a md
    */
    const postId:String = fileName.replace(/\.md$/, '')
    /**
     * 2. Read and parse the meta data for the post file
     * this is the data included in the "---" in each .md file
    **/
    const fullFilePath = `${topicDirectory}/${fileName}`
    const fileContent = fs.readFileSync(fullFilePath, 'utf8')
    // parse fileContent with gray-matter which recognizes the meta data denotation "---" and separates it from the rest of the content
    const parsedFileContent = matter(fileContent)
    // finally return this parsed post data
    return {
      postId,
      // post data varies across different topics, so to type it properly for returning data, we need to use the union type
      postData: parsedFileContent.data as PostData
    }
  })
}