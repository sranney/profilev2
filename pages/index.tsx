import { useRef } from 'react'
import { NavigationContext } from '../utils/contexts/NavigationContext'
import { HeadTag } from '../components/head'
import { Layout } from '../components/layouts/DefaultLayout'
import { ActivePageEnum } from '../enumTypes'
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
      <Layout activePage={ActivePageEnum.Home}>
        <HeadTag currentTopic="Home" />
        <div className="flex flex-col items-star mt-12 min-h-screen py-2 px-20">
          <p className="text-6xl font-bold mb-3">Hi, my name is Spencer.</p>
          <p>I share my passions, studies and more information about myself on this site. I love my family, friends, God, the work I do, cooking, learning, teaching, movies and music. On a weekly basis, I will be posting new content, ranging on topics from what I have learned over the previous week and notes on software and product centric books to information about movies and music I love, and food I have made. After I finish a side project, I will write about what I learned while making the project.</p>
          <p>I love teaching. It is something that I do almost on a daily basis in my work. It is my hope that people will learn something by reading the content I share here.</p>
        </div>
      </Layout>
    </NavigationContext.Provider>
  )
}