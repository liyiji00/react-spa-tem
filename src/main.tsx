import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import 'virtual:uno.css'

import App from './App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
