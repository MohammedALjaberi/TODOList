import styles from '../styles/Radio.module.css'

type Status = 'Active' | 'Inactive'

const Radio = ({ value, setStatus }: { value: Status; setStatus: (e: Status) => void }) => {
  return (
    <div>
      <input
        type="radio"
        name="radio-9"
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
        name="radio-9"
        className={styles.radio}
        id="in2"
        value="Inactive"
        checked={value == 'Inactive'}
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
