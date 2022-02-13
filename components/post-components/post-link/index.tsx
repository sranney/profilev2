import Link from 'next/link'
import { ActivePageEnum } from '../../../enumTypes'

type PostLinkPropTypes = {
  post: FileData,
  currentTopic: keyof typeof ActivePageEnum
}

export const PostLink = ({post: {postId, postData}, currentTopic}: PostLinkPropTypes): JSX.Element => {
  console.log(postData)
  return (
    <li className="list-none">
      <Link href={`/${currentTopic}/${postId}`}>
        <a className="text-3xl text-slate-600">{postData.title}</a>
      </Link>
      <span className="italic ml-4">{postData.postDate}</span>
    </li>
  )
}