import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/layouts/default'

export default function Home() {
  return (
    <Layout activePage={'home'}>
      <div className="flex flex-col items-start justify-center min-h-screen py-2 px-20 text-slate-800">
        <Head>
          <title>Spencer Ranney - Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <p className="text-6xl">Hi, my name is Spencer.</p>
        <p>I share my passions, studies and more information about myself on this site. I love my family, friends, God, the work I do, cooking, learning, teaching, movies and music. On a weekly basis, I will be posting new content, ranging on topics from what I have learned over the previous week and notes on software and product centric books to information about movies and music I love, and food I have made. After I finish a side project, I will write about what I learned while making the project.</p>
        <p>I love teaching. It is something that I do almost on a daily basis in my work. It is my hope that people will learn something by reading the content I share here.</p>
      </div>
    </Layout>
  )
}