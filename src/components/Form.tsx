import textArea from '../styles/TextArea.module.css'
import taskIcon from '../assets/ClarityTasksLine.svg'
import FilterCss from '../styles/Filter.module.css'
import addIcon from '../assets/MaterialSymbolsLightAdd.svg'
import cancelIcon from '../assets/RiCloseLargeFill.svg'
import descIcon from '../assets/PajamasTextDescription.svg'
import Radio from './Radio'
import { uid } from 'uid'
import { Dispatch, SetStateAction, useState } from 'react'
// import { useUID, useUIDSeed } from 'react-uid';

export type Task = {
  id: string
  task: string
  description: string
  status: 'Active' | 'Inactive'
}

const Form = (props: {
  setShow: Dispatch<SetStateAction<boolean>>
  addTask: (e: Task) => void
}) => {
  const [task, setTask] = useState<Task>({
    id: uid(),
    task: '',
    description: '',
    status: 'Active',
  })
  return (
    <div className={`${textArea.inpunt_container} `}>
      <div className={textArea.search_cont}>
        <img
          src={taskIcon}
          className={textArea.search_icon}
        ></img>
        <input
          type="text"
          placeholder="Task"
          className={`${textArea.custom_input}`}
          value={task.task}
          onChange={(e) => {
            setTask({ ...task, task: e.target.value })
          }}
        />
      </div>
      <div className={textArea.search_cont}>
        <img
          src={descIcon}
          className={textArea.search_icon}
        ></img>
        <input
          type="text"
          placeholder="Description"
          className={`${textArea.custom_input} $`}
          onChange={(e) => {
            setTask({ ...task, description: e.target.value })
          }}
          value={task.description}
        />
      </div>

      <div className={textArea.search_cont}>
        <Radio
          value={task.status}
          setStatus={(e: 'Active' | 'Inactive') => setTask({ ...task, status: e })}
        />
      </div>

      <button
        className={`${FilterCss.custom_btn} ${FilterCss.custom_btn_outline} ${FilterCss.green}  `}
        onClick={() => {
          props.addTask(task)
          setTask({
            id: uid(),
            task: '',
            description: '',
            status: 'Active',
          })
        }}
      >
        <img
          src={addIcon}
          // className={FilterCss.filter}
        />
      </button>

      <button
        {...props}
        className={`${FilterCss.custom_btn} ${FilterCss.custom_btn_outline} ${FilterCss.red}`}
        onClick={() => props.setShow(false)}
      >
        <img
          src={cancelIcon}
          className={FilterCss.cancel}
        />
      </button>
    </div>
  )
}

export default Form
