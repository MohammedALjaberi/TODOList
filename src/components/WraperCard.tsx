import wrapperStyle from '../styles/Wraper.module.css'
import Form, { Task } from './Form'
import Table from './Table'
import TextArea from './TextArea'
import HeroCss from '../styles/Hero.module.css'
import NewTask from './NewTask'
import { useState } from 'react'

const WraperCard = () => {
  const [show, setShow] = useState(false)
  const [data, setData] = useState<Task[]>([])

  return (
    <div className={wrapperStyle.cont_card}>
      <div className={wrapperStyle.custom_card}>
        <div className={wrapperStyle.top_card}>
          <div className={HeroCss.main_card}>
            <h1 className={HeroCss.custom_heading}>TO-DO List</h1>
            <NewTask onClick={() => setShow(true)} />
          </div>
          <TextArea></TextArea>
          {show && (
            <div className={wrapperStyle.form}>
              <Form
                addTask={(e: Task) => {
                  console.log('task: ', e)
                  setData([...data, e])
                }}
                setShow={setShow}
              ></Form>
            </div>
          )}
          <Table
            tasks={data}
            setTasks={setData}
          ></Table>
        </div>
      </div>
    </div>
  )
}

export default WraperCard
