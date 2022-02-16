import Image from "next/image"

type ProjectsPageType = {
  projects: ProjectData[]
}
export const ProjectsList = ({projects}: ProjectsPageType):JSX.Element => {
  return (
    <div className="flex flex-wrap px-4 justify-center">
      {
        projects.map((project): JSX.Element => (
          <div key={project.projectId} className="text-center basis-3/8 relative mt-5 mx-2 overflow-hidden group">
            <Image src={project.projectData.imgUrl} width="500" height="250"/>
            <div className="py-3 px-5 absolute bg-white w-auto transition-[top] top-full opacity-80 left-0 right-0 bottom-0 group-hover:top-0">
              <p className="text-3xl font-bold">{project.projectData.projectTitle}</p>
              <p>{project.projectData.description}</p>
              <a href={project.projectData.projectUrl} target="_blank">{project.projectData.projectUrl}</a>
            </div>
          </div>
        ))
      }
    </div>
  )
}