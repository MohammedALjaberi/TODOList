import { useState } from 'react'
import taskIcon from '../assets/ClarityTasksLine.svg'
import checkIcon from '../assets/QuillCheckmark.svg'
import cancelIcon from '../assets/RiCloseLargeFill.svg'
import descIcon from '../assets/PajamasTextDescription.svg'
import styles from '../styles/UpdateForm.module.css'
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
        <div className={`${styles.search_cont}`}>
          <img
            src={taskIcon}
            className={styles.search_icon}
            alt="Task"
          />
          <input
            type="text"
            placeholder="Task"
            className={styles.custom_input}
            value={task.task}
            onChange={(e) => {
              setTask({ ...task, task: e.target.value })
            }}
          />
        </div>
      </td>
      <td>
        <div className={styles.search_cont}>
          <img
            src={descIcon}
            className={styles.search_icon}
            alt="Description"
          />
          <input
            type="text"
            placeholder="Description"
            className={`${styles.custom_input}`}
            onChange={(e) => {
              setTask({ ...task, description: e.target.value })
            }}
            value={task.description}
          />
        </div>
      </td>
      <td>
        <div className={styles.search_cont}>
          <Radio
            value={task.status}
            setStatus={(e: 'Active' | 'Inactive') => setTask({ ...task, status: e })}
            name="radio-update"
            id="update"
          />
        </div>
      </td>
      <td>
        <div className={styles.button_container}>
          <button
            className={`${styles.custom_btn} ${styles.custom_btn_outline} ${styles.green}`}
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
            className={`${styles.custom_btn} ${styles.custom_btn_outline} ${styles.red}`}
            onClick={() => props.handlOnCancel()}
          >
            <img
              src={cancelIcon}
              className={styles.cancel}
              alt="Cancel"
            />
          </button>
        </div>
      </td>
    </>
  )
}

export default UpdateRowForm
