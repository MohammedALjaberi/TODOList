import { useState } from 'react'
import taskIcon from '../assets/ClarityTasksLine.svg'
import checkIcon from '../assets/QuillCheckmark.svg'
import cancelIcon from '../assets/RiCloseLargeFill.svg'
import descIcon from '../assets/PajamasTextDescription.svg'
import Styles from '../styles/UpdateForm.module.css'
import Radio from './Radio'
import { Task } from './Form'

type UpdateRowFormPropsT = {
  seletedTask: Task
  handleUpdateTask: (task: Task) => void
  handlOnCancel: () => void
}

const UpdateRowForm = (props: UpdateRowFormPropsT) => {
  const { seletedTask } = props
  const [task, setTask] = useState<Task>(seletedTask)
  return (
    <>
      <td>
        <div className={`${Styles.search_cont}`}>
          <img
            src={taskIcon}
            className={Styles.search_icon}
            alt="Task"
          />
          <input
            type="text"
            placeholder="Task"
            className={`${Styles.custom_input}`}
            value={task.task}
            onChange={(e) => {
              setTask({ ...task, task: e.target.value })
            }}
          />
        </div>
      </td>
      <td>
        <div className={Styles.search_cont}>
          <img
            src={descIcon}
            className={Styles.search_icon}
            alt="Description"
          />
          <input
            type="text"
            placeholder="Description"
            className={`${Styles.custom_input}`}
            onChange={(e) => {
              setTask({ ...task, description: e.target.value })
            }}
            value={task.description}
          />
        </div>
      </td>
      <td>
        <div className={Styles.search_cont}>
          <Radio
            value={task.status}
            setStatus={(e: 'Active' | 'Inactive') => setTask({ ...task, status: e })}
          />
        </div>
      </td>
      <td>
        <div className={Styles.button_container}>
          <button
            className={`${Styles.custom_btn} ${Styles.custom_btn_outline} ${Styles.green}`}
            onClick={() => {
              props.handleUpdateTask(task)
            }}
          >
            <img
              src={checkIcon}
              alt="Update"
            />
          </button>
          <button
            className={`${Styles.custom_btn} ${Styles.custom_btn_outline} ${Styles.red}`}
            onClick={() => props.handlOnCancel()}
          >
            <img
              src={cancelIcon}
              className={Styles.cancel}
              alt="Cancel"
            />
          </button>
        </div>
      </td>
    </>
  )
}

export default UpdateRowForm
