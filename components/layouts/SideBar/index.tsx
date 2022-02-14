import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import { NavigationContext } from '../../../utils/contexts/NavigationContext'
import { MdClose } from 'react-icons/md'
import { PostLink } from '../../post-components/post-link'
import { SideBarFilter} from './SideBarFilter'
import { titleCase } from '../../../utils/functions/strings'

type SideBarProps = {
  sideBarVisibility: boolean,
  toggleSideBarVisibility: Dispatch<SetStateAction<boolean>>,
  currentTopicPosts: FileData[]
}
export const SideBar = ({sideBarVisibility, toggleSideBarVisibility, currentTopicPosts}: SideBarProps): JSX.Element => {
  const [postFilterText, setPostFilterText] = useState('')
  const [filteredPosts, setFilteredPosts] = useState(currentTopicPosts)
  const { currentTopic } = useContext(NavigationContext)
  useEffect(() => {
    setFilteredPosts(currentTopicPosts.filter(({postData}) => {
      return postFilterText === '' 
        ? true
        : Object.entries(postData).some(([entryKey, entryValue]) => {
          if(entryKey === 'tags' && Array.isArray(entryValue)) {
            return entryValue.some(tag => tag.includes(postFilterText))
          } else if(!Array.isArray(entryValue)) {
            console.log(entryValue)
            return entryValue.toLowerCase().includes(postFilterText)
          }
        })
    }))
  }, [postFilterText, currentTopicPosts, setFilteredPosts])
  const classes = `p-4 min-h-screen bg-slate-400 w-3/12 fixed z-20 transition-[right] ${sideBarVisibility ? ' right-0' : ' -right-full'}`
  const closeSideBar = ():void => toggleSideBarVisibility(false)
  return (
    <div className={classes}>
      <p className="font-bold text-2xl">Other &ldquo;{ titleCase(currentTopic || 'Home') }&rdquo; posts</p>
      <MdClose onClick={closeSideBar} className="absolute right-4 top-4 cursor-pointer text-xl"/>
      <SideBarFilter setPostFilterText={setPostFilterText} />
      { filteredPosts.map(post => <PostLink key={post.postId} post={post} currentTopic={currentTopic || 'Home'} />) }
    </div>
  )
}