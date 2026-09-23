import { Header } from './components/header/header'
import styles from './index.module.scss'

import { Posts } from './pages/posts/posts'
import { Navigate, Route, Routes } from 'react-router'
import { NotFound } from './pages/not_found/not_found'

function App() {
  return (
    <div className={styles.app}>
      <Header classNames={{ container: styles.header }} />
      <Routes>
        <Route path="/" element={<Navigate to="/posts" replace />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Posts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
