import styles from '../styles/Table.module.css'
import trashIcon from '../assets/SolarTrashBinMinimalisticOutline.svg'
import editIcon from '../assets/IcOutlineEdit.svg'
import { useState } from 'react'
import { Dispatch, SetStateAction } from 'react'
import { Task } from './Form'
import UpdateRowForm from './UpdateRowForm'
type TablePropsType = {
 tasks: Task[]; 
 setTasks: Dispatch<SetStateAction<Task[]>>
  }

<<<<<<< HEAD
type TablePropsType = {
  tasks: Task[]
  setTasks: Dispatch<SetStateAction<Task[]>>
}
const Table = (props: TablePropsType) => {
=======
const Table = (props: TablePropsType ) => {
>>>>>>> 84023ff69e573a059422ec0b4018b2dfc3ab52ff
  const { tasks, setTasks } = props
  const [selectedTask, setSelectedTask] = useState<string | null>(null)

  const handleDelete = (id: string) => {
    const newList = tasks.filter((t) => t.id !== id)
    setTasks(newList)
  }

  const handleEdit = (id: string) => {
    setSelectedTask(id)
  }

  const handleOnCancelUpdate = () => {
    setSelectedTask(null)
  }

  const handleUpdateTask = (updatedTask: Task) => {
    const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    setTasks(updatedTasks)
    setSelectedTask(null)
  }

  return (
    <div className={styles.customTableContainer}>
      <table className={`${styles.customTable} ${styles.customTableZebra}`}>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((item) => (
            <tr key={item.id}>
              {item.id === selectedTask ? (
                <UpdateRowForm
                  handlOnCancel={handleOnCancelUpdate}
                  handleUpdateTask={handleUpdateTask}
                  seletedTask={item}
                />
              ) : (
                <>
                  <td>{item.task}</td>
                  <td>{item.description}</td>
                  <td>{item.status}</td>
                  <td>
                    <div className={styles.img_container}>
                      <button
                        className={styles.trashbtn}
                        onClick={() => handleEdit(item.id)}
                      >
                        <img
                          src={editIcon}
                          className={styles.icon}
                          alt="Edit"
                        />
                      </button>
                      <button
                        className={styles.trashbtn}
                        onClick={() => handleDelete(item.id)}
                      >
                        <img
                          src={trashIcon}
                          className={styles.icon}
                          alt="Delete"
                        />
                      </button>
                    </div>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
