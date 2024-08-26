import FilterCss from '../styles/Filter.module.css'
import filerIcon from '../assets/IcBaselineFilterList.svg'
const Filter = () => {
  return (
    <button
      className={`${FilterCss.custom_btn} ${FilterCss.custom_btn_outline} ${FilterCss.filtbtn}`}
    >
      <img
        src={filerIcon}
        alt="Filter"
        className={FilterCss.filter}
      />
    </button>
  )
}

export default Filter
