import { DiGithubAlt } from 'react-icons/di'
import { BsLinkedin } from 'react-icons/bs'

export const Footer = ():JSX.Element => {
  return (
    <div className="fixed bottom-3 left-3 flex">
      <a href="https://github.com/sranney" target="_blank">
        <DiGithubAlt className="text-slate-800 text-3xl"/>
      </a>
      <a href="https://www.linkedin.com/in/spencer-ranney/" target="_blank" className="ml-3">
        <BsLinkedin className="text-slate-800 text-3xl"/>
      </a>
    </div>
  )
}