import { useRouter } from 'next/router'
import { Layout } from '../../components/layouts/TopicLayout'

export async function getStaticProps(context) {
  console.log('getStaticProps', context)
  return {
    props: {}
  }
}

export async function getStaticPaths() {
  return {
    paths: ['/movies', '/cooking', '/music', '/projects', '/books'],
    fallback: false
  }
}

export default function GeneralTopicPage():JSX.Element {
  const router = useRouter()
  const {query : {topic}} = router
  return (
    <Layout activePage={ActivePageEnum[topic]}>
      <h1>{topic}</h1>
    </Layout>
  )
}