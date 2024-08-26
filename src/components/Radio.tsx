import styles from '../styles/Radio.module.css'
import { Task } from './Form'

type Status = Task['status']

const Radio = ({
  value,
  setStatus,
  name,
  id,
}: {
  value: Status
  setStatus: (e: Status) => void
  name: string
  id: string
}) => {
  return (
    <div>
      <input
        type="radio"
        name={name}
        className={styles.radio}
        id={`${id}-active`}
        value="Active"
        checked={value == 'Active'}
        onChange={(e) => setStatus(e.target.value as Status)}
      />
      <label
        className={styles.lab}
        htmlFor={`${id}-active`}
      >
        Active
      </label>
      <input
        type="radio"
        name={name}
        className={styles.radio}
        id={`${id}-inactive`}
        value="Inactive"
        checked={value === 'Inactive'}
        onChange={(e) => setStatus(e.target.value as Status)}
      />
      <label
        className={styles.lab}
        htmlFor={`${id}-inactive`}
      >
        Inactive
      </label>
    </div>
  )
}

export default Radio
