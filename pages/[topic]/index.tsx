import { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getTopics } from '../../backend-operations-lib/getTopics'
import { getTopicPosts } from '../../backend-operations-lib/getTopicPosts'
import { getPostContent } from '../../backend-operations-lib/getPostContent'
import { Layout } from '../../components/layouts/TopicLayout'
import { ActivePageEnum } from '../../enumTypes'
import { NavigationContext } from '../../utils/contexts/NavigationContext'
import { FileData, PostContentData } from '../../backend-operations-lib/types'
import Link from 'next/link'
import { titleCase } from '../../utils/functions/strings'


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
        <Head>
          <title>Spencer Ranney - {currentTopic}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-center text-6xl">{titleCase(currentTopic)}</h1>
        <div dangerouslySetInnerHTML={{__html: currentPostContent.postContentString}} />
        {
          currentTopicPosts.map(({postData, postId}) => (
            <li key={postId} className="list-none">
              <Link href={`/${currentTopic}/${postId}`}>
                <a className="text-3xl text-slate-600">{postData.title}</a>
              </Link>
              <span className="italic ml-4">{postData.postDate}</span>
            </li>
          ))
        }
      </Layout>
    </NavigationContext.Provider>
  )
}