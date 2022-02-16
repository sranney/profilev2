import { GetStaticProps } from "next";
import { getTopics } from "../backend-operations-lib/getTopics";
import { getProjects } from "../backend-operations-lib/getProjects"
import { Layout } from "../components/layouts/DefaultLayout";
import { useRef } from "react";
import { NavigationContext } from "../utils/contexts/NavigationContext";
import { HeadTag } from '../components/head'
import { ProjectsList } from '../components/projects-list'

type staticPropsTypes = {
  topics: string[],
  projects: ProjectData[]
}

type staticProps = {
  props: staticPropsTypes
}

export const getStaticProps: GetStaticProps = (): staticProps => {
  const topics = getTopics()
  const projects = getProjects()
  return {
    props: {
      topics,
      projects
    }
  }
}

export default function Projects ({topics, projects}: staticPropsTypes): JSX.Element {
  const navigationContextValue = useRef({topics})
  return (
    <NavigationContext.Provider value={navigationContextValue.current}>
      <Layout>
        <HeadTag currentTopic="Home" />
        <ProjectsList projects={projects} />
      </Layout>
    </NavigationContext.Provider>
  )
}