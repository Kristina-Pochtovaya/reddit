import { createRoot } from 'react-dom/client'
import './index.module.scss'
import App from './index.tsx'
import { store } from './components/store/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
