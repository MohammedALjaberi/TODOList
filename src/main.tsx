import { StrictMode } from 'react'
import App from './App.tsx'
import './styles/global.css'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
