import textArea from '../styles/TextArea.module.css'
import taskIcon from '../assets/ClarityTasksLine.svg'
import FilterCss from '../styles/Filter.module.css'
import addIcon from '../assets/MaterialSymbolsLightAdd.svg'
import cancelIcon from '../assets/RiCloseLargeFill.svg'
import descIcon from '../assets/PajamasTextDescription.svg'
import Radio from './Radio'
import { uid } from 'uid'
import { Dispatch, SetStateAction, useState } from 'react'

export type Task = {
  id: string
  task: string
  description: string
  status: 'Active' | 'Inactive'
}

type TFormProps = {
  setShow: Dispatch<SetStateAction<boolean>>
  addTask: (e: Task) => void
}

const Form = (props: TFormProps) => {
  const [task, setTask] = useState<Task>({
    id: uid(),
    task: '',
    description: '',
    status: 'Active',
  })
  const [errors, setErrors] = useState({
    task: '',
    description: '',
  })

  const validateForm = () => {
    let isValid = true
    const newErrors = { task: '', description: '' }

    if (task.task.trim() === '') {
      newErrors.task = 'required'
      isValid = false
    }

    if (task.description.length > 100) {
      newErrors.description = 'Description must be 100 characters or less'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = () => {
    if (validateForm()) {
      props.addTask(task)
      setTask({
        id: uid(),
        task: '',
        description: '',
        status: 'Active',
      })
      setErrors({ task: '', description: '' })
    }
  }

  return (
    <div className={`${textArea.inpunt_container} `}>
      <div className={textArea.search_cont}>
        <img
          src={taskIcon}
          alt="Task"
          className={textArea.search_icon}
        ></img>
        <input
          type="text"
          placeholder="Task"
          className={`${textArea.custom_input} ${errors.task ? textArea.error : ''}`}
          value={task.task}
          required
          onChange={(e) => {
            setTask({ ...task, task: e.target.value })
            if (errors.task) setErrors({ ...errors, task: '' })
          }}
        />
        {errors.task && <span className={textArea.error_message}>{errors.task}</span>}
      </div>
      <div className={textArea.search_cont}>
        <img
          src={descIcon}
          alt="Description"
          className={textArea.search_icon}
        />
        <input
          type="text"
          placeholder="Description"
          className={`${textArea.custom_input} ${errors.description ? textArea.error : ''}`}
          onChange={(e) => {
            setTask({ ...task, description: e.target.value })
          }}
          value={task.description}
        />
      </div>

      <div className={textArea.search_cont}>
        <Radio
          value={task.status}
          setStatus={(e: Task['status']) => setTask({ ...task, status: e })}
          name="radio9"
        />
      </div>

      <button
        className={`${FilterCss.custom_btn} ${FilterCss.custom_btn_outline} ${FilterCss.green}  `}
        onClick={handleSubmit}
      >
        <img
          src={addIcon}
          alt="Add"
        />
      </button>

      <button
        {...props}
        className={`${FilterCss.custom_btn} ${FilterCss.custom_btn_outline} ${FilterCss.red}`}
        onClick={() => props.setShow(false)}
      >
        <img
          src={cancelIcon}
          alt="Cancel"
          className={FilterCss.cancel}
        />
      </button>
    </div>
  )
}

export default Form
