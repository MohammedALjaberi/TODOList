import textArea from '/src/styles/TextArea.module.css'
import Filter from './Filter'
import searchIcon from '../assets/HugeiconsSearch01.svg'
// import { useState } from 'react'
// import { Task } from './Form'

// type task = Task['task']

// const getFilteredItems =(query:string , items : task) => {
//   if(!query)  {
//     return items
//   }
// }

const SearchField = () => {
  // const[query , setQuery] = useState('')
  // const tracks = task
  // const items = tracks
  // const filteredItems = getFilteredItems(query,items)

  return (
    <div className={textArea.inpunt_container}>
      <div className={textArea.search_cont}>
        <img
          src={searchIcon}
          className={textArea.search_icon}
        ></img>
        <input
          type="text"
          placeholder="Search"
          // onChange={e => setQuery(e.target.value)}
          className={textArea.custom_input}
        />
      </div>
      <Filter />
    </div>
  )
}

export default SearchField
