import { CurrentTopicEnum } from '../../../enumTypes'
import { Tags } from '../tags'

type PostMetaDataComponentProps = {
  postMetaData: PostData,
  topic: keyof typeof CurrentTopicEnum
}

export const PostMetaData = ({postMetaData: { title, postDate, tags}, topic}: PostMetaDataComponentProps):JSX.Element => (
  <div className="flex flex-col items-center mt-4">
    <p className="italic">Latest &ldquo;{topic}&rdquo; post shown below</p>
    <p className="text-2xl font-bold underline">{title}</p>
    <p className="italic">Date of Post: {postDate}</p>
    <div className="mt-3"><Tags tags={tags} /></div>
  </div>
)