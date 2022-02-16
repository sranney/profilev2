import Link from 'next/link'
import { CurrentTopicEnum } from '../../../enumTypes'

type PostLinkPropTypes = {
  post: FileData,
  currentTopic: keyof typeof CurrentTopicEnum
}

export const PostLink = ({post: {postId, postData}, currentTopic}: PostLinkPropTypes): JSX.Element => {
  return (
    <li className="list-none mt-4 border-b border-solid border-slate-600 pb-4 transition-[border-width] hover:border-b-2">
      <Link href={`/${currentTopic}/${postId}`}>
        <a className="text-lg text-slate-600">{postData.title}</a>
      </Link>
      <p className="italic text-slate-600">Date: {postData.postDate}</p>
    </li>
  )
}