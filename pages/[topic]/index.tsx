import { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import { getTopics } from '../../backend-operations-lib/getTopics'
import { getTopicPosts } from '../../backend-operations-lib/getTopicPosts'
import { getPostContent } from '../../backend-operations-lib/getPostContent'
import { Layout } from '../../components/layouts/TopicLayout'
import { ActivePageEnum } from '../../enumTypes'
import { NavigationContext } from '../../utils/contexts/NavigationContext'
import { FileData, PostContentData } from '../../backend-operations-lib/types'
import { PostLink } from '../../components/post-link'
import { titleCase } from '../../utils/functions/strings'
import { HeadTag } from '../../components/head'
import { Tags } from '../../components/Tags'


type PageData = {
  topics: string[],
  currentTopicPosts: FileData[],
  currentTopic: ActivePageEnum,
  currentPostContent: PostContentData
}

type PageProps = {
  props: PageData
}

export const getStaticProps: GetStaticProps = async ({params}):Promise<PageProps> => {
  const topics = getTopics()
  const topicString = (Array.isArray(params?.topic)
    ? params?.topic[0] || ''
    : params?.topic || '') as ActivePageEnum
  const currentTopicPosts = getTopicPosts(topicString)
  const currentPostContent = await getPostContent(topicString)
  return {
    props: {
      topics,
      currentTopicPosts,
      currentTopic: topicString,
      currentPostContent
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: ['/movies', '/cooking', '/music', '/projects', '/books'],
    fallback: false
  }
}


export default function GeneralTopicPage({topics, currentTopicPosts, currentTopic, currentPostContent}: PageData):JSX.Element {
  const [navigationContextValue, setNavigationContextValue] = useState({topics, activePage: currentTopic})
  useEffect(() => {
    setNavigationContextValue({...navigationContextValue, activePage: currentTopic})
  }, [currentTopic])
  console.log('currentPostContent', currentPostContent)
  return (
    <NavigationContext.Provider value={navigationContextValue}>
      <Layout activePage={ActivePageEnum.Home}>
        <HeadTag currentTopic={currentTopic} />
        <h1 className="text-center text-6xl">{titleCase(currentTopic)}</h1>
        <div className="flex flex-col items-center">
          <p className="italic">Latest post shown below</p>
          <p className="italic">Date of Post: {currentPostContent.postMetaData.postDate}</p>
          <div className="mt-3"><Tags tags={currentPostContent.postMetaData.tags} /></div>
        </div>
        <div dangerouslySetInnerHTML={{__html: currentPostContent.postContentString}} />
        { currentTopicPosts.map(post => <PostLink key={post.postId} post={post} currentTopic={currentTopic} />) }
      </Layout>
    </NavigationContext.Provider>
  )
}