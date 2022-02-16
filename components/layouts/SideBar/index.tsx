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
        : Object.entries(postData).some(([_, entryValue]) => {
          if(Array.isArray(entryValue)) {
            return entryValue.some(item => item.includes(postFilterText))
          } else if(!Array.isArray(entryValue)) {
            console.log(entryValue)
            return entryValue.toLowerCase().includes(postFilterText)
          }
        })
    }))
  }, [postFilterText, currentTopicPosts, setFilteredPosts])
  const classes = `min-h-screen bg-slate-400 w-full xl:w-3/12 fixed z-20 transition-[right] ${sideBarVisibility ? ' right-0' : ' -right-full'}`
  const closeSideBar = ():void => toggleSideBarVisibility(false)
  return (
    <div className={classes}>
      <div className="h-10 bg-slate-800 flex items-center">
        <p className="px-4 font-bold text-2xl text-white">Other &ldquo;{ titleCase(currentTopic || 'Home') }&rdquo; posts</p>
      </div>
      <MdClose onClick={closeSideBar} className="absolute right-4 top-2 cursor-pointer text-2xl text-white"/>
      <div className="p-4">
        <SideBarFilter setPostFilterText={setPostFilterText} />
        { filteredPosts.map(post => <PostLink key={post.postId} post={post} currentTopic={currentTopic || 'Home'} />) }
      </div>
    </div>
  )
}