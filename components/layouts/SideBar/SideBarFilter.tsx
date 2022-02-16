import { Dispatch, SetStateAction } from "react"

type SideBarFilters = {
  setPostFilterText: Dispatch<SetStateAction<string>>
}

export const SideBarFilter = ({setPostFilterText}: SideBarFilters):JSX.Element => {
  const inputEventHandler = (event:React.FormEvent<HTMLInputElement>):void => setPostFilterText(event.currentTarget.value)
  return <div className="mt-4">
    Filter
    <input type="text" onInput={inputEventHandler} className="bg-transparent ml-4 border-thin"/>
  </div>
}