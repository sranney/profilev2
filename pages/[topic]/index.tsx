import { useRef } from 'react'
import { useRouter } from 'next/router'
import { getTopics } from '../../backend-operations-lib/getTopics'
import { Layout } from '../../components/layouts/TopicLayout'
import { ActivePageEnum } from '../../enumTypes'
import { NavigationContext } from '../../utils/contexts/NavigationContext'

export const getStaticProps = () => {
  const topics = getTopics()
  return {
    props: {
      topics
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
  topics: String[]
}

export default function GeneralTopicPage({topics}: PageProps):JSX.Element {
  const router = useRouter()
  const navigationContextValue = useRef({topics, activePage: router.query.topic})
  
  return (
    <NavigationContext.Provider value={navigationContextValue.current}>
      <Layout activePage={ActivePageEnum[topic]}>
        <h1>{topic}</h1>
      </Layout>
    </NavigationContext.Provider>
  )
}