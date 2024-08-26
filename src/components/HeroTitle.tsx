import HeroCss from '../styles/Hero.module.css'
import NewTask from './NewTaskButton'

const HeroTitle = () => {
  return (
    <div className={HeroCss.main_card}>
      <h1 className={HeroCss.custom_heading}>TO-DO List</h1>
      <NewTask />
    </div>
  )
}

export default HeroTitle
