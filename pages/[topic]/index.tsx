import { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getTopics } from '../../backend-operations-lib/getTopics'
import { getTopicPosts } from '../../backend-operations-lib/getTopicPosts'
import { Layout } from '../../components/layouts/TopicLayout'
import { ActivePageEnum } from '../../enumTypes'
import { NavigationContext } from '../../utils/contexts/NavigationContext'
import { FileData } from '../../backend-operations-lib/types'
import Link from 'next/link'
import { titleCase } from '../../utils/functions/strings'

export const getStaticProps: GetStaticProps = ({params}) => {
  const topics = getTopics()
  const topicString = Array.isArray(params?.topic)
    ? params?.topic[0] || ''
    : params?.topic || ''
  const currentTopicPosts = getTopicPosts(topicString)
  return {
    props: {
      topics,
      currentTopicPosts,
      currentTopic: topicString
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: ['/movies', '/cooking', '/music', '/projects', '/books'],
    fallback: false
  }
}

type PageProps = {
  topics: string[],
  currentTopicPosts: FileData[],
  currentTopic: ActivePageEnum
}

export default function GeneralTopicPage({topics, currentTopicPosts, currentTopic}: PageProps):JSX.Element {
  const [navigationContextValue, setNavigationContextValue] = useState({topics, activePage: currentTopic})
  useEffect(() => {
    setNavigationContextValue({...navigationContextValue, activePage: currentTopic})
  }, [currentTopic])

  return (
    <NavigationContext.Provider value={navigationContextValue}>
      <Layout activePage={ActivePageEnum.Home}>
        <Head>
          <title>Spencer Ranney - {currentTopic}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-center text-6xl text-slate-800 font-bold">{titleCase(currentTopic)}</h1>
        {
          currentTopicPosts.map(({postData, postId}) => (
            <li key={postId}>
              <Link href={`/${currentTopic}/${postId}`}>
                <a className="text-3xl text-slate-600">{postData.title}</a>
              </Link>
              <p className="italic">{postData.postDate}</p>
            </li>
          ))
        }
      </Layout>
    </NavigationContext.Provider>
  )
}