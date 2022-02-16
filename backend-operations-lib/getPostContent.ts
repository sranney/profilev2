import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { postDataDirectory } from './constants'

/** while the approach taken is ultimately that which is presented in the Nextjs guide, I arrived at this approach being adequate after learning about 
  * unified which is the underlying package which remark uses and different sanitation techniques
  * I believe that remark is adequate for what I need here because:
  * there's less set up than unified requires
  * at the point where I am using remark and parsing md files, sanitation is not a significant concern - I will utilize sanitation on the front end prior to setting the inner html attribute
  * that is the only part of the process which is exposed
**/
export const getPostContent = async (topic: string, id: string = 'current'):Promise<PostContentData> => {
  const fullPath = `${postDataDirectory}/${topic}/${id}.md`
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
  const postMetaData = matterResult.data as PostData
  console.log('matterResult', matterResult)
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const postContentString:string = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    postContentString,
    postMetaData
  }
}