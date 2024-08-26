import newTaskCss from '../styles/NewTask.module.css'
import plusIcon from '../assets/MaterialSymbolsLightAdd.svg'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
const NewTaskButton = (
  props?: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) => {
  return (
    <button
      {...props}
      className={`${newTaskCss.custom_btn} ${newTaskCss.custom_btn_outline}`}
    >
      <img
        src={plusIcon}
        alt="Plus"
      />
      <span>Add new task</span>
    </button>
  )
}

export default NewTaskButton
