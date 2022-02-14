import { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import { getTopics } from '../../backend-operations-lib/getTopics'
import { getTopicPosts } from '../../backend-operations-lib/getTopicPosts'
import { getPostContent } from '../../backend-operations-lib/getPostContent'
import { Layout } from '../../components/layouts/TopicLayout'
import { NavigationContext } from '../../utils/contexts/NavigationContext'
import { PostLink } from '../../components/post-components/post-link'
import { PostMetaData } from '../../components/post-components/post-meta-data'
import { HeadTag } from '../../components/head'
import { CurrentTopicEnum } from '../../enumTypes'

type PageData = {
  topics: string[],
  currentTopicPosts: FileData[],
  currentTopic: keyof typeof CurrentTopicEnum,
  currentPostContent: PostContentData
}

type PageProps = {
  props: PageData
}

/**
 * TODO: figure out a way to get around having to fetch data with getTopics twice
 * the nice thing is that, since these pages are statically generated only on build, there isn't a performance hit for the user
 * however, it would be nice to not have to invoke the method twice
 * this seems like an existing issue which has had a solution provided for it, but I need to look into it more to figure out the best approach for this application
 * https://github.com/vercel/next.js/discussions/11272
 * https://github.com/vercel/next.js/issues/10933#issuecomment-598297975
 * https://github.com/vercel/next.js/issues/10933#issuecomment-1019131275
**/

export const getStaticProps: GetStaticProps = async ({params}):Promise<PageProps> => {
  const topics = getTopics()
  const topicString = (Array.isArray(params?.topic)
    ? params?.topic[0] || ''
    : params?.topic || '') as CurrentTopicEnum
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
  const topics = getTopics()
  return {
    paths: topics.map(topic => `/${topic.toLowerCase()}`),
    fallback: false
  }
}

export default function GeneralTopicPage({topics, currentTopicPosts, currentTopic, currentPostContent}: PageData):JSX.Element {
  const [navigationContextValue, setNavigationContextValue] = useState({topics, currentTopic: currentTopic})
  useEffect(() => {
    setNavigationContextValue({...navigationContextValue, currentTopic: currentTopic})
  }, [currentTopic])
  return (
    <NavigationContext.Provider value={navigationContextValue}>
      <Layout currentTopicPosts={currentTopicPosts}>
        <HeadTag currentTopic={currentTopic} />
        <PostMetaData postMetaData={currentPostContent.postMetaData} />
        <div dangerouslySetInnerHTML={{__html: currentPostContent.postContentString}} />
      </Layout>
    </NavigationContext.Provider>
  )
}