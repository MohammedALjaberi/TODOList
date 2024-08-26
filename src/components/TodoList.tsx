import { useState, useCallback } from 'react'
import wrapperStyle from '../styles/Wraper.module.css'
import Form, { Task } from './Form'
import Table from './Table'
import SearchField from './SearchField'
import HeroCss from '../styles/Hero.module.css'
import NewTask from './NewTaskButton'

const TodoList = () => {
  const [show, setShow] = useState(false)
  const [data, setData] = useState<Task[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTasks = data.filter(
    (task) =>
      task.task.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
  }, [])

  const addTask = (newTask: Task) => {
    setData((prevData) => [...prevData, newTask])
    setShow(false)
  }

  return (
    <div className={wrapperStyle.cont_card}>
      <div className={wrapperStyle.custom_card}>
        <div className={wrapperStyle.top_card}>
          <div className={HeroCss.main_card}>
            <h1 className={HeroCss.custom_heading}>TO-DO List</h1>
            <NewTask onClick={() => setShow(true)} />
          </div>
          <SearchField onSearch={handleSearch} />
          {show && (
            <div className={wrapperStyle.form}>
              <Form
                addTask={addTask}
                setShow={setShow}
              />
            </div>
          )}
          <Table
            tasks={filteredTasks}
            setTasks={setData}
          />
        </div>
      </div>
    </div>
  )
}

export default TodoList
