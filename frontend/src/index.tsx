import { Header } from './components/header/header'
import styles from './index.module.scss'

import { Posts } from './pages/posts/posts'
import { Navigate, Route, Routes } from 'react-router'
import { NotFound } from './pages/not_found/not_found'
import { Auth } from './pages/auth/auth'
import { User } from './pages/user/user'

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Navigate to="/posts" replace />} />
        <Route
          path="/posts"
          element={
            <>
              <Header />
              <Posts />
            </>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/user"
          element={
            <>
              <Header />
              <User />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
