import { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import { getTopics } from '../../backend-operations-lib/getTopics'
import { getTopicPosts } from '../../backend-operations-lib/getTopicPosts'
import { getPostContent } from '../../backend-operations-lib/getPostContent'
import { Layout } from '../../components/layouts/TopicLayout'
import { NavigationContext } from '../../utils/contexts/NavigationContext'
import { PostLink } from '../../components/post-components/post-link'
import { PostMetaData } from '../../components/post-components/post-meta-data'
import { titleCase } from '../../utils/functions/strings'
import { HeadTag } from '../../components/head'
import { ActivePageEnum } from '../../enumTypes'

type PageData = {
  topics: string[],
  currentTopicPosts: FileData[],
  currentTopic: keyof typeof ActivePageEnum,
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
  return (
    <NavigationContext.Provider value={navigationContextValue}>
      <Layout>
        <HeadTag currentTopic={currentTopic} />
        <PostMetaData postMetaData={currentPostContent.postMetaData} />
        <div dangerouslySetInnerHTML={{__html: currentPostContent.postContentString}} />
        { currentTopicPosts.map(post => <PostLink key={post.postId} post={post} currentTopic={currentTopic} />) }
      </Layout>
    </NavigationContext.Provider>
  )
}