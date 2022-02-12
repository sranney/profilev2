import Head from 'next/head'

export const HeadTag = ({currentTopic}: {currentTopic: string}): JSX.Element => (
  <Head>
    <title>Spencer Ranney - {currentTopic}</title>
  </Head>
)