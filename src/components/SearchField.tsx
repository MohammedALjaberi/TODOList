import textArea from '/src/styles/TextArea.module.css'
import Filter from './Filter'
import searchIcon from '../assets/HugeiconsSearch01.svg'

const SearchField = () => {
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
