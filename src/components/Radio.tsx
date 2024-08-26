import styles from '../styles/Radio.module.css'
import { Task } from './Form'

type Status = Task['status']

const Radio = ({
  value,
  setStatus,
  name,
}: {
  value: Status
  setStatus: (e: Status) => void
  name: string
}) => {
  return (
    <div>
      <input
        type="radio"
        name={name}
        className={styles.radio}
        id="in1"
        value="Active"
        checked={value == 'Active'}
        onChange={(e) => setStatus(e.target.value as Status)}
      />
      <label
        className={styles.lab}
        htmlFor="in1"
      >
        Active
      </label>
      <input
        type="radio"
        name={name}
        className={styles.radio}
        id="in2"
        value="Inactive"
        checked={value === 'Inactive'}
        onChange={(e) => setStatus(e.target.value as Status)}
      />
      <label
        className={styles.lab}
        htmlFor="in2"
      >
        inActive
      </label>
    </div>
  )
}

export default Radio
