import styles from '../styles/Table.module.css'
// import Activationbtn from './Activationbtn'
import trashIcon from '../assets/SolarTrashBinMinimalisticOutline.svg'
import editIcon from '../assets/IcOutlineEdit.svg'
// import { getId } from 'react-uid/dist/es5/context'
import { Dispatch, SetStateAction } from 'react'
import { Task } from './Form'

const Table = (props: { tasks: Task[]; setTasks: Dispatch<SetStateAction<Task[]>> }) => {
  const { tasks, setTasks } = props

  const handleDelet = (id: string) => {
    console.log(id)
    const newList = tasks.filter((t) => t.id !== id)
    setTasks([...newList])
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
        <div className={styles.line_throw}></div>
        <tbody>
          {tasks?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.task}</td>
                <td> {item.description}</td>
                <td>
                  {/* <Activationbtn /> */}
                  {item.status}
                </td>
                <td>
                  <div className={styles.img_container}>
                    <img
                      src={editIcon}
                      className={styles.icon}
                    />
                    <button className={styles.trashbtn}>
                      <img
                        src={trashIcon}
                        className={styles.icon}
                        onClick={() => handleDelet(item.id)}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
