import { useRef } from 'react'
import { NavigationContext } from '../utils/contexts/NavigationContext'
import { HeadTag } from '../components/head'
import { Layout } from '../components/layouts/DefaultLayout'
import { GetStaticProps } from 'next'
import { getTopics } from '../backend-operations-lib/getTopics'

export const getStaticProps: GetStaticProps = () => {
  const topics = getTopics()
  return {
    props: {
      topics
    }
  }
}

type PageProps = {
  topics: string[]
}

export default function Home({topics}:PageProps):JSX.Element {
  const navigationContextValue = useRef({topics})
  return (
    <NavigationContext.Provider value={navigationContextValue.current}>
      <Layout>
        <HeadTag currentTopic="Home" />
        <div className="flex flex-col items-star mt-12 py-2 px-20">
          <p className="text-6xl font-bold mb-3">Hi, my name is Spencer.</p>
          <p>I share my passions, studies and more information about myself on this site. This is my digital garden. On a weekly basis, I will be posting new content, ranging on topics from what I have learned over the previous week and notes on software and product centric books. After I finish a side project, I will write about what I learned while making the project.</p>
          <p>I love teaching. It is something that I do almost on a daily basis in my work. It is my hope that people will learn something by reading the content I share here.</p>
        </div>
      </Layout>
    </NavigationContext.Provider>
  )
}